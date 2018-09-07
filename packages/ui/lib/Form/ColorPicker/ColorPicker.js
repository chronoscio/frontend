"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_final_form_1 = require("react-final-form");
var react_color_1 = require("react-color");
var styled_components_1 = require("styled-components");
var ColorButton = styled_components_1.default(semantic_ui_react_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", " !important;\n"], ["\n  background-color: ", " !important;\n"])), function (props) { return props['data-color']; });
var handleChangeComplete = function (onChange) { return function (_a) {
    var hex = _a.hex;
    return onChange(hex);
}; };
var renderColorPicker = function (_a) {
    var _b = _a.input, onChange = _b.onChange, value = _b.value;
    return (React.createElement(semantic_ui_react_1.Form.Field, null,
        React.createElement(semantic_ui_react_1.Popup, { content: React.createElement(react_color_1.SketchPicker, { color: value, disableAlpha: true, onChangeComplete: handleChangeComplete(onChange) }), on: "click", trigger: React.createElement(ColorButton, { "data-color": value, icon: "certificate", content: "Political entity color", size: "mini", type: "button" }) })));
};
exports.ColorPicker = function (props) { return (React.createElement(react_final_form_1.Field, __assign({ render: renderColorPicker }, props))); };
var templateObject_1;
//# sourceMappingURL=ColorPicker.js.map