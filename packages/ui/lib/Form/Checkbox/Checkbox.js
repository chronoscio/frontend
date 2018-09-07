"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_final_form_1 = require("react-final-form");
var semantic_ui_react_1 = require("semantic-ui-react");
/**
 * A form field with SUI components.
 */
var renderCheckbox = function (_a) {
    var children = _a.children, input = _a.input, label = _a.label, meta = _a.meta, otherProps = __rest(_a, ["children", "input", "label", "meta"]);
    return (React.createElement(semantic_ui_react_1.Form.Field, null,
        label && React.createElement("label", { htmlFor: input.name }, label),
        React.createElement(semantic_ui_react_1.Checkbox, __assign({ checked: input.checked, id: input.name, onChange: input.onChange }, otherProps))));
};
/**
 * Wire up react-final-form with SUIField.
 */
exports.Checkbox = function (props) { return (React.createElement(react_final_form_1.Field, __assign({ render: renderCheckbox, type: "checkbox" }, props))); };
//# sourceMappingURL=Checkbox.js.map