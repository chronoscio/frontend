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
var renderField = function (_a) {
    var _b = _a.as, T = _b === void 0 ? semantic_ui_react_1.Input : _b, input = _a.input, label = _a.label, meta = _a.meta, otherProps = __rest(_a, ["as", "input", "label", "meta"]);
    var showError = !!(meta &&
        meta.touched &&
        (meta.error || meta.submitError));
    return (React.createElement(semantic_ui_react_1.Form.Field, null,
        label && React.createElement("label", { htmlFor: input.name }, label),
        React.createElement(T, __assign({ id: input.name }, input, otherProps)),
        showError && (React.createElement(semantic_ui_react_1.Label, { pointing: true }, meta.error || meta.submitError))));
};
/**
 * Wire up react-final-form with SUIField.
 */
exports.Field = function (props) { return (React.createElement(react_final_form_1.Field, __assign({ render: renderField }, props))); };
//# sourceMappingURL=Field.js.map