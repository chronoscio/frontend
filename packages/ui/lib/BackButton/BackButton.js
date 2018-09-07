"use strict";
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
exports.BackButton = function (props) { return (React.createElement(semantic_ui_react_1.Button, __assign({ content: "Back", icon: "left arrow", size: "mini" }, props))); };
//# sourceMappingURL=BackButton.js.map