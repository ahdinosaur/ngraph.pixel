/**
 * manages view for tooltips shown when user hover over a node
 */
module.exports = createTooltipView;

var insertCSS = require('insert-css');
var elementClass = require('element-class');

insertCSS([
'.ngraph-tooltip {',
'  position: absolute;',
'  color: white;',
'  pointer-events: none;',
'  padding: 3px;',
'  background: rgba(0, 0, 0, 0.6);',
'}'].join('\n'))

function createTooltipView(container) {

  var view = {
    show: show,
    hide: hide
  };

  var tooltipDom, tooltipVisible;

  return view;

  function show(e, node) {
    if (!tooltipDom) createTooltip();

    tooltipDom.style.left = e.x + 'px';
    tooltipDom.style.top = e.y + 'px';
    tooltipDom.innerHTML = node.id;
    tooltipVisible = true;
  }

  function hide() {
    if (tooltipVisible) {
      tooltipDom.style.left = '-10000px';
      tooltipDom.style.top = '-10000px';
      tooltipVisible = false;
    }
  }

  function createTooltip() {
    tooltipDom = document.createElement('div');
    elementClass(tooltipDom).add('ngraph-tooltip');
    container.appendChild(tooltipDom);
  }
}
