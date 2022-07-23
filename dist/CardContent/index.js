"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardContent = void 0;

var _react = _interopRequireDefault(require("react"));

require("@renoeno/dsc-design-system-meiuca/dist/components/card");

require("@renoeno/dsc-design-system-meiuca/dist/components/typography");

require("@renoeno/dsc-design-system-meiuca/dist/components/tag");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var styles = ".card-content::part(card) {\n  padding: var(--spacing-inset-size-md);\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  cursor: pointer;\n}\n.card-content dsc-tag {\n  margin-bottom: auto;\n}\n.card-content dsc-typography[component=heading] {\n  margin-bottom: var(--spacing-size-xxxs);\n}\n.card-content dsc-typograph[component=paragraph]::part(typography) {\n  line-height: var(--line-height-lg);\n}";
  var fileName = "index_style";
  var element = document.querySelector("style[data-sass-component='index_style']");

  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

var CardContent = function CardContent(_ref) {
  var tagContent = _ref.tagContent,
      headingContent = _ref.headingContent,
      paragraphContent = _ref.paragraphContent;
  return /*#__PURE__*/_react.default.createElement("dsc-card", {
    class: "card-content"
  }, /*#__PURE__*/_react.default.createElement("dsc-tag", null, tagContent), /*#__PURE__*/_react.default.createElement("dsc-typography", {
    variant: "h2",
    component: "heading",
    size: "lg"
  }, headingContent), /*#__PURE__*/_react.default.createElement("dsc-typography", {
    component: "paragraph"
  }, paragraphContent));
};

exports.CardContent = CardContent;