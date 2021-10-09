'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) { return get__default['default'](theme, path, fallback); }; };

var rotate$1 = styled.keyframes(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled__default['default'].svg(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "primary",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$T, templateObject_2$j, templateObject_3$b;

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$S;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$4 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$2, _b;
var scaleVariants = (_a$2 = {},
    _a$2[scales$4.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$2[scales$4.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$2[scales$4.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$2);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
        color: "textColour",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants$1.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants$1.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "textColour",
    },
    _b[variants$1.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants$1.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.penguin-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.penguin-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$2 = styled__default['default'].button(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 138, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.penguin-button--disabled):not(.penguin-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.penguin-button--disabled):not(.penguin-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 138, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.penguin-button--disabled):not(.penguin-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.penguin-button--disabled):not(.penguin-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$R;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("penguin-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("penguin-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton$2, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$1.PRIMARY,
    scale: scales$4.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$Q;

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("path", { d: "M13 8L8 8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8L1 8C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6L6 6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6L13 6C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" })));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$15 = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 224 224" }, props),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M304.939 223.048C297.686 238.369 288.133 252.127 276.345 264.316C258.334 282.942 237.037 296.349 212.418 304.448C201.935 307.898 191.197 310.145 180.22 311.292C170.483 312.309 160.735 312.429 150.984 311.621C131.81 310.029 113.528 305.099 96.1843 296.731C81.0425 289.42 67.4085 279.946 55.358 268.218C33.6758 247.111 19.2173 221.863 12.0668 192.447C11.6817 190.869 11.3536 189.277 11.0092 187.691C10.993 187.626 10.9767 187.572 10.9604 187.515C10.8113 186.842 10.6079 186.186 10.4154 185.527C10.2445 184.705 10.071 183.884 9.93813 183.059C9.75374 181.923 9.6968 180.779 9.47987 179.654C9.51783 179.48 9.51783 179.279 9.47173 179.011C9.15989 177.135 8.95382 175.239 8.75044 173.349C8.68536 172.736 8.49284 172.245 8.09694 171.766C-3.45461 157.752 -2.55978 138.13 10.2283 125.201C10.7733 124.651 11.0689 124.06 11.2262 123.336C17.3328 95.0589 30.3079 70.3668 50.035 49.2297C62.7228 35.6335 77.4252 24.7002 94.0448 16.3647C107.912 9.40935 122.503 4.64774 137.811 2.08524C144.647 0.940937 151.521 0.230483 158.449 0.0108406C162.053 0.00812893 165.659 0.00542326 169.263 0C187.612 0.63181 205.322 4.33319 222.351 11.2207C242.878 19.5237 260.851 31.6474 276.204 47.5891C295.622 67.7474 308.738 91.4389 315.504 118.612C317.925 128.341 319.33 138.223 319.81 148.242C321.06 174.415 316.152 199.367 304.939 223.048ZM15.1011 152.342C18.4988 151.295 21.2239 149.324 22.4388 145.761C23.2089 143.508 23.358 141.165 23.4068 138.958C23.4122 136.495 23.4719 134.174 22.6991 131.94C22.0835 130.166 20.904 129.03 19.0519 128.623C18.7103 128.548 18.3903 128.493 18.0513 128.675C14.8652 130.391 12.1888 132.572 10.9957 136.173C10.0981 138.882 9.58834 141.656 9.48801 144.5C9.40937 146.694 9.42021 148.89 10.993 150.683C12.0803 151.922 13.4958 152.836 15.1011 152.342ZM18.0947 181.725C23.4502 181.075 28.803 180.418 34.1584 179.77C39.6169 179.111 45.0755 178.442 50.5367 177.81C56.2745 177.143 62.015 176.519 67.7528 175.868C69.19 175.706 70.5133 175.312 71.5573 174.195C73.6344 171.977 73.7699 167.552 71.7904 165.255C71.1749 164.539 70.394 164.146 69.4584 164.035C68.1162 163.88 66.8499 164.173 65.5835 164.574C55.2061 167.877 44.91 171.429 34.6763 175.158C28.9304 177.251 23.2089 179.412 17.4765 181.544C17.4765 181.606 17.4792 181.666 17.4792 181.728C17.6825 181.728 17.8914 181.75 18.0947 181.725ZM206.911 296.471C206.605 295.858 206.214 295.28 205.813 294.716C203.695 291.728 201.558 288.753 199.592 285.657C195.454 279.13 192.434 272.218 192.111 264.349C192.068 263.286 191.36 262.852 190.3 263.242C185.207 265.13 179.947 266.353 174.613 267.28C169.038 268.253 163.49 269.43 157.76 269.11C155.086 268.959 152.402 268.771 149.739 268.676C145.059 268.508 140.422 268.24 135.877 267.134C132.189 266.239 128.569 265.081 125.359 262.963C122.894 261.336 121.652 259.058 121.801 256.043C121.88 254.44 122.297 252.919 122.685 251.382C125.093 241.829 129.518 233.292 135.584 225.57C140.292 219.577 145.88 214.476 151.61 209.498C164.265 198.505 175.155 186.037 183.502 171.405C184.903 168.945 185.28 166.66 184.828 163.948C183.99 158.94 182.794 154.026 181.373 149.17C177.731 136.737 173.162 124.624 168.265 112.641C164.78 104.121 160.586 95.9673 154.94 88.6378C151.027 83.5562 146.309 79.524 140.159 77.3438C128.073 73.0622 115.61 70.7356 102.822 70.1472C97.2201 69.8869 91.6071 69.9601 86.0075 70.3397C84.1853 70.4617 82.3523 70.6027 80.549 70.8847C77.7913 71.3159 75.058 71.9152 72.303 72.3707C66.2641 73.3686 60.4179 74.9847 54.8129 77.4957C47.543 80.7551 40.8697 85.0367 34.1394 89.2425C30.316 91.6314 27.7047 94.9206 26.094 99.083C23.7864 105.057 21.4571 111.022 19.1468 116.993C19.0357 117.278 18.9543 117.59 18.9516 117.891C18.9489 118.444 19.1333 118.71 19.7759 118.439C21.0097 117.918 22.2598 117.43 23.5288 116.999C29.6653 114.908 35.921 114.271 42.2988 115.643C47.7356 116.814 52.4918 119.404 56.7897 122.888C66.8336 131.031 70.5512 141.645 68.9758 154.286C68.6585 156.833 68.9405 157.432 71.4081 158.245C74.2363 159.175 76.4409 160.873 77.6286 163.641C79.3071 167.554 79.3207 171.535 77.4795 175.377C75.8823 178.715 73.1951 180.714 69.4124 181.08C66.7658 181.335 64.1192 181.611 61.4781 181.921C54.9621 182.688 48.4487 183.464 41.9354 184.261C34.8065 185.134 27.6831 186.045 20.5542 186.924C18.4527 187.184 17.9266 187.902 18.4391 189.985C21.4599 202.28 25.7578 214.097 31.5471 225.369C38.9933 239.871 48.6141 252.74 60.464 263.934C72.0887 274.913 85.1778 283.769 99.4735 290.882C117.262 299.736 136.235 303.898 155.93 305.221C160.182 305.506 164.441 305.471 168.094 305.433C170.811 305.433 172.926 305.462 175.039 305.425C177.089 305.389 179.071 305.286 181.14 304.73C187.791 302.946 194.551 301.574 201.265 300.028C202.841 299.665 204.471 299.505 205.986 298.917C207.247 298.426 207.521 297.68 206.911 296.471ZM312.939 144.576C312.659 140.753 312.236 136.956 311.699 133.163C310.59 125.351 308.744 117.717 306.336 110.214C303.136 100.241 298.914 90.7068 293.735 81.5984C287.72 71.023 280.472 61.3642 272.126 52.5297C267.798 47.9498 263.18 43.6735 258.307 39.6657C250.85 33.5374 242.854 28.2281 234.312 23.7539C225.131 18.9407 215.526 15.1363 205.628 12.0803C202.233 11.0309 198.763 10.2825 195.194 10.0981C187.553 7.85288 179.719 6.8306 171.79 6.55944C164.246 6.29912 156.708 6.46723 149.186 7.26445C143.337 7.88542 137.539 8.77754 131.81 10.0791C113.753 14.1872 97.0439 21.4815 81.5333 31.5525C71.2454 38.2313 62.2021 46.3499 53.994 55.4393C46.819 63.3789 40.4033 71.8582 35.2485 81.2567C34.934 81.8289 34.1205 82.6749 34.5353 82.9813C35.1156 83.4125 36.024 82.8539 36.7074 82.4254C36.824 82.3495 36.9406 82.2763 37.0544 82.1977C42.4858 78.3824 48.3213 75.3074 54.4577 72.7991C67.0451 67.647 80.1911 65.4561 93.7465 65.4561C103.072 65.4533 112.335 66.1394 121.519 67.7799C127.539 68.8564 133.542 70.0143 139.299 72.1511C145.669 74.5156 151.176 78.2116 155.87 83.1061C160.935 88.3856 164.564 94.6359 167.85 101.1C172.075 109.406 175.296 118.127 178.509 126.853C182.045 136.452 185.511 146.067 187.867 156.041C188.334 158.007 188.849 159.962 189.397 162.153C190.47 160.531 191.401 159.121 192.339 157.717C193.239 156.369 194.21 156.176 195.59 157.066C196.875 157.893 196.986 158.546 196.054 160.013C191.363 167.365 186.636 174.694 181.98 182.07C174.976 193.168 166.513 202.944 156.339 211.285C150.452 216.114 144.88 221.334 140.156 227.359C135.313 233.539 131.026 240.058 128.382 247.523C127.365 250.389 126.595 253.321 126.248 256.349C126.47 258.12 127.504 259.289 129.03 260.083C131.595 261.42 134.329 262.277 137.16 262.809C142.423 263.793 147.765 264.181 153.085 264.612C158.85 265.078 164.626 264.606 170.326 263.571C173.986 262.903 177.628 262.114 181.264 261.312C184.261 260.647 187.246 260.007 189.841 258.142C198.714 251.761 207.646 245.465 216.548 239.131C217.5 238.453 217.934 238.512 218.593 239.459C218.907 239.914 219.244 240.354 219.566 240.804C220.019 241.438 219.978 242.016 219.379 242.545C218.628 243.209 217.858 243.854 217.147 244.559C214.612 247.07 212.107 249.614 209.571 252.122C205.967 255.685 202.019 258.719 197.046 260.165C195.972 260.479 195.728 261.07 195.959 262.16C196.292 263.744 196.661 265.328 196.894 266.928C197.664 272.234 199.386 277.169 202.271 281.711C205.056 286.093 208.275 290.177 210.979 294.613C211.74 295.863 212.779 296.194 213.999 295.72C218.896 293.813 223.829 292.002 228.561 289.697C235.793 286.177 242.726 282.159 249.335 277.571C258.524 271.187 266.816 263.79 274.376 255.55C279.954 249.467 284.984 242.973 289.469 236.05C295.853 226.188 300.94 215.694 304.823 204.614C308.063 195.37 310.311 185.888 311.71 176.191C312.559 170.307 313.033 164.395 313.267 158.468C313.448 153.836 313.277 149.205 312.939 144.576Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M126.248 256.349C126.595 253.32 127.365 250.389 128.382 247.523C131.026 240.058 135.313 233.539 140.156 227.359C144.88 221.334 150.452 216.114 156.339 211.285C166.513 202.944 174.976 193.168 181.98 182.07C186.636 174.694 191.363 167.364 196.054 160.013C196.987 158.546 196.875 157.893 195.59 157.066C194.21 156.176 193.239 156.369 192.339 157.716C191.401 159.121 190.471 160.531 189.397 162.153C188.849 159.962 188.334 158.007 187.867 156.041C185.511 146.067 182.045 136.452 178.51 126.853C175.296 118.127 172.075 109.406 167.85 101.1C164.564 94.6357 160.935 88.3854 155.87 83.1059C151.176 78.2114 145.669 74.5154 139.299 72.1509C133.543 70.0141 127.542 68.8563 121.519 67.7797C112.335 66.1392 103.072 65.4532 93.7466 65.4559C80.1912 65.4559 67.0452 67.6469 54.4551 72.799C48.3214 75.3072 42.4859 78.3822 37.0545 82.1975C36.9406 82.2761 36.824 82.3493 36.7074 82.4252C36.0241 82.8537 35.1157 83.4123 34.5354 82.9811C34.1206 82.6747 34.934 81.8287 35.2486 81.2565C40.4034 71.858 46.8191 63.3788 53.9941 55.4391C62.2022 46.3497 71.2455 38.2311 81.5334 31.5524C97.044 21.4814 113.753 14.1871 131.81 10.079C137.539 8.77738 143.337 7.88525 149.186 7.26428C156.708 6.46707 164.246 6.29895 171.79 6.55927C179.719 6.83043 187.553 7.85271 195.194 10.0979C195.36 10.4803 195.737 10.6213 196.046 10.822C200.059 13.4061 204.04 16.0364 207.955 18.7616C211.586 21.2888 215.119 23.9517 218.422 26.8911C221.624 29.7437 224.77 32.6533 227.652 35.8422C229.366 37.7403 231.088 39.633 232.707 41.6125C236.978 46.8351 240.815 52.3641 244.215 58.205C248.386 65.3691 251.862 72.8586 254.639 80.66C257.659 89.1582 259.902 97.8571 261.198 106.806C261.857 111.348 262.388 115.903 262.535 120.475C262.717 126.101 262.706 131.742 262.228 137.374C261.865 141.669 261.388 145.948 260.68 150.189C259.511 157.201 257.86 164.108 255.636 170.865C252.909 179.165 249.413 187.129 245.099 194.738C240.253 203.285 234.472 211.146 227.861 218.395C224.903 221.635 221.784 224.729 218.487 227.644C213.769 231.814 208.812 235.657 203.519 239.082C195.492 244.28 186.945 248.382 177.883 251.414C171.302 253.613 164.569 255.205 157.692 256.208C153.318 256.848 148.926 257.217 144.522 257.39C139.991 257.569 135.462 257.363 130.95 256.959C129.383 256.818 127.783 256.783 126.248 256.349ZM211.957 148.66C213.517 148.66 215.081 148.746 216.632 148.638C218.582 148.502 220.396 147.873 221.554 146.178C225.413 140.525 229.239 134.846 233.04 129.155C234.231 127.376 234.255 125.546 233.008 123.726C231.953 122.186 230.98 120.591 229.933 119.046C229.277 118.072 228.734 117.015 227.905 116.169C226.836 115.079 225.684 115.106 224.68 116.242C224.407 116.551 224.184 116.906 223.954 117.251C220.168 122.956 216.383 128.659 212.603 134.367C210.122 138.114 207.646 141.867 205.181 145.622C204.284 146.992 204.628 147.946 206.163 148.478C206.561 148.613 206.965 148.668 207.386 148.665C208.91 148.654 210.434 148.66 211.957 148.66ZM235.299 148.66C237.534 148.524 240.31 148.901 243.063 148.486C244.996 148.193 245.606 146.951 244.603 145.316C242.149 141.306 239.673 137.309 237.162 133.333C235.993 131.479 234.12 131.481 232.921 133.333C230.407 137.225 227.907 141.124 225.459 145.056C224.163 147.136 225.293 148.22 227.289 148.651C227.52 148.7 227.772 148.66 228.013 148.66C230.266 148.66 232.517 148.66 235.299 148.66Z", fill: "#FBD2D2" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M168.094 305.433C164.441 305.471 160.182 305.506 155.93 305.221C136.235 303.898 117.262 299.736 99.4735 290.885C85.1778 283.769 72.0888 274.913 60.464 263.934C48.6142 252.74 38.9933 239.871 31.5472 225.369C25.7578 214.097 21.4599 202.28 18.4391 189.985C17.9266 187.903 18.4527 187.184 20.5542 186.924C27.6831 186.045 34.8065 185.134 41.9354 184.261C48.4488 183.464 54.9621 182.688 61.4781 181.921C64.1193 181.612 66.7658 181.335 69.4124 181.08C73.1951 180.714 75.8823 178.716 77.4795 175.377C79.3207 171.535 79.3071 167.554 77.6286 163.642C76.4409 160.873 74.2364 159.176 71.4081 158.245C68.9406 157.432 68.6585 156.833 68.9758 154.286C70.5513 141.645 66.8336 131.031 56.7897 122.888C52.4918 119.404 47.7356 116.814 42.2988 115.643C35.921 114.271 29.6653 114.908 23.5289 116.999C22.2598 117.43 21.0098 117.918 19.776 118.439C19.1333 118.71 18.9489 118.444 18.9516 117.891C18.9543 117.59 19.0357 117.278 19.1469 116.993C21.4572 111.022 23.7865 105.057 26.0941 99.0831C27.7048 94.9207 30.3161 91.6315 34.1395 89.2426C40.8697 85.0368 47.5431 80.7552 54.813 77.4958C60.4179 74.9848 66.2642 73.3687 72.303 72.3708C75.058 71.9152 77.7913 71.316 80.5491 70.8848C82.3523 70.6028 84.1854 70.4618 86.0076 70.3398C91.6071 69.9601 97.2202 69.8869 102.822 70.1473C115.61 70.7357 128.073 73.0623 140.156 77.3439C146.309 79.5241 151.027 83.5563 154.94 88.6379C160.586 95.9674 164.78 104.121 168.265 112.641C173.162 124.624 177.731 136.737 181.373 149.17C182.794 154.026 183.99 158.94 184.828 163.948C185.28 166.66 184.903 168.946 183.502 171.405C175.155 186.037 164.265 198.505 151.61 209.498C145.88 214.476 140.292 219.577 135.584 225.57C129.518 233.292 125.093 241.829 122.685 251.382C122.297 252.919 121.88 254.44 121.801 256.043C121.652 259.058 122.894 261.336 125.359 262.963C128.569 265.081 132.189 266.239 135.877 267.134C140.422 268.24 145.059 268.508 149.739 268.677C152.402 268.771 155.086 268.959 157.76 269.11C163.49 269.43 169.038 268.254 174.613 267.28C179.947 266.353 185.207 265.13 190.3 263.242C191.36 262.852 192.068 263.286 192.111 264.349C192.434 272.218 195.454 279.13 199.592 285.657C201.558 288.753 203.695 291.728 205.813 294.716C206.214 295.28 206.605 295.858 206.911 296.471C207.521 297.68 207.247 298.426 205.986 298.917C204.471 299.505 202.841 299.665 201.265 300.028C194.551 301.574 187.791 302.946 181.14 304.73C179.071 305.286 177.089 305.389 175.039 305.425C172.926 305.463 170.811 305.433 168.094 305.433ZM125.543 101.312C106.613 101.697 91.0702 117.143 91.3441 136.764C91.6179 156.312 107.755 171.592 127.102 171.134C146.203 170.681 161.665 154.804 161.147 135.248C160.661 116.907 145.604 101.014 125.543 101.312Z", fill: "#F7FBFE" }),
        React__default['default'].createElement("path", { d: "M126.248 256.349C127.783 256.783 129.383 256.819 130.95 256.96C135.462 257.364 139.991 257.57 144.522 257.391C148.925 257.217 153.318 256.848 157.692 256.208C164.569 255.205 171.302 253.613 177.883 251.414C186.945 248.383 195.492 244.28 203.519 239.082C208.812 235.657 213.769 231.815 218.487 227.644C221.784 224.729 224.903 221.635 227.861 218.395C234.472 211.147 240.253 203.286 245.099 194.738C249.413 187.13 252.908 179.166 255.636 170.865C257.86 164.108 259.511 157.201 260.68 150.189C261.388 145.948 261.865 141.669 262.228 137.374C262.705 131.742 262.716 126.102 262.535 120.475C262.388 115.903 261.857 111.348 261.198 106.806C259.902 97.8573 257.659 89.1583 254.638 80.6601C251.862 72.8587 248.385 65.3692 244.215 58.2051C240.814 52.3642 236.977 46.8352 232.707 41.6126C231.088 39.6331 229.366 37.7404 227.652 35.8423C224.77 32.6534 221.624 29.7438 218.422 26.8912C215.119 23.9517 211.586 21.2889 207.955 18.7617C204.039 16.0365 200.059 13.4062 196.045 10.822C195.736 10.6214 195.359 10.4804 195.194 10.098C198.762 10.2824 202.233 11.0308 205.628 12.0802C215.526 15.1362 225.13 18.9406 234.312 23.7538C242.854 28.228 250.85 33.5374 258.307 39.6657C263.18 43.6734 267.798 47.9497 272.126 52.5296C280.472 61.3641 287.72 71.023 293.735 81.5983C298.914 90.7067 303.136 100.241 306.336 110.214C308.744 117.717 310.59 125.351 311.699 133.163C312.236 136.956 312.659 140.753 312.938 144.576C313.277 149.205 313.448 153.836 313.267 158.468C313.033 164.395 312.559 170.307 311.71 176.191C310.311 185.888 308.063 195.37 304.823 204.614C300.939 215.694 295.852 226.188 289.469 236.05C284.984 242.973 279.954 249.467 274.376 255.55C266.816 263.79 258.524 271.187 249.334 277.571C242.726 282.159 235.793 286.177 228.561 289.697C223.829 292.002 218.896 293.813 213.999 295.72C212.779 296.194 211.74 295.863 210.978 294.613C208.275 290.177 205.056 286.093 202.271 281.711C199.386 277.169 197.664 272.234 196.894 266.928C196.661 265.328 196.292 263.744 195.959 262.16C195.728 261.07 195.972 260.479 197.046 260.165C202.019 258.719 205.965 255.685 209.571 252.122C212.106 249.614 214.612 247.07 217.147 244.559C217.858 243.854 218.628 243.209 219.379 242.545C219.978 242.016 220.019 241.438 219.566 240.804C219.243 240.354 218.907 239.914 218.593 239.459C217.936 238.512 217.5 238.453 216.548 239.131C207.646 245.465 198.714 251.761 189.841 258.142C187.246 260.007 184.261 260.647 181.264 261.312C177.628 262.114 173.986 262.903 170.326 263.571C164.626 264.606 158.85 265.078 153.085 264.612C147.765 264.181 142.423 263.793 137.16 262.809C134.329 262.277 131.595 261.42 129.03 260.083C127.504 259.289 126.47 258.12 126.248 256.349Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M17.4764 181.544C23.2088 179.412 28.9304 177.251 34.6763 175.158C44.91 171.429 55.2061 167.877 65.5835 164.574C66.8498 164.173 68.1161 163.88 69.4584 164.035C70.3939 164.146 71.1748 164.539 71.7904 165.255C73.7699 167.552 73.6343 171.977 71.5572 174.195C70.5132 175.312 69.1899 175.706 67.7528 175.868C62.015 176.519 56.2744 177.143 50.5366 177.81C45.0754 178.442 39.6169 179.111 34.1584 179.77C28.8029 180.418 23.4502 181.075 18.0947 181.725C17.8913 181.75 17.6825 181.728 17.4791 181.728C17.4791 181.666 17.4764 181.606 17.4764 181.544Z", fill: "#FBD2D2" }),
        React__default['default'].createElement("path", { d: "M23.4069 138.958C23.3581 141.165 23.2089 143.508 22.4388 145.761C21.224 149.324 18.4988 151.296 15.1011 152.342C13.4959 152.836 12.0804 151.922 10.993 150.683C9.42028 148.89 9.40944 146.694 9.48807 144.5C9.5884 141.656 10.0982 138.882 10.9957 136.173C12.1889 132.572 14.8652 130.392 18.0514 128.675C18.3904 128.493 18.7103 128.548 19.052 128.624C20.904 129.03 22.0836 130.166 22.6991 131.94C23.4719 134.174 23.4123 136.495 23.4069 138.958Z", fill: "#FEFEFE" }),
        React__default['default'].createElement("path", { d: "M211.957 148.66C210.433 148.66 208.909 148.654 207.386 148.665C206.965 148.668 206.561 148.614 206.163 148.478C204.628 147.947 204.283 146.992 205.181 145.623C207.646 141.867 210.122 138.114 212.603 134.367C216.383 128.659 220.168 122.956 223.954 117.251C224.184 116.907 224.406 116.551 224.68 116.242C225.684 115.106 226.836 115.079 227.904 116.169C228.734 117.015 229.276 118.073 229.933 119.046C230.979 120.592 231.953 122.186 233.008 123.726C234.255 125.546 234.231 127.376 233.04 129.155C229.239 134.847 225.412 140.525 221.554 146.179C220.396 147.873 218.582 148.503 216.632 148.638C215.081 148.747 213.517 148.66 211.957 148.66Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M235.299 148.66C232.517 148.66 230.266 148.66 228.013 148.66C227.771 148.66 227.519 148.7 227.289 148.652C225.293 148.22 224.162 147.136 225.458 145.056C227.907 141.124 230.407 137.225 232.921 133.334C234.119 131.482 235.993 131.479 237.162 133.334C239.673 137.309 242.148 141.306 244.602 145.316C245.606 146.951 244.996 148.193 243.062 148.486C240.31 148.901 237.533 148.524 235.299 148.66Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M119.964 125.194L119.964 125.194C119.931 127.781 119.888 130.45 118.993 133.033C118.229 135.249 116.854 136.99 114.845 138.205C113.071 139.282 111.156 140.034 109.134 140.469M119.964 125.194L103.445 122.713C101.768 126.621 101.217 130.806 101.614 135.042L101.614 135.043C101.797 136.991 102.696 138.568 104.062 139.548C105.427 140.528 107.218 140.883 109.134 140.469M119.964 125.194L119.964 125.183M119.964 125.194L119.964 125.183M109.134 140.469L109.029 139.98L109.135 140.468C109.135 140.469 109.135 140.469 109.134 140.469ZM119.964 125.183C119.961 124.966 119.96 124.748 119.959 124.528C119.947 122.715 119.936 120.816 119.378 118.974L119.378 118.974M119.964 125.183L119.378 118.974M119.378 118.974C118.913 117.446 118 116.247 116.787 115.546M119.378 118.974L116.787 115.546M116.787 115.546C115.571 114.842 114.091 114.66 112.542 115.102L116.787 115.546ZM125.552 101.812C145.326 101.519 160.169 117.182 160.647 135.261C161.158 154.538 145.917 170.187 127.09 170.634C108.018 171.086 92.1139 156.024 91.844 136.757C91.574 117.416 106.892 102.192 125.552 101.812ZM112.542 115.102C108.457 116.269 105.161 118.712 103.445 122.713L112.542 115.102Z", fill: "#F4EDED", stroke: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M119.467 125.191C119.431 127.786 119.385 130.375 118.52 132.87C117.793 134.98 116.492 136.625 114.586 137.778C112.861 138.825 110.998 139.557 109.029 139.98C105.442 140.755 102.454 138.632 102.112 134.996C101.722 130.833 102.264 126.733 103.904 122.91C105.55 119.073 108.709 116.717 112.679 115.583C115.537 114.767 118.035 116.275 118.9 119.119C119.499 121.099 119.442 123.149 119.467 125.191Z", fill: "#FEFEFE" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default['default'].createElement("path", { d: "M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z", fill: "#191326" }),
        React__default['default'].createElement("path", { d: "M8.25 4.72H3.25V6.22H8.25V4.72Z", fill: "#191326" }),
        React__default['default'].createElement("path", { d: "M15 12.75H10V14.25H15V12.75Z", fill: "#191326" }),
        React__default['default'].createElement("path", { d: "M15 10.25H10V11.75H15V10.25Z", fill: "#191326" }),
        React__default['default'].createElement("path", { d: "M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15Z", fill: "#191326" }),
        React__default['default'].createElement("path", { d: "M11.09 7.95L12.5 6.54L13.91 7.95L14.97 6.89L13.56 5.47L14.97 4.06L13.91 3L12.5 4.41L11.09 3L10.03 4.06L11.44 5.47L10.03 6.89L11.09 7.95Z", fill: "#191326" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 800 800" }, props),
        React__default['default'].createElement("g", { id: "Layer_4", fill: "black" },
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { fill: "#FFFAFA", d: "M332.2,575.7c1.9-3.2,3.8-6.4,5.7-9.7c0.5-0.8,0.8-1.7,1.1-2.7c8.4-11.8,19-22.3,29-32.4\n    \tc13-13.2,26.4-26,40.6-38.1c8.4-7.2,16.7-14.6,24.9-22.1c1.4-1.2,2.7-2.5,4.1-3.7c0.1-0.2-0.1,0.8,0,0.6c0.1-0.2,1.5-1.5,1.7-1.7\n    \tc15.7-11,23.8-30.7,29.9-48.3c6.7-19.6,9.6-41.1,8.9-61.8c-1.5-42.3-19.8-81.2-48.4-112c-58.8-63.3-159.1-87.9-238.6-51.5\n    \tc-24.6,11.2-48.4,26-64.8,47.2c-11.9,15.4-19,35.3-24.5,54.2c-0.4,1.5-0.5,2.8-0.3,4.1c-3.5,8.3-6.5,16.7-8.7,25.4\n    \tc-3.3,13.1-5.4,26.6-6.5,40.1c-2.2,26.2-0.2,53,6.1,78.5c2.2,8.9,5,17.6,8.3,26.2c24,116.8,113.4,215.3,237,244.6\n    \tc19.5,4.6,39,7.3,58.4,8.2l0.1-1.9c6.8,0.7,15.4,5.4,20.1,1.3c4.6,0.8,8.6-1.4,13.2-0.8c1.5,0.5,3.4,0.1,5,0\n    \tc3.8,0.5,6.3-0.7,10.1-0.6c3.7,0.1,7.4-0.1,11.1,0.3c4.6,0.5,13.6-0.3,16-4.6c2.2-4-3.2-9.8-6.5-12.9c-7.4-7.1-13.2-14.8-18-24.1\n    \tc-2.2-4.2-3.6-7.9-5.3-12.6c-1.6-4.8-3.6-9.5-4.5-14.5c-1.1-6.5-5.9-10.6-12.7-9c-8.7,2-15.3,2.1-24.1,3.8c-0.1,0-2.4,0-2.5,0\n    \tc-7.4-3.2-14.8-2.3-22.5-2.7c-1.4-0.3-2.8-0.7-4.2-1.1c-6.4-4.6-13.4-8.3-20.7-11.5c-2-2-3.8-4.1-5.2-6.3\n    \tc-3.8-5.7-6.2-10.1-8-16.6c-1.1-4.1-5.6-6.5-9.7-6.3c-0.2-4.1-0.1-8,0.5-11.4C329,584.3,330.3,579.9,332.2,575.7z" }),
                React__default['default'].createElement("path", { fill: "#EC3E3F", d: "M734.7,398.2c-1-34.5-4.7-69.9-12.6-103.6c-4.2-17.6-9.9-35.6-19-51.4c-4.4-7.6-9.4-14.7-14.9-21.5\n    \tc-5.6-6.9-11.9-13.8-19.9-17.9c-0.2-0.1-0.4-0.2-0.7-0.3c-0.8-1.3-1.6-2.5-2.4-3.7c-10.3-15.5-22-30-35.1-43.2\n    \tc-13.1-13.1-27.6-25.9-43.6-35.3c-8.5-5-17.1-10-26-14.4c-3.4-1.7-6.9-3.2-10.4-4.6c-6.5-3.5-13.3-6.4-20.3-8.5v0.1\n    \tc-2.4-0.5-4.9-0.1-6.9,1.3c-6.6-3-13.3-5.7-19.9-8.1c-29.6-10.5-61.2-15.3-92.6-16c-29.1-0.7-58.7,1.8-87.2,8.2\n    \tc-14.5,3.3-29.1,8.3-42.3,15.4c-6.6,3.5-12.6,7.6-18.2,12.5c-2.3,2-6.2,1.2-8,3.5c-0.8,0.4-1.5,0.8-2.3,1.2\n    \tc-28.6,15-54.1,36.1-78.4,57.4c-10.3,9.1-21.8,19-29,31.1c-1.3,1.1-2.6,2.2-3.8,3.3c-1.1,2-2.2,4-3.3,6.1\n    \tc-1.8,3.5-3.2,6.9-6.4,9.3c-0.5,0.9-1.1,1.8-1.6,2.7c2.1,3.1,6.8,4.5,10.5,1.3c10.2-9.1,20.6-17.7,32.2-24.9\n    \tc11.7-7.3,24.2-13.4,37.1-18.1c26-9.5,53.6-13.6,81.2-12c53.6,3,104,30.6,139.3,71c10,11.4,20,22.2,27.4,35.5\n    \tc3.7,6.5,6.8,13.4,9.6,20.3c2.1,5.2,3.5,10.7,5.8,15.8c-1.3,0-2.6-0.1-3.8-0.1c0.7,1.2,1.3,2.4,1.6,3.1c2.3,4.9,3.3,10.4,4.4,15.7\n    \tc1.3,6.8,2.5,13.4,2.6,20.4c0,1.6,0,3.2-0.1,4.9c2.2,15.7,1.1,32-2.8,47.1c-4.7,18.4-12.6,36.6-23.2,52.8c0,0,0.1-0.1,0.2-0.1\n    \tc7.2-6.6,14.5-13.1,21.8-19.7c7.4-6.6,15.3-12.4,22.8-18.8c0.7-0.6,1.7,0.3,1.1,1c-7.3,7.3-14,15.1-21.5,22.2\n    \tc-7.4,7.1-14.9,14.3-22.5,21.3c-4.5,4.3-9.1,8.5-13.6,12.8c-10.1,9.5-20,19-29.7,28.9c-12.2,12.5-24.9,24.5-36.8,37.3\n    \tc-11.1,11.9-23.6,24.3-30.6,39.3c-5.6,12.1-6,27.6,4.9,36.9c9.7,8.2,24,10.5,36.2,12.2c26.8,3.8,55.2,0.9,81.3-5.8\n    \tc27.5-7,52.5-21.4,73.2-40.6c0.9-0.9,2.3,0.4,1.5,1.4c-21.6,25-51.1,44.1-82.3,54.8c-5,1.7-10.1,3.2-15.3,4.4c0.9,2.8,1,6,1.5,8.8\n    \tc0.7,3.7,1.5,7.3,2.5,10.9c2,7,4.9,13.6,8,20.2c3.2,6.8,6.3,13.6,10.9,19.5c2.4,3.1,5,6.1,7.7,9c1.2,1.3,2.6,2.6,3.9,4.1\n    \tc47.2-10.2,91.3-31,128.9-60.5c6.4-2.2,12.7-5.3,18.3-8.5c11.8-6.7,23-15.1,32-25.3c14.1-15.7,26.3-35.5,29.9-56.8\n    \tc12.8-18.4,23.7-38.1,32-59.3C731,470.1,735.7,434.5,734.7,398.2z" }),
                React__default['default'].createElement("path", { d: "M744.1,361.5c-4.9-43.2-18.9-86.4-40.4-124.9c-10.8-19.2-23.4-37.4-37.5-54c-14.1-16.5-29.9-31.9-47.2-45.6\n    \tc-17.1-13.5-35.6-25.5-55-35.4c-19-9.8-39.4-17.9-60.7-24.1c-20.9-6-42.5-10-64.2-11.9l-12-0.8c-1.5-0.1-2.8-0.2-4.2-0.2l0,0\n    \tl-14.2-0.3l-16.2,0.5L378.1,66c-0.2,0-0.4,0-0.7,0c-0.5,0-1,0.1-1.5,0.1l-1.9,0.2c-21.6,2.3-43,6.8-63.8,13.3\n    \tc-20.6,6.5-40.7,15-59.9,25.5c-19.2,10.4-37.3,22.7-54,36.4c-16.7,13.9-32.2,29.4-45.8,46.2l-1.3,1.6c-0.3,0.4-0.6,0.8-0.9,1.2\n    \tc-0.1,0.2-0.3,0.3-0.4,0.6l-8.5,11.2l-9.3,13.4l-7.5,12.1c-0.8,1.2-1.5,2.4-2.2,3.7l-5.9,10.6c-10.2,19.2-18.6,39.5-24.9,60.3\n    \tc-6.4,21.3-10.7,42.8-12.8,64c-2.2,21.7-2.3,43.8-0.2,65.5c2.1,21.8,6.3,43.4,12.6,64.4c6.3,20.9,14.7,41.3,25,60.8\n    \tc10.4,19.5,22.6,37.9,36.4,54.8c13.9,17.1,29.5,32.8,46.5,46.8c34,28.1,74.1,49.6,116,62.3c31.7,9.6,65.1,14.4,98.1,14.4\n    \tc11.2,0,22.3-0.6,33.3-1.7c22-2.3,43.9-6.8,65.1-13.3c21-6.5,41.7-15.2,61.3-25.8c38.9-21.2,74-50.5,101.5-84.8\n    \tc13.6-16.9,25.8-35.6,36.2-55.7c10.1-19.6,18.4-40.3,24.6-61.6C745.4,450.7,749.1,405.3,744.1,361.5z M437.6,467\n    \tc-1.4,1.2-2.7,2.5-4.1,3.7c-8.2,7.5-16.5,14.9-24.9,22.1c-14.1,12.1-27.6,24.8-40.6,38.1c-10.8,11-22.3,22.4-31,35.3\n    \tc-1,1.6-2,3.1-3,4.7c-0.2,0.3-0.3,0.5-0.5,0.8c-0.9,1.5-1.7,3-2.4,4.5c-0.5,1-0.9,2-1.4,3c-2,4.8-3.4,9.9-3.9,15.1\n    \tc-0.1,0.8-0.2,1.6-0.2,2.4c-0.4,7.1,0.9,14.2,4.3,20.7c5.2,9.9,14.5,16.3,24.8,20.4c1.1,0.5,2.3,0.9,3.5,1.3\n    \tc3.1,1.1,6.3,2,9.4,2.7c4.5,1,9.1,1.8,13.7,2.5c0.5,0.1,0.9,0.1,1.4,0.2c3.4,0.5,6.8,0.8,10.2,1c1.7,0.1,3.4,0.2,5.1,0.3\n    \tc10.8,0.4,21.7-0.2,32.4-1.8c0,3.1,1,6.6,1.7,9.4c0.9,3.8,2.1,7.6,3.4,11.3c2.7,7.6,5.9,15.3,10.3,22c4.2,6.6,9.8,12.1,15.1,17.8\n    \tc2.8,3,5.9,5.9,9.1,8.5c0.2,0.2,0.5,0.4,0.7,0.6c-9.2,1.8-18.5,3.2-27.8,4.2c-41.6,4.4-85,0.5-125.4-11.4\n    \tc-21.8-6.4-43-15.3-63.1-26.2c-82.9-47.1-140-129.5-155.8-222.4c-2.4-14-5.6-28-7.2-42.1c-6.7-56.2,6-118.9,32-169.1\n    \tc0.8-1.5,1.7-4.4,3-5.6c12.4-11.2,25-22,39.1-31.2c17.5-11.4,36.5-20.4,56.5-26.4c19.9-5.9,40.4-8.6,61.1-7.4\n    \tc21.3,1.3,42.4,6.6,62.3,14.3c36,13.9,68.8,36.8,92.1,67.8c20.9,27.9,35,61.4,38,96.3c3.2,37.1-6.5,72.9-27.5,103.1\n    \tc-3.3,3-6.6,6-9.9,9 M615.4,644.8c-16.1,13.4-33.7,25.3-52.3,35.5c-18.6,10.1-38.2,18.4-58.2,24.7c-9.7,3-19.6,5.6-29.7,7.7\n    \tc-0.8-0.9-1.7-1.7-2.4-2.5c-2.7-2.9-5.2-5.9-7.7-9c-4.6-5.9-7.7-12.8-10.9-19.5c-3.1-6.6-6-13.2-8-20.2c-1-3.6-1.9-7.2-2.5-10.9\n    \tc-0.5-2.8-0.6-6-1.5-8.8c5.2-1.2,10.3-2.7,15.3-4.4c31.2-10.7,60.7-29.8,82.3-54.8c0.9-1-0.5-2.3-1.5-1.4\n    \tc-20.7,19.2-45.7,33.6-73.2,40.6c-26.1,6.6-54.6,9.6-81.3,5.8c-12.1-1.7-26.5-4-36.2-12.2c-10.9-9.3-10.5-24.8-4.9-36.9\n    \tc6.9-14.9,19.5-27.3,30.6-39.3c11.9-12.8,24.6-24.8,36.8-37.3c9.7-9.9,19.6-19.4,29.7-28.9c4.5-4.3,9.1-8.5,13.6-12.8\n    \tc7.5-7.1,15-14.2,22.5-21.3c7.5-7.2,14.2-14.9,21.5-22.2c0.7-0.7-0.4-1.6-1.1-1c-7.5,6.4-15.4,12.2-22.8,18.8\n    \tc-4.4,3.9-8.8,7.9-13.2,11.9c15-23.3,23-50.5,23.7-78.7c0.9-36.5-11.3-73.2-31-103.6c-21.7-33.5-52.6-59.5-88.6-76.6\n    \tc-40.5-19.2-85.8-27.8-129.9-17.9c-24.2,5.4-47.3,15.4-68.1,28.8c-8.8,5.6-17.5,11.9-25.5,19c5.4-8.1,11.1-15.8,17.1-23.3\n    \tc13.3-16.4,28.2-31.6,44.4-45.1c16.1-13.4,33.8-25.4,52.4-35.6l0,0c18.7-10.1,38.3-18.4,58.3-24.6c20.2-6.3,41-10.6,62-12.8\n    \tc41.7-4.4,85.1-0.4,125.5,11.5c40.4,12,78.9,32.2,111.5,58.6c16.4,13.3,31.5,28.2,45,44.4c13.4,16.1,25.4,33.8,35.5,52.4\n    \tc10.1,18.7,18.4,38.3,24.6,58.3c6.3,20.1,10.6,41,12.8,61.9c4.4,41.7,0.4,85-11.5,125.4s-32.2,78.9-58.6,111.4\n    \tC646.6,616.2,631.6,631.3,615.4,644.8z" }),
                React__default['default'].createElement("circle", { cx: "337.2", cy: "360.5", r: "81.1" }),
                React__default['default'].createElement("circle", { fill: "#FFFFFF", cx: "304", cy: "351.8", r: "28" }),
                React__default['default'].createElement("circle", { cx: "134.9", cy: "374", r: "81.1" }),
                React__default['default'].createElement("path", { fill: "#EC3E3F", d: "M243.5,431.5c2.9,10.2,3.4,21.7,2.6,32.3c-19.2,5.7-38.3,5.8-58.2,2.4c-11.3-1.9-22.2-5.5-33-9.4\n    \tc-5.5-2-10.9-4-16.2-6.3c-2.7-1.2-5.7-2.8-8.8-4c3.3-0.5,6.5-1.5,9.7-2.2c4.5-1.1,9-2.2,13.4-3.6c9.5-2.8,18.8-6.4,27.9-10.4\n    \tc8.6-3.8,16.9-8.2,25-13.1c7.4-4.4,15.2-9,21.6-14.9c0.6,2,2.2,3.3,3.4,5c1.9,2.5,3.7,5,5.4,7.6\n    \tC239.5,420.1,241.9,425.8,243.5,431.5z" }),
                React__default['default'].createElement("circle", { fill: "#FFFFFF", cx: "100.4", cy: "363.4", r: "28" }),
                React__default['default'].createElement("path", { d: "M249.7,430.1c-2.8-6-6.2-11.6-10-17.1c-1.7-2.5-3.6-5-5.7-7.2c-1.5-1.7-3.1-3.8-5.3-4.5c0.1-0.1,0.2-0.2,0.3-0.3\n    \tc0.3-0.3-0.1-0.8-0.5-0.6c-2.3,1.1-4.5,2.4-6.7,3.7c-5.8,3.4-11.4,7.1-17.2,10.3c-8.6,4.6-17.4,8.8-26.5,12.4\n    \tc-8.5,3.5-17.3,6.5-26.1,9.2c-4.4,1.4-8.9,2.6-13.3,3.7c-4.6,1.1-9.7,1.7-14.1,3.3c-0.7,0.3-1.2,0.8-1.4,1.5c0,0.1,0,0.1,0,0.2\n    \tc-0.2,1,0.3,2,1.3,2.4c3.6,3.7,9.8,6,14.2,8.4c5.1,2.7,10.1,5.5,15.3,8c0.4,0.2,0.9,0.4,1.4,0.6c10.3,4.9,21.3,9.1,32.3,12.1\n    \tc20.5,5.6,44.5,6.5,64.4-1.9c2.6-0.2,5-2.1,5.3-5.9c0.6-6.8-0.1-13.2-1.4-19.9C254.9,441.8,252.6,436.1,249.7,430.1z M188,466.3\n    \tc-11.3-1.9-22.2-5.5-33-9.4c-5.5-2-10.9-4-16.2-6.3c-2.7-1.2-5.7-2.8-8.8-4c3.3-0.5,6.5-1.5,9.7-2.2c4.5-1.1,9-2.2,13.4-3.6\n    \tc9.5-2.8,18.8-6.4,27.9-10.4c8.6-3.8,16.9-8.2,25-13.1c7.4-4.4,15.2-9,21.6-14.9c0.6,2,2.2,3.3,3.4,5c1.9,2.5,3.7,5,5.4,7.6\n    \tc3.2,5,5.6,10.7,7.2,16.4c2.9,10.2,3.4,21.7,2.6,32.3C226.9,469.6,207.8,469.6,188,466.3z" }),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", { opacity: "0.3" },
                        React__default['default'].createElement("path", { d: "M727,455.3c12.9-60.4,7.9-120.8-9.2-179.7c-1-3.4-2.3-7.2-5.5-8.6c-7.5-3.3-11.8,8.6-11.7,16.9\n    \t\t\tc0.6,80.6-38.1,171-87.3,232.4c-46.5,58.2-112.6,111.4-189.7,123.3c-8.4,1.3-16.8,2.4-25.4,2c-8.4-0.3-16.7-3.4-24.6-6.2\n    \t\t\tc-8.5-3-17.2-5.8-25.4-9.5c-7.8-3.6-13.5-9.8-15.2-18.3c-0.2-0.9-1.5-0.6-1.5,0.3c-0.1,3.4,0.4,6.7,1.5,9.9\n    \t\t\tc0.2,0.5,0.3,1,0.5,1.5c-0.1,0.3-0.2,0.6-0.3,1c-0.8,15.2,9.9,25.6,22.8,33.6c-1.2,0-2.4,0-3.6,0\n    \t\t\tc-85.7-0.5-170.6-39.4-226.8-104.1c-2.7-3.1-9-5.6-9.8-1.6c-0.3,1.6,0.8,3.1,1.8,4.4c20.5,25.5,38.7,56,61.7,78.9\n    \t\t\tc10.1,12.6,21.7,24.1,35.4,32.7c14.2,8.9,30.2,15,45.9,20.8c1.2,0.9,2.4,1.7,3.6,2.5c5,3.5,10.3,6.3,15.8,9\n    \t\t\tc11.5,5.6,23.5,10.3,35.6,14.4c24.1,8.1,49.3,12.3,74.6,14.2C505.7,734,605.9,683.5,670.4,587c25.9-38.8,45.4-82,55.6-127.5\n    \t\t\tC726.4,458.1,726.7,456.7,727,455.3z" })),
                    React__default['default'].createElement("path", { opacity: "0.3", enableBackground: "new", d: "M140.3,452.5c4.1,3,7.8,2.4,11.6,5.8c5.2,1.9,10.1,4.3,15,6.8c11.4,4.3,23.5,6.9,35.5,7.7\n    \t\tc16.9,1.2,33.5-2,50.3-3.8c0.7-4.1,1.1-8.2,2-12.2c-0.6-1.6-1.4-3.2-2.3-4.7c-0.2-0.4-0.6-0.5-1-0.4c-0.2-0.5,0.1-6.8-0.1-7.3\n    \t\tc-1-2.3-0.7-2.4-2.6-1.8c-12.2,3.8-24.3,8.4-37,10.5c-17.6,3-35.5,1.5-53-1.3c-9.1-1.5-19.2-3.4-27.9-7.4\n    \t\tc0.7,1.5-3.1,1.3-2.2,2.6c3.1,1.7,10.5,5.5,13.2,7.9c0.3,0.2,0.6,0.4,0.8,0.6c-1.3-2.2-1.5-2.3,0-0.3\n    \t\tC144,457,140,452.3,140.3,452.5z" }),
                    React__default['default'].createElement("g", { opacity: "0.3" },
                        React__default['default'].createElement("path", { d: "M558,388.7c-3.4,0-6.8,0-10.1,0c-0.9,0-1.8-0.1-2.7-0.4c-3.4-1.2-4.2-3.3-2.2-6.3c5.5-8.3,11-16.6,16.5-25\n    \t\t\tc8.4-12.7,16.8-25.3,25.2-37.9c0.5-0.8,1-1.5,1.6-2.2c2.2-2.5,4.8-2.6,7.1-0.2c1.8,1.9,3,4.2,4.5,6.4c2.3,3.4,4.5,7,6.8,10.4\n    \t\t\tc2.8,4,2.7,8.1,0.1,12c-8.4,12.6-16.9,25.2-25.5,37.7c-2.6,3.8-6.6,5.2-10.9,5.5C564.9,388.9,561.4,388.7,558,388.7z" }),
                        React__default['default'].createElement("path", { d: "M609.7,388.7c-6.2,0-11.2,0-16.2,0c-0.5,0-1.1,0.1-1.6,0c-4.4-1-6.9-3.4-4.1-8c5.4-8.7,11-17.4,16.5-26\n    \t\t\tc2.7-4.1,6.8-4.1,9.4,0c5.6,8.8,11,17.7,16.5,26.6c2.2,3.6,0.9,6.4-3.4,7C620.8,389.2,614.7,388.4,609.7,388.7z" }))))),
        React__default['default'].createElement("g", { id: "Layer_2_1_" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 342 342" }, props),
        React__default['default'].createElement("circle", { cx: "160", cy: "160", r: "160", fill: "#ffffff" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M213.457 156.134C208.38 166.858 201.693 176.489 193.442 185.021C180.834 198.06 165.926 207.444 148.693 213.114C141.355 215.528 133.838 217.102 126.154 217.905C119.338 218.617 112.514 218.7 105.689 218.134C92.2668 217.02 79.4695 213.569 67.329 207.712C56.7298 202.594 47.1859 195.962 38.7506 187.753C23.573 172.978 13.4521 155.304 8.44673 134.713C8.1772 133.608 7.94752 132.494 7.70646 131.384C7.69507 131.338 7.68368 131.3 7.6723 131.26C7.5679 130.79 7.42553 130.33 7.29077 129.869C7.17118 129.294 7.0497 128.719 6.95669 128.142C6.82762 127.346 6.78776 126.545 6.63591 125.758C6.66248 125.636 6.66248 125.496 6.63021 125.308C6.41192 123.994 6.26767 122.667 6.12531 121.344C6.07976 120.915 5.94499 120.572 5.66786 120.236C-2.41823 110.426 -1.79184 96.6913 7.15979 87.641C7.54132 87.2557 7.74822 86.8419 7.85831 86.3351C12.1329 66.5412 21.2155 49.2568 35.0245 34.4608C43.9059 24.9435 54.1976 17.2902 65.8314 11.4553C75.5385 6.58655 85.7524 3.25342 96.4674 1.45967C101.253 0.658656 106.064 0.161338 110.914 0.0075884C113.437 0.00569025 115.961 0.00379628 118.484 0C131.329 0.442267 143.725 3.03323 155.646 7.85451C170.015 13.6666 182.596 22.1532 193.343 33.3124C206.935 47.4232 216.117 64.0072 220.853 83.0285C222.548 89.839 223.531 96.7559 223.867 103.77C224.742 122.09 221.306 139.557 213.457 156.134ZM10.5708 106.639C12.9491 105.907 14.8568 104.527 15.7071 102.033C16.2462 100.455 16.3506 98.8154 16.3848 97.2703C16.3886 95.5468 16.4303 93.9219 15.8893 92.3579C15.4585 91.1165 14.6328 90.3212 13.3363 90.0364C13.0972 89.9833 12.8732 89.9453 12.6359 90.0725C10.4056 91.274 8.53215 92.8001 7.69697 95.3209C7.06869 97.2171 6.71184 99.1589 6.64161 101.15C6.58656 102.686 6.59415 104.223 7.69507 105.478C8.45623 106.345 9.44706 106.985 10.5708 106.639ZM12.6663 127.208C16.4151 126.752 20.1621 126.293 23.9109 125.839C27.7319 125.378 31.5528 124.909 35.3757 124.467C39.3921 124 43.4105 123.563 47.427 123.108C48.433 122.994 49.3593 122.719 50.0901 121.937C51.5441 120.384 51.639 117.286 50.2533 115.678C49.8224 115.177 49.2758 114.902 48.6209 114.824C47.6813 114.716 46.7949 114.921 45.9085 115.202C38.6443 117.514 31.437 120.001 24.2734 122.61C20.2513 124.076 16.2462 125.589 12.2335 127.081C12.2335 127.124 12.2354 127.166 12.2354 127.21C12.3778 127.21 12.5239 127.225 12.6663 127.208ZM144.838 207.53C144.623 207.101 144.35 206.696 144.069 206.301C142.587 204.21 141.091 202.127 139.715 199.96C136.818 195.391 134.704 190.553 134.478 185.044C134.447 184.3 133.952 183.996 133.21 184.27C129.645 185.591 125.963 186.447 122.229 187.096C118.326 187.777 114.443 188.601 110.432 188.377C108.56 188.271 106.681 188.14 104.817 188.074C101.541 187.956 98.2953 187.768 95.114 186.994C92.5325 186.367 89.9985 185.557 87.7511 184.074C86.0257 182.935 85.1564 181.341 85.2608 179.23C85.3158 178.108 85.6081 177.043 85.8795 175.967C87.5651 169.28 90.6629 163.305 94.909 157.899C98.2042 153.704 102.116 150.134 106.127 146.649C114.986 138.953 122.609 130.226 128.451 119.983C129.432 118.262 129.696 116.662 129.379 114.764C128.793 111.258 127.956 107.818 126.961 104.419C124.412 95.7157 121.213 87.2367 117.785 78.8488C115.346 72.8848 112.41 67.1771 108.458 62.0465C105.719 58.4893 102.416 55.6668 98.1112 54.1407C89.6512 51.1435 80.9273 49.5149 71.9757 49.103C68.0541 48.9208 64.1249 48.972 60.2053 49.2378C58.9297 49.3232 57.6466 49.4219 56.3843 49.6193C54.4539 49.9211 52.5406 50.3406 50.6121 50.6595C46.3849 51.358 42.2925 52.4893 38.3691 54.247C33.2801 56.5286 28.6088 59.5257 23.8976 62.4697C21.2212 64.142 19.3933 66.4444 18.2658 69.3581C16.6505 73.5397 15.02 77.7156 13.4028 81.8953C13.325 82.0946 13.268 82.3129 13.2661 82.5236C13.2642 82.9108 13.3933 83.0968 13.8432 82.907C14.7068 82.5426 15.5819 82.2009 16.4702 81.8991C20.7657 80.4356 25.1447 79.9896 29.6091 80.95C33.4149 81.77 36.7442 83.5828 39.7528 86.0219C46.7835 91.722 49.3859 99.1513 48.283 108C48.061 109.783 48.2584 110.202 49.9857 110.772C51.9654 111.423 53.5086 112.611 54.34 114.549C55.515 117.288 55.5245 120.075 54.2356 122.764C53.1176 125.101 51.2366 126.5 48.5886 126.756C46.7361 126.934 44.8835 127.128 43.0347 127.344C38.4734 127.882 33.9141 128.424 29.3548 128.983C24.3646 129.594 19.3781 130.231 14.3879 130.846C12.9169 131.029 12.5486 131.532 12.9074 132.989C15.0219 141.596 18.0305 149.868 22.083 157.758C27.2953 167.91 34.0299 176.918 42.3248 184.754C50.4621 192.439 59.6244 198.639 69.6314 203.617C82.0833 209.815 95.3646 212.729 109.151 213.655C112.127 213.854 115.109 213.829 117.666 213.803C119.568 213.803 121.048 213.824 122.527 213.797C123.962 213.773 125.35 213.7 126.798 213.311C131.454 212.062 136.186 211.102 140.886 210.02C141.989 209.766 143.129 209.654 144.19 209.242C145.073 208.898 145.265 208.376 144.838 207.53ZM219.057 101.203C218.861 98.5268 218.565 95.8694 218.19 93.2139C217.413 87.7454 216.121 82.4021 214.435 77.15C212.195 70.1686 209.24 63.4947 205.614 57.1189C201.404 49.7161 196.331 42.9549 190.488 36.7708C187.459 33.5648 184.226 30.5715 180.815 27.766C175.595 23.4762 169.998 19.7596 164.018 16.6277C157.591 13.2585 150.868 10.5954 143.94 8.45622C141.563 7.72164 139.134 7.19775 136.636 7.06868C131.287 5.49702 125.803 4.78142 120.253 4.59161C114.972 4.40938 109.696 4.52706 104.43 5.08512C100.336 5.51979 96.2776 6.14428 92.2668 7.05539C79.6271 9.93107 67.9307 15.0371 57.0733 22.0868C49.8718 26.7619 43.5415 32.4449 37.7958 38.8075C32.7733 44.3653 28.2823 50.3007 24.674 56.8797C24.4538 57.2802 23.8843 57.8724 24.1747 58.0869C24.5809 58.3887 25.2168 57.9977 25.6952 57.6978C25.7768 57.6447 25.8584 57.5934 25.9381 57.5384C29.7401 54.8677 33.8249 52.7152 38.1204 50.9594C46.9316 47.3529 56.1338 45.8192 65.6226 45.8192C72.1503 45.8173 78.6343 46.2976 85.0633 47.4459C89.2772 48.1995 93.4797 49.01 97.5095 50.5058C101.968 52.1609 105.823 54.7481 109.109 58.1742C112.655 61.8699 115.194 66.2451 117.495 70.7703C120.452 76.5843 122.707 82.6887 124.957 88.797C127.432 95.5164 129.858 102.247 131.507 109.229C131.834 110.605 132.194 111.973 132.578 113.507C133.329 112.372 133.98 111.385 134.637 110.402C135.267 109.458 135.947 109.323 136.913 109.946C137.813 110.525 137.891 110.982 137.238 112.009C133.954 117.155 130.645 122.286 127.386 127.449C122.483 135.218 116.559 142.061 109.437 147.899C105.317 151.28 101.416 154.934 98.1093 159.152C94.7192 163.477 91.7182 168.041 89.8675 173.266C89.1557 175.272 88.6167 177.324 88.3737 179.445C88.5293 180.684 89.2525 181.502 90.3212 182.058C92.1168 182.994 94.0302 183.594 96.0118 183.966C99.6961 184.655 103.435 184.926 107.16 185.228C111.195 185.555 115.238 185.224 119.228 184.499C121.791 184.032 124.34 183.48 126.885 182.918C128.983 182.453 131.072 182.005 132.889 180.699C139.1 176.233 145.352 171.825 151.584 167.391C152.25 166.917 152.554 166.959 153.015 167.621C153.235 167.94 153.47 168.247 153.696 168.563C154.013 169.007 153.985 169.411 153.565 169.781C153.04 170.246 152.501 170.698 152.003 171.192C150.228 172.949 148.475 174.73 146.7 176.485C144.177 178.98 141.413 181.104 137.932 182.115C137.181 182.335 137.01 182.749 137.171 183.512C137.405 184.621 137.663 185.729 137.826 186.849C138.365 190.564 139.57 194.019 141.59 197.198C143.539 200.265 145.793 203.124 147.685 206.229C148.218 207.104 148.945 207.336 149.799 207.004C153.228 205.669 156.68 204.401 159.993 202.788C165.055 200.324 169.908 197.511 174.534 194.299C180.967 189.831 186.771 184.653 192.064 178.885C195.968 174.627 199.489 170.081 202.629 165.235C207.097 158.332 210.658 150.986 213.376 143.23C215.644 136.759 217.218 130.121 218.197 123.334C218.791 119.215 219.123 115.077 219.287 110.927C219.414 107.685 219.294 104.443 219.057 101.203Z", fill: "#1D1E1D" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M88.3737 179.445C88.6167 177.324 89.1558 175.272 89.8676 173.266C91.7182 168.04 94.7192 163.477 98.1093 159.151C101.416 154.934 105.317 151.28 109.437 147.899C116.559 142.061 122.483 135.218 127.386 127.449C130.645 122.286 133.954 117.155 137.238 112.009C137.891 110.982 137.813 110.525 136.913 109.946C135.947 109.323 135.267 109.458 134.637 110.402C133.98 111.385 133.329 112.372 132.578 113.507C132.194 111.973 131.834 110.605 131.507 109.228C129.858 102.247 127.432 95.5163 124.957 88.7969C122.707 82.6887 120.452 76.5842 117.495 70.7702C115.194 66.2451 112.655 61.8699 109.109 58.1742C105.823 54.748 101.968 52.1609 97.5095 50.5057C93.4797 49.01 89.2791 48.1994 85.0634 47.4459C78.6344 46.2975 72.1503 45.8173 65.6226 45.8192C56.1338 45.8192 46.9316 47.3529 38.1185 50.9593C33.8249 52.7151 29.7401 54.8676 25.9381 57.5383C25.8584 57.5934 25.7768 57.6446 25.6952 57.6977C25.2168 57.9976 24.581 58.3887 24.1748 58.0869C23.8843 57.8724 24.4538 57.2802 24.674 56.8796C28.2823 50.3007 32.7733 44.3652 37.7958 38.8074C43.5415 32.4449 49.8718 26.7618 57.0734 22.0867C67.9307 15.037 79.6271 9.93102 92.2668 7.05534C96.2776 6.14423 100.336 5.51974 104.43 5.08507C109.696 4.52701 114.972 4.40933 120.253 4.59155C125.803 4.78137 131.287 5.49697 136.636 7.06863C136.752 7.33626 137.016 7.43497 137.232 7.57543C140.041 9.38436 142.828 11.2256 145.569 13.1332C148.11 14.9023 150.583 16.7662 152.895 18.8238C155.137 20.8207 157.339 22.8574 159.357 25.0896C160.556 26.4183 161.762 27.7432 162.895 29.1288C165.884 32.7846 168.57 36.655 170.951 40.7436C173.87 45.7584 176.303 51.0011 178.247 56.4621C180.361 62.4108 181.931 68.5001 182.839 74.7639C183.3 77.9433 183.672 81.1322 183.774 84.3325C183.902 88.2711 183.894 92.2192 183.56 96.1617C183.305 99.1683 182.971 102.164 182.476 105.132C181.658 110.041 180.502 114.875 178.945 119.606C177.036 125.416 174.589 130.991 171.569 136.317C168.177 142.3 164.13 147.803 159.503 152.876C157.432 155.145 155.249 157.31 152.941 159.351C149.638 162.27 146.168 164.96 142.463 167.357C136.845 170.996 130.862 173.868 124.518 175.99C119.911 177.529 115.198 178.643 110.385 179.346C107.323 179.794 104.248 180.052 101.165 180.173C97.9935 180.299 94.8236 180.154 91.6651 179.872C90.568 179.773 89.4481 179.748 88.3737 179.445ZM148.37 104.062C149.462 104.062 150.557 104.122 151.643 104.047C153.007 103.952 154.277 103.511 155.088 102.325C157.789 98.3673 160.467 94.3926 163.128 90.4084C163.962 89.1632 163.979 87.882 163.105 86.6083C162.367 85.5302 161.686 84.4141 160.953 83.3321C160.494 82.6507 160.114 81.9104 159.533 81.3182C158.785 80.5552 157.979 80.5741 157.276 81.3695C157.085 81.5859 156.929 81.8345 156.768 82.0756C154.118 86.0693 151.468 90.0611 148.822 94.0566C147.085 96.6799 145.352 99.3069 143.627 101.936C142.998 102.894 143.24 103.563 144.314 103.935C144.593 104.029 144.876 104.067 145.17 104.066C146.237 104.058 147.303 104.062 148.37 104.062ZM164.709 104.062C166.273 103.967 168.217 104.231 170.144 103.94C171.497 103.735 171.924 102.866 171.222 101.721C169.504 98.914 167.771 96.1161 166.013 93.3334C165.195 92.0351 163.884 92.037 163.045 93.3334C161.285 96.0573 159.535 98.7868 157.821 101.539C156.914 102.995 157.705 103.754 159.102 104.056C159.264 104.09 159.44 104.062 159.609 104.062C161.186 104.062 162.762 104.062 164.709 104.062Z", fill: "#E74242" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M117.666 213.803C115.109 213.829 112.127 213.854 109.151 213.655C95.3646 212.729 82.0833 209.815 69.6315 203.619C59.6245 198.639 50.4621 192.439 42.3248 184.754C34.0299 176.918 27.2953 167.91 22.083 157.758C18.0305 149.868 15.0219 141.596 12.9074 132.99C12.5486 131.532 12.9169 131.029 14.3879 130.847C19.3782 130.232 24.3646 129.594 29.3548 128.983C33.9141 128.424 38.4735 127.882 43.0347 127.344C44.8835 127.128 46.7361 126.934 48.5887 126.756C51.2366 126.5 53.1176 125.101 54.2356 122.764C55.5245 120.075 55.515 117.288 54.34 114.549C53.5087 112.611 51.9655 111.423 49.9857 110.772C48.2584 110.202 48.061 109.783 48.2831 108C49.3859 99.1513 46.7835 91.722 39.7528 86.0219C36.7443 83.5828 33.4149 81.7701 29.6091 80.9501C25.1447 79.9896 20.7657 80.4357 16.4702 81.8991C15.5819 82.2009 14.7068 82.5426 13.8432 82.9071C13.3933 83.0969 13.2642 82.9109 13.2661 82.5236C13.268 82.3129 13.325 82.0947 13.4028 81.8954C15.02 77.7156 16.6505 73.5397 18.2659 69.3581C19.3933 66.4445 21.2213 64.142 23.8976 62.4698C28.6088 59.5258 33.2802 56.5286 38.3691 54.247C42.2925 52.4893 46.3849 51.3581 50.6121 50.6595C52.5406 50.3407 54.4539 49.9212 56.3843 49.6194C57.6466 49.4219 58.9297 49.3232 60.2053 49.2378C64.125 48.9721 68.0541 48.9208 71.9757 49.1031C80.9273 49.515 89.6512 51.1436 98.1093 54.1407C102.416 55.6668 105.719 58.4894 108.458 62.0465C112.41 67.1772 115.346 72.8849 117.785 78.8488C121.213 87.2367 124.412 95.7157 126.961 104.419C127.956 107.818 128.793 111.258 129.379 114.764C129.696 116.662 129.432 118.262 128.451 119.983C122.609 130.226 114.986 138.953 106.127 146.649C102.116 150.134 98.2042 153.704 94.909 157.899C90.6629 163.305 87.5651 169.28 85.8796 175.967C85.6081 177.043 85.3158 178.108 85.2608 179.23C85.1564 181.341 86.0257 182.935 87.7511 184.074C89.9985 185.557 92.5325 186.367 95.114 186.994C98.2953 187.768 101.541 187.956 104.817 188.074C106.681 188.14 108.56 188.271 110.432 188.377C114.443 188.601 118.326 187.777 122.229 187.096C125.963 186.447 129.645 185.591 133.21 184.27C133.952 183.996 134.447 184.3 134.478 185.044C134.704 190.553 136.818 195.391 139.715 199.96C141.091 202.127 142.587 204.21 144.069 206.301C144.35 206.696 144.623 207.101 144.838 207.53C145.265 208.376 145.073 208.898 144.19 209.242C143.129 209.654 141.989 209.766 140.886 210.02C136.186 211.102 131.454 212.062 126.798 213.311C125.35 213.7 123.962 213.773 122.527 213.797C121.048 213.824 119.568 213.803 117.666 213.803ZM87.8802 70.9184C74.6293 71.1879 63.7491 81.9997 63.9408 95.7347C64.1326 109.418 75.4284 120.114 88.9716 119.794C102.342 119.477 113.165 108.363 112.803 94.6736C112.463 81.8346 101.923 70.7096 87.8802 70.9184Z", fill: "#F7FBFE" }),
        React__default['default'].createElement("path", { d: "M88.3737 179.445C89.448 179.748 90.5679 179.773 91.665 179.872C94.8235 180.155 97.9934 180.299 101.165 180.173C104.248 180.052 107.323 179.794 110.385 179.346C115.198 178.644 119.911 177.529 124.518 175.99C130.862 173.868 136.845 170.996 142.463 167.357C146.168 164.96 149.638 162.27 152.941 159.351C155.249 157.31 157.432 155.145 159.503 152.876C164.13 147.803 168.177 142.3 171.569 136.317C174.589 130.991 177.036 125.416 178.945 119.606C180.502 114.875 181.658 110.041 182.476 105.132C182.971 102.164 183.305 99.1684 183.56 96.1617C183.894 92.2193 183.901 88.2711 183.774 84.3325C183.672 81.1322 183.3 77.9433 182.838 74.764C181.931 68.5001 180.361 62.4108 178.247 56.4621C176.303 51.0011 173.87 45.7584 170.95 40.7435C168.57 36.6549 165.884 32.7846 162.895 29.1288C161.762 27.7432 160.556 26.4183 159.357 25.0896C157.339 22.8574 155.137 20.8206 152.895 18.8238C150.583 16.7662 148.11 14.9022 145.568 13.1332C142.828 11.2255 140.041 9.38434 137.232 7.57541C137.015 7.43495 136.752 7.33624 136.636 7.0686C139.134 7.19768 141.563 7.72156 143.94 8.45615C150.868 10.5954 157.591 13.2584 164.018 16.6276C169.998 19.7596 175.595 23.4761 180.815 27.7659C184.226 30.5714 187.459 33.5648 190.488 36.7707C196.33 42.9549 201.404 49.7161 205.614 57.1188C209.24 63.4947 212.195 70.1686 214.435 77.1499C216.12 82.4021 217.413 87.7453 218.189 93.2139C218.565 95.8694 218.861 98.5268 219.057 101.203C219.294 104.443 219.414 107.685 219.287 110.927C219.123 115.077 218.791 119.215 218.197 123.334C217.218 130.121 215.644 136.759 213.376 143.23C210.658 150.986 207.097 158.332 202.629 165.235C199.489 170.081 195.968 174.627 192.063 178.885C186.771 184.653 180.967 189.831 174.534 194.299C169.908 197.511 165.055 200.324 159.992 202.788C156.68 204.401 153.227 205.669 149.799 207.004C148.945 207.336 148.218 207.104 147.685 206.229C145.792 203.124 143.539 200.265 141.59 197.198C139.57 194.019 138.365 190.564 137.826 186.849C137.663 185.729 137.405 184.621 137.171 183.512C137.01 182.749 137.181 182.335 137.932 182.115C141.413 181.104 144.175 178.98 146.7 176.485C148.475 174.73 150.228 172.949 152.003 171.191C152.5 170.698 153.04 170.246 153.565 169.781C153.985 169.411 154.013 169.007 153.696 168.563C153.47 168.247 153.235 167.94 153.015 167.621C152.556 166.959 152.25 166.917 151.584 167.391C145.352 171.825 139.1 176.233 132.889 180.699C131.072 182.005 128.983 182.453 126.885 182.918C124.34 183.48 121.79 184.032 119.228 184.499C115.238 185.224 111.195 185.555 107.16 185.228C103.435 184.926 99.6961 184.655 96.0118 183.966C94.0301 183.594 92.1168 182.994 90.3212 182.058C89.2525 181.502 88.5293 180.684 88.3737 179.445Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { d: "M12.2335 127.081C16.2462 125.589 20.2513 124.076 24.2734 122.61C31.437 120.001 38.6443 117.514 45.9084 115.202C46.7949 114.921 47.6813 114.716 48.6209 114.824C49.2757 114.902 49.8224 115.177 50.2533 115.678C51.6389 117.286 51.544 120.384 50.09 121.937C49.3593 122.719 48.433 122.994 47.427 123.108C43.4105 123.563 39.3921 124 35.3757 124.467C31.5528 124.909 27.7318 125.378 23.9109 125.839C20.1621 126.293 16.4151 126.752 12.6663 127.208C12.5239 127.225 12.3778 127.21 12.2354 127.21C12.2354 127.166 12.2335 127.124 12.2335 127.081Z", fill: "#E74242" }),
        React__default['default'].createElement("path", { d: "M16.3848 97.2702C16.3506 98.8153 16.2462 100.455 15.7072 102.033C14.8568 104.527 12.9492 105.907 10.5708 106.639C9.4471 106.985 8.45627 106.345 7.69512 105.478C6.5942 104.223 6.58661 102.686 6.64165 101.15C6.71188 99.1589 7.06873 97.2171 7.69702 95.3208C8.5322 92.8001 10.4057 91.274 12.636 90.0725C12.8732 89.9453 13.0972 89.9833 13.3364 90.0364C14.6328 90.3211 15.4585 91.1165 15.8894 92.3578C16.4304 93.9219 16.3886 95.5467 16.3848 97.2702Z", fill: "#FEFEFE" }),
        React__default['default'].createElement("path", { d: "M148.37 104.062C147.303 104.062 146.237 104.058 145.17 104.066C144.876 104.068 144.593 104.03 144.314 103.935C143.239 103.563 142.998 102.895 143.627 101.936C145.352 99.307 147.085 96.68 148.822 94.0568C151.468 90.0612 154.118 86.0694 156.768 82.0757C156.929 81.8346 157.084 81.586 157.276 81.3696C157.979 80.5743 158.785 80.5553 159.533 81.3183C160.114 81.9106 160.494 82.6508 160.953 83.3323C161.686 84.4142 162.367 85.5303 163.105 86.6085C163.979 87.8821 163.961 89.1634 163.128 90.4085C160.467 94.3927 157.789 98.3675 155.088 102.325C154.277 103.511 153.007 103.952 151.643 104.047C150.557 104.123 149.462 104.062 148.37 104.062Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { d: "M164.709 104.062C162.762 104.062 161.186 104.062 159.609 104.062C159.44 104.062 159.263 104.09 159.102 104.056C157.705 103.754 156.914 102.995 157.821 101.539C159.535 98.7869 161.285 96.0573 163.045 93.3335C163.884 92.0371 165.195 92.0352 166.013 93.3335C167.771 96.1162 169.504 98.914 171.222 101.721C171.924 102.866 171.497 103.735 170.144 103.94C168.217 104.231 166.273 103.967 164.709 104.062Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M87.8802 70.9184C101.923 70.7096 112.463 81.8346 112.803 94.6737C113.165 108.363 102.342 119.477 88.9716 119.794C75.4284 120.114 64.1326 109.418 63.9408 95.7347C63.7491 81.9998 74.6293 71.188 87.8802 70.9184ZM83.6246 87.6315C83.6094 86.2041 83.6493 84.7692 83.2298 83.3835C82.6243 81.3924 80.8761 80.337 78.8754 80.9083C76.0965 81.7018 73.8852 83.3512 72.733 86.0371C71.5847 88.7135 71.205 91.5835 71.4784 94.4971C71.7175 97.0425 73.8093 98.5288 76.3205 97.9859C77.6986 97.6898 79.0026 97.1773 80.2098 96.4446C81.5442 95.6379 82.4553 94.4857 82.964 93.009C83.5695 91.2627 83.6018 89.45 83.6246 87.6315Z", fill: "#1C1D1C" }),
        React__default['default'].createElement("path", { d: "M83.6266 87.6334C83.6019 89.4499 83.5696 91.2626 82.9641 93.0089C82.4554 94.4857 81.5443 95.6378 80.2099 96.4445C79.0027 97.1772 77.6987 97.6897 76.3206 97.9858C73.8094 98.5287 71.7176 97.0425 71.4785 94.497C71.2051 91.5834 71.5848 88.7134 72.7331 86.037C73.8853 83.3512 76.0966 81.7017 78.8755 80.9083C80.8762 80.3369 82.6243 81.3923 83.2299 83.3834C83.6493 84.7691 83.6095 86.2041 83.6266 87.6334Z", fill: "#FEFEFE" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 2" }, props),
        React__default['default'].createElement("path", { d: "M13 2L1 2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0L13 0C13.55 0 14 0.45 14 1C14 1.55 13.55 2 13 2Z" })));
};

var Icon$Q = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 320 320" }, props),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M304.939 223.048C297.686 238.369 288.133 252.127 276.345 264.316C258.334 282.942 237.037 296.349 212.418 304.448C201.935 307.898 191.197 310.145 180.22 311.292C170.483 312.309 160.735 312.429 150.984 311.621C131.81 310.029 113.528 305.099 96.1843 296.731C81.0425 289.42 67.4085 279.946 55.358 268.218C33.6758 247.111 19.2173 221.863 12.0668 192.447C11.6817 190.869 11.3536 189.277 11.0092 187.691C10.993 187.626 10.9767 187.572 10.9604 187.515C10.8113 186.842 10.6079 186.186 10.4154 185.527C10.2445 184.705 10.071 183.884 9.93813 183.059C9.75374 181.923 9.6968 180.779 9.47987 179.654C9.51783 179.48 9.51783 179.279 9.47173 179.011C9.15989 177.135 8.95382 175.239 8.75044 173.349C8.68536 172.736 8.49284 172.245 8.09694 171.766C-3.45461 157.752 -2.55978 138.13 10.2283 125.201C10.7733 124.651 11.0689 124.06 11.2262 123.336C17.3328 95.0589 30.3079 70.3668 50.035 49.2297C62.7228 35.6335 77.4252 24.7002 94.0448 16.3647C107.912 9.40935 122.503 4.64774 137.811 2.08524C144.647 0.940937 151.521 0.230483 158.449 0.0108406C162.053 0.00812893 165.659 0.00542326 169.263 0C187.612 0.63181 205.322 4.33319 222.351 11.2207C242.878 19.5237 260.851 31.6474 276.204 47.5891C295.622 67.7474 308.738 91.4389 315.504 118.612C317.925 128.341 319.33 138.223 319.81 148.242C321.06 174.415 316.152 199.367 304.939 223.048ZM15.1011 152.342C18.4988 151.295 21.2239 149.324 22.4388 145.761C23.2089 143.508 23.358 141.165 23.4068 138.958C23.4122 136.495 23.4719 134.174 22.6991 131.94C22.0835 130.166 20.904 129.03 19.0519 128.623C18.7103 128.548 18.3903 128.493 18.0513 128.675C14.8652 130.391 12.1888 132.572 10.9957 136.173C10.0981 138.882 9.58834 141.656 9.48801 144.5C9.40937 146.694 9.42021 148.89 10.993 150.683C12.0803 151.922 13.4958 152.836 15.1011 152.342ZM18.0947 181.725C23.4502 181.075 28.803 180.418 34.1584 179.77C39.6169 179.111 45.0755 178.442 50.5367 177.81C56.2745 177.143 62.015 176.519 67.7528 175.868C69.19 175.706 70.5133 175.312 71.5573 174.195C73.6344 171.977 73.7699 167.552 71.7904 165.255C71.1749 164.539 70.394 164.146 69.4584 164.035C68.1162 163.88 66.8499 164.173 65.5835 164.574C55.2061 167.877 44.91 171.429 34.6763 175.158C28.9304 177.251 23.2089 179.412 17.4765 181.544C17.4765 181.606 17.4792 181.666 17.4792 181.728C17.6825 181.728 17.8914 181.75 18.0947 181.725ZM206.911 296.471C206.605 295.858 206.214 295.28 205.813 294.716C203.695 291.728 201.558 288.753 199.592 285.657C195.454 279.13 192.434 272.218 192.111 264.349C192.068 263.286 191.36 262.852 190.3 263.242C185.207 265.13 179.947 266.353 174.613 267.28C169.038 268.253 163.49 269.43 157.76 269.11C155.086 268.959 152.402 268.771 149.739 268.676C145.059 268.508 140.422 268.24 135.877 267.134C132.189 266.239 128.569 265.081 125.359 262.963C122.894 261.336 121.652 259.058 121.801 256.043C121.88 254.44 122.297 252.919 122.685 251.382C125.093 241.829 129.518 233.292 135.584 225.57C140.292 219.577 145.88 214.476 151.61 209.498C164.265 198.505 175.155 186.037 183.502 171.405C184.903 168.945 185.28 166.66 184.828 163.948C183.99 158.94 182.794 154.026 181.373 149.17C177.731 136.737 173.162 124.624 168.265 112.641C164.78 104.121 160.586 95.9673 154.94 88.6378C151.027 83.5562 146.309 79.524 140.159 77.3438C128.073 73.0622 115.61 70.7356 102.822 70.1472C97.2201 69.8869 91.6071 69.9601 86.0075 70.3397C84.1853 70.4617 82.3523 70.6027 80.549 70.8847C77.7913 71.3159 75.058 71.9152 72.303 72.3707C66.2641 73.3686 60.4179 74.9847 54.8129 77.4957C47.543 80.7551 40.8697 85.0367 34.1394 89.2425C30.316 91.6314 27.7047 94.9206 26.094 99.083C23.7864 105.057 21.4571 111.022 19.1468 116.993C19.0357 117.278 18.9543 117.59 18.9516 117.891C18.9489 118.444 19.1333 118.71 19.7759 118.439C21.0097 117.918 22.2598 117.43 23.5288 116.999C29.6653 114.908 35.921 114.271 42.2988 115.643C47.7356 116.814 52.4918 119.404 56.7897 122.888C66.8336 131.031 70.5512 141.645 68.9758 154.286C68.6585 156.833 68.9405 157.432 71.4081 158.245C74.2363 159.175 76.4409 160.873 77.6286 163.641C79.3071 167.554 79.3207 171.535 77.4795 175.377C75.8823 178.715 73.1951 180.714 69.4124 181.08C66.7658 181.335 64.1192 181.611 61.4781 181.921C54.9621 182.688 48.4487 183.464 41.9354 184.261C34.8065 185.134 27.6831 186.045 20.5542 186.924C18.4527 187.184 17.9266 187.902 18.4391 189.985C21.4599 202.28 25.7578 214.097 31.5471 225.369C38.9933 239.871 48.6141 252.74 60.464 263.934C72.0887 274.913 85.1778 283.769 99.4735 290.882C117.262 299.736 136.235 303.898 155.93 305.221C160.182 305.506 164.441 305.471 168.094 305.433C170.811 305.433 172.926 305.462 175.039 305.425C177.089 305.389 179.071 305.286 181.14 304.73C187.791 302.946 194.551 301.574 201.265 300.028C202.841 299.665 204.471 299.505 205.986 298.917C207.247 298.426 207.521 297.68 206.911 296.471ZM312.939 144.576C312.659 140.753 312.236 136.956 311.699 133.163C310.59 125.351 308.744 117.717 306.336 110.214C303.136 100.241 298.914 90.7068 293.735 81.5984C287.72 71.023 280.472 61.3642 272.126 52.5297C267.798 47.9498 263.18 43.6735 258.307 39.6657C250.85 33.5374 242.854 28.2281 234.312 23.7539C225.131 18.9407 215.526 15.1363 205.628 12.0803C202.233 11.0309 198.763 10.2825 195.194 10.0981C187.553 7.85288 179.719 6.8306 171.79 6.55944C164.246 6.29912 156.708 6.46723 149.186 7.26445C143.337 7.88542 137.539 8.77754 131.81 10.0791C113.753 14.1872 97.0439 21.4815 81.5333 31.5525C71.2454 38.2313 62.2021 46.3499 53.994 55.4393C46.819 63.3789 40.4033 71.8582 35.2485 81.2567C34.934 81.8289 34.1205 82.6749 34.5353 82.9813C35.1156 83.4125 36.024 82.8539 36.7074 82.4254C36.824 82.3495 36.9406 82.2763 37.0544 82.1977C42.4858 78.3824 48.3213 75.3074 54.4577 72.7991C67.0451 67.647 80.1911 65.4561 93.7465 65.4561C103.072 65.4533 112.335 66.1394 121.519 67.7799C127.539 68.8564 133.542 70.0143 139.299 72.1511C145.669 74.5156 151.176 78.2116 155.87 83.1061C160.935 88.3856 164.564 94.6359 167.85 101.1C172.075 109.406 175.296 118.127 178.509 126.853C182.045 136.452 185.511 146.067 187.867 156.041C188.334 158.007 188.849 159.962 189.397 162.153C190.47 160.531 191.401 159.121 192.339 157.717C193.239 156.369 194.21 156.176 195.59 157.066C196.875 157.893 196.986 158.546 196.054 160.013C191.363 167.365 186.636 174.694 181.98 182.07C174.976 193.168 166.513 202.944 156.339 211.285C150.452 216.114 144.88 221.334 140.156 227.359C135.313 233.539 131.026 240.058 128.382 247.523C127.365 250.389 126.595 253.321 126.248 256.349C126.47 258.12 127.504 259.289 129.03 260.083C131.595 261.42 134.329 262.277 137.16 262.809C142.423 263.793 147.765 264.181 153.085 264.612C158.85 265.078 164.626 264.606 170.326 263.571C173.986 262.903 177.628 262.114 181.264 261.312C184.261 260.647 187.246 260.007 189.841 258.142C198.714 251.761 207.646 245.465 216.548 239.131C217.5 238.453 217.934 238.512 218.593 239.459C218.907 239.914 219.244 240.354 219.566 240.804C220.019 241.438 219.978 242.016 219.379 242.545C218.628 243.209 217.858 243.854 217.147 244.559C214.612 247.07 212.107 249.614 209.571 252.122C205.967 255.685 202.019 258.719 197.046 260.165C195.972 260.479 195.728 261.07 195.959 262.16C196.292 263.744 196.661 265.328 196.894 266.928C197.664 272.234 199.386 277.169 202.271 281.711C205.056 286.093 208.275 290.177 210.979 294.613C211.74 295.863 212.779 296.194 213.999 295.72C218.896 293.813 223.829 292.002 228.561 289.697C235.793 286.177 242.726 282.159 249.335 277.571C258.524 271.187 266.816 263.79 274.376 255.55C279.954 249.467 284.984 242.973 289.469 236.05C295.853 226.188 300.94 215.694 304.823 204.614C308.063 195.37 310.311 185.888 311.71 176.191C312.559 170.307 313.033 164.395 313.267 158.468C313.448 153.836 313.277 149.205 312.939 144.576Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M126.248 256.349C126.595 253.32 127.365 250.389 128.382 247.523C131.026 240.058 135.313 233.539 140.156 227.359C144.88 221.334 150.452 216.114 156.339 211.285C166.513 202.944 174.976 193.168 181.98 182.07C186.636 174.694 191.363 167.364 196.054 160.013C196.987 158.546 196.875 157.893 195.59 157.066C194.21 156.176 193.239 156.369 192.339 157.716C191.401 159.121 190.471 160.531 189.397 162.153C188.849 159.962 188.334 158.007 187.867 156.041C185.511 146.067 182.045 136.452 178.51 126.853C175.296 118.127 172.075 109.406 167.85 101.1C164.564 94.6357 160.935 88.3854 155.87 83.1059C151.176 78.2114 145.669 74.5154 139.299 72.1509C133.543 70.0141 127.542 68.8563 121.519 67.7797C112.335 66.1392 103.072 65.4532 93.7466 65.4559C80.1912 65.4559 67.0452 67.6469 54.4551 72.799C48.3214 75.3072 42.4859 78.3822 37.0545 82.1975C36.9406 82.2761 36.824 82.3493 36.7074 82.4252C36.0241 82.8537 35.1157 83.4123 34.5354 82.9811C34.1206 82.6747 34.934 81.8287 35.2486 81.2565C40.4034 71.858 46.8191 63.3788 53.9941 55.4391C62.2022 46.3497 71.2455 38.2311 81.5334 31.5524C97.044 21.4814 113.753 14.1871 131.81 10.079C137.539 8.77738 143.337 7.88525 149.186 7.26428C156.708 6.46707 164.246 6.29895 171.79 6.55927C179.719 6.83043 187.553 7.85271 195.194 10.0979C195.36 10.4803 195.737 10.6213 196.046 10.822C200.059 13.4061 204.04 16.0364 207.955 18.7616C211.586 21.2888 215.119 23.9517 218.422 26.8911C221.624 29.7437 224.77 32.6533 227.652 35.8422C229.366 37.7403 231.088 39.633 232.707 41.6125C236.978 46.8351 240.815 52.3641 244.215 58.205C248.386 65.3691 251.862 72.8586 254.639 80.66C257.659 89.1582 259.902 97.8571 261.198 106.806C261.857 111.348 262.388 115.903 262.535 120.475C262.717 126.101 262.706 131.742 262.228 137.374C261.865 141.669 261.388 145.948 260.68 150.189C259.511 157.201 257.86 164.108 255.636 170.865C252.909 179.165 249.413 187.129 245.099 194.738C240.253 203.285 234.472 211.146 227.861 218.395C224.903 221.635 221.784 224.729 218.487 227.644C213.769 231.814 208.812 235.657 203.519 239.082C195.492 244.28 186.945 248.382 177.883 251.414C171.302 253.613 164.569 255.205 157.692 256.208C153.318 256.848 148.926 257.217 144.522 257.39C139.991 257.569 135.462 257.363 130.95 256.959C129.383 256.818 127.783 256.783 126.248 256.349ZM211.957 148.66C213.517 148.66 215.081 148.746 216.632 148.638C218.582 148.502 220.396 147.873 221.554 146.178C225.413 140.525 229.239 134.846 233.04 129.155C234.231 127.376 234.255 125.546 233.008 123.726C231.953 122.186 230.98 120.591 229.933 119.046C229.277 118.072 228.734 117.015 227.905 116.169C226.836 115.079 225.684 115.106 224.68 116.242C224.407 116.551 224.184 116.906 223.954 117.251C220.168 122.956 216.383 128.659 212.603 134.367C210.122 138.114 207.646 141.867 205.181 145.622C204.284 146.992 204.628 147.946 206.163 148.478C206.561 148.613 206.965 148.668 207.386 148.665C208.91 148.654 210.434 148.66 211.957 148.66ZM235.299 148.66C237.534 148.524 240.31 148.901 243.063 148.486C244.996 148.193 245.606 146.951 244.603 145.316C242.149 141.306 239.673 137.309 237.162 133.333C235.993 131.479 234.12 131.481 232.921 133.333C230.407 137.225 227.907 141.124 225.459 145.056C224.163 147.136 225.293 148.22 227.289 148.651C227.52 148.7 227.772 148.66 228.013 148.66C230.266 148.66 232.517 148.66 235.299 148.66Z", fill: "#FBD2D2" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M168.094 305.433C164.441 305.471 160.182 305.506 155.93 305.221C136.235 303.898 117.262 299.736 99.4735 290.885C85.1778 283.769 72.0888 274.913 60.464 263.934C48.6142 252.74 38.9933 239.871 31.5472 225.369C25.7578 214.097 21.4599 202.28 18.4391 189.985C17.9266 187.903 18.4527 187.184 20.5542 186.924C27.6831 186.045 34.8065 185.134 41.9354 184.261C48.4488 183.464 54.9621 182.688 61.4781 181.921C64.1193 181.612 66.7658 181.335 69.4124 181.08C73.1951 180.714 75.8823 178.716 77.4795 175.377C79.3207 171.535 79.3071 167.554 77.6286 163.642C76.4409 160.873 74.2364 159.176 71.4081 158.245C68.9406 157.432 68.6585 156.833 68.9758 154.286C70.5513 141.645 66.8336 131.031 56.7897 122.888C52.4918 119.404 47.7356 116.814 42.2988 115.643C35.921 114.271 29.6653 114.908 23.5289 116.999C22.2598 117.43 21.0098 117.918 19.776 118.439C19.1333 118.71 18.9489 118.444 18.9516 117.891C18.9543 117.59 19.0357 117.278 19.1469 116.993C21.4572 111.022 23.7865 105.057 26.0941 99.0831C27.7048 94.9207 30.3161 91.6315 34.1395 89.2426C40.8697 85.0368 47.5431 80.7552 54.813 77.4958C60.4179 74.9848 66.2642 73.3687 72.303 72.3708C75.058 71.9152 77.7913 71.316 80.5491 70.8848C82.3523 70.6028 84.1854 70.4618 86.0076 70.3398C91.6071 69.9601 97.2202 69.8869 102.822 70.1473C115.61 70.7357 128.073 73.0623 140.156 77.3439C146.309 79.5241 151.027 83.5563 154.94 88.6379C160.586 95.9674 164.78 104.121 168.265 112.641C173.162 124.624 177.731 136.737 181.373 149.17C182.794 154.026 183.99 158.94 184.828 163.948C185.28 166.66 184.903 168.946 183.502 171.405C175.155 186.037 164.265 198.505 151.61 209.498C145.88 214.476 140.292 219.577 135.584 225.57C129.518 233.292 125.093 241.829 122.685 251.382C122.297 252.919 121.88 254.44 121.801 256.043C121.652 259.058 122.894 261.336 125.359 262.963C128.569 265.081 132.189 266.239 135.877 267.134C140.422 268.24 145.059 268.508 149.739 268.677C152.402 268.771 155.086 268.959 157.76 269.11C163.49 269.43 169.038 268.254 174.613 267.28C179.947 266.353 185.207 265.13 190.3 263.242C191.36 262.852 192.068 263.286 192.111 264.349C192.434 272.218 195.454 279.13 199.592 285.657C201.558 288.753 203.695 291.728 205.813 294.716C206.214 295.28 206.605 295.858 206.911 296.471C207.521 297.68 207.247 298.426 205.986 298.917C204.471 299.505 202.841 299.665 201.265 300.028C194.551 301.574 187.791 302.946 181.14 304.73C179.071 305.286 177.089 305.389 175.039 305.425C172.926 305.463 170.811 305.433 168.094 305.433ZM125.543 101.312C106.613 101.697 91.0702 117.143 91.3441 136.764C91.6179 156.312 107.755 171.592 127.102 171.134C146.203 170.681 161.665 154.804 161.147 135.248C160.661 116.907 145.604 101.014 125.543 101.312Z", fill: "#F7FBFE" }),
        React__default['default'].createElement("path", { d: "M126.248 256.349C127.783 256.783 129.383 256.819 130.95 256.96C135.462 257.364 139.991 257.57 144.522 257.391C148.925 257.217 153.318 256.848 157.692 256.208C164.569 255.205 171.302 253.613 177.883 251.414C186.945 248.383 195.492 244.28 203.519 239.082C208.812 235.657 213.769 231.815 218.487 227.644C221.784 224.729 224.903 221.635 227.861 218.395C234.472 211.147 240.253 203.286 245.099 194.738C249.413 187.13 252.908 179.166 255.636 170.865C257.86 164.108 259.511 157.201 260.68 150.189C261.388 145.948 261.865 141.669 262.228 137.374C262.705 131.742 262.716 126.102 262.535 120.475C262.388 115.903 261.857 111.348 261.198 106.806C259.902 97.8573 257.659 89.1583 254.638 80.6601C251.862 72.8587 248.385 65.3692 244.215 58.2051C240.814 52.3642 236.977 46.8352 232.707 41.6126C231.088 39.6331 229.366 37.7404 227.652 35.8423C224.77 32.6534 221.624 29.7438 218.422 26.8912C215.119 23.9517 211.586 21.2889 207.955 18.7617C204.039 16.0365 200.059 13.4062 196.045 10.822C195.736 10.6214 195.359 10.4804 195.194 10.098C198.762 10.2824 202.233 11.0308 205.628 12.0802C215.526 15.1362 225.13 18.9406 234.312 23.7538C242.854 28.228 250.85 33.5374 258.307 39.6657C263.18 43.6734 267.798 47.9497 272.126 52.5296C280.472 61.3641 287.72 71.023 293.735 81.5983C298.914 90.7067 303.136 100.241 306.336 110.214C308.744 117.717 310.59 125.351 311.699 133.163C312.236 136.956 312.659 140.753 312.938 144.576C313.277 149.205 313.448 153.836 313.267 158.468C313.033 164.395 312.559 170.307 311.71 176.191C310.311 185.888 308.063 195.37 304.823 204.614C300.939 215.694 295.852 226.188 289.469 236.05C284.984 242.973 279.954 249.467 274.376 255.55C266.816 263.79 258.524 271.187 249.334 277.571C242.726 282.159 235.793 286.177 228.561 289.697C223.829 292.002 218.896 293.813 213.999 295.72C212.779 296.194 211.74 295.863 210.978 294.613C208.275 290.177 205.056 286.093 202.271 281.711C199.386 277.169 197.664 272.234 196.894 266.928C196.661 265.328 196.292 263.744 195.959 262.16C195.728 261.07 195.972 260.479 197.046 260.165C202.019 258.719 205.965 255.685 209.571 252.122C212.106 249.614 214.612 247.07 217.147 244.559C217.858 243.854 218.628 243.209 219.379 242.545C219.978 242.016 220.019 241.438 219.566 240.804C219.243 240.354 218.907 239.914 218.593 239.459C217.936 238.512 217.5 238.453 216.548 239.131C207.646 245.465 198.714 251.761 189.841 258.142C187.246 260.007 184.261 260.647 181.264 261.312C177.628 262.114 173.986 262.903 170.326 263.571C164.626 264.606 158.85 265.078 153.085 264.612C147.765 264.181 142.423 263.793 137.16 262.809C134.329 262.277 131.595 261.42 129.03 260.083C127.504 259.289 126.47 258.12 126.248 256.349Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M17.4764 181.544C23.2088 179.412 28.9304 177.251 34.6763 175.158C44.91 171.429 55.2061 167.877 65.5835 164.574C66.8498 164.173 68.1161 163.88 69.4584 164.035C70.3939 164.146 71.1748 164.539 71.7904 165.255C73.7699 167.552 73.6343 171.977 71.5572 174.195C70.5132 175.312 69.1899 175.706 67.7528 175.868C62.015 176.519 56.2744 177.143 50.5366 177.81C45.0754 178.442 39.6169 179.111 34.1584 179.77C28.8029 180.418 23.4502 181.075 18.0947 181.725C17.8913 181.75 17.6825 181.728 17.4791 181.728C17.4791 181.666 17.4764 181.606 17.4764 181.544Z", fill: "#FBD2D2" }),
        React__default['default'].createElement("path", { d: "M23.4069 138.958C23.3581 141.165 23.2089 143.508 22.4388 145.761C21.224 149.324 18.4988 151.296 15.1011 152.342C13.4959 152.836 12.0804 151.922 10.993 150.683C9.42028 148.89 9.40944 146.694 9.48807 144.5C9.5884 141.656 10.0982 138.882 10.9957 136.173C12.1889 132.572 14.8652 130.392 18.0514 128.675C18.3904 128.493 18.7103 128.548 19.052 128.624C20.904 129.03 22.0836 130.166 22.6991 131.94C23.4719 134.174 23.4123 136.495 23.4069 138.958Z", fill: "#FEFEFE" }),
        React__default['default'].createElement("path", { d: "M211.957 148.66C210.433 148.66 208.909 148.654 207.386 148.665C206.965 148.668 206.561 148.614 206.163 148.478C204.628 147.947 204.283 146.992 205.181 145.623C207.646 141.867 210.122 138.114 212.603 134.367C216.383 128.659 220.168 122.956 223.954 117.251C224.184 116.907 224.406 116.551 224.68 116.242C225.684 115.106 226.836 115.079 227.904 116.169C228.734 117.015 229.276 118.073 229.933 119.046C230.979 120.592 231.953 122.186 233.008 123.726C234.255 125.546 234.231 127.376 233.04 129.155C229.239 134.847 225.412 140.525 221.554 146.179C220.396 147.873 218.582 148.503 216.632 148.638C215.081 148.747 213.517 148.66 211.957 148.66Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M235.299 148.66C232.517 148.66 230.266 148.66 228.013 148.66C227.771 148.66 227.519 148.7 227.289 148.652C225.293 148.22 224.162 147.136 225.458 145.056C227.907 141.124 230.407 137.225 232.921 133.334C234.119 131.482 235.993 131.479 237.162 133.334C239.673 137.309 242.148 141.306 244.602 145.316C245.606 146.951 244.996 148.193 243.062 148.486C240.31 148.901 237.533 148.524 235.299 148.66Z", fill: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M119.964 125.194L119.964 125.194C119.931 127.781 119.888 130.45 118.993 133.033C118.229 135.249 116.854 136.99 114.845 138.205C113.071 139.282 111.156 140.034 109.134 140.469M119.964 125.194L103.445 122.713C101.768 126.621 101.217 130.806 101.614 135.042L101.614 135.043C101.797 136.991 102.696 138.568 104.062 139.548C105.427 140.528 107.218 140.883 109.134 140.469M119.964 125.194L119.964 125.183M119.964 125.194L119.964 125.183M109.134 140.469L109.029 139.98L109.135 140.468C109.135 140.469 109.135 140.469 109.134 140.469ZM119.964 125.183C119.961 124.966 119.96 124.748 119.959 124.528C119.947 122.715 119.936 120.816 119.378 118.974L119.378 118.974M119.964 125.183L119.378 118.974M119.378 118.974C118.913 117.446 118 116.247 116.787 115.546M119.378 118.974L116.787 115.546M116.787 115.546C115.571 114.842 114.091 114.66 112.542 115.102L116.787 115.546ZM125.552 101.812C145.326 101.519 160.169 117.182 160.647 135.261C161.158 154.538 145.917 170.187 127.09 170.634C108.018 171.086 92.1139 156.024 91.844 136.757C91.574 117.416 106.892 102.192 125.552 101.812ZM112.542 115.102C108.457 116.269 105.161 118.712 103.445 122.713L112.542 115.102Z", fill: "#F4EDED", stroke: "#F4EDED" }),
        React__default['default'].createElement("path", { d: "M119.467 125.191C119.431 127.786 119.385 130.375 118.52 132.87C117.793 134.98 116.492 136.625 114.586 137.778C112.861 138.825 110.998 139.557 109.029 139.98C105.442 140.755 102.454 138.632 102.112 134.996C101.722 130.833 102.264 126.733 103.904 122.91C105.55 119.073 108.709 116.717 112.679 115.583C115.537 114.767 118.035 116.275 118.9 119.119C119.499 121.099 119.442 123.149 119.467 125.191Z", fill: "#FEFEFE" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 224 224" }, props),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M213.457 156.134C208.38 166.858 201.693 176.489 193.442 185.021C180.834 198.06 165.926 207.444 148.693 213.114C141.355 215.528 133.838 217.102 126.154 217.905C119.338 218.617 112.514 218.7 105.689 218.134C92.2668 217.02 79.4695 213.569 67.329 207.712C56.7298 202.594 47.1859 195.962 38.7506 187.753C23.573 172.978 13.4521 155.304 8.44673 134.713C8.1772 133.608 7.94752 132.494 7.70646 131.384C7.69507 131.338 7.68368 131.3 7.6723 131.26C7.5679 130.79 7.42553 130.33 7.29077 129.869C7.17118 129.294 7.0497 128.719 6.95669 128.142C6.82762 127.346 6.78776 126.545 6.63591 125.758C6.66248 125.636 6.66248 125.496 6.63021 125.308C6.41192 123.994 6.26767 122.667 6.12531 121.344C6.07976 120.915 5.94499 120.572 5.66786 120.236C-2.41823 110.426 -1.79184 96.6913 7.15979 87.641C7.54132 87.2557 7.74822 86.8419 7.85831 86.3351C12.1329 66.5412 21.2155 49.2568 35.0245 34.4608C43.9059 24.9435 54.1976 17.2902 65.8314 11.4553C75.5385 6.58655 85.7524 3.25342 96.4674 1.45967C101.253 0.658656 106.064 0.161338 110.914 0.0075884C113.437 0.00569025 115.961 0.00379628 118.484 0C131.329 0.442267 143.725 3.03323 155.646 7.85451C170.015 13.6666 182.596 22.1532 193.343 33.3124C206.935 47.4232 216.117 64.0072 220.853 83.0285C222.548 89.839 223.531 96.7559 223.867 103.77C224.742 122.09 221.306 139.557 213.457 156.134ZM10.5708 106.639C12.9491 105.907 14.8568 104.527 15.7071 102.033C16.2462 100.455 16.3506 98.8154 16.3848 97.2703C16.3886 95.5468 16.4303 93.9219 15.8893 92.3579C15.4585 91.1165 14.6328 90.3212 13.3363 90.0364C13.0972 89.9833 12.8732 89.9453 12.6359 90.0725C10.4056 91.274 8.53215 92.8001 7.69697 95.3209C7.06869 97.2171 6.71184 99.1589 6.64161 101.15C6.58656 102.686 6.59415 104.223 7.69507 105.478C8.45623 106.345 9.44706 106.985 10.5708 106.639ZM12.6663 127.208C16.4151 126.752 20.1621 126.293 23.9109 125.839C27.7319 125.378 31.5528 124.909 35.3757 124.467C39.3921 124 43.4105 123.563 47.427 123.108C48.433 122.994 49.3593 122.719 50.0901 121.937C51.5441 120.384 51.639 117.286 50.2533 115.678C49.8224 115.177 49.2758 114.902 48.6209 114.824C47.6813 114.716 46.7949 114.921 45.9085 115.202C38.6443 117.514 31.437 120.001 24.2734 122.61C20.2513 124.076 16.2462 125.589 12.2335 127.081C12.2335 127.124 12.2354 127.166 12.2354 127.21C12.3778 127.21 12.5239 127.225 12.6663 127.208ZM144.838 207.53C144.623 207.101 144.35 206.696 144.069 206.301C142.587 204.21 141.091 202.127 139.715 199.96C136.818 195.391 134.704 190.553 134.478 185.044C134.447 184.3 133.952 183.996 133.21 184.27C129.645 185.591 125.963 186.447 122.229 187.096C118.326 187.777 114.443 188.601 110.432 188.377C108.56 188.271 106.681 188.14 104.817 188.074C101.541 187.956 98.2953 187.768 95.114 186.994C92.5325 186.367 89.9985 185.557 87.7511 184.074C86.0257 182.935 85.1564 181.341 85.2608 179.23C85.3158 178.108 85.6081 177.043 85.8795 175.967C87.5651 169.28 90.6629 163.305 94.909 157.899C98.2042 153.704 102.116 150.134 106.127 146.649C114.986 138.953 122.609 130.226 128.451 119.983C129.432 118.262 129.696 116.662 129.379 114.764C128.793 111.258 127.956 107.818 126.961 104.419C124.412 95.7157 121.213 87.2367 117.785 78.8488C115.346 72.8848 112.41 67.1771 108.458 62.0465C105.719 58.4893 102.416 55.6668 98.1112 54.1407C89.6512 51.1435 80.9273 49.5149 71.9757 49.103C68.0541 48.9208 64.1249 48.972 60.2053 49.2378C58.9297 49.3232 57.6466 49.4219 56.3843 49.6193C54.4539 49.9211 52.5406 50.3406 50.6121 50.6595C46.3849 51.358 42.2925 52.4893 38.3691 54.247C33.2801 56.5286 28.6088 59.5257 23.8976 62.4697C21.2212 64.142 19.3933 66.4444 18.2658 69.3581C16.6505 73.5397 15.02 77.7156 13.4028 81.8953C13.325 82.0946 13.268 82.3129 13.2661 82.5236C13.2642 82.9108 13.3933 83.0968 13.8432 82.907C14.7068 82.5426 15.5819 82.2009 16.4702 81.8991C20.7657 80.4356 25.1447 79.9896 29.6091 80.95C33.4149 81.77 36.7442 83.5828 39.7528 86.0219C46.7835 91.722 49.3859 99.1513 48.283 108C48.061 109.783 48.2584 110.202 49.9857 110.772C51.9654 111.423 53.5086 112.611 54.34 114.549C55.515 117.288 55.5245 120.075 54.2356 122.764C53.1176 125.101 51.2366 126.5 48.5886 126.756C46.7361 126.934 44.8835 127.128 43.0347 127.344C38.4734 127.882 33.9141 128.424 29.3548 128.983C24.3646 129.594 19.3781 130.231 14.3879 130.846C12.9169 131.029 12.5486 131.532 12.9074 132.989C15.0219 141.596 18.0305 149.868 22.083 157.758C27.2953 167.91 34.0299 176.918 42.3248 184.754C50.4621 192.439 59.6244 198.639 69.6314 203.617C82.0833 209.815 95.3646 212.729 109.151 213.655C112.127 213.854 115.109 213.829 117.666 213.803C119.568 213.803 121.048 213.824 122.527 213.797C123.962 213.773 125.35 213.7 126.798 213.311C131.454 212.062 136.186 211.102 140.886 210.02C141.989 209.766 143.129 209.654 144.19 209.242C145.073 208.898 145.265 208.376 144.838 207.53ZM219.057 101.203C218.861 98.5268 218.565 95.8694 218.19 93.2139C217.413 87.7454 216.121 82.4021 214.435 77.15C212.195 70.1686 209.24 63.4947 205.614 57.1189C201.404 49.7161 196.331 42.9549 190.488 36.7708C187.459 33.5648 184.226 30.5715 180.815 27.766C175.595 23.4762 169.998 19.7596 164.018 16.6277C157.591 13.2585 150.868 10.5954 143.94 8.45622C141.563 7.72164 139.134 7.19775 136.636 7.06868C131.287 5.49702 125.803 4.78142 120.253 4.59161C114.972 4.40938 109.696 4.52706 104.43 5.08512C100.336 5.51979 96.2776 6.14428 92.2668 7.05539C79.6271 9.93107 67.9307 15.0371 57.0733 22.0868C49.8718 26.7619 43.5415 32.4449 37.7958 38.8075C32.7733 44.3653 28.2823 50.3007 24.674 56.8797C24.4538 57.2802 23.8843 57.8724 24.1747 58.0869C24.5809 58.3887 25.2168 57.9977 25.6952 57.6978C25.7768 57.6447 25.8584 57.5934 25.9381 57.5384C29.7401 54.8677 33.8249 52.7152 38.1204 50.9594C46.9316 47.3529 56.1338 45.8192 65.6226 45.8192C72.1503 45.8173 78.6343 46.2976 85.0633 47.4459C89.2772 48.1995 93.4797 49.01 97.5095 50.5058C101.968 52.1609 105.823 54.7481 109.109 58.1742C112.655 61.8699 115.194 66.2451 117.495 70.7703C120.452 76.5843 122.707 82.6887 124.957 88.797C127.432 95.5164 129.858 102.247 131.507 109.229C131.834 110.605 132.194 111.973 132.578 113.507C133.329 112.372 133.98 111.385 134.637 110.402C135.267 109.458 135.947 109.323 136.913 109.946C137.813 110.525 137.891 110.982 137.238 112.009C133.954 117.155 130.645 122.286 127.386 127.449C122.483 135.218 116.559 142.061 109.437 147.899C105.317 151.28 101.416 154.934 98.1093 159.152C94.7192 163.477 91.7182 168.041 89.8675 173.266C89.1557 175.272 88.6167 177.324 88.3737 179.445C88.5293 180.684 89.2525 181.502 90.3212 182.058C92.1168 182.994 94.0302 183.594 96.0118 183.966C99.6961 184.655 103.435 184.926 107.16 185.228C111.195 185.555 115.238 185.224 119.228 184.499C121.791 184.032 124.34 183.48 126.885 182.918C128.983 182.453 131.072 182.005 132.889 180.699C139.1 176.233 145.352 171.825 151.584 167.391C152.25 166.917 152.554 166.959 153.015 167.621C153.235 167.94 153.47 168.247 153.696 168.563C154.013 169.007 153.985 169.411 153.565 169.781C153.04 170.246 152.501 170.698 152.003 171.192C150.228 172.949 148.475 174.73 146.7 176.485C144.177 178.98 141.413 181.104 137.932 182.115C137.181 182.335 137.01 182.749 137.171 183.512C137.405 184.621 137.663 185.729 137.826 186.849C138.365 190.564 139.57 194.019 141.59 197.198C143.539 200.265 145.793 203.124 147.685 206.229C148.218 207.104 148.945 207.336 149.799 207.004C153.228 205.669 156.68 204.401 159.993 202.788C165.055 200.324 169.908 197.511 174.534 194.299C180.967 189.831 186.771 184.653 192.064 178.885C195.968 174.627 199.489 170.081 202.629 165.235C207.097 158.332 210.658 150.986 213.376 143.23C215.644 136.759 217.218 130.121 218.197 123.334C218.791 119.215 219.123 115.077 219.287 110.927C219.414 107.685 219.294 104.443 219.057 101.203Z", fill: "#1D1E1D" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M88.3737 179.445C88.6167 177.324 89.1558 175.272 89.8676 173.266C91.7182 168.04 94.7192 163.477 98.1093 159.151C101.416 154.934 105.317 151.28 109.437 147.899C116.559 142.061 122.483 135.218 127.386 127.449C130.645 122.286 133.954 117.155 137.238 112.009C137.891 110.982 137.813 110.525 136.913 109.946C135.947 109.323 135.267 109.458 134.637 110.402C133.98 111.385 133.329 112.372 132.578 113.507C132.194 111.973 131.834 110.605 131.507 109.228C129.858 102.247 127.432 95.5163 124.957 88.7969C122.707 82.6887 120.452 76.5842 117.495 70.7702C115.194 66.2451 112.655 61.8699 109.109 58.1742C105.823 54.748 101.968 52.1609 97.5095 50.5057C93.4797 49.01 89.2791 48.1994 85.0634 47.4459C78.6344 46.2975 72.1503 45.8173 65.6226 45.8192C56.1338 45.8192 46.9316 47.3529 38.1185 50.9593C33.8249 52.7151 29.7401 54.8676 25.9381 57.5383C25.8584 57.5934 25.7768 57.6446 25.6952 57.6977C25.2168 57.9976 24.581 58.3887 24.1748 58.0869C23.8843 57.8724 24.4538 57.2802 24.674 56.8796C28.2823 50.3007 32.7733 44.3652 37.7958 38.8074C43.5415 32.4449 49.8718 26.7618 57.0734 22.0867C67.9307 15.037 79.6271 9.93102 92.2668 7.05534C96.2776 6.14423 100.336 5.51974 104.43 5.08507C109.696 4.52701 114.972 4.40933 120.253 4.59155C125.803 4.78137 131.287 5.49697 136.636 7.06863C136.752 7.33626 137.016 7.43497 137.232 7.57543C140.041 9.38436 142.828 11.2256 145.569 13.1332C148.11 14.9023 150.583 16.7662 152.895 18.8238C155.137 20.8207 157.339 22.8574 159.357 25.0896C160.556 26.4183 161.762 27.7432 162.895 29.1288C165.884 32.7846 168.57 36.655 170.951 40.7436C173.87 45.7584 176.303 51.0011 178.247 56.4621C180.361 62.4108 181.931 68.5001 182.839 74.7639C183.3 77.9433 183.672 81.1322 183.774 84.3325C183.902 88.2711 183.894 92.2192 183.56 96.1617C183.305 99.1683 182.971 102.164 182.476 105.132C181.658 110.041 180.502 114.875 178.945 119.606C177.036 125.416 174.589 130.991 171.569 136.317C168.177 142.3 164.13 147.803 159.503 152.876C157.432 155.145 155.249 157.31 152.941 159.351C149.638 162.27 146.168 164.96 142.463 167.357C136.845 170.996 130.862 173.868 124.518 175.99C119.911 177.529 115.198 178.643 110.385 179.346C107.323 179.794 104.248 180.052 101.165 180.173C97.9935 180.299 94.8236 180.154 91.6651 179.872C90.568 179.773 89.4481 179.748 88.3737 179.445ZM148.37 104.062C149.462 104.062 150.557 104.122 151.643 104.047C153.007 103.952 154.277 103.511 155.088 102.325C157.789 98.3673 160.467 94.3926 163.128 90.4084C163.962 89.1632 163.979 87.882 163.105 86.6083C162.367 85.5302 161.686 84.4141 160.953 83.3321C160.494 82.6507 160.114 81.9104 159.533 81.3182C158.785 80.5552 157.979 80.5741 157.276 81.3695C157.085 81.5859 156.929 81.8345 156.768 82.0756C154.118 86.0693 151.468 90.0611 148.822 94.0566C147.085 96.6799 145.352 99.3069 143.627 101.936C142.998 102.894 143.24 103.563 144.314 103.935C144.593 104.029 144.876 104.067 145.17 104.066C146.237 104.058 147.303 104.062 148.37 104.062ZM164.709 104.062C166.273 103.967 168.217 104.231 170.144 103.94C171.497 103.735 171.924 102.866 171.222 101.721C169.504 98.914 167.771 96.1161 166.013 93.3334C165.195 92.0351 163.884 92.037 163.045 93.3334C161.285 96.0573 159.535 98.7868 157.821 101.539C156.914 102.995 157.705 103.754 159.102 104.056C159.264 104.09 159.44 104.062 159.609 104.062C161.186 104.062 162.762 104.062 164.709 104.062Z", fill: "#E74242" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M117.666 213.803C115.109 213.829 112.127 213.854 109.151 213.655C95.3646 212.729 82.0833 209.815 69.6315 203.619C59.6245 198.639 50.4621 192.439 42.3248 184.754C34.0299 176.918 27.2953 167.91 22.083 157.758C18.0305 149.868 15.0219 141.596 12.9074 132.99C12.5486 131.532 12.9169 131.029 14.3879 130.847C19.3782 130.232 24.3646 129.594 29.3548 128.983C33.9141 128.424 38.4735 127.882 43.0347 127.344C44.8835 127.128 46.7361 126.934 48.5887 126.756C51.2366 126.5 53.1176 125.101 54.2356 122.764C55.5245 120.075 55.515 117.288 54.34 114.549C53.5087 112.611 51.9655 111.423 49.9857 110.772C48.2584 110.202 48.061 109.783 48.2831 108C49.3859 99.1513 46.7835 91.722 39.7528 86.0219C36.7443 83.5828 33.4149 81.7701 29.6091 80.9501C25.1447 79.9896 20.7657 80.4357 16.4702 81.8991C15.5819 82.2009 14.7068 82.5426 13.8432 82.9071C13.3933 83.0969 13.2642 82.9109 13.2661 82.5236C13.268 82.3129 13.325 82.0947 13.4028 81.8954C15.02 77.7156 16.6505 73.5397 18.2659 69.3581C19.3933 66.4445 21.2213 64.142 23.8976 62.4698C28.6088 59.5258 33.2802 56.5286 38.3691 54.247C42.2925 52.4893 46.3849 51.3581 50.6121 50.6595C52.5406 50.3407 54.4539 49.9212 56.3843 49.6194C57.6466 49.4219 58.9297 49.3232 60.2053 49.2378C64.125 48.9721 68.0541 48.9208 71.9757 49.1031C80.9273 49.515 89.6512 51.1436 98.1093 54.1407C102.416 55.6668 105.719 58.4894 108.458 62.0465C112.41 67.1772 115.346 72.8849 117.785 78.8488C121.213 87.2367 124.412 95.7157 126.961 104.419C127.956 107.818 128.793 111.258 129.379 114.764C129.696 116.662 129.432 118.262 128.451 119.983C122.609 130.226 114.986 138.953 106.127 146.649C102.116 150.134 98.2042 153.704 94.909 157.899C90.6629 163.305 87.5651 169.28 85.8796 175.967C85.6081 177.043 85.3158 178.108 85.2608 179.23C85.1564 181.341 86.0257 182.935 87.7511 184.074C89.9985 185.557 92.5325 186.367 95.114 186.994C98.2953 187.768 101.541 187.956 104.817 188.074C106.681 188.14 108.56 188.271 110.432 188.377C114.443 188.601 118.326 187.777 122.229 187.096C125.963 186.447 129.645 185.591 133.21 184.27C133.952 183.996 134.447 184.3 134.478 185.044C134.704 190.553 136.818 195.391 139.715 199.96C141.091 202.127 142.587 204.21 144.069 206.301C144.35 206.696 144.623 207.101 144.838 207.53C145.265 208.376 145.073 208.898 144.19 209.242C143.129 209.654 141.989 209.766 140.886 210.02C136.186 211.102 131.454 212.062 126.798 213.311C125.35 213.7 123.962 213.773 122.527 213.797C121.048 213.824 119.568 213.803 117.666 213.803ZM87.8802 70.9184C74.6293 71.1879 63.7491 81.9997 63.9408 95.7347C64.1326 109.418 75.4284 120.114 88.9716 119.794C102.342 119.477 113.165 108.363 112.803 94.6736C112.463 81.8346 101.923 70.7096 87.8802 70.9184Z", fill: "#F7FBFE" }),
        React__default['default'].createElement("path", { d: "M88.3737 179.445C89.448 179.748 90.5679 179.773 91.665 179.872C94.8235 180.155 97.9934 180.299 101.165 180.173C104.248 180.052 107.323 179.794 110.385 179.346C115.198 178.644 119.911 177.529 124.518 175.99C130.862 173.868 136.845 170.996 142.463 167.357C146.168 164.96 149.638 162.27 152.941 159.351C155.249 157.31 157.432 155.145 159.503 152.876C164.13 147.803 168.177 142.3 171.569 136.317C174.589 130.991 177.036 125.416 178.945 119.606C180.502 114.875 181.658 110.041 182.476 105.132C182.971 102.164 183.305 99.1684 183.56 96.1617C183.894 92.2193 183.901 88.2711 183.774 84.3325C183.672 81.1322 183.3 77.9433 182.838 74.764C181.931 68.5001 180.361 62.4108 178.247 56.4621C176.303 51.0011 173.87 45.7584 170.95 40.7435C168.57 36.6549 165.884 32.7846 162.895 29.1288C161.762 27.7432 160.556 26.4183 159.357 25.0896C157.339 22.8574 155.137 20.8206 152.895 18.8238C150.583 16.7662 148.11 14.9022 145.568 13.1332C142.828 11.2255 140.041 9.38434 137.232 7.57541C137.015 7.43495 136.752 7.33624 136.636 7.0686C139.134 7.19768 141.563 7.72156 143.94 8.45615C150.868 10.5954 157.591 13.2584 164.018 16.6276C169.998 19.7596 175.595 23.4761 180.815 27.7659C184.226 30.5714 187.459 33.5648 190.488 36.7707C196.33 42.9549 201.404 49.7161 205.614 57.1188C209.24 63.4947 212.195 70.1686 214.435 77.1499C216.12 82.4021 217.413 87.7453 218.189 93.2139C218.565 95.8694 218.861 98.5268 219.057 101.203C219.294 104.443 219.414 107.685 219.287 110.927C219.123 115.077 218.791 119.215 218.197 123.334C217.218 130.121 215.644 136.759 213.376 143.23C210.658 150.986 207.097 158.332 202.629 165.235C199.489 170.081 195.968 174.627 192.063 178.885C186.771 184.653 180.967 189.831 174.534 194.299C169.908 197.511 165.055 200.324 159.992 202.788C156.68 204.401 153.227 205.669 149.799 207.004C148.945 207.336 148.218 207.104 147.685 206.229C145.792 203.124 143.539 200.265 141.59 197.198C139.57 194.019 138.365 190.564 137.826 186.849C137.663 185.729 137.405 184.621 137.171 183.512C137.01 182.749 137.181 182.335 137.932 182.115C141.413 181.104 144.175 178.98 146.7 176.485C148.475 174.73 150.228 172.949 152.003 171.191C152.5 170.698 153.04 170.246 153.565 169.781C153.985 169.411 154.013 169.007 153.696 168.563C153.47 168.247 153.235 167.94 153.015 167.621C152.556 166.959 152.25 166.917 151.584 167.391C145.352 171.825 139.1 176.233 132.889 180.699C131.072 182.005 128.983 182.453 126.885 182.918C124.34 183.48 121.79 184.032 119.228 184.499C115.238 185.224 111.195 185.555 107.16 185.228C103.435 184.926 99.6961 184.655 96.0118 183.966C94.0301 183.594 92.1168 182.994 90.3212 182.058C89.2525 181.502 88.5293 180.684 88.3737 179.445Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { d: "M12.2335 127.081C16.2462 125.589 20.2513 124.076 24.2734 122.61C31.437 120.001 38.6443 117.514 45.9084 115.202C46.7949 114.921 47.6813 114.716 48.6209 114.824C49.2757 114.902 49.8224 115.177 50.2533 115.678C51.6389 117.286 51.544 120.384 50.09 121.937C49.3593 122.719 48.433 122.994 47.427 123.108C43.4105 123.563 39.3921 124 35.3757 124.467C31.5528 124.909 27.7318 125.378 23.9109 125.839C20.1621 126.293 16.4151 126.752 12.6663 127.208C12.5239 127.225 12.3778 127.21 12.2354 127.21C12.2354 127.166 12.2335 127.124 12.2335 127.081Z", fill: "#E74242" }),
        React__default['default'].createElement("path", { d: "M16.3848 97.2702C16.3506 98.8153 16.2462 100.455 15.7072 102.033C14.8568 104.527 12.9492 105.907 10.5708 106.639C9.4471 106.985 8.45627 106.345 7.69512 105.478C6.5942 104.223 6.58661 102.686 6.64165 101.15C6.71188 99.1589 7.06873 97.2171 7.69702 95.3208C8.5322 92.8001 10.4057 91.274 12.636 90.0725C12.8732 89.9453 13.0972 89.9833 13.3364 90.0364C14.6328 90.3211 15.4585 91.1165 15.8894 92.3578C16.4304 93.9219 16.3886 95.5467 16.3848 97.2702Z", fill: "#FEFEFE" }),
        React__default['default'].createElement("path", { d: "M148.37 104.062C147.303 104.062 146.237 104.058 145.17 104.066C144.876 104.068 144.593 104.03 144.314 103.935C143.239 103.563 142.998 102.895 143.627 101.936C145.352 99.307 147.085 96.68 148.822 94.0568C151.468 90.0612 154.118 86.0694 156.768 82.0757C156.929 81.8346 157.084 81.586 157.276 81.3696C157.979 80.5743 158.785 80.5553 159.533 81.3183C160.114 81.9106 160.494 82.6508 160.953 83.3323C161.686 84.4142 162.367 85.5303 163.105 86.6085C163.979 87.8821 163.961 89.1634 163.128 90.4085C160.467 94.3927 157.789 98.3675 155.088 102.325C154.277 103.511 153.007 103.952 151.643 104.047C150.557 104.123 149.462 104.062 148.37 104.062Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { d: "M164.709 104.062C162.762 104.062 161.186 104.062 159.609 104.062C159.44 104.062 159.263 104.09 159.102 104.056C157.705 103.754 156.914 102.995 157.821 101.539C159.535 98.7869 161.285 96.0573 163.045 93.3335C163.884 92.0371 165.195 92.0352 166.013 93.3335C167.771 96.1162 169.504 98.914 171.222 101.721C171.924 102.866 171.497 103.735 170.144 103.94C168.217 104.231 166.273 103.967 164.709 104.062Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M87.8802 70.9184C101.923 70.7096 112.463 81.8346 112.803 94.6737C113.165 108.363 102.342 119.477 88.9716 119.794C75.4284 120.114 64.1326 109.418 63.9408 95.7347C63.7491 81.9998 74.6293 71.188 87.8802 70.9184ZM83.6246 87.6315C83.6094 86.2041 83.6493 84.7692 83.2298 83.3835C82.6243 81.3924 80.8761 80.337 78.8754 80.9083C76.0965 81.7018 73.8852 83.3512 72.733 86.0371C71.5847 88.7135 71.205 91.5835 71.4784 94.4971C71.7175 97.0425 73.8093 98.5288 76.3205 97.9859C77.6986 97.6898 79.0026 97.1773 80.2098 96.4446C81.5442 95.6379 82.4553 94.4857 82.964 93.009C83.5695 91.2627 83.6018 89.45 83.6246 87.6315Z", fill: "#1C1D1C" }),
        React__default['default'].createElement("path", { d: "M83.6266 87.6334C83.6019 89.4499 83.5696 91.2626 82.9641 93.0089C82.4554 94.4857 81.5443 95.6378 80.2099 96.4445C79.0027 97.1772 77.6987 97.6897 76.3206 97.9858C73.8094 98.5287 71.7176 97.0425 71.4785 94.497C71.2051 91.5834 71.5848 88.7134 72.7331 86.037C73.8853 83.3512 76.0966 81.7017 78.8755 80.9083C80.8762 80.3369 82.6243 81.3923 83.2299 83.3834C83.6493 84.7691 83.6095 86.2041 83.6266 87.6334Z", fill: "#FEFEFE" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 224 224" }, props),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M213.457 156.134C208.38 166.858 201.693 176.489 193.442 185.021C180.834 198.06 165.926 207.444 148.693 213.114C141.355 215.528 133.838 217.102 126.154 217.905C119.338 218.617 112.514 218.7 105.689 218.134C92.2668 217.02 79.4695 213.569 67.329 207.712C56.7298 202.594 47.1859 195.962 38.7506 187.753C23.573 172.978 13.4521 155.304 8.44673 134.713C8.1772 133.608 7.94752 132.494 7.70646 131.384C7.69507 131.338 7.68368 131.3 7.6723 131.26C7.5679 130.79 7.42553 130.33 7.29077 129.869C7.17118 129.294 7.0497 128.719 6.95669 128.142C6.82762 127.346 6.78776 126.545 6.63591 125.758C6.66248 125.636 6.66248 125.496 6.63021 125.308C6.41192 123.994 6.26767 122.667 6.12531 121.344C6.07976 120.915 5.94499 120.572 5.66786 120.236C-2.41823 110.426 -1.79184 96.6913 7.15979 87.641C7.54132 87.2557 7.74822 86.8419 7.85831 86.3351C12.1329 66.5412 21.2155 49.2568 35.0245 34.4608C43.9059 24.9435 54.1976 17.2902 65.8314 11.4553C75.5385 6.58655 85.7524 3.25342 96.4674 1.45967C101.253 0.658656 106.064 0.161338 110.914 0.0075884C113.437 0.00569025 115.961 0.00379628 118.484 0C131.329 0.442267 143.725 3.03323 155.646 7.85451C170.015 13.6666 182.596 22.1532 193.343 33.3124C206.935 47.4232 216.117 64.0072 220.853 83.0285C222.548 89.839 223.531 96.7559 223.867 103.77C224.742 122.09 221.306 139.557 213.457 156.134ZM10.5708 106.639C12.9491 105.907 14.8568 104.527 15.7071 102.033C16.2462 100.455 16.3506 98.8154 16.3848 97.2703C16.3886 95.5468 16.4303 93.9219 15.8893 92.3579C15.4585 91.1165 14.6328 90.3212 13.3363 90.0364C13.0972 89.9833 12.8732 89.9453 12.6359 90.0725C10.4056 91.274 8.53215 92.8001 7.69697 95.3209C7.06869 97.2171 6.71184 99.1589 6.64161 101.15C6.58656 102.686 6.59415 104.223 7.69507 105.478C8.45623 106.345 9.44706 106.985 10.5708 106.639ZM12.6663 127.208C16.4151 126.752 20.1621 126.293 23.9109 125.839C27.7319 125.378 31.5528 124.909 35.3757 124.467C39.3921 124 43.4105 123.563 47.427 123.108C48.433 122.994 49.3593 122.719 50.0901 121.937C51.5441 120.384 51.639 117.286 50.2533 115.678C49.8224 115.177 49.2758 114.902 48.6209 114.824C47.6813 114.716 46.7949 114.921 45.9085 115.202C38.6443 117.514 31.437 120.001 24.2734 122.61C20.2513 124.076 16.2462 125.589 12.2335 127.081C12.2335 127.124 12.2354 127.166 12.2354 127.21C12.3778 127.21 12.5239 127.225 12.6663 127.208ZM144.838 207.53C144.623 207.101 144.35 206.696 144.069 206.301C142.587 204.21 141.091 202.127 139.715 199.96C136.818 195.391 134.704 190.553 134.478 185.044C134.447 184.3 133.952 183.996 133.21 184.27C129.645 185.591 125.963 186.447 122.229 187.096C118.326 187.777 114.443 188.601 110.432 188.377C108.56 188.271 106.681 188.14 104.817 188.074C101.541 187.956 98.2953 187.768 95.114 186.994C92.5325 186.367 89.9985 185.557 87.7511 184.074C86.0257 182.935 85.1564 181.341 85.2608 179.23C85.3158 178.108 85.6081 177.043 85.8795 175.967C87.5651 169.28 90.6629 163.305 94.909 157.899C98.2042 153.704 102.116 150.134 106.127 146.649C114.986 138.953 122.609 130.226 128.451 119.983C129.432 118.262 129.696 116.662 129.379 114.764C128.793 111.258 127.956 107.818 126.961 104.419C124.412 95.7157 121.213 87.2367 117.785 78.8488C115.346 72.8848 112.41 67.1771 108.458 62.0465C105.719 58.4893 102.416 55.6668 98.1112 54.1407C89.6512 51.1435 80.9273 49.5149 71.9757 49.103C68.0541 48.9208 64.1249 48.972 60.2053 49.2378C58.9297 49.3232 57.6466 49.4219 56.3843 49.6193C54.4539 49.9211 52.5406 50.3406 50.6121 50.6595C46.3849 51.358 42.2925 52.4893 38.3691 54.247C33.2801 56.5286 28.6088 59.5257 23.8976 62.4697C21.2212 64.142 19.3933 66.4444 18.2658 69.3581C16.6505 73.5397 15.02 77.7156 13.4028 81.8953C13.325 82.0946 13.268 82.3129 13.2661 82.5236C13.2642 82.9108 13.3933 83.0968 13.8432 82.907C14.7068 82.5426 15.5819 82.2009 16.4702 81.8991C20.7657 80.4356 25.1447 79.9896 29.6091 80.95C33.4149 81.77 36.7442 83.5828 39.7528 86.0219C46.7835 91.722 49.3859 99.1513 48.283 108C48.061 109.783 48.2584 110.202 49.9857 110.772C51.9654 111.423 53.5086 112.611 54.34 114.549C55.515 117.288 55.5245 120.075 54.2356 122.764C53.1176 125.101 51.2366 126.5 48.5886 126.756C46.7361 126.934 44.8835 127.128 43.0347 127.344C38.4734 127.882 33.9141 128.424 29.3548 128.983C24.3646 129.594 19.3781 130.231 14.3879 130.846C12.9169 131.029 12.5486 131.532 12.9074 132.989C15.0219 141.596 18.0305 149.868 22.083 157.758C27.2953 167.91 34.0299 176.918 42.3248 184.754C50.4621 192.439 59.6244 198.639 69.6314 203.617C82.0833 209.815 95.3646 212.729 109.151 213.655C112.127 213.854 115.109 213.829 117.666 213.803C119.568 213.803 121.048 213.824 122.527 213.797C123.962 213.773 125.35 213.7 126.798 213.311C131.454 212.062 136.186 211.102 140.886 210.02C141.989 209.766 143.129 209.654 144.19 209.242C145.073 208.898 145.265 208.376 144.838 207.53ZM219.057 101.203C218.861 98.5268 218.565 95.8694 218.19 93.2139C217.413 87.7454 216.121 82.4021 214.435 77.15C212.195 70.1686 209.24 63.4947 205.614 57.1189C201.404 49.7161 196.331 42.9549 190.488 36.7708C187.459 33.5648 184.226 30.5715 180.815 27.766C175.595 23.4762 169.998 19.7596 164.018 16.6277C157.591 13.2585 150.868 10.5954 143.94 8.45622C141.563 7.72164 139.134 7.19775 136.636 7.06868C131.287 5.49702 125.803 4.78142 120.253 4.59161C114.972 4.40938 109.696 4.52706 104.43 5.08512C100.336 5.51979 96.2776 6.14428 92.2668 7.05539C79.6271 9.93107 67.9307 15.0371 57.0733 22.0868C49.8718 26.7619 43.5415 32.4449 37.7958 38.8075C32.7733 44.3653 28.2823 50.3007 24.674 56.8797C24.4538 57.2802 23.8843 57.8724 24.1747 58.0869C24.5809 58.3887 25.2168 57.9977 25.6952 57.6978C25.7768 57.6447 25.8584 57.5934 25.9381 57.5384C29.7401 54.8677 33.8249 52.7152 38.1204 50.9594C46.9316 47.3529 56.1338 45.8192 65.6226 45.8192C72.1503 45.8173 78.6343 46.2976 85.0633 47.4459C89.2772 48.1995 93.4797 49.01 97.5095 50.5058C101.968 52.1609 105.823 54.7481 109.109 58.1742C112.655 61.8699 115.194 66.2451 117.495 70.7703C120.452 76.5843 122.707 82.6887 124.957 88.797C127.432 95.5164 129.858 102.247 131.507 109.229C131.834 110.605 132.194 111.973 132.578 113.507C133.329 112.372 133.98 111.385 134.637 110.402C135.267 109.458 135.947 109.323 136.913 109.946C137.813 110.525 137.891 110.982 137.238 112.009C133.954 117.155 130.645 122.286 127.386 127.449C122.483 135.218 116.559 142.061 109.437 147.899C105.317 151.28 101.416 154.934 98.1093 159.152C94.7192 163.477 91.7182 168.041 89.8675 173.266C89.1557 175.272 88.6167 177.324 88.3737 179.445C88.5293 180.684 89.2525 181.502 90.3212 182.058C92.1168 182.994 94.0302 183.594 96.0118 183.966C99.6961 184.655 103.435 184.926 107.16 185.228C111.195 185.555 115.238 185.224 119.228 184.499C121.791 184.032 124.34 183.48 126.885 182.918C128.983 182.453 131.072 182.005 132.889 180.699C139.1 176.233 145.352 171.825 151.584 167.391C152.25 166.917 152.554 166.959 153.015 167.621C153.235 167.94 153.47 168.247 153.696 168.563C154.013 169.007 153.985 169.411 153.565 169.781C153.04 170.246 152.501 170.698 152.003 171.192C150.228 172.949 148.475 174.73 146.7 176.485C144.177 178.98 141.413 181.104 137.932 182.115C137.181 182.335 137.01 182.749 137.171 183.512C137.405 184.621 137.663 185.729 137.826 186.849C138.365 190.564 139.57 194.019 141.59 197.198C143.539 200.265 145.793 203.124 147.685 206.229C148.218 207.104 148.945 207.336 149.799 207.004C153.228 205.669 156.68 204.401 159.993 202.788C165.055 200.324 169.908 197.511 174.534 194.299C180.967 189.831 186.771 184.653 192.064 178.885C195.968 174.627 199.489 170.081 202.629 165.235C207.097 158.332 210.658 150.986 213.376 143.23C215.644 136.759 217.218 130.121 218.197 123.334C218.791 119.215 219.123 115.077 219.287 110.927C219.414 107.685 219.294 104.443 219.057 101.203Z", fill: "#1D1E1D" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M88.3737 179.445C88.6167 177.324 89.1558 175.272 89.8676 173.266C91.7182 168.04 94.7192 163.477 98.1093 159.151C101.416 154.934 105.317 151.28 109.437 147.899C116.559 142.061 122.483 135.218 127.386 127.449C130.645 122.286 133.954 117.155 137.238 112.009C137.891 110.982 137.813 110.525 136.913 109.946C135.947 109.323 135.267 109.458 134.637 110.402C133.98 111.385 133.329 112.372 132.578 113.507C132.194 111.973 131.834 110.605 131.507 109.228C129.858 102.247 127.432 95.5163 124.957 88.7969C122.707 82.6887 120.452 76.5842 117.495 70.7702C115.194 66.2451 112.655 61.8699 109.109 58.1742C105.823 54.748 101.968 52.1609 97.5095 50.5057C93.4797 49.01 89.2791 48.1994 85.0634 47.4459C78.6344 46.2975 72.1503 45.8173 65.6226 45.8192C56.1338 45.8192 46.9316 47.3529 38.1185 50.9593C33.8249 52.7151 29.7401 54.8676 25.9381 57.5383C25.8584 57.5934 25.7768 57.6446 25.6952 57.6977C25.2168 57.9976 24.581 58.3887 24.1748 58.0869C23.8843 57.8724 24.4538 57.2802 24.674 56.8796C28.2823 50.3007 32.7733 44.3652 37.7958 38.8074C43.5415 32.4449 49.8718 26.7618 57.0734 22.0867C67.9307 15.037 79.6271 9.93102 92.2668 7.05534C96.2776 6.14423 100.336 5.51974 104.43 5.08507C109.696 4.52701 114.972 4.40933 120.253 4.59155C125.803 4.78137 131.287 5.49697 136.636 7.06863C136.752 7.33626 137.016 7.43497 137.232 7.57543C140.041 9.38436 142.828 11.2256 145.569 13.1332C148.11 14.9023 150.583 16.7662 152.895 18.8238C155.137 20.8207 157.339 22.8574 159.357 25.0896C160.556 26.4183 161.762 27.7432 162.895 29.1288C165.884 32.7846 168.57 36.655 170.951 40.7436C173.87 45.7584 176.303 51.0011 178.247 56.4621C180.361 62.4108 181.931 68.5001 182.839 74.7639C183.3 77.9433 183.672 81.1322 183.774 84.3325C183.902 88.2711 183.894 92.2192 183.56 96.1617C183.305 99.1683 182.971 102.164 182.476 105.132C181.658 110.041 180.502 114.875 178.945 119.606C177.036 125.416 174.589 130.991 171.569 136.317C168.177 142.3 164.13 147.803 159.503 152.876C157.432 155.145 155.249 157.31 152.941 159.351C149.638 162.27 146.168 164.96 142.463 167.357C136.845 170.996 130.862 173.868 124.518 175.99C119.911 177.529 115.198 178.643 110.385 179.346C107.323 179.794 104.248 180.052 101.165 180.173C97.9935 180.299 94.8236 180.154 91.6651 179.872C90.568 179.773 89.4481 179.748 88.3737 179.445ZM148.37 104.062C149.462 104.062 150.557 104.122 151.643 104.047C153.007 103.952 154.277 103.511 155.088 102.325C157.789 98.3673 160.467 94.3926 163.128 90.4084C163.962 89.1632 163.979 87.882 163.105 86.6083C162.367 85.5302 161.686 84.4141 160.953 83.3321C160.494 82.6507 160.114 81.9104 159.533 81.3182C158.785 80.5552 157.979 80.5741 157.276 81.3695C157.085 81.5859 156.929 81.8345 156.768 82.0756C154.118 86.0693 151.468 90.0611 148.822 94.0566C147.085 96.6799 145.352 99.3069 143.627 101.936C142.998 102.894 143.24 103.563 144.314 103.935C144.593 104.029 144.876 104.067 145.17 104.066C146.237 104.058 147.303 104.062 148.37 104.062ZM164.709 104.062C166.273 103.967 168.217 104.231 170.144 103.94C171.497 103.735 171.924 102.866 171.222 101.721C169.504 98.914 167.771 96.1161 166.013 93.3334C165.195 92.0351 163.884 92.037 163.045 93.3334C161.285 96.0573 159.535 98.7868 157.821 101.539C156.914 102.995 157.705 103.754 159.102 104.056C159.264 104.09 159.44 104.062 159.609 104.062C161.186 104.062 162.762 104.062 164.709 104.062Z", fill: "#E74242" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M117.666 213.803C115.109 213.829 112.127 213.854 109.151 213.655C95.3646 212.729 82.0833 209.815 69.6315 203.619C59.6245 198.639 50.4621 192.439 42.3248 184.754C34.0299 176.918 27.2953 167.91 22.083 157.758C18.0305 149.868 15.0219 141.596 12.9074 132.99C12.5486 131.532 12.9169 131.029 14.3879 130.847C19.3782 130.232 24.3646 129.594 29.3548 128.983C33.9141 128.424 38.4735 127.882 43.0347 127.344C44.8835 127.128 46.7361 126.934 48.5887 126.756C51.2366 126.5 53.1176 125.101 54.2356 122.764C55.5245 120.075 55.515 117.288 54.34 114.549C53.5087 112.611 51.9655 111.423 49.9857 110.772C48.2584 110.202 48.061 109.783 48.2831 108C49.3859 99.1513 46.7835 91.722 39.7528 86.0219C36.7443 83.5828 33.4149 81.7701 29.6091 80.9501C25.1447 79.9896 20.7657 80.4357 16.4702 81.8991C15.5819 82.2009 14.7068 82.5426 13.8432 82.9071C13.3933 83.0969 13.2642 82.9109 13.2661 82.5236C13.268 82.3129 13.325 82.0947 13.4028 81.8954C15.02 77.7156 16.6505 73.5397 18.2659 69.3581C19.3933 66.4445 21.2213 64.142 23.8976 62.4698C28.6088 59.5258 33.2802 56.5286 38.3691 54.247C42.2925 52.4893 46.3849 51.3581 50.6121 50.6595C52.5406 50.3407 54.4539 49.9212 56.3843 49.6194C57.6466 49.4219 58.9297 49.3232 60.2053 49.2378C64.125 48.9721 68.0541 48.9208 71.9757 49.1031C80.9273 49.515 89.6512 51.1436 98.1093 54.1407C102.416 55.6668 105.719 58.4894 108.458 62.0465C112.41 67.1772 115.346 72.8849 117.785 78.8488C121.213 87.2367 124.412 95.7157 126.961 104.419C127.956 107.818 128.793 111.258 129.379 114.764C129.696 116.662 129.432 118.262 128.451 119.983C122.609 130.226 114.986 138.953 106.127 146.649C102.116 150.134 98.2042 153.704 94.909 157.899C90.6629 163.305 87.5651 169.28 85.8796 175.967C85.6081 177.043 85.3158 178.108 85.2608 179.23C85.1564 181.341 86.0257 182.935 87.7511 184.074C89.9985 185.557 92.5325 186.367 95.114 186.994C98.2953 187.768 101.541 187.956 104.817 188.074C106.681 188.14 108.56 188.271 110.432 188.377C114.443 188.601 118.326 187.777 122.229 187.096C125.963 186.447 129.645 185.591 133.21 184.27C133.952 183.996 134.447 184.3 134.478 185.044C134.704 190.553 136.818 195.391 139.715 199.96C141.091 202.127 142.587 204.21 144.069 206.301C144.35 206.696 144.623 207.101 144.838 207.53C145.265 208.376 145.073 208.898 144.19 209.242C143.129 209.654 141.989 209.766 140.886 210.02C136.186 211.102 131.454 212.062 126.798 213.311C125.35 213.7 123.962 213.773 122.527 213.797C121.048 213.824 119.568 213.803 117.666 213.803ZM87.8802 70.9184C74.6293 71.1879 63.7491 81.9997 63.9408 95.7347C64.1326 109.418 75.4284 120.114 88.9716 119.794C102.342 119.477 113.165 108.363 112.803 94.6736C112.463 81.8346 101.923 70.7096 87.8802 70.9184Z", fill: "#F7FBFE" }),
        React__default['default'].createElement("path", { d: "M88.3737 179.445C89.448 179.748 90.5679 179.773 91.665 179.872C94.8235 180.155 97.9934 180.299 101.165 180.173C104.248 180.052 107.323 179.794 110.385 179.346C115.198 178.644 119.911 177.529 124.518 175.99C130.862 173.868 136.845 170.996 142.463 167.357C146.168 164.96 149.638 162.27 152.941 159.351C155.249 157.31 157.432 155.145 159.503 152.876C164.13 147.803 168.177 142.3 171.569 136.317C174.589 130.991 177.036 125.416 178.945 119.606C180.502 114.875 181.658 110.041 182.476 105.132C182.971 102.164 183.305 99.1684 183.56 96.1617C183.894 92.2193 183.901 88.2711 183.774 84.3325C183.672 81.1322 183.3 77.9433 182.838 74.764C181.931 68.5001 180.361 62.4108 178.247 56.4621C176.303 51.0011 173.87 45.7584 170.95 40.7435C168.57 36.6549 165.884 32.7846 162.895 29.1288C161.762 27.7432 160.556 26.4183 159.357 25.0896C157.339 22.8574 155.137 20.8206 152.895 18.8238C150.583 16.7662 148.11 14.9022 145.568 13.1332C142.828 11.2255 140.041 9.38434 137.232 7.57541C137.015 7.43495 136.752 7.33624 136.636 7.0686C139.134 7.19768 141.563 7.72156 143.94 8.45615C150.868 10.5954 157.591 13.2584 164.018 16.6276C169.998 19.7596 175.595 23.4761 180.815 27.7659C184.226 30.5714 187.459 33.5648 190.488 36.7707C196.33 42.9549 201.404 49.7161 205.614 57.1188C209.24 63.4947 212.195 70.1686 214.435 77.1499C216.12 82.4021 217.413 87.7453 218.189 93.2139C218.565 95.8694 218.861 98.5268 219.057 101.203C219.294 104.443 219.414 107.685 219.287 110.927C219.123 115.077 218.791 119.215 218.197 123.334C217.218 130.121 215.644 136.759 213.376 143.23C210.658 150.986 207.097 158.332 202.629 165.235C199.489 170.081 195.968 174.627 192.063 178.885C186.771 184.653 180.967 189.831 174.534 194.299C169.908 197.511 165.055 200.324 159.992 202.788C156.68 204.401 153.227 205.669 149.799 207.004C148.945 207.336 148.218 207.104 147.685 206.229C145.792 203.124 143.539 200.265 141.59 197.198C139.57 194.019 138.365 190.564 137.826 186.849C137.663 185.729 137.405 184.621 137.171 183.512C137.01 182.749 137.181 182.335 137.932 182.115C141.413 181.104 144.175 178.98 146.7 176.485C148.475 174.73 150.228 172.949 152.003 171.191C152.5 170.698 153.04 170.246 153.565 169.781C153.985 169.411 154.013 169.007 153.696 168.563C153.47 168.247 153.235 167.94 153.015 167.621C152.556 166.959 152.25 166.917 151.584 167.391C145.352 171.825 139.1 176.233 132.889 180.699C131.072 182.005 128.983 182.453 126.885 182.918C124.34 183.48 121.79 184.032 119.228 184.499C115.238 185.224 111.195 185.555 107.16 185.228C103.435 184.926 99.6961 184.655 96.0118 183.966C94.0301 183.594 92.1168 182.994 90.3212 182.058C89.2525 181.502 88.5293 180.684 88.3737 179.445Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { d: "M12.2335 127.081C16.2462 125.589 20.2513 124.076 24.2734 122.61C31.437 120.001 38.6443 117.514 45.9084 115.202C46.7949 114.921 47.6813 114.716 48.6209 114.824C49.2757 114.902 49.8224 115.177 50.2533 115.678C51.6389 117.286 51.544 120.384 50.09 121.937C49.3593 122.719 48.433 122.994 47.427 123.108C43.4105 123.563 39.3921 124 35.3757 124.467C31.5528 124.909 27.7318 125.378 23.9109 125.839C20.1621 126.293 16.4151 126.752 12.6663 127.208C12.5239 127.225 12.3778 127.21 12.2354 127.21C12.2354 127.166 12.2335 127.124 12.2335 127.081Z", fill: "#E74242" }),
        React__default['default'].createElement("path", { d: "M16.3848 97.2702C16.3506 98.8153 16.2462 100.455 15.7072 102.033C14.8568 104.527 12.9492 105.907 10.5708 106.639C9.4471 106.985 8.45627 106.345 7.69512 105.478C6.5942 104.223 6.58661 102.686 6.64165 101.15C6.71188 99.1589 7.06873 97.2171 7.69702 95.3208C8.5322 92.8001 10.4057 91.274 12.636 90.0725C12.8732 89.9453 13.0972 89.9833 13.3364 90.0364C14.6328 90.3211 15.4585 91.1165 15.8894 92.3578C16.4304 93.9219 16.3886 95.5467 16.3848 97.2702Z", fill: "#FEFEFE" }),
        React__default['default'].createElement("path", { d: "M148.37 104.062C147.303 104.062 146.237 104.058 145.17 104.066C144.876 104.068 144.593 104.03 144.314 103.935C143.239 103.563 142.998 102.895 143.627 101.936C145.352 99.307 147.085 96.68 148.822 94.0568C151.468 90.0612 154.118 86.0694 156.768 82.0757C156.929 81.8346 157.084 81.586 157.276 81.3696C157.979 80.5743 158.785 80.5553 159.533 81.3183C160.114 81.9106 160.494 82.6508 160.953 83.3323C161.686 84.4142 162.367 85.5303 163.105 86.6085C163.979 87.8821 163.961 89.1634 163.128 90.4085C160.467 94.3927 157.789 98.3675 155.088 102.325C154.277 103.511 153.007 103.952 151.643 104.047C150.557 104.123 149.462 104.062 148.37 104.062Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { d: "M164.709 104.062C162.762 104.062 161.186 104.062 159.609 104.062C159.44 104.062 159.263 104.09 159.102 104.056C157.705 103.754 156.914 102.995 157.821 101.539C159.535 98.7869 161.285 96.0573 163.045 93.3335C163.884 92.0371 165.195 92.0352 166.013 93.3335C167.771 96.1162 169.504 98.914 171.222 101.721C171.924 102.866 171.497 103.735 170.144 103.94C168.217 104.231 166.273 103.967 164.709 104.062Z", fill: "#952D2D" }),
        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M87.8802 70.9184C101.923 70.7096 112.463 81.8346 112.803 94.6737C113.165 108.363 102.342 119.477 88.9716 119.794C75.4284 120.114 64.1326 109.418 63.9408 95.7347C63.7491 81.9998 74.6293 71.188 87.8802 70.9184ZM83.6246 87.6315C83.6094 86.2041 83.6493 84.7692 83.2298 83.3835C82.6243 81.3924 80.8761 80.337 78.8754 80.9083C76.0965 81.7018 73.8852 83.3512 72.733 86.0371C71.5847 88.7135 71.205 91.5835 71.4784 94.4971C71.7175 97.0425 73.8093 98.5288 76.3205 97.9859C77.6986 97.6898 79.0026 97.1773 80.2098 96.4446C81.5442 95.6379 82.4553 94.4857 82.964 93.009C83.5695 91.2627 83.6018 89.45 83.6246 87.6315Z", fill: "#1C1D1C" }),
        React__default['default'].createElement("path", { d: "M83.6266 87.6334C83.6019 89.4499 83.5696 91.2626 82.9641 93.0089C82.4554 94.4857 81.5443 95.6378 80.2099 96.4445C79.0027 97.1772 77.6987 97.6897 76.3206 97.9858C73.8094 98.5287 71.7176 97.0425 71.4785 94.497C71.2051 91.5834 71.5848 88.7134 72.7331 86.037C73.8853 83.3512 76.0966 81.7017 78.8755 80.9083C80.8762 80.3369 82.6243 81.3923 83.2299 83.3834C83.6493 84.7691 83.6095 86.2041 83.6266 87.6334Z", fill: "#FEFEFE" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 320 320" }, props),
        React__default['default'].createElement("circle", { cx: "160", cy: "160", r: "160", fill: "white" }),
        React__default['default'].createElement("path", { d: "M186.821 44.2279C184.658 42.2383 181.811 41.1632 178.876 41.227C175.941 41.2908 173.144 42.4886 171.069 44.5704L45.5251 170.449C43.3926 172.589 42.1948 175.491 42.1948 178.516C42.1948 181.541 43.3926 184.443 45.5251 186.583L63.0993 204.202C63.1562 204.221 63.2891 204.278 63.5548 204.278C64.1241 204.278 64.8833 204.069 65.6044 203.593C72.5406 198.954 80.8661 196.868 89.1638 197.69C97.4614 198.512 105.218 202.192 111.114 208.103C117.01 214.014 120.681 221.79 121.501 230.109C122.321 238.427 120.241 246.774 115.613 253.727C115.201 254.329 114.964 255.034 114.93 255.763C114.93 256.03 114.968 256.163 114.987 256.201L132.144 273.42C133.222 274.503 134.506 275.357 135.92 275.933C137.334 276.509 138.849 276.793 140.376 276.77C141.902 276.747 143.408 276.417 144.804 275.799C146.2 275.181 147.458 274.288 148.503 273.172L273.743 139.778C274.777 138.677 275.583 137.38 276.113 135.963C276.643 134.547 276.887 133.039 276.83 131.527C276.774 130.015 276.418 128.529 275.784 127.156C275.15 125.784 274.249 124.551 273.136 123.53L256.321 108.08L256.264 108.061C255.993 108.014 255.716 108.021 255.448 108.08C254.377 108.304 253.402 108.856 252.658 109.66C249.486 113.264 245.63 116.197 241.314 118.289C236.998 120.381 232.309 121.59 227.522 121.843C222.735 122.097 217.945 121.392 213.433 119.768C208.921 118.144 204.777 115.634 201.244 112.386C197.711 109.137 194.86 105.215 192.857 100.849C190.854 96.4824 189.739 91.7595 189.578 86.9562C189.418 82.1529 190.214 77.3657 191.92 72.8745C193.627 68.3834 196.21 64.2785 199.518 60.7999C200.247 59.9835 200.705 58.9593 200.827 57.8698C200.862 57.596 200.843 57.318 200.77 57.0517V57.0136L186.84 44.2279H186.821ZM160.346 33.8015C165.188 28.9477 171.711 26.1552 178.557 26.0063C185.403 25.8574 192.041 28.3636 197.088 33.0023L211 45.7881C215.156 49.5933 216.314 54.7875 215.934 59.2397C215.536 63.6158 213.619 67.8777 210.658 71.1122C208.805 73.1385 207.368 75.5109 206.43 78.0939C205.491 80.677 205.07 83.42 205.188 86.1664C205.307 88.9128 205.965 91.6089 207.123 94.1006C208.281 96.5924 209.918 98.831 211.939 100.689C213.96 102.546 216.327 103.987 218.903 104.928C221.48 105.868 224.216 106.291 226.956 106.172C229.695 106.053 232.384 105.394 234.87 104.233C237.355 103.071 239.588 101.431 241.441 99.4044C244.383 96.1509 248.463 93.8677 252.772 93.0877C255.202 92.6013 257.713 92.6884 260.104 93.3423C262.495 93.9961 264.702 95.1987 266.55 96.8549L283.384 112.304C285.979 114.689 288.075 117.566 289.551 120.769C291.027 123.973 291.853 127.438 291.982 130.964C292.111 134.49 291.54 138.007 290.302 141.31C289.064 144.613 287.183 147.636 284.77 150.205L159.53 283.618C157.091 286.216 154.157 288.296 150.901 289.735C147.645 291.175 144.135 291.944 140.577 291.997C137.019 292.05 133.486 291.387 130.189 290.045C126.892 288.704 123.897 286.712 121.383 284.189L104.226 266.97C97.6404 260.368 99.2346 250.873 102.954 245.28C105.623 241.254 106.82 236.427 106.341 231.618C105.863 226.808 103.739 222.313 100.33 218.895C96.9208 215.478 92.4369 213.348 87.6396 212.869C82.8422 212.389 78.0271 213.589 74.012 216.264C68.4133 219.994 58.9429 221.592 52.3574 214.971L34.7832 197.352C32.3156 194.879 30.3582 191.942 29.0228 188.71C27.6873 185.478 27 182.014 27 178.516C27 175.018 27.6873 171.554 29.0228 168.322C30.3582 165.09 32.3156 162.153 34.7832 159.68L160.346 33.8015Z", fill: "#000080" }),
        React__default['default'].createElement("path", { d: "M121.093 178.363C120.521 176.985 119.809 175.614 119.601 174.127C116.858 154.951 132.502 139.404 146.702 133.499C160.902 127.594 177.252 136.988 186.945 126.905C189.367 124.17 191.831 121.581 195.513 121.561C197.048 121.637 198.326 122.359 198.979 123.631C211.095 148.447 193.785 177.872 174.237 188.328C161.831 194.459 148.994 195.808 136.979 191.649C133.637 190.856 130.959 187.362 127.496 187.317C125.107 188.657 123.123 193.023 121.503 195.428C119.615 198.704 115.855 199.571 113.151 196.703C105.262 188.929 121.656 182.029 121.093 178.363V178.363ZM131.635 175.186C133.33 176.555 135.774 176.167 137.075 174.801C147.478 162.197 161.564 156.667 176.884 157.087C179.142 157.218 180.783 155.39 180.928 153.428C180.973 151.099 179.181 149.524 177.173 149.385C158.657 148.355 142.593 156.52 131.25 169.699C129.814 171.493 130.074 173.88 131.635 175.186V175.186Z", fill: "#000080" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 320 320" }, props),
        React__default['default'].createElement("circle", { cx: "160", cy: "160", r: "160", fill: "#000080" }),
        React__default['default'].createElement("path", { d: "M186.821 45.2279C184.658 43.2383 181.811 42.1632 178.876 42.227C175.941 42.2908 173.144 43.4886 171.069 45.5704L45.5251 171.449C43.3926 173.589 42.1948 176.491 42.1948 179.516C42.1948 182.541 43.3926 185.443 45.5251 187.583L63.0993 205.202C63.1562 205.221 63.2891 205.278 63.5548 205.278C64.1241 205.278 64.8833 205.069 65.6044 204.593C72.5406 199.954 80.8661 197.868 89.1638 198.69C97.4614 199.512 105.218 203.192 111.114 209.103C117.01 215.014 120.681 222.79 121.501 231.109C122.321 239.427 120.241 247.774 115.613 254.727C115.201 255.329 114.964 256.034 114.93 256.763C114.93 257.03 114.968 257.163 114.987 257.201L132.144 274.42C133.222 275.503 134.506 276.357 135.92 276.933C137.334 277.509 138.849 277.793 140.376 277.77C141.902 277.747 143.408 277.417 144.804 276.799C146.2 276.181 147.458 275.288 148.503 274.172L273.743 140.778C274.777 139.677 275.583 138.38 276.113 136.963C276.643 135.547 276.887 134.039 276.83 132.527C276.774 131.015 276.418 129.529 275.784 128.156C275.15 126.784 274.249 125.551 273.136 124.53L256.321 109.08L256.264 109.061C255.993 109.014 255.716 109.021 255.448 109.08C254.377 109.304 253.402 109.856 252.658 110.66C249.486 114.264 245.63 117.197 241.314 119.289C236.998 121.381 232.309 122.59 227.522 122.843C222.735 123.097 217.945 122.392 213.433 120.768C208.921 119.144 204.777 116.634 201.244 113.386C197.711 110.137 194.86 106.215 192.857 101.849C190.854 97.4824 189.739 92.7595 189.578 87.9562C189.418 83.1529 190.214 78.3657 191.92 73.8745C193.627 69.3834 196.21 65.2785 199.518 61.7999C200.247 60.9835 200.705 59.9593 200.827 58.8698C200.862 58.596 200.843 58.318 200.77 58.0517V58.0136L186.84 45.2279H186.821ZM160.346 34.8015C165.188 29.9477 171.711 27.1552 178.557 27.0063C185.403 26.8574 192.041 29.3636 197.088 34.0023L211 46.7881C215.156 50.5933 216.314 55.7875 215.934 60.2397C215.536 64.6158 213.619 68.8777 210.658 72.1122C208.805 74.1385 207.368 76.5109 206.43 79.0939C205.491 81.677 205.07 84.42 205.188 87.1664C205.307 89.9128 205.965 92.6089 207.123 95.1006C208.281 97.5924 209.918 99.831 211.939 101.689C213.96 103.546 216.327 104.987 218.903 105.928C221.48 106.868 224.216 107.291 226.956 107.172C229.695 107.053 232.384 106.394 234.87 105.233C237.355 104.071 239.588 102.431 241.441 100.404C244.383 97.1509 248.463 94.8677 252.772 94.0877C255.202 93.6013 257.713 93.6884 260.104 94.3423C262.495 94.9961 264.702 96.1987 266.55 97.8549L283.384 113.304C285.979 115.689 288.075 118.566 289.551 121.769C291.027 124.973 291.853 128.438 291.982 131.964C292.111 135.49 291.54 139.007 290.302 142.31C289.064 145.613 287.183 148.636 284.77 151.205L159.53 284.618C157.091 287.216 154.157 289.296 150.901 290.735C147.645 292.175 144.135 292.944 140.577 292.997C137.019 293.05 133.486 292.387 130.189 291.045C126.892 289.704 123.897 287.712 121.383 285.189L104.226 267.97C97.6404 261.368 99.2346 251.873 102.954 246.28C105.623 242.254 106.82 237.427 106.341 232.618C105.863 227.808 103.739 223.313 100.33 219.895C96.9208 216.478 92.4369 214.348 87.6396 213.869C82.8422 213.389 78.0271 214.589 74.012 217.264C68.4133 220.994 58.9429 222.592 52.3574 215.971L34.7832 198.352C32.3156 195.879 30.3582 192.942 29.0228 189.71C27.6873 186.478 27 183.014 27 179.516C27 176.018 27.6873 172.554 29.0228 169.322C30.3582 166.09 32.3156 163.153 34.7832 160.68L160.346 34.8015Z", fill: "white" }),
        React__default['default'].createElement("path", { d: "M121.093 179.363C120.521 177.985 119.809 176.614 119.601 175.127C116.858 155.951 132.502 140.404 146.702 134.499C160.902 128.594 177.252 137.988 186.945 127.905C189.367 125.17 191.831 122.581 195.513 122.561C197.048 122.637 198.326 123.359 198.979 124.631C211.095 149.447 193.785 178.872 174.237 189.328C161.831 195.459 148.994 196.808 136.979 192.649C133.637 191.856 130.959 188.362 127.496 188.317C125.107 189.657 123.123 194.023 121.503 196.428C119.615 199.704 115.855 200.571 113.151 197.703C105.262 189.929 121.656 183.029 121.093 179.363V179.363ZM131.635 176.186C133.33 177.555 135.774 177.167 137.075 175.801C147.478 163.197 161.564 157.667 176.884 158.087C179.142 158.218 180.783 156.39 180.928 154.428C180.973 152.099 179.181 150.524 177.173 150.385C158.657 149.355 142.593 157.52 131.25 170.699C129.814 172.493 130.074 174.88 131.635 176.186V176.186Z", fill: "white" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 17.55 16.47" }, props),
        React__default['default'].createElement("path", { d: "M9.1,16.47H8.45A8.46,8.46,0,0,1,0,8V7H17.55V8A8.46,8.46,0,0,1,9.1,16.47Zm-7.59-8A7,7,0,0,0,8.45,15H9.1A7,7,0,0,0,16,8.45Z" }),
        React__default['default'].createElement("path", { d: "M8.62,7a5.65,5.65,0,0,1,.51-1.57A4.85,4.85,0,0,1,13,2.52a2.13,2.13,0,0,1,.79.15,2,2,0,0,1,1.09,1.21A4.43,4.43,0,0,1,14.62,7h1.61a5.65,5.65,0,0,0,0-3.59,3.44,3.44,0,0,0-1.93-2.07C12.1.36,9.24,1.87,7.8,4.7A7.28,7.28,0,0,0,7.08,7Z" }),
        React__default['default'].createElement("path", { d: "M1.34,7H2.91A5.33,5.33,0,0,1,2.64,6a4.71,4.71,0,0,1,.55-3.53,2.23,2.23,0,0,1,1.44-1A1.84,1.84,0,0,1,5,1.5c1.23,0,2.48,1.14,3.09,2.74a8,8,0,0,1,1-1.37C8,.94,6.2-.26,4.39.05A3.73,3.73,0,0,0,2,1.65a6.12,6.12,0,0,0-.78,4.68A5.61,5.61,0,0,0,1.34,7Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 19.99 12.76" }, props),
        React__default['default'].createElement("path", { d: "M20,8.44C19.24,3.67,15.6,0,11.26,0A8.87,8.87,0,0,0,3.35,5.67H2.82v0A3.33,3.33,0,0,0,0,9.19v3.5H1.66V9.58A2.1,2.1,0,0,1,3.77,7.47h0A2.11,2.11,0,0,1,5.88,9.58v3.11h.8L20,12.76Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 489.70988 411.5772" }, props),
        React__default['default'].createElement("path", { d: "M81.834,415.01551v30.73168a6.89367,6.89367,0,0,0,9.21307,6.4427,514.83761,514.83761,0,0,1,156.17116-21.77632c64.427,0,122.41139,9.40634,163.90242,24.54669a6.8937,6.8937,0,0,0,9.21307-6.44271v-33.502c-43.61709-16.42892-105.08049-25.77082-169.24985-25.77082S125.51553,398.58659,81.834,415.01551Z", transform: "translate(-6.19672 -43.78689)", fill: "#010101" }),
        React__default['default'].createElement("path", { d: "M325.75478,267.993,254.885,119.35981l-3.80119-8.18224-3.86562,8.18224L169.45478,282.61794,44.91729,173.73622,79.12805,386.34545c46.38747-16.17121,106.88448-24.93329,171.82693-24.93329s125.37505,8.76208,171.7625,24.93329L457.05711,173.7362,332.77733,282.61794Z", transform: "translate(-6.19672 -43.78689)", fill: "#010101" }),
        React__default['default'].createElement("circle", { cx: "244.88712", cy: "29.37873", r: "29.37874", fill: "#010101" }),
        React__default['default'].createElement("path", { d: "M53.87265,137.7215a23.838,23.838,0,1,0-23.90227,23.77357q.06433.0002.12869,0A23.77359,23.77359,0,0,0,53.87265,137.7215Z", transform: "translate(-6.19672 -43.78689)", fill: "#010101" }),
        React__default['default'].createElement("circle", { cx: "465.8719", cy: "93.93462", r: "23.838", fill: "#010101" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 541.16 532" }, props),
        React__default['default'].createElement("path", { fill: "#010101", d: "M552.54,34H448.64a18,18,0,0,0-13.71,6.49L165.25,360.86l-32.83-33a18.11,18.11,0,1,0-25.61,25.61l33.91,33.92-86.22,86A54.11,54.11,0,0,0,54.36,550l.14.13h0a54.12,54.12,0,0,0,76.53.14l.13-.14,86-86.22,33.92,33.91a18,18,0,0,0,25.51.11l.1-.11a18,18,0,0,0,.1-25.51l-.1-.1-33-32.83L564.08,169.65a18,18,0,0,0,6.5-13.71V52A18,18,0,0,0,552.54,34Z", transform: "translate(-29.42 -34)" }),
        React__default['default'].createElement("path", { fill: "#010101", d: "M276.37,172.54l-111.3-132A18,18,0,0,0,151.36,34H47.46a18,18,0,0,0-18,18v103.9a18,18,0,0,0,6.5,13.71L178.06,289.43Z", transform: "translate(-29.42 -34)" }),
        React__default['default'].createElement("path", { fill: "#010101", d: "M459.28,387.38l33.91-33.92a18.11,18.11,0,1,0-25.61-25.61l-32.83,33-18-20.57L326.52,415.7l28.14,23.63-33,32.83a18,18,0,0,0-.11,25.51l.11.1a18,18,0,0,0,25.51.11l.1-.11,33.91-33.91,86.05,86.22a54.21,54.21,0,0,0,76.66-76.66Z", transform: "translate(-29.42 -34)" })));
};

var StyledSvg$2 = styled__default['default'](Svg)(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  .st0{fill:#080505;}\n  .st1{fill:#F7CC13;}\n  .st2{fill:#E54040;}\n  .st3{fill:#FDFDFD;}\n  .st4{fill:#171717;}\n  .st5{fill:#FBFBFB;}\n  .st6{fill:#0E0E0E;}\n  .st7{fill:#1B1B1B;}\n  .st8{fill:#C7D5DB;}\n  .st9{fill:#6A6A6A;}\n  .st10{fill:#E24141;}\n  .st11{fill:#6C6C6A;}\n  .st12{fill:#343535;}\n  .st13{fill:#1D1D1D;}\n  .st14{fill:#AB3635;}\n"], ["\n  .st0{fill:#080505;}\n  .st1{fill:#F7CC13;}\n  .st2{fill:#E54040;}\n  .st3{fill:#FDFDFD;}\n  .st4{fill:#171717;}\n  .st5{fill:#FBFBFB;}\n  .st6{fill:#0E0E0E;}\n  .st7{fill:#1B1B1B;}\n  .st8{fill:#C7D5DB;}\n  .st9{fill:#6A6A6A;}\n  .st10{fill:#E24141;}\n  .st11{fill:#6C6C6A;}\n  .st12{fill:#343535;}\n  .st13{fill:#1D1D1D;}\n  .st14{fill:#AB3635;}\n"])));
var Icon$x = function (props) {
    return (React__default['default'].createElement(StyledSvg$2, __assign({ viewBox: "0 0 500 500" }, props),
        React__default['default'].createElement("path", { className: "st0", d: "M33.3,268.4c-3-7.2-6-14.3-9-21.5c-2-1.1-0.6-3.7-2.2-5c-1-5.6-3.8-10.6-5.6-16c-2.7-8.1-2.3-9.4,6.3-11.1\n        c12.3-2.4,24.5-4.6,36.9-6.3c5.1-0.7,7.1-2.7,6.3-7.8c-3.6,0.9-5.9,4-9.6,5.9c0.4-7,4.1-11.2,9.4-14.2c2.1-1.2,3.6-2.4,4.5-4.9\n        c22.5-62.1,64.9-105.3,126.4-128.4C328.5,9.8,469.5,94.9,488.7,234.4c15.7,114.2-63,222.1-176.8,242.4\n        C196.3,497.5,85.7,424.1,60.4,309.9c-0.5-2.2-0.7-3.7-3.6-3.2c-3.9,0.6-6.8-1.6-8.8-4.7c-3.3-5.3-6.1-11-7.2-17.3\n        c3.7,1.5,3.6,6.3,6.7,8.4c1.7-3.1-1.1-7,2.3-9.4c0.1,3.9,2.3,7.2,3.6,10.7c2.2,5.6,5.2,6.3,10.3,2.5c3.5,0.2,7.5,1.3,7.7-4.5\n        c0-0.8,1.6-1.5,2.4-2.3c3,0,6.1,0,9.1,0c5.9-0.3,11.7-1.1,17.5-2.5c5.7-1.4,11-3.6,16.3-5.9c7-3,13.5-6.6,13.3-16.4\n        c-0.1-5.8,2.1-11.7,5.1-17c3.6-6.4,10.5-9.9,16.1-7.8c6.9,2.6,12,7.3,15.6,13.9c1.5,2.7,1.3,7.1,5.8,7.7c-0.7,6,2.6,11.2,3.9,16.8\n        c0.4,1.7,1.7,2.3,3.4,2c3.6-0.7,7.2-1.2,10.8-1.8c3-1,6.1-1,9.2-1.1c3.3-0.5,6.7-0.4,9.8-1.9c1.2,0,2.3,0.1,3.5,0\n        c20.7-3,41.5-6,62.2-9c2.3-0.3,3.1-1.4,3.3-3.6c0.6-9.7,1.5-19.5,1.9-29.2c0.7-15.4,1.4-30.7,3-46c0.4-3.4-1.1-5-4.2-4\n        c-5.3,1.7-10.8,1.5-16.1,2.5c-12.2,2.1-24.4,4.2-36.7,5.4c-2.2,0.4-4.4,0.7-6.6,1.1c-3.8,0.6-7.5,1.2-11.3,1.8\n        c-7.1,1.1-14.4,1-21.2,3.9c-8.3,0.1-16.4,1.6-24.6,3c-10.9,1.9-21.9,3.3-32.8,4.8c-10.5,1.5-20.9,2.9-31.4,4.3\n        c-2.3,0.9-5.1,0.2-7.2,1.9c-3.5,0.3-7.1,0.6-10.6,1c-4,0.6-8.1,1-12.1,1.7c-3.1,0.6-6.7-0.4-9.3,2.3c-11.3-0.3-22.2,2.3-33.3,4\n        c-3,0.5-2.4,1.9-1.6,3.8c3.3,7.7,6.4,15.5,9.7,23.3c0.7,1.6,1.5,3,3.5,3.1c-0.1,1.6-0.1,3.3-0.3,4.9\n        C37.1,261.1,37.1,265.5,33.3,268.4z M353.9,289c0.4,0.8,1.1,1,2,0.9c17-3.2,33.4-7.8,49.1-15.3c24.5-11.6,46.3-26.3,63.3-47.6\n        c5.5-6.9,8.6-14.3,5.1-23.4c-1.6-4.1-2.7-8.5-4.4-12.5c-1.4-3.4-1.2-8-5.1-10.2c-0.2-1.7,0.6-4.2-1.9-4.5c-1.7-0.2-1.4,2.3-2.1,3.5\n        c-1,1.9-1.7,4-2.7,5.9c-11.3,20.5-28.2,35.5-47.5,48c-22.9,14.8-47.6,25.6-74.1,32.3c-3.9,1-7.7,2.3-13,3.9\n        c7.4,2.7,12.9,5.7,18.3,9c4.1,2.5,7.1,6.5,11.9,7.9l0,0C352.8,287.9,353.1,288.6,353.9,289L353.9,289z M107,135\n        C107,135,107,134.9,107,135c-1.8,2.2-3.7,4.4-6,7.2c4.4-0.9,4.9-1.3,8.2-5c3-1.7,6-3.3,9-5c17.9-10.3,37.1-16.5,57.7-17.1\n        c45.3-1.3,80.1,18.1,106,54.7c1.8,2.6,3.4,4.7,7,4.3c2.5-0.3,4,1.7,4.5,3.9c0.4,2.1,0.3,4.3,0.3,6.4c0,5.6,0,5.6,5,3.2\n        c19.2-9.2,38.4-18.4,57.6-27.5c5.3-2.5,7.8-1.9,10.7,3.3c4.2,7.7,8,15.7,12.1,23.5c1,1.8,1,3.5-0.1,5.2c-5.9,3.3-11.9,6.6-17.9,9.9\n        c-5.3,2.9-7.1,2.4-9.6-3.3c-1.5-3.2-2.8-3.6-6-2c-12.6,6.3-25.3,12.6-38.2,18.4c-3.7,1.7-4.8,3.5-3,7.1c0.1,0.6,0.2,1.3,0.3,1.9\n        c-0.1,0.1-0.2,0.3-0.2,0.4c0.1,0.3,0.3,0.5,0.4,0.7c1.8,11.2,3.3,22.4,2.9,33.8c-0.1,3.3,0.7,4.2,4.2,3.5\n        c37.5-7.5,72.5-21,103.5-43.8c17.6-12.9,32-28.5,39.9-49.4c1.4-3.8,1.1-6.7-0.9-10.2c-10.6-18.2-23.4-34.8-38.9-49.2\n        c-31.5-29.3-68.5-47.4-111-53.8c-35.9-5.5-71.1-2.3-105.1,10.7c-36.2,13.7-67,35.1-90.5,66.2C107.9,133.2,107.1,133.8,107,135z\n        M269,363c-0.1,1.5,0.8,2.4,2,3.1c1.1,1.5,1.3,3.3,2.4,4.9c6.5,8.9,10.9,18.8,12.6,29.8c0.2,1.6,0.7,3.6,2.6,2.5\n        c2-1.1,4.2-1,6.1-1.9c19.2-9,38.6-17.6,56.3-29.4c2.4-1.6,4.9-1.4,6.7,0.7c1.9,2.2,1.8,4.8-0.7,6.5c-3.5,2.5-7,4.8-10.7,6.9\n        c-11,6.2-21.9,12.4-33.3,17.7c-2.3,1.1-2.9,2.6-3,5.1c-0.4,7.1,1.5,13.8,3.4,20.5c1.3,4.7,2.1,9.7,5.6,13.5\n        c0.8,1.8,1.6,3.6,2.2,5.5c1.5,4.6,4.9,7.8,8,11.2c4.7,5.3,8.5-0.7,12.8-1.3c0.7-0.1,1.3-0.3,1.9-0.5c10.7-3.1,21.2-7.4,30.4-13.3\n        c12.6-8,25.7-15.4,36.5-26.1c6-6,12.8-11.2,18-17.8c7.7-9.8,16-19.2,22.3-30.2c5.3-9.3,10.3-18.9,14.2-28.8\n        c3.5-8.9,6.9-17.9,9.7-27.2c3.3-11,3.8-22.3,5.6-33.4c1.6-9.8,2-20.1,0.4-30.1c-1-6.8-1.6-13.6-2.4-20.5c-2.1,0.4-2.8,2-3.5,3.1\n        c-4.6,6.7-9.7,12.9-16.1,18.1c-5,4.1-10.7,7.5-15,12.4c-7.6,4.6-14.9,9.8-22.9,13.8c-17.7,8.9-35.9,16.5-55.6,19.8\n        c-8.4,1.4-16.5,2.4-23.3-5.4c-2.5-2.9-6.2-6.1-11-6.2c-1.5-3.3-3.5-4.9-6.8-1.9c-16.7,15.4-34.1,30-49.6,46.7\n        c-5.7,6.2-11.3,12.6-16.8,18.9c-0.9,1-2.6,2.7-0.7,3.7C261.8,355.8,264.7,360.2,269,363L269,363z M296.2,225.9\n        c-0.6-1.6,0.9-4.6-2.1-4.5c-2.7,0-3,2.5-2.8,4.8c0,0.3,0.1,0.6,0.2,1c-0.2,2.1-0.5,4.3-0.7,6.4c-0.7,11.1-1.4,22.3-2.1,33.4\n        c-0.3,4.8-1.9,8.1-7.4,8.8c-33.5,4.7-66.9,9.6-100.4,14.3c-7.4,1.1-10.5-1-13.1-8.2c-1.7-4.7-3.1-9.5-5-14.1\n        c-2.5-6-5.5-11.8-10.5-16.2c-3.5-3.1-6-2.8-8.7,1c-2.3,3.4-3.3,7.3-4.5,11.1c1.3,0.4,2,0,2.7-0.5c6.1-4.7,9-4.4,13.5,1.6\n        c5.4,7.2,8.7,15.3,9.1,24.4c0.1,2.9-0.2,5.8-3,7.5c-23.2,14.5-47.9,19.6-74.3,10c-4.9-1.8-9.4-2.3-14.5-1.7\n        c-3.4,0.4-3.8,1.5-3.1,4.7c5.5,22.9,14.4,44.3,27.1,64.1c15.7,24.6,35.3,45.4,60,61.2c0.7,0.6,1.4,1.4,2.2,1.9\n        c34.3,22.1,71.9,33.5,112.7,33.9c15.4,0.1,30.6-1.5,45.6-4.8c2.1-0.4,3.8-0.6,1.6-3.2c-4.3-5.2-7-11.3-10.2-17.1\n        c-3.9-10.6-6.7-21.5-7.4-32.8c0.6-2.9,1.1-5-3.3-3.1c-15.4,6.5-31.3,11.3-48,12.5c-1.5-0.1-3-0.2-4.5-0.3\n        c-17.2-1.2-25.5-11.6-22.4-28.6c2-11.4,7.8-21.2,14.1-30.6c13.6-20.5,30.4-38.3,48.4-54.9c4.1-3.8,8-8,9.3-13.4\n        C300.2,271.8,301.4,248.9,296.2,225.9z M99.9,197.5c-8.2-2.6-15.5-2.9-22.7-1.3c-2.8,0.6-5.6,5.6-4.6,8.7c1,3.2,3.8,0.9,5.4,0.7\n        c64.5-9.7,129-19.6,193.5-29.4c3.8-0.6,4.5-1.1,2-4.5c-32.1-44.7-87.2-61.1-138.3-40.5c-17.9,7.2-34.7,16.3-46.6,32.2\n        c-5.5,7.4-9.1,15.9-11.9,25C85.8,188,93.5,189.5,99.9,197.5z M252.2,413c6.3-0.2,14.4-2.2,22.4-4.3c3-0.8,3.5-2.4,3-5.1\n        c-3.6-16.9-11-31.6-23.6-43.6c-1.9-1.8-3-1.8-4.6,0.4c-6.3,9.2-12.4,18.5-16,29.2C227.9,405.8,233.1,413.1,252.2,413z M293,204.1\n        c0,1.5,0,2.2,0,2.8c-0.3,3.7-0.1,5.7,4.7,3.5c4.4-2,8.2-4.9,12.7-6.7c12.8-5.3,25.6-11,38.3-16.6c4.7-2,6.9-1.5,9.2,3.3\n        c1.3,2.7,2.4,2.9,4.3,0.9c1.1-1.2,2.7-1.1,4.1-1.6c2.5-0.8,3.3-2.3,2-4.9c-2.5-4.8-5-9.7-7-14.8c-1.1-2.9-2.3-3-4.8-1.8\n        c-19,8.9-38.1,17.9-57.2,26.6C294.6,196.9,291.4,199.3,293,204.1z M84.8,297c0.2,0.5,0.1,0.8,0.2,0.8c21.7,11.2,50.6,5.8,69.1-5.6\n        c1.9-1.2,2-2.9,1.7-4.8c-1.1-5.9-3.3-11.5-6.2-16.7c-1.3-2.3-2.2-2.6-4.3-0.5C128.8,287.1,108.8,296.2,84.8,297z M305,290.4\n        c4-2.9,7.6-5.5,11.1-8.2c1-0.8,2.5-2,1.5-3.2c-1.7-2-4.3-2.1-6.8-2c-1.8,0-4.1-0.3-4.5,2C305.6,282.6,305.5,286.3,305,290.4z" }),
        React__default['default'].createElement("path", { className: "st1", d: "M50,283.7c-3.5,2.4-0.7,6.3-2.3,9.4c-3.1-2.1-3-6.9-6.7-8.4c-3.3-4-7.3-6.7-12.7-6.8c-0.9,0-2.3,0.1-2.6-1\n        c-0.3-1.3,1-2,1.8-2.7c2.1-1.7,5.1-2.7,5.9-5.8c3.8-2.9,3.8-7.3,4.5-11.4c0.3-1.6,0.2-3.2,0.3-4.9c3.4,4,6.8,8.1,10.2,12.1\n        c3.5,3.3,8.7,2.4,12.7,4.7C50.4,278.7,50.4,278.7,50,283.7z" }),
        React__default['default'].createElement("path", { className: "st2", d: "M304.6,224c-0.1-0.6-0.2-1.3-0.3-1.9c12.8-5.7,25.6-11.3,38.4-17c3.1-1.4,5.1-1.3,7,1.9c2,3.3,5.1,3.7,8.7,2.4\n        c5.1-2,9.8-4.6,14.6-7.2c4.3-2.3,6.8-5.1,6-10.2c1.1-1.7,1.1-3.3,0.1-5.2c-4.1-7.8-7.9-15.8-12.1-23.5c-2.8-5.2-5.4-5.8-10.7-3.3\n        c-19.2,9.1-38.4,18.3-57.6,27.5c-5,2.4-4.9,2.4-5-3.2c0-2.2,0.1-4.4-0.3-6.4c-0.5-2.2-2-4.2-4.5-3.9c-3.7,0.4-5.2-1.7-7-4.3\n        c-25.9-36.5-60.7-55.9-106-54.7c-20.6,0.6-39.9,6.8-57.7,17.1c-3,1.7-6,3.3-9,5c-1.4-0.1-2.1-0.8-2.3-2.2c0,0,0,0,0,0\n        c1.4,0,2.1-0.7,2-2.1c23.6-31.1,54.3-52.5,90.5-66.2c34-12.9,69.2-16.1,105.1-10.7c42.5,6.5,79.5,24.6,111,53.8\n        c15.5,14.4,28.2,30.9,38.9,49.2c2,3.5,2.3,6.4,0.9,10.2c-7.8,20.9-22.3,36.5-39.9,49.4c-31,22.8-66,36.3-103.5,43.8\n        c-3.5,0.7-4.4-0.2-4.2-3.5c0.4-11.4-1.1-22.6-2.9-33.8C304.8,224.8,304.7,224.4,304.6,224z" }),
        React__default['default'].createElement("path", { className: "st3", d: "M156.7,435.1c-24.7-15.8-44.3-36.6-60-61.2c-12.7-19.8-21.5-41.2-27.1-64.1c-0.8-3.3-0.3-4.3,3.1-4.7\n        c5-0.6,9.5-0.1,14.5,1.7c26.4,9.6,51,4.5,74.3-10c2.8-1.7,3.1-4.6,3-7.5c-0.4-9.1-3.7-17.2-9.1-24.4c-4.5-6.1-7.5-6.3-13.5-1.6\n        c-0.7,0.5-1.4,0.9-2.7,0.5c1.2-3.8,2.2-7.8,4.5-11.1c2.6-3.8,5.2-4.1,8.7-1c5,4.4,8,10.2,10.5,16.2c1.9,4.6,3.3,9.4,5,14.1\n        c2.6,7.2,5.7,9.2,13.1,8.2c33.5-4.7,66.9-9.6,100.4-14.3c5.5-0.8,7.2-4,7.4-8.8c0.7-11.1,1.4-22.3,2.1-33.4\n        c0.1-2.1,0.4-4.3,0.7-6.4c1.7,0.1,3.2-0.5,4.7-1.2c5.2,23,3.9,45.9-1.5,68.7c-1.3,5.4-5.2,9.6-9.3,13.4\n        c-18,16.7-34.8,34.4-48.4,54.9c-6.3,9.4-12,19.2-14.1,30.6c-3,17,5.3,27.4,22.4,28.6c1.5,0.1,3,0.2,4.5,0.3c0.5,1.7,2,1.5,3.3,1.5\n        c16.8,0.1,33.2-2.1,48.1-10.8c0.8,11.3,3.5,22.2,7.4,32.8c-1.7,0.1-3.4,0-5,0.4c-13.9,4-28.2,3.8-42.4,4.3\n        c-9.8,0.3-19.8-0.7-29.7-1.4c-18.9-1.4-37.3-5.4-55.7-9.7C169.5,438,163.6,434.4,156.7,435.1z" }),
        React__default['default'].createElement("path", { className: "st4", d: "M331.2,285.9c4.7,0.2,8.5,3.4,11,6.2c6.8,7.8,14.9,6.8,23.3,5.4c19.7-3.3,37.9-10.9,55.6-19.8\n        c7.9-4,15.3-9.2,22.9-13.8c8.8-0.6,16.4-4.3,23.9-8.5c1.3-0.7,2.4-2,4-1.2c1.8,1,0.7,2.5,0.5,4c-0.9,7.7-2.4,15.4-4.6,22.7\n        c-1.9,6.1-2.6,12.4-5.2,18.4c-3,6.7-5.5,13.7-8.4,20.5c-3.9,9-9.1,17.3-14.2,25.5c-3.7,6-8.1,11.6-12.3,17.3\n        c-4.8,6.4-9.8,12.8-14.9,19c-1.8,2.1-4.8,3.2-6.5,5.3c-8.6,10.4-19.8,18-30.4,26.1c-6.7,5.2-14.2,9.6-21.8,13.9\n        c-11.3,6.3-23,11.5-35,16c-3.5-3.8-4.3-8.8-5.6-13.5c-1.9-6.7-3.8-13.4-3.4-20.5c0.1-2.4,0.7-4,3-5.1c11.4-5.3,22.4-11.5,33.3-17.7\n        c3.7-2.1,7.3-4.5,10.7-6.9c2.5-1.8,2.6-4.3,0.7-6.5c-1.9-2.2-4.3-2.4-6.7-0.7c-17.7,11.8-37.1,20.4-56.3,29.4\n        c-1.9,0.9-4.1,0.8-6.1,1.9c-1.9,1-2.3-1-2.6-2.5c-1.7-11-6.1-20.9-12.6-29.8c-1.1-1.5-1.3-3.4-2.4-4.9c0-1.5,0.2-3.1-2-3.1l0,0\n        c0.2-2.5-0.9-4.6-2.7-6.1c-3.2-2.6-2.3-5-0.1-7.6c5.5-6.2,10.9-12.5,16.5-18.5C297.9,314.8,314.1,299.8,331.2,285.9z" }),
        React__default['default'].createElement("path", { className: "st5", d: "M99.9,197.5c-6.4-8-14.1-9.5-23.1-9.1c2.8-9.1,6.3-17.6,11.9-25c11.9-16,28.7-25,46.6-32.2\n        c51-20.6,106.2-4.3,138.3,40.5c2.4,3.4,1.7,4-2,4.5c-64.5,9.8-129,19.7-193.5,29.4c-1.7,0.3-4.4,2.5-5.4-0.7\n        c-1-3.2,1.9-8.1,4.6-8.7C84.4,194.6,91.6,194.8,99.9,197.5z M198.1,163.7c14.2-8.7,28.5-9.1,43.3-2.7c-2.7-7.9-9.4-11.9-19.6-12.1\n        C211,148.8,201.8,154.3,198.1,163.7z" }),
        React__default['default'].createElement("path", { className: "st6", d: "M319,442.9c12-4.5,23.7-9.7,35-16c7.6-4.3,15.1-8.7,21.8-13.9c10.5-8.1,21.7-15.7,30.4-26.1\n        c1.8-2.1,4.7-3.2,6.5-5.3c5.2-6.2,10.1-12.5,14.9-19c4.3-5.6,8.6-11.3,12.3-17.3c5.1-8.3,10.3-16.5,14.2-25.5\n        c2.9-6.8,5.4-13.7,8.4-20.5c2.7-5.9,3.3-12.3,5.2-18.4c2.3-7.4,3.8-15,4.6-22.7c0.2-1.4,1.3-3-0.5-4c-1.6-0.8-2.7,0.5-4,1.2\n        c-7.5,4.2-15.1,7.9-23.9,8.5c4.4-4.9,10-8.2,15-12.4c6.3-5.2,11.5-11.3,16.1-18.1c0.7-1.1,1.4-2.6,3.5-3.1\n        c0.8,6.9,1.4,13.8,2.4,20.5c1.6,10.1,1.1,20.4-0.4,30.1c-1.8,11.1-2.3,22.4-5.6,33.4c-2.8,9.3-6.2,18.3-9.7,27.2\n        c-3.9,9.9-8.9,19.4-14.2,28.8c-6.3,11-14.6,20.3-22.3,30.2c-5.1,6.6-12,11.9-18,17.8c-10.7,10.7-23.9,18.1-36.5,26.1\n        c-9.3,5.9-19.7,10.2-30.4,13.3c-0.6,0.2-1.3,0.4-1.9,0.5c-4.3,0.6-8,6.6-12.8,1.3c-3.1-3.4-6.5-6.7-8-11.2\n        C320.6,446.6,319.7,444.8,319,442.9z" }),
        React__default['default'].createElement("path", { className: "st7", d: "M172.9,262c-4.5-0.6-4.3-5-5.8-7.7c-3.6-6.6-8.7-11.3-15.6-13.9c-5.6-2.1-12.5,1.5-16.1,7.8\n        c-3,5.3-5.3,11.1-5.1,17c0.2,9.8-6.3,13.5-13.3,16.4c-5.2,2.2-10.6,4.4-16.3,5.9c-5.8,1.4-11.6,2.2-17.5,2.5\n        c3.4-15.9,6.9-31.8,10.2-47.7c2.1-10.4,5.1-20.6,5.7-31.3c10.5-1.4,20.9-2.8,31.4-4.3c10.9-1.5,21.9-2.9,32.8-4.8\n        c8.2-1.4,16.3-2.9,24.6-3c-1.6,7.1-3.1,14.2-4.8,21.2C179.7,234.1,176.3,248.1,172.9,262z" }),
        React__default['default'].createElement("path", { className: "st7", d: "M226.9,192.1c12.3-1.3,24.5-3.3,36.7-5.4c5.4-0.9,10.9-0.7,16.1-2.5c3.1-1,4.5,0.6,4.2,4\n        c-1.6,15.3-2.3,30.7-3,46c-0.4,9.7-1.3,19.5-1.9,29.2c-0.1,2.2-1,3.2-3.3,3.6c-20.8,2.9-41.5,6-62.2,9c-1.1,0.2-2.3,0-3.5,0\n        c3.2-15.1,6.5-30.2,9.6-45.3C222.2,217.8,225.7,205.2,226.9,192.1z" }),
        React__default['default'].createElement("path", { className: "st4", d: "M464,181c3.9,2.2,3.7,6.8,5.1,10.2c1.6,4,2.8,8.4,4.4,12.5c3.6,9.1,0.5,16.5-5.1,23.4\n        c-17,21.3-38.9,36.1-63.3,47.6c-15.8,7.4-32.2,12.1-49.1,15.3c-0.4-0.8-1.1-1-2-0.9c0,0,0,0,0,0c0-0.9-0.1-1.6-1-2l0,0\n        c-0.2-2.5-2.1-3.6-3.8-4.9c-4.3-3.4-8.6-6.8-13.4-10.6c11-2.6,20.9-5.7,30.7-9.3c19.2-7.1,37.4-16.2,54.1-28\n        C440,220.5,457,204.9,464,181z" }),
        React__default['default'].createElement("path", { className: "st8", d: "M156.7,435.1c6.9-0.7,12.8,2.9,19.3,4.3c18.4,4.3,36.7,8.3,55.7,9.7c9.9,0.7,19.9,1.7,29.7,1.4\n        c14.1-0.5,28.5-0.3,42.4-4.3c1.6-0.5,3.3-0.3,5-0.4c3.2,5.8,6,11.9,10.2,17.1c2.1,2.6,0.4,2.8-1.6,3.2c-15,3.2-30.2,4.9-45.6,4.8\n        c-40.9-0.4-78.4-11.7-112.7-33.9C158.1,436.5,157.4,435.8,156.7,435.1z" }),
        React__default['default'].createElement("path", { className: "st9", d: "M172.9,262c3.4-13.9,6.8-27.9,10.1-41.8c1.7-7.1,3.2-14.1,4.8-21.2c6.8-2.9,14.1-2.9,21.2-3.9\n        c-0.5,3.3-0.8,6.6-1.5,9.8c-4.8,24.9-11.1,49.4-16.5,74.1c-3.6,0.6-7.2,1.2-10.8,1.8c-1.8,0.3-3.1-0.3-3.4-2\n        C175.5,273.2,172.2,268.1,172.9,262z" }),
        React__default['default'].createElement("path", { className: "st10", d: "M252.2,413c-19.1,0.1-24.3-7.2-18.8-23.4c3.6-10.7,9.7-20,16-29.2c1.5-2.2,2.6-2.2,4.6-0.4\n        c12.6,12,20.1,26.7,23.6,43.6c0.6,2.7,0,4.3-3,5.1C266.6,410.8,258.5,412.8,252.2,413z" }),
        React__default['default'].createElement("path", { className: "st11", d: "M50,283.7c0.5-5,0.5-5,11.1-14.8c-4.1-2.3-9.2-1.4-12.7-4.7c0.5-0.4,1.3-0.7,1.4-1.2c3.4-15,6.8-30,10.2-45.1\n        c2.6-2.7,6.1-1.7,9.3-2.3c4-0.7,8.1-1.2,12.1-1.7c-2.1,17.6-7,34.7-10.7,52c-2.2,10.3-5.4,20.5-6.7,31c-5.1,3.8-8.1,3.1-10.3-2.5\n        C52.2,290.9,50.1,287.6,50,283.7z" }),
        React__default['default'].createElement("path", { className: "st7", d: "M293,204.1c-1.5-4.8,1.7-7.2,6.3-9.3c19.1-8.7,38.2-17.7,57.2-26.6c2.5-1.2,3.6-1.1,4.8,1.8\n        c2,5.1,4.5,9.9,7,14.8c1.4,2.6,0.5,4.1-2,4.9c-1.4,0.5-2.9,0.4-4.1,1.6c-1.9,2-3,1.8-4.3-0.9c-2.3-4.8-4.5-5.3-9.2-3.3\n        c-12.7,5.6-25.5,11.2-38.3,16.6c-4.5,1.9-8.3,4.8-12.7,6.7c-4.8,2.1-5,0.1-4.7-3.5C293,206.3,293,205.6,293,204.1z" }),
        React__default['default'].createElement("path", { className: "st12", d: "M464,181c-6.9,23.9-24,39.5-43.4,53.2c-16.8,11.9-34.9,20.9-54.1,28c-9.8,3.6-19.7,6.7-30.7,9.3\n        c4.8,3.8,9.1,7.2,13.4,10.6c1.7,1.3,3.6,2.4,3.8,4.9c-4.8-1.4-7.8-5.4-11.9-7.9c-5.4-3.3-10.9-6.3-18.3-9c5.3-1.6,9.1-2.9,13-3.9\n        c26.5-6.8,51.2-17.6,74.1-32.3c19.3-12.4,36.2-27.5,47.5-48c1-1.9,1.7-4,2.7-5.9c0.7-1.2,0.4-3.7,2.1-3.5\n        C464.6,176.8,463.7,179.3,464,181z" }),
        React__default['default'].createElement("path", { className: "st10", d: "M84.8,297c23.9-0.8,44-9.9,60.5-26.8c2.1-2.1,3-1.7,4.3,0.5c3,5.3,5.1,10.8,6.2,16.7c0.4,1.9,0.3,3.6-1.7,4.8\n        c-18.5,11.3-47.4,16.7-69.1,5.6C85,297.8,85,297.5,84.8,297z" }),
        React__default['default'].createElement("path", { className: "st13", d: "M59.9,217.9c-3.4,15-6.7,30.1-10.2,45.1c-0.1,0.5-0.9,0.8-1.4,1.2c-3.4-4-6.8-8.1-10.2-12.1\n        c-2-0.1-2.8-1.5-3.5-3.1c-3.2-7.8-6.4-15.5-9.7-23.3c-0.8-1.9-1.4-3.3,1.6-3.8C37.7,220.3,48.6,217.6,59.9,217.9z" }),
        React__default['default'].createElement("path", { className: "st13", d: "M191,279c5.4-24.7,11.8-49.3,16.5-74.1c0.6-3.2,1-6.5,1.5-9.8c3.8-0.6,7.5-1.2,11.3-1.8\n        c-7.2,28.1-14,56.3-20.1,84.7C197.1,278,194,278,191,279z" }),
        React__default['default'].createElement("path", { className: "st13", d: "M63.9,296.9c1.3-10.5,4.5-20.7,6.7-31c3.7-17.3,8.6-34.3,10.7-52c3.5-0.3,7.1-0.6,10.6-1\n        c-3.1,12.9-6.2,25.8-9.2,38.7c-3,12.8-5.7,25.6-8.6,38.4c-0.9,0.8-2.4,1.5-2.4,2.3C71.5,298.2,67.4,297.1,63.9,296.9z" }),
        React__default['default'].createElement("path", { className: "st9", d: "M200.2,277.9c6.1-28.4,12.8-56.6,20.1-84.7c2.2-0.4,4.4-0.7,6.6-1.1c-1.3,13.1-4.7,25.8-7.3,38.6\n        c-3.1,15.1-6.4,30.2-9.6,45.3C206.9,277.5,203.5,277.4,200.2,277.9z" }),
        React__default['default'].createElement("path", { className: "st9", d: "M74.1,290.1c2.9-12.8,5.6-25.6,8.6-38.4c3-12.9,6.1-25.8,9.2-38.7c2.1-1.8,4.8-1.1,7.1-1.9\n        c-0.6,10.7-3.6,20.9-5.7,31.3c-3.2,15.9-6.8,31.8-10.2,47.7C80.1,290,77.1,290.1,74.1,290.1z" }),
        React__default['default'].createElement("path", { className: "st12", d: "M331.2,285.9c-17.1,13.9-33.3,28.8-48.4,44.8c-5.7,6-11,12.3-16.5,18.5c-2.3,2.6-3.1,5,0.1,7.6\n        c1.8,1.5,2.9,3.6,2.7,6.1c-4.2-2.8-7.1-7.2-11.7-9.6c-1.9-1-0.2-2.7,0.7-3.7c5.6-6.4,11.1-12.8,16.8-18.9\n        c15.5-16.7,32.9-31.3,49.6-46.7C327.7,281,329.7,282.6,331.2,285.9z" }),
        React__default['default'].createElement("path", { className: "st14", d: "M379,192c0.8,5.1-1.6,7.9-6,10.2c-4.8,2.5-9.5,5.2-14.6,7.2c-3.6,1.4-6.7,1-8.7-2.4c-1.9-3.2-3.9-3.3-7-1.9\n        c-12.7,5.8-25.6,11.4-38.4,17c-1.7-3.6-0.7-5.4,3-7.1c12.8-5.9,25.5-12.1,38.2-18.4c3.1-1.6,4.5-1.2,6,2c2.6,5.7,4.3,6.1,9.6,3.3\n        C367.1,198.6,373,195.3,379,192z" }),
        React__default['default'].createElement("path", { className: "st8", d: "M301.3,413.1c-14.9,8.7-31.2,10.9-48.1,10.8c-1.3,0-2.7,0.3-3.3-1.5c16.8-1.2,32.7-5.9,48-12.5\n        C302.3,408.1,301.9,410.2,301.3,413.1z" }),
        React__default['default'].createElement("path", { className: "st4", d: "M305,290.4c0.4-4.1,0.6-7.8,1.2-11.5c0.4-2.3,2.7-2,4.5-2c2.5,0,5.1,0,6.8,2c1,1.2-0.4,2.4-1.5,3.2\n        C312.6,284.9,309,287.5,305,290.4z" }),
        React__default['default'].createElement("path", { className: "st8", d: "M296.2,225.9c-1.5,0.7-3,1.4-4.7,1.2c-0.1-0.3-0.2-0.6-0.2-1c-0.2-2.3,0.1-4.8,2.8-4.8\n        C297.1,221.3,295.6,224.3,296.2,225.9z" }),
        React__default['default'].createElement("path", { className: "st10", d: "M107,134.9c0.1,1.4,0.9,2.1,2.3,2.2c-3.4,3.7-3.9,4.1-8.2,5C103.3,139.4,105.1,137.2,107,134.9z" }),
        React__default['default'].createElement("path", { className: "st12", d: "M269,363c2.2,0.1,2,1.7,2,3.1C269.8,365.4,268.9,364.5,269,363z" }),
        React__default['default'].createElement("path", { className: "st10", d: "M109,132.9c0,1.4-0.6,2.1-2,2.1C107.1,133.8,107.9,133.2,109,132.9z" }),
        React__default['default'].createElement("path", { className: "st12", d: "M352.9,287c0.9,0.4,1,1.2,1,2C353.1,288.6,352.8,287.9,352.9,287z" }),
        React__default['default'].createElement("path", { className: "st12", d: "M353.9,289c0.8,0,1.6,0.1,2,0.9C355.1,290,354.3,289.8,353.9,289z" }),
        React__default['default'].createElement("path", { className: "st14", d: "M304.6,224c0.1,0.4,0.2,0.7,0.3,1.1c-0.2-0.2-0.3-0.5-0.4-0.7C304.4,224.3,304.6,224.2,304.6,224z" }),
        React__default['default'].createElement("path", { className: "st6", d: "M198.1,163.7c3.7-9.5,12.9-14.9,23.7-14.7c10.2,0.2,16.9,4.2,19.6,12.1C226.6,154.7,212.3,155,198.1,163.7z" })));
};
var templateObject_1$P;

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 450 400" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("circle", { fill: "#E74342", cx: "199.9", cy: "199.9", r: "199.9" }),
            React__default['default'].createElement("path", { fill: "#F7FCFE", d: "M104.7,302.5c-10.6,0-21.3,0-31.9,0c-2.2,0-4.4-0.4-6.5-1.1c-6.5-2.3-9.4-7.6-7.8-14.3\n          c0.6-2.4,1.6-4.6,2.8-6.7c20.7-36.4,41.3-72.8,62-109.1c21-37,42.1-74.1,63.1-111.1c1.5-2.7,3.3-5.3,5.8-7.2\n          c4.7-3.7,10.1-3.5,14.7,0.4c2.1,1.8,3.7,3.9,5,6.3c10.2,18.7,20.9,37.1,31.4,55.6c2.6,4.6,4,9.6,4.6,14.8\n          c0.8,7.7-0.3,15.2-3.8,22.1c-2,4.1-4.5,8-6.8,12c-22.9,39.7-45.8,79.5-68.8,119.1c-5.9,10.1-15,16.1-26.4,18.6\n          c-2.4,0.5-4.9,0.7-7.3,0.7C124.7,302.5,114.7,302.6,104.7,302.5C104.7,302.6,104.7,302.5,104.7,302.5z" }),
            React__default['default'].createElement("path", { fill: "#F7FCFE", d: "M282.4,302.5c-14.7,0-29.4,0-44.1,0c-2.5,0-4.8-0.4-7.1-1.3c-5.9-2.3-8.7-7.7-7.4-14c0.5-2.4,1.5-4.7,2.8-6.8\n          c14.5-25,29-50,43.5-75c1.4-2.3,2.9-4.5,5.1-6.3c4.8-4,10.5-4,15.3,0c2.1,1.8,3.7,3.9,5,6.3c14.3,25.1,28.6,50.1,42.8,75.2\n          c1.5,2.7,2.7,5.4,3,8.5c0.5,6-2.5,10.4-8.3,12.3c-2.6,0.9-5.2,1.1-7.9,1.1C311,302.6,296.7,302.6,282.4,302.5\n          C282.4,302.6,282.4,302.6,282.4,302.5z" }))));
};

var StyledSvg$1 = styled__default['default'](Svg)(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  fill: unset;\n  .cls-1 {\n    fill: #fff;\n  }\n  .cls-2 {\n    fill: url(#linear-gradient);\n  }\n  .cls-3 {\n    fill: #111f2c;\n  }\n  .cls-4 {\n    fill: #5e7083;\n  }\n  .cls-5 {\n    fill: #04182d;\n  }\n  .cls-6 {\n    fill: #97a3af;\n  }\n  .cls-7 {\n    fill: #e94043;\n  }\n  .cls-8 {\n    fill: #515171;\n  }\n  .cls-9 {\n    fill: #bac7d4;\n  }\n  .cls-10 {\n    fill: #bebcff;\n  }\n  .cls-11 {\n    fill: #243c54;\n  }\n  .cls-12 {\n    fill: url(#linear-gradient-2);\n  }\n  .cls-13 {\n    fill: url(#linear-gradient-3);\n  }\n  .cls-14 {\n    fill: #af1c2f;\n  }\n  .cls-15 {\n    fill: #293039;\n  }\n  .cls-16 {\n    fill: none;\n    stroke: #000;\n    stroke-miterlimit: 10;\n    stroke-width: 9px;\n  }\n  .cls-17 {\n    fill: #a3adb8;\n  }\n"], ["\n  fill: unset;\n  .cls-1 {\n    fill: #fff;\n  }\n  .cls-2 {\n    fill: url(#linear-gradient);\n  }\n  .cls-3 {\n    fill: #111f2c;\n  }\n  .cls-4 {\n    fill: #5e7083;\n  }\n  .cls-5 {\n    fill: #04182d;\n  }\n  .cls-6 {\n    fill: #97a3af;\n  }\n  .cls-7 {\n    fill: #e94043;\n  }\n  .cls-8 {\n    fill: #515171;\n  }\n  .cls-9 {\n    fill: #bac7d4;\n  }\n  .cls-10 {\n    fill: #bebcff;\n  }\n  .cls-11 {\n    fill: #243c54;\n  }\n  .cls-12 {\n    fill: url(#linear-gradient-2);\n  }\n  .cls-13 {\n    fill: url(#linear-gradient-3);\n  }\n  .cls-14 {\n    fill: #af1c2f;\n  }\n  .cls-15 {\n    fill: #293039;\n  }\n  .cls-16 {\n    fill: none;\n    stroke: #000;\n    stroke-miterlimit: 10;\n    stroke-width: 9px;\n  }\n  .cls-17 {\n    fill: #a3adb8;\n  }\n"])));
var Icon$v = function (props) { return (React__default['default'].createElement(StyledSvg$1, __assign({ viewBox: "0 0 550.37513 491.12305" }, props),
    React__default['default'].createElement("defs", null,
        React__default['default'].createElement("linearGradient", { id: "linear-gradient", x1: 286.34973, y1: 228.32808, x2: 302.39864, y2: 385.43838, gradientUnits: "userSpaceOnUse" },
            React__default['default'].createElement("stop", { offset: 0.31179, stopColor: "#00d7ff" }),
            React__default['default'].createElement("stop", { offset: 0.5638, stopColor: "#02cefa" }),
            React__default['default'].createElement("stop", { offset: 0.97381, stopColor: "#07b6ec" }),
            React__default['default'].createElement("stop", { offset: 1, stopColor: "#07b4eb" })),
        React__default['default'].createElement("linearGradient", { id: "linear-gradient-2", x1: 395.84271, y1: 216.98885, x2: 413.32063, y2: 367.29891, gradientUnits: "userSpaceOnUse" },
            React__default['default'].createElement("stop", { offset: 0.35315, stopColor: "#4358ff" }),
            React__default['default'].createElement("stop", { offset: 0.45601, stopColor: "#5540ff" }),
            React__default['default'].createElement("stop", { offset: 0.67026, stopColor: "#7812ff" }),
            React__default['default'].createElement("stop", { offset: 0.7779, stopColor: "#8500ff" })),
        React__default['default'].createElement("linearGradient", { id: "linear-gradient-3", x1: 250.95548, y1: 234.37413, x2: 268.39307, y2: 384.33743, xlinkHref: "#linear-gradient-2" })),
    React__default['default'].createElement("path", { className: "cls-1", d: "M426.80827,210.46028c-7.3645-8.74688-49.52795-57.10553-122.05517-62.36337-74.632-5.4104-124.26068,38.96124-132.40265,46.4899-13.4176,19.60367-39.79358,64.051-42.5437,125.77451-4.1864,93.96,49.47644,158.36218,62.36774,173.03949a252.66971,252.66971,0,0,0,194.33374-12.66364Q455.48443,400.629,524.46062,320.52086Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-2", d: "M467.23735,198.1325a1519.99813,1519.99813,0,0,1-159.36279,41.65823,1520.6418,1520.6418,0,0,1-208.907,27.75265,295.2421,295.2421,0,0,0-5.63636,45.18079c-1.4104,26.07471-.00518,59.118,11.25721,86.99243L198.878,398.061s-2.675-50.1513,44.71393-49.58819c0,0,31.93591-4.94483,45.57519,40.04309,0,0,168.65222-31.90949,202.08032-49.77271l10.9032-6.03772c-6.78027-4.26117-32.92944-21.79638-43.36011-56.87506C447.07268,236.42269,463.91374,204.20507,467.23735,198.1325Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("circle", { className: "cls-3", cx: 453.18429, cy: 164.97051, r: 87.56617 }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M541.20814,339.24358a88.06641,88.06641,0,1,1,88.0664-88.0664A88.16595,88.16595,0,0,1,541.20814,339.24358Zm0-175.13281a87.06641,87.06641,0,1,0,87.0664,87.06641A87.16464,87.16464,0,0,0,541.20814,164.11077Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("ellipse", { className: "cls-4", cx: 466.79759, cy: 162.91971, rx: 60.93326, ry: 63.91357 }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M554.82142,313.53948c-33.87451,0-61.43311-28.89551-61.43311-64.41309s27.5586-64.41357,61.43311-64.41357,61.4331,28.896,61.4331,64.41357S588.69593,313.53948,554.82142,313.53948Zm0-127.82666c-33.32276,0-60.43311,28.44727-60.43311,63.41357s27.11035,63.41309,60.43311,63.41309,60.4331-28.44678,60.4331-63.41309S588.14417,185.71282,554.82142,185.71282Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-5", d: "M611.66081,299.1183c2.33619,17.59922,12.724,109.2772-50.38256,184.50309-31.25928,37.26251-68.01648,55.546-89.86658,64.2218a56.50717,56.50717,0,0,1-25.57288-18.046,57.40406,57.40406,0,0,1-12.11047-37.00549Q422.23076,443.04583,410.7332,393.3Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-6", d: "M386.50823,480.73717a283.88306,283.88306,0,0,1-194.33374,12.66364c14.20184,15.90637,55.24011,57.64087,123.58374,73.56225,78.4187,18.2685,140.94311-9.52545,158.8955-18.29321L454.58911,534.9521a25.52369,25.52369,0,0,1-7.03543-7.2224l-7.01026-10.854a25.52374,25.52374,0,0,1-3.52993-8.56265l-3.28517-15.52128Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-7", d: "M234.669,363.23156a266.31825,266.31825,0,0,1-85.96954,30.85388,92.481,92.481,0,0,0,98.91766,23.8316c1.33472-2.57367,8.83338-17.631,2.52906-34.75757A42.63423,42.63423,0,0,0,234.669,363.23156Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M215.98353,423.853a91.79654,91.79654,0,0,1-23.6543-3.082,93.24231,93.24231,0,0,1-43.99463-26.34375l-.63379-.67579.9126-.1582a265.8755,265.8755,0,0,0,85.80859-30.7959l.27539-.15625.25928.18164a42.75692,42.75692,0,0,1,15.65869,20.16407c6.03858,16.40527-.42822,31.05957-2.5542,35.16113l-.09033.17383-.18506.0664A95.536,95.536,0,0,1,215.98353,423.853Zm-66.28125-29.43653a92.2005,92.2005,0,0,0,42.88379,25.3877,93.395,93.395,0,0,0,54.67724-2.291c2.1626-4.23535,8.22852-18.38379,2.41358-34.18066a41.72432,41.72432,0,0,0-15.0376-19.50879,266.80024,266.80024,0,0,1-84.937,30.59277Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-7", d: "M406.88078,396.7614s-12.98132,9.21027-25.17919,26.53467c-10.38868,14.7547-15.58289,22.132-15.09729,29.07715,1.16735,16.69409,22.30883,28.725,35.31115,32.656,5.7273,1.73151,11.79566,2.28058,23.93262,3.37873a87.16547,87.16547,0,0,0,19.76245-.322s5.85946-32.05736-4.68164-51.87958C425.59627,407.37384,406.88078,396.7614,406.88078,396.7614Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M434.44642,489.29241c-2.582,0-5.50147-.10254-8.64307-.38672-12.15527-1.09961-18.25635-1.65137-24.03223-3.39844-13.6958-4.13964-34.49609-16.37109-35.666-33.09863-.49756-7.12207,4.74365-14.56641,15.186-29.39746,12.10889-17.19824,25.16993-26.56543,25.3003-26.6582l.25976-.1836.27637.15723c.18848.10644,19.01807,11.01465,34.24268,39.64551,10.50146,19.74707,4.791,51.88183,4.73193,52.2041l-.06348.34668-.34814.05664A78.628,78.628,0,0,1,434.44642,489.29241Zm-27.5376-91.93164a121.35894,121.35894,0,0,0-24.79834,26.22363c-10.30762,14.63965-15.48047,21.98633-15.00732,28.75391.63867,9.13769,7.438,16.33105,13.0288,20.75683a69.79986,69.79986,0,0,0,21.92823,11.45508c5.67871,1.71778,11.7456,2.2666,23.833,3.35938a89.47449,89.47449,0,0,0,19.28565-.26563c.58935-3.54785,5.05664-32.87109-4.69141-51.20312C426.40052,409.95061,409.27454,398.81,406.90882,397.36077Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-7", d: "M182.80309,180.61513c8.452-10.84561,69.6535-86.66055,176.87848-91.02588,105.34484-4.28877,171.85363,63.77811,181.52661,74.02158a109.33225,109.33225,0,0,0-73.97083,34.52167l-40.42908,12.32778c-12.38171-14.15856-41.021-42.80938-87.05627-56.07339C259.845,131.36354,193.34569,173.664,182.80309,180.61513Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M426.64466,211.03313l-.21289-.24365c-16.48389-18.84912-44.92627-43.852-86.81836-55.92236-75.4502-21.73877-138.88965,14.53076-156.53516,26.16552l-2.53906,1.67383,1.86914-2.39844c6.16943-7.9165,23.53858-28.4458,51.50733-48.04541,38.25439-26.8081,80.56152-41.33349,125.7456-43.17285,44.42627-1.80713,87.11816,8.83252,126.90918,31.627a245.92093,245.92093,0,0,1,55.00147,42.55078l.74023.78418-1.07715.0581a108.836,108.836,0,0,0-73.63232,34.36377l-.09131.09815ZM291.36829,147.06194a174.61164,174.61164,0,0,1,48.522,6.84424c41.94532,12.08545,70.47754,37.06006,87.08106,55.98193L466.964,197.6928a109.833,109.833,0,0,1,73.13964-34.51758,246.234,246.234,0,0,0-54.03027-41.59082c-39.625-22.69971-82.14551-33.29687-126.37109-31.4956-44.98975,1.83154-87.11768,16.29638-125.21289,42.99267a248.35328,248.35328,0,0,0-49.40088,45.46436C200.98548,168.50335,240.88587,147.06194,291.36829,147.06194Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M463.29546,389.19561l-20.27222,24.03588a76.80069,76.80069,0,0,1,9.00989,38.29212,73.72006,73.72006,0,0,1-2.81568,17.73828,138.14758,138.14758,0,0,0-8.16528-29.22089,139.89545,139.89545,0,0,0-28.43738-44.06207l5.25574-6.39844Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M470.0529,416.89177a66.45055,66.45055,0,0,1,4.012,50.39917q4.18415-8.16393,8.36816-16.32782a15.85249,15.85249,0,0,0-.72742-15.73169Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-9", d: "M467.83476,554.02629a230.81386,230.81386,0,0,1-37.20019,12.93677c-114.94129,29.30866-202.10492-39.92633-210.98828-47.24029,13.26928,8.27111,111.28491,67.08337,227.31872,27.53112q5.289-1.80285,10.35669-3.7901l8.6486,5.206Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M477.06694,549.65758l-13.434-8.7431c82.919-34.87073,121.79126-102.83734,130.95447-119.87641-3.328,8.64917-35.18152,87.30176-117.52051,128.61951a4.604,4.604,0,0,0-1.82434-2.29938", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-10", d: "M581.269,303.14165c-27.36438,3.17423-53.78052-10.90689-65.88489-34.91339-13.031-25.84424-6.85779-58.00061,15.32446-77.84158-6.51892,3.81634-21.78613,13.98516-29.96557,33.35516-8.66931,20.53018-9.77869,52.34921,11.54394,72.07925,14.96424,13.84653,36.40991,17.51316,53.49634,13.5149A56.21269,56.21269,0,0,0,581.269,303.14165Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-11", d: "M550.48686,338.25472c-37.00659-5.76306-67.26391-31.91034-77.05517-66.5539-11.29663-39.96978,6.64026-84.20538,44.2987-106.61724-43.78637,12.36889-71.28564,56.27957-63.44482,100.61065C462.26177,310.79091,504.41838,342.80474,550.48686,338.25472Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-12", d: "M322.11492,383.05962c31.76342-6.73487,65.02465-14.80191,99.54772-24.47726q36.22632-10.15272,69.58484-21.22208,5.23645-4.97718,10.47278-9.95436L484.178,315.58084a101.27408,101.27408,0,0,1-18.0669-22.77232,103.911,103.911,0,0,1-11.82556-30.77661,60.06168,60.06168,0,0,1-1.68933-29.61525,57.97962,57.97962,0,0,1,6.19433-16.84006,1078.79646,1078.79646,0,0,1-108.73718,34.0316Q336.0841,316.33393,322.11492,383.05962Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-13", d: "M279.661,366.91934a45.475,45.475,0,0,0-16.836-14.29964c-16.29724-7.97087-36.07825-5.3111-50.83722,6.77672l19.86566-86.525c23.70366-3.29619,48.96744-7.61818,75.54032-13.27258Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-14", d: "M146.7191,394.21849a166.91493,166.91493,0,0,0,104.28034,8.03217q-2.81562,8.72836-5.63111,17.45673c-9.79712,2.72033-40.06787,9.73626-71.23462-5.34967A94.75323,94.75323,0,0,1,146.7191,394.21849Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-15", d: "M575.51,230.37252a2.49163,2.49163,0,0,1,4.39788-1.34734l22.20934,26.78753a5.23071,5.23071,0,0,1-2.55631,8.37372l-22.01005,5.7575a4.37507,4.37507,0,0,1-5.46142-4.65926Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-15", d: "M567.2331,267.73724a7.17063,7.17063,0,0,1-5.32752,6.29928l-21.48085,5.61907a5.05538,5.05538,0,0,1-6.12852-5.839l11.48391-72.94442a4.92718,4.92718,0,0,1,8.68483-2.53475l15.28012,19.65385a7.17061,7.17061,0,0,1,1.48117,5.03915Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M285.70667,393.58343l-.92725-4.06739c-4.91406-21.56347-21.67773-36.54492-40.83154-36.54492-.106,0-.21142.001-.31738.002-18.68457.16016-35.044,11.44043-39.7832,27.43262l-8.62891-2.55664c5.853-19.75195,25.729-33.68262,48.335-33.876.13232-.001.26465-.002.39648-.002,22.13331,0,41.56055,15.99219,48.542,39.49024,11.11279-1.70508,22.24267-3.59375,33.14111-5.625a1052.45062,1052.45062,0,0,0,179.54688-50.335l3.18945,8.416A1061.52218,1061.52218,0,0,1,327.28235,386.684c-12.30908,2.29395-24.90918,4.4082-37.45019,6.28223Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M142.97278,404.60491c-12.55761,0-29.34033-.1416-38.50634-.39063l-3.17627-.08593-.98145-3.02149a251.02287,251.02287,0,0,1-5.72363-134.58545l.75879-3.25488,3.33545-.21387A1582.595,1582.595,0,0,0,302.7804,236.50188a1582.4461,1582.4461,0,0,0,167.40918-42.6626l2.69727,8.58594A1591.56015,1591.56015,0,0,1,304.52161,245.332a1591.78706,1591.78706,0,0,1-201.90625,26.48291,242.02266,242.02266,0,0,0,5.29,123.47949c11.647.24512,30.91748.3584,42.17529.292l.05274,9C147.99915,404.59905,145.57581,404.60491,142.97278,404.60491Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M143.82093,264.21868l-8.62695-2.56543a247.467,247.467,0,0,1,87.29443-125.76856,245.591,245.591,0,0,1,323.64551,24.1626l-6.43262,6.29395A236.59218,236.59218,0,0,0,227.92151,143.0595,238.40414,238.40414,0,0,0,143.82093,264.21868Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M370.59925,577.32952A243.38076,243.38076,0,0,1,222.276,527.49065,247.43653,247.43653,0,0,1,135.0387,401.35979l8.63233-2.54687a238.3734,238.3734,0,0,0,84.04589,121.50879A236.57213,236.57213,0,0,0,607.16077,331.768a240.16727,240.16727,0,0,0-1.46484-26.48l8.94433-.9961a249.23405,249.23405,0,0,1,1.52051,27.47608A245.56081,245.56081,0,0,1,370.59925,577.32952Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M541.20814,343.24358a92.06641,92.06641,0,1,1,92.0664-92.0664A92.17052,92.17052,0,0,1,541.20814,343.24358Zm0-175.13281a83.06641,83.06641,0,1,0,83.0664,83.06641A83.16037,83.16037,0,0,0,541.20814,168.11077Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M554.82142,317.53948c-36.167,0-65.59082-30.68994-65.59082-68.41309s29.42382-68.41357,65.59082-68.41357,65.59082,30.69043,65.59082,68.41357S590.98841,317.53948,554.82142,317.53948Zm0-127.82666c-31.2041,0-56.59082,26.65283-56.59082,59.41357,0,32.76026,25.38672,59.41309,56.59082,59.41309s56.59082-26.65283,56.59082-59.41309C611.41224,216.36565,586.02552,189.71282,554.82142,189.71282Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-16", d: "M95.01543,261.18926", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M270.17689,509.95061a259.9241,259.9241,0,0,1-79.37452-12.26367l2.74414-8.57226a250.6904,250.6904,0,0,0,77.64161,11.834,286.36948,286.36948,0,0,0,74.97607-10.69141A288.6892,288.6892,0,0,0,386.068,476.019l3.64453,8.22852A297.674,297.674,0,0,1,348.56019,498.933a295.41581,295.41581,0,0,1-77.33692,11.01563C270.8761,509.94964,270.52405,509.95061,270.17689,509.95061Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M435.02259,493.65081a167.47272,167.47272,0,0,1-23.72022-1.69922c-17.67578-2.52637-31.06884-8.87988-39.80615-18.88477-2.62988-3.01269-9.61474-11.01269-9.4126-22.09179a29.95182,29.95182,0,0,1,4.73731-14.84766c42.12207-65.11914,132.729-106.71875,136.56543-108.458a4.50017,4.50017,0,0,1,3.71631,8.19727,427.23032,427.23032,0,0,0-51.13575,28.86719c-25.52734,16.72265-60.4038,43.53027-81.58935,76.28222a21.109,21.109,0,0,0-3.29492,10.06348c-.13965,7.66894,5.1875,13.77051,7.19287,16.06738,7.27881,8.335,18.81885,13.68262,34.30029,15.89453a158.273,158.273,0,0,0,91.74951-14.7041c21.84326-10.63183,34.56006-22.749,34.686-22.87012,17.81152-17.21,30.67529-38.72265,38.22851-63.93554a4.49973,4.49973,0,1,1,8.6211,2.582c-8.001,26.709-21.66162,49.53027-40.60156,67.83105C543.2931,453.83636,501.07142,493.64788,435.02259,493.65081Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-5", d: "M630.41692,285.91658l-19.36963-12.1203a793.45055,793.45055,0,0,0-76.2356,37.51062c-.00012.00006-28.19311,15.82053-115.78369,74.92081q57.9159-2.944,115.83191-5.888l6.34827-30.17761A34.73176,34.73176,0,0,1,570.97685,371.702l58.02356-11.67773a265.92258,265.92258,0,0,0,1.41651-74.10764Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M428.73906,386.95256q54.48577-28.066,109.26355-55.56109,37.29-18.71723,74.70728-37.16587a78.58679,78.58679,0,0,1,13.1394,27.02973c4.50037,17.38061,3.15112,38.76864,3.15112,38.76889h0q1.25922-35.90264,2.51856-71.80524-9.92908-6.00658-19.85816-12.01321-20.43456,7.91382-41.748,17.64441a754.47474,754.47474,0,0,0-142.66126,85.80056q-2.43824,4.77247-4.87658,9.54487Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M402.50013,394.67132l9.53467-8.457c19.49365-17.291,94.853-70.44531,191.80175-115.75878a13.2256,13.2256,0,0,1,12.58838.6499l13.76563,8.50342a13.0377,13.0377,0,0,1,6.06738,9.16015,192.37989,192.37989,0,0,1-2.87451,72.27539l-.57031,2.44922-2.38477.79785a243.19626,243.19626,0,0,1-59.11719,11.89746l-2.88037.21485-1.395-2.5293a40.2977,40.2977,0,0,0-16.28467-16.30469,37.29213,37.29213,0,0,0-4.833-2.124c-.54981,3.13867-1.15723,6.63672-1.76465,10.1377-.96094,5.53515-1.92285,11.07519-2.65869,15.21191l-.56153,3.15625-3.1665.501c-31.78711,5.02343-121.65918,9.582-122.53516,9.623ZM609.57435,278.1718a4.55368,4.55368,0,0,0-1.92676.437C524.41321,317.51214,457.44935,362.061,428.56751,384.33733c25.43311-1.44043,79.48486-4.76758,104.62891-8.30371.63086-3.58789,1.36035-7.79,2.08935-11.99023.95459-5.4961,1.90772-10.98731,2.63819-15.09571l.82421-4.63379,4.59278,1.03125a46.99987,46.99987,0,0,1,11.606,4.26172,48.72869,48.72869,0,0,1,18.47656,17.38282,234.314,234.314,0,0,0,51.749-10.44434,183.37464,183.37464,0,0,0,2.18555-66.438,4.05363,4.05363,0,0,0-1.897-2.84131l-13.76612-8.50342A4.01957,4.01957,0,0,0,609.57435,278.1718Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M473.714,553.06975a49.35578,49.35578,0,0,1-19.10547-8.71093c-15.3667-11.49219-24.61621-31.56934-25.37793-55.084l8.99511-.291c.6626,20.46093,8.80225,38.46679,21.77295,48.168a40.3022,40.3022,0,0,0,15.59522,7.11719Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M450.03284,488.91741l-8.84472-1.66211a92.73322,92.73322,0,0,0-4.32373-48.70508c-6.00879-16.17871-16.09815-29.62988-29.17823-38.89941l5.2041-7.34375C442.07923,412.99456,457.0055,451.81975,450.03284,488.91741Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M219.58167,427.9428a119.34648,119.34648,0,0,1-79.21631-29.74414l-7.15869-6.25293,9.374-1.57324a269.477,269.477,0,0,0,86.42139-30.17774,11.466,11.466,0,0,1,14.19287,2.35059,54.931,54.931,0,0,1,13.14063,26.56836,54.16956,54.16956,0,0,1-1.01709,24.14453,17.71417,17.71417,0,0,1-13.97949,12.793A126.25457,126.25457,0,0,1,219.58167,427.9428Zm-65.79394-30.50195a110.4869,110.4869,0,0,0,29.19238,15.38769,113.71734,113.71734,0,0,0,56.80176,4.3584,8.68171,8.68171,0,0,0,6.84716-6.27246h0a45.2432,45.2432,0,0,0,.85694-20.16406,45.94636,45.94636,0,0,0-10.99756-22.2041,2.51673,2.51673,0,0,0-3.11865-.48243,278.24054,278.24054,0,0,1-79.582,29.377Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M427.255,215.52678a4.4912,4.4912,0,0,1-3.57178-1.75781c-27.18164-35.37207-69.04687-58.06054-114.86084-62.24853-47.9707-4.38135-95.36914,12.09717-133.46,46.40967a4.49976,4.49976,0,0,1-6.02343-6.68653c39.97509-36.01123,89.80126-53.29834,140.30273-48.68555,48.30469,4.415,92.47217,28.37159,121.17822,65.72657a4.49993,4.49993,0,0,1-3.56494,7.24218Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("circle", { className: "cls-17", cx: 505.30528, cy: 234.64712, r: 9.99537 }),
    React__default['default'].createElement("path", { d: "M593.32923,335.34905a14.49561,14.49561,0,1,1,14.49512-14.49512A14.51221,14.51221,0,0,1,593.32923,335.34905Zm0-19.99121a5.49561,5.49561,0,1,0,5.49512,5.49609A5.50227,5.50227,0,0,0,593.32923,315.35784Z", transform: "translate(-88.02385 -86.20647)" }))); };
var templateObject_1$O;

var StyledSvg = styled__default['default'](Svg)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  fill: unset;\n  .cls-1 {\n    fill: #fff;\n  }\n  .cls-2 {\n    fill: url(#t-linear-gradient);\n  }\n  .cls-3 {\n    fill: #111f2c;\n  }\n  .cls-4 {\n    fill: #5e7083;\n  }\n  .cls-5 {\n    fill: #04182d;\n  }\n  .cls-6 {\n    fill: #97a3af;\n  }\n  .cls-7 {\n    fill: #e94043;\n  }\n  .cls-8 {\n    fill: #515171;\n  }\n  .cls-9 {\n    fill: #bac7d4;\n  }\n  .cls-10 {\n    fill: #bebcff;\n  }\n  .cls-11 {\n    fill: #243c54;\n  }\n  .cls-12 {\n    fill: url(#t-linear-gradient-2);\n  }\n  .cls-13 {\n    fill: url(#t-linear-gradient-3);\n  }\n  .cls-14 {\n    fill: #af1c2f;\n  }\n  .cls-15 {\n    fill: #293039;\n  }\n  .cls-16 {\n    fill: none;\n    stroke: #000;\n    stroke-miterlimit: 10;\n    stroke-width: 9px;\n  }\n  .cls-17 {\n    fill: #a3adb8;\n  }\n"], ["\n  fill: unset;\n  .cls-1 {\n    fill: #fff;\n  }\n  .cls-2 {\n    fill: url(#t-linear-gradient);\n  }\n  .cls-3 {\n    fill: #111f2c;\n  }\n  .cls-4 {\n    fill: #5e7083;\n  }\n  .cls-5 {\n    fill: #04182d;\n  }\n  .cls-6 {\n    fill: #97a3af;\n  }\n  .cls-7 {\n    fill: #e94043;\n  }\n  .cls-8 {\n    fill: #515171;\n  }\n  .cls-9 {\n    fill: #bac7d4;\n  }\n  .cls-10 {\n    fill: #bebcff;\n  }\n  .cls-11 {\n    fill: #243c54;\n  }\n  .cls-12 {\n    fill: url(#t-linear-gradient-2);\n  }\n  .cls-13 {\n    fill: url(#t-linear-gradient-3);\n  }\n  .cls-14 {\n    fill: #af1c2f;\n  }\n  .cls-15 {\n    fill: #293039;\n  }\n  .cls-16 {\n    fill: none;\n    stroke: #000;\n    stroke-miterlimit: 10;\n    stroke-width: 9px;\n  }\n  .cls-17 {\n    fill: #a3adb8;\n  }\n"])));
var Icon$u = function (props) { return (React__default['default'].createElement(StyledSvg, __assign({ viewBox: "0 0 550.37513 491.12305" }, props),
    React__default['default'].createElement("defs", null,
        React__default['default'].createElement("linearGradient", { id: "t-linear-gradient", x1: 286.34973, y1: 228.32808, x2: 302.39864, y2: 385.43838, gradientUnits: "userSpaceOnUse" },
            React__default['default'].createElement("stop", { offset: 0.31179, stopColor: "#00d7ff" }),
            React__default['default'].createElement("stop", { offset: 0.5638, stopColor: "#02cefa" }),
            React__default['default'].createElement("stop", { offset: 0.97381, stopColor: "#07b6ec" }),
            React__default['default'].createElement("stop", { offset: 1, stopColor: "#07b4eb" })),
        React__default['default'].createElement("linearGradient", { id: "t-linear-gradient-2", x1: 395.84271, y1: 216.98885, x2: 413.32063, y2: 367.29891, gradientUnits: "userSpaceOnUse" },
            React__default['default'].createElement("stop", { offset: 0.35315, stopColor: "#4358ff" }),
            React__default['default'].createElement("stop", { offset: 0.45601, stopColor: "#5540ff" }),
            React__default['default'].createElement("stop", { offset: 0.67026, stopColor: "#7812ff" }),
            React__default['default'].createElement("stop", { offset: 0.7779, stopColor: "#8500ff" })),
        React__default['default'].createElement("linearGradient", { id: "t-linear-gradient-3", x1: 250.95548, y1: 234.37413, x2: 268.39307, y2: 384.33743, xlinkHref: "#t-linear-gradient-2" })),
    React__default['default'].createElement("path", { className: "cls-1", d: "M426.80827,210.46028c-7.3645-8.74688-49.52795-57.10553-122.05517-62.36337-74.632-5.4104-124.26068,38.96124-132.40265,46.4899-13.4176,19.60367-39.79358,64.051-42.5437,125.77451-4.1864,93.96,49.47644,158.36218,62.36774,173.03949a252.66971,252.66971,0,0,0,194.33374-12.66364Q455.48443,400.629,524.46062,320.52086Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-2", d: "M467.23735,198.1325a1519.99813,1519.99813,0,0,1-159.36279,41.65823,1520.6418,1520.6418,0,0,1-208.907,27.75265,295.2421,295.2421,0,0,0-5.63636,45.18079c-1.4104,26.07471-.00518,59.118,11.25721,86.99243L198.878,398.061s-2.675-50.1513,44.71393-49.58819c0,0,31.93591-4.94483,45.57519,40.04309,0,0,168.65222-31.90949,202.08032-49.77271l10.9032-6.03772c-6.78027-4.26117-32.92944-21.79638-43.36011-56.87506C447.07268,236.42269,463.91374,204.20507,467.23735,198.1325Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("circle", { className: "cls-3", cx: 453.18429, cy: 164.97051, r: 87.56617 }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M541.20814,339.24358a88.06641,88.06641,0,1,1,88.0664-88.0664A88.16595,88.16595,0,0,1,541.20814,339.24358Zm0-175.13281a87.06641,87.06641,0,1,0,87.0664,87.06641A87.16464,87.16464,0,0,0,541.20814,164.11077Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("ellipse", { className: "cls-4", cx: 466.79759, cy: 162.91971, rx: 60.93326, ry: 63.91357 }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M554.82142,313.53948c-33.87451,0-61.43311-28.89551-61.43311-64.41309s27.5586-64.41357,61.43311-64.41357,61.4331,28.896,61.4331,64.41357S588.69593,313.53948,554.82142,313.53948Zm0-127.82666c-33.32276,0-60.43311,28.44727-60.43311,63.41357s27.11035,63.41309,60.43311,63.41309,60.4331-28.44678,60.4331-63.41309S588.14417,185.71282,554.82142,185.71282Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-5", d: "M611.66081,299.1183c2.33619,17.59922,12.724,109.2772-50.38256,184.50309-31.25928,37.26251-68.01648,55.546-89.86658,64.2218a56.50717,56.50717,0,0,1-25.57288-18.046,57.40406,57.40406,0,0,1-12.11047-37.00549Q422.23076,443.04583,410.7332,393.3Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-6", d: "M386.50823,480.73717a283.88306,283.88306,0,0,1-194.33374,12.66364c14.20184,15.90637,55.24011,57.64087,123.58374,73.56225,78.4187,18.2685,140.94311-9.52545,158.8955-18.29321L454.58911,534.9521a25.52369,25.52369,0,0,1-7.03543-7.2224l-7.01026-10.854a25.52374,25.52374,0,0,1-3.52993-8.56265l-3.28517-15.52128Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-7", d: "M234.669,363.23156a266.31825,266.31825,0,0,1-85.96954,30.85388,92.481,92.481,0,0,0,98.91766,23.8316c1.33472-2.57367,8.83338-17.631,2.52906-34.75757A42.63423,42.63423,0,0,0,234.669,363.23156Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M215.98353,423.853a91.79654,91.79654,0,0,1-23.6543-3.082,93.24231,93.24231,0,0,1-43.99463-26.34375l-.63379-.67579.9126-.1582a265.8755,265.8755,0,0,0,85.80859-30.7959l.27539-.15625.25928.18164a42.75692,42.75692,0,0,1,15.65869,20.16407c6.03858,16.40527-.42822,31.05957-2.5542,35.16113l-.09033.17383-.18506.0664A95.536,95.536,0,0,1,215.98353,423.853Zm-66.28125-29.43653a92.2005,92.2005,0,0,0,42.88379,25.3877,93.395,93.395,0,0,0,54.67724-2.291c2.1626-4.23535,8.22852-18.38379,2.41358-34.18066a41.72432,41.72432,0,0,0-15.0376-19.50879,266.80024,266.80024,0,0,1-84.937,30.59277Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-7", d: "M406.88078,396.7614s-12.98132,9.21027-25.17919,26.53467c-10.38868,14.7547-15.58289,22.132-15.09729,29.07715,1.16735,16.69409,22.30883,28.725,35.31115,32.656,5.7273,1.73151,11.79566,2.28058,23.93262,3.37873a87.16547,87.16547,0,0,0,19.76245-.322s5.85946-32.05736-4.68164-51.87958C425.59627,407.37384,406.88078,396.7614,406.88078,396.7614Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M434.44642,489.29241c-2.582,0-5.50147-.10254-8.64307-.38672-12.15527-1.09961-18.25635-1.65137-24.03223-3.39844-13.6958-4.13964-34.49609-16.37109-35.666-33.09863-.49756-7.12207,4.74365-14.56641,15.186-29.39746,12.10889-17.19824,25.16993-26.56543,25.3003-26.6582l.25976-.1836.27637.15723c.18848.10644,19.01807,11.01465,34.24268,39.64551,10.50146,19.74707,4.791,51.88183,4.73193,52.2041l-.06348.34668-.34814.05664A78.628,78.628,0,0,1,434.44642,489.29241Zm-27.5376-91.93164a121.35894,121.35894,0,0,0-24.79834,26.22363c-10.30762,14.63965-15.48047,21.98633-15.00732,28.75391.63867,9.13769,7.438,16.33105,13.0288,20.75683a69.79986,69.79986,0,0,0,21.92823,11.45508c5.67871,1.71778,11.7456,2.2666,23.833,3.35938a89.47449,89.47449,0,0,0,19.28565-.26563c.58935-3.54785,5.05664-32.87109-4.69141-51.20312C426.40052,409.95061,409.27454,398.81,406.90882,397.36077Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-7", d: "M182.80309,180.61513c8.452-10.84561,69.6535-86.66055,176.87848-91.02588,105.34484-4.28877,171.85363,63.77811,181.52661,74.02158a109.33225,109.33225,0,0,0-73.97083,34.52167l-40.42908,12.32778c-12.38171-14.15856-41.021-42.80938-87.05627-56.07339C259.845,131.36354,193.34569,173.664,182.80309,180.61513Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-1", d: "M426.64466,211.03313l-.21289-.24365c-16.48389-18.84912-44.92627-43.852-86.81836-55.92236-75.4502-21.73877-138.88965,14.53076-156.53516,26.16552l-2.53906,1.67383,1.86914-2.39844c6.16943-7.9165,23.53858-28.4458,51.50733-48.04541,38.25439-26.8081,80.56152-41.33349,125.7456-43.17285,44.42627-1.80713,87.11816,8.83252,126.90918,31.627a245.92093,245.92093,0,0,1,55.00147,42.55078l.74023.78418-1.07715.0581a108.836,108.836,0,0,0-73.63232,34.36377l-.09131.09815ZM291.36829,147.06194a174.61164,174.61164,0,0,1,48.522,6.84424c41.94532,12.08545,70.47754,37.06006,87.08106,55.98193L466.964,197.6928a109.833,109.833,0,0,1,73.13964-34.51758,246.234,246.234,0,0,0-54.03027-41.59082c-39.625-22.69971-82.14551-33.29687-126.37109-31.4956-44.98975,1.83154-87.11768,16.29638-125.21289,42.99267a248.35328,248.35328,0,0,0-49.40088,45.46436C200.98548,168.50335,240.88587,147.06194,291.36829,147.06194Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M463.29546,389.19561l-20.27222,24.03588a76.80069,76.80069,0,0,1,9.00989,38.29212,73.72006,73.72006,0,0,1-2.81568,17.73828,138.14758,138.14758,0,0,0-8.16528-29.22089,139.89545,139.89545,0,0,0-28.43738-44.06207l5.25574-6.39844Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M470.0529,416.89177a66.45055,66.45055,0,0,1,4.012,50.39917q4.18415-8.16393,8.36816-16.32782a15.85249,15.85249,0,0,0-.72742-15.73169Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-9", d: "M467.83476,554.02629a230.81386,230.81386,0,0,1-37.20019,12.93677c-114.94129,29.30866-202.10492-39.92633-210.98828-47.24029,13.26928,8.27111,111.28491,67.08337,227.31872,27.53112q5.289-1.80285,10.35669-3.7901l8.6486,5.206Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M477.06694,549.65758l-13.434-8.7431c82.919-34.87073,121.79126-102.83734,130.95447-119.87641-3.328,8.64917-35.18152,87.30176-117.52051,128.61951a4.604,4.604,0,0,0-1.82434-2.29938", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-10", d: "M581.269,303.14165c-27.36438,3.17423-53.78052-10.90689-65.88489-34.91339-13.031-25.84424-6.85779-58.00061,15.32446-77.84158-6.51892,3.81634-21.78613,13.98516-29.96557,33.35516-8.66931,20.53018-9.77869,52.34921,11.54394,72.07925,14.96424,13.84653,36.40991,17.51316,53.49634,13.5149A56.21269,56.21269,0,0,0,581.269,303.14165Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-11", d: "M550.48686,338.25472c-37.00659-5.76306-67.26391-31.91034-77.05517-66.5539-11.29663-39.96978,6.64026-84.20538,44.2987-106.61724-43.78637,12.36889-71.28564,56.27957-63.44482,100.61065C462.26177,310.79091,504.41838,342.80474,550.48686,338.25472Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-12", d: "M322.11492,383.05962c31.76342-6.73487,65.02465-14.80191,99.54772-24.47726q36.22632-10.15272,69.58484-21.22208,5.23645-4.97718,10.47278-9.95436L484.178,315.58084a101.27408,101.27408,0,0,1-18.0669-22.77232,103.911,103.911,0,0,1-11.82556-30.77661,60.06168,60.06168,0,0,1-1.68933-29.61525,57.97962,57.97962,0,0,1,6.19433-16.84006,1078.79646,1078.79646,0,0,1-108.73718,34.0316Q336.0841,316.33393,322.11492,383.05962Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-13", d: "M279.661,366.91934a45.475,45.475,0,0,0-16.836-14.29964c-16.29724-7.97087-36.07825-5.3111-50.83722,6.77672l19.86566-86.525c23.70366-3.29619,48.96744-7.61818,75.54032-13.27258Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-14", d: "M146.7191,394.21849a166.91493,166.91493,0,0,0,104.28034,8.03217q-2.81562,8.72836-5.63111,17.45673c-9.79712,2.72033-40.06787,9.73626-71.23462-5.34967A94.75323,94.75323,0,0,1,146.7191,394.21849Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-15", d: "M575.51,230.37252a2.49163,2.49163,0,0,1,4.39788-1.34734l22.20934,26.78753a5.23071,5.23071,0,0,1-2.55631,8.37372l-22.01005,5.7575a4.37507,4.37507,0,0,1-5.46142-4.65926Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-15", d: "M567.2331,267.73724a7.17063,7.17063,0,0,1-5.32752,6.29928l-21.48085,5.61907a5.05538,5.05538,0,0,1-6.12852-5.839l11.48391-72.94442a4.92718,4.92718,0,0,1,8.68483-2.53475l15.28012,19.65385a7.17061,7.17061,0,0,1,1.48117,5.03915Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M285.70667,393.58343l-.92725-4.06739c-4.91406-21.56347-21.67773-36.54492-40.83154-36.54492-.106,0-.21142.001-.31738.002-18.68457.16016-35.044,11.44043-39.7832,27.43262l-8.62891-2.55664c5.853-19.75195,25.729-33.68262,48.335-33.876.13232-.001.26465-.002.39648-.002,22.13331,0,41.56055,15.99219,48.542,39.49024,11.11279-1.70508,22.24267-3.59375,33.14111-5.625a1052.45062,1052.45062,0,0,0,179.54688-50.335l3.18945,8.416A1061.52218,1061.52218,0,0,1,327.28235,386.684c-12.30908,2.29395-24.90918,4.4082-37.45019,6.28223Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M142.97278,404.60491c-12.55761,0-29.34033-.1416-38.50634-.39063l-3.17627-.08593-.98145-3.02149a251.02287,251.02287,0,0,1-5.72363-134.58545l.75879-3.25488,3.33545-.21387A1582.595,1582.595,0,0,0,302.7804,236.50188a1582.4461,1582.4461,0,0,0,167.40918-42.6626l2.69727,8.58594A1591.56015,1591.56015,0,0,1,304.52161,245.332a1591.78706,1591.78706,0,0,1-201.90625,26.48291,242.02266,242.02266,0,0,0,5.29,123.47949c11.647.24512,30.91748.3584,42.17529.292l.05274,9C147.99915,404.59905,145.57581,404.60491,142.97278,404.60491Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M143.82093,264.21868l-8.62695-2.56543a247.467,247.467,0,0,1,87.29443-125.76856,245.591,245.591,0,0,1,323.64551,24.1626l-6.43262,6.29395A236.59218,236.59218,0,0,0,227.92151,143.0595,238.40414,238.40414,0,0,0,143.82093,264.21868Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M370.59925,577.32952A243.38076,243.38076,0,0,1,222.276,527.49065,247.43653,247.43653,0,0,1,135.0387,401.35979l8.63233-2.54687a238.3734,238.3734,0,0,0,84.04589,121.50879A236.57213,236.57213,0,0,0,607.16077,331.768a240.16727,240.16727,0,0,0-1.46484-26.48l8.94433-.9961a249.23405,249.23405,0,0,1,1.52051,27.47608A245.56081,245.56081,0,0,1,370.59925,577.32952Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M541.20814,343.24358a92.06641,92.06641,0,1,1,92.0664-92.0664A92.17052,92.17052,0,0,1,541.20814,343.24358Zm0-175.13281a83.06641,83.06641,0,1,0,83.0664,83.06641A83.16037,83.16037,0,0,0,541.20814,168.11077Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M554.82142,317.53948c-36.167,0-65.59082-30.68994-65.59082-68.41309s29.42382-68.41357,65.59082-68.41357,65.59082,30.69043,65.59082,68.41357S590.98841,317.53948,554.82142,317.53948Zm0-127.82666c-31.2041,0-56.59082,26.65283-56.59082,59.41357,0,32.76026,25.38672,59.41309,56.59082,59.41309s56.59082-26.65283,56.59082-59.41309C611.41224,216.36565,586.02552,189.71282,554.82142,189.71282Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-16", d: "M95.01543,261.18926", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M270.17689,509.95061a259.9241,259.9241,0,0,1-79.37452-12.26367l2.74414-8.57226a250.6904,250.6904,0,0,0,77.64161,11.834,286.36948,286.36948,0,0,0,74.97607-10.69141A288.6892,288.6892,0,0,0,386.068,476.019l3.64453,8.22852A297.674,297.674,0,0,1,348.56019,498.933a295.41581,295.41581,0,0,1-77.33692,11.01563C270.8761,509.94964,270.52405,509.95061,270.17689,509.95061Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M435.02259,493.65081a167.47272,167.47272,0,0,1-23.72022-1.69922c-17.67578-2.52637-31.06884-8.87988-39.80615-18.88477-2.62988-3.01269-9.61474-11.01269-9.4126-22.09179a29.95182,29.95182,0,0,1,4.73731-14.84766c42.12207-65.11914,132.729-106.71875,136.56543-108.458a4.50017,4.50017,0,0,1,3.71631,8.19727,427.23032,427.23032,0,0,0-51.13575,28.86719c-25.52734,16.72265-60.4038,43.53027-81.58935,76.28222a21.109,21.109,0,0,0-3.29492,10.06348c-.13965,7.66894,5.1875,13.77051,7.19287,16.06738,7.27881,8.335,18.81885,13.68262,34.30029,15.89453a158.273,158.273,0,0,0,91.74951-14.7041c21.84326-10.63183,34.56006-22.749,34.686-22.87012,17.81152-17.21,30.67529-38.72265,38.22851-63.93554a4.49973,4.49973,0,1,1,8.6211,2.582c-8.001,26.709-21.66162,49.53027-40.60156,67.83105C543.2931,453.83636,501.07142,493.64788,435.02259,493.65081Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-5", d: "M630.41692,285.91658l-19.36963-12.1203a793.45055,793.45055,0,0,0-76.2356,37.51062c-.00012.00006-28.19311,15.82053-115.78369,74.92081q57.9159-2.944,115.83191-5.888l6.34827-30.17761A34.73176,34.73176,0,0,1,570.97685,371.702l58.02356-11.67773a265.92258,265.92258,0,0,0,1.41651-74.10764Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { className: "cls-8", d: "M428.73906,386.95256q54.48577-28.066,109.26355-55.56109,37.29-18.71723,74.70728-37.16587a78.58679,78.58679,0,0,1,13.1394,27.02973c4.50037,17.38061,3.15112,38.76864,3.15112,38.76889h0q1.25922-35.90264,2.51856-71.80524-9.92908-6.00658-19.85816-12.01321-20.43456,7.91382-41.748,17.64441a754.47474,754.47474,0,0,0-142.66126,85.80056q-2.43824,4.77247-4.87658,9.54487Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M402.50013,394.67132l9.53467-8.457c19.49365-17.291,94.853-70.44531,191.80175-115.75878a13.2256,13.2256,0,0,1,12.58838.6499l13.76563,8.50342a13.0377,13.0377,0,0,1,6.06738,9.16015,192.37989,192.37989,0,0,1-2.87451,72.27539l-.57031,2.44922-2.38477.79785a243.19626,243.19626,0,0,1-59.11719,11.89746l-2.88037.21485-1.395-2.5293a40.2977,40.2977,0,0,0-16.28467-16.30469,37.29213,37.29213,0,0,0-4.833-2.124c-.54981,3.13867-1.15723,6.63672-1.76465,10.1377-.96094,5.53515-1.92285,11.07519-2.65869,15.21191l-.56153,3.15625-3.1665.501c-31.78711,5.02343-121.65918,9.582-122.53516,9.623ZM609.57435,278.1718a4.55368,4.55368,0,0,0-1.92676.437C524.41321,317.51214,457.44935,362.061,428.56751,384.33733c25.43311-1.44043,79.48486-4.76758,104.62891-8.30371.63086-3.58789,1.36035-7.79,2.08935-11.99023.95459-5.4961,1.90772-10.98731,2.63819-15.09571l.82421-4.63379,4.59278,1.03125a46.99987,46.99987,0,0,1,11.606,4.26172,48.72869,48.72869,0,0,1,18.47656,17.38282,234.314,234.314,0,0,0,51.749-10.44434,183.37464,183.37464,0,0,0,2.18555-66.438,4.05363,4.05363,0,0,0-1.897-2.84131l-13.76612-8.50342A4.01957,4.01957,0,0,0,609.57435,278.1718Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M473.714,553.06975a49.35578,49.35578,0,0,1-19.10547-8.71093c-15.3667-11.49219-24.61621-31.56934-25.37793-55.084l8.99511-.291c.6626,20.46093,8.80225,38.46679,21.77295,48.168a40.3022,40.3022,0,0,0,15.59522,7.11719Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M450.03284,488.91741l-8.84472-1.66211a92.73322,92.73322,0,0,0-4.32373-48.70508c-6.00879-16.17871-16.09815-29.62988-29.17823-38.89941l5.2041-7.34375C442.07923,412.99456,457.0055,451.81975,450.03284,488.91741Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M219.58167,427.9428a119.34648,119.34648,0,0,1-79.21631-29.74414l-7.15869-6.25293,9.374-1.57324a269.477,269.477,0,0,0,86.42139-30.17774,11.466,11.466,0,0,1,14.19287,2.35059,54.931,54.931,0,0,1,13.14063,26.56836,54.16956,54.16956,0,0,1-1.01709,24.14453,17.71417,17.71417,0,0,1-13.97949,12.793A126.25457,126.25457,0,0,1,219.58167,427.9428Zm-65.79394-30.50195a110.4869,110.4869,0,0,0,29.19238,15.38769,113.71734,113.71734,0,0,0,56.80176,4.3584,8.68171,8.68171,0,0,0,6.84716-6.27246h0a45.2432,45.2432,0,0,0,.85694-20.16406,45.94636,45.94636,0,0,0-10.99756-22.2041,2.51673,2.51673,0,0,0-3.11865-.48243,278.24054,278.24054,0,0,1-79.582,29.377Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("path", { d: "M427.255,215.52678a4.4912,4.4912,0,0,1-3.57178-1.75781c-27.18164-35.37207-69.04687-58.06054-114.86084-62.24853-47.9707-4.38135-95.36914,12.09717-133.46,46.40967a4.49976,4.49976,0,0,1-6.02343-6.68653c39.97509-36.01123,89.80126-53.29834,140.30273-48.68555,48.30469,4.415,92.47217,28.37159,121.17822,65.72657a4.49993,4.49993,0,0,1-3.56494,7.24218Z", transform: "translate(-88.02385 -86.20647)" }),
    React__default['default'].createElement("circle", { className: "cls-17", cx: 505.30528, cy: 234.64712, r: 9.99537 }),
    React__default['default'].createElement("path", { d: "M593.32923,335.34905a14.49561,14.49561,0,1,1,14.49512-14.49512A14.51221,14.51221,0,0,1,593.32923,335.34905Zm0-19.99121a5.49561,5.49561,0,1,0,5.49512,5.49609A5.50227,5.50227,0,0,0,593.32923,315.35784Z", transform: "translate(-88.02385 -86.20647)" }))); };
var templateObject_1$N;

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default['default'].createElement("path", { d: "M92,73v7.5c0,4.137-3.365,7.5-7.5,7.5H20c-6.617,0-12-5.382-12-12c0,0,0-50.956,0-51  c0-6.618,5.383-12,12-12h55.5c2.486,0,4.5,2.016,4.5,4.5S77.986,22,75.5,22H20c-1.654,0-3,1.345-3,3s1.346,3,3,3h64.5  c4.135,0,7.5,3.363,7.5,7.5V43H77c-8.271,0-15,6.729-15,15s6.729,15,15,15H92z" }),
        React__default['default'].createElement("path", { d: "M92,49v18H77c-4.971,0-9-4.029-9-9s4.029-9,9-9H92z" })));
};

var Box = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$M;

var Flex = styled__default['default'](Box)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$L;

var variants = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.INFO : _b;
    switch (variant) {
        case variants.DANGER:
            return theme.colors.failure;
        case variants.WARNING:
            return theme.colors.warning;
        case variants.SUCCESS:
            return theme.colors.success;
        case variants.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.INFO; }
    switch (variant) {
        case variants.DANGER:
            return Icon$1f;
        case variants.WARNING:
            return Icon$1g;
        case variants.SUCCESS:
            return Icon$1h;
        case variants.INFO:
        default:
            return Icon$1e;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ",
    ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return hasHandler ? withHandlerSpacing + "px" : "12px";
});
var CloseHandler = styled__default['default'].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? (React__default['default'].createElement(Text, { as: "p" }, children)) : (children)),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$Z, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$K, templateObject_2$i, templateObject_3$a, templateObject_4$4;

var Separator = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$$, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$J, templateObject_2$h;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$1.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$I;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$4.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$1.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants$1.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$H;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ",
    ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$G;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$F;

var CardHeader = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$E;

var CardFooter = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$D;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ",
    ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
    ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$C;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$3.MD,
};
var templateObject_1$B;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, className = _a.className, contentClassName = _a.contentClassName, children = _a.children;
    return (React__default['default'].createElement(Container$4, { className: className },
        target,
        React__default['default'].createElement(DropdownContent, { position: position, className: contentClassName }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$A, templateObject_2$g;

var bunnyFall = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ",
    ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return Number.isFinite(iterations) ? String(iterations) : "infinite";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$T, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$z, templateObject_2$f;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$y;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$1 = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ",
    "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return responsive ? (height / width) * 100 : 0;
}, styledSystem.space);
var templateObject_1$x;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$w, templateObject_2$e;

var scales$2 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
    switch (scale) {
        case scales$2.SM:
            return "32px";
        case scales$2.LG:
            return "48px";
        case scales$2.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$2.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$v;

var GridLayout$1 = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$u;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$t;

var scales$1 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "24px";
        case scales$1.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "12px";
        case scales$1.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$1.MD,
    m: 0,
};
var templateObject_1$s;

var getColor = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return (outline ? getColor(variant, theme) : getColor("textColour", theme));
};
var StyledTag = styled__default['default'].div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid\n    ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$r;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$q;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$P, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",
    ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) {
    return props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.secondary + "80";
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$d;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$o;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$J, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? (React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } })) : null));
};

var rotate = styled.keyframes(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
styled.keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled__default['default'].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPenguinIcon = styled__default['default'](Icon$T)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(RotatingPenguinIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$n, templateObject_2$c, templateObject_3$9, templateObject_4$3;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ",
    ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small;
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$m, templateObject_2$b, templateObject_3$8, templateObject_4$2, templateObject_5$2;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$l, templateObject_2$a, templateObject_3$7;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending
                    ? data.sort(column.sort)
                    : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending =
                            column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending
                            ? state.rows.sort(column.sort)
                            : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id]
                        ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds
                    ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [
        columnsWithSorting,
    ]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) {
            return dispatch({ type: "SEARCH_STRING", searchString: searchString });
        },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #000080;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #000080;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$k;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #000080, 0px 0px 4px 8px rgba(0, 0, 128, 0.8)",
    success: "0px 0px 0px 1px #000080, 0px 0px 0px 4px rgba(0, 0, 128, 0.2)",
    warning: "0px 0px 0px 1px #800020, 0px 0px 0px 4px rgba(128, 0, 32, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) {
    return "is" + size.charAt(0).toUpperCase() + size.slice(1);
};
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$1c, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$Z, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$j, templateObject_2$9, templateObject_3$6;

var ModalWrapper = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$i;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    var theme = styled.useTheme();
    var fillOne = theme.isDark ? "#232323" : "#ffffff";
    var fillTwo = theme.isDark ? "#ffffff" : "#232323";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 716 69" }, props),
        React__default['default'].createElement("path", { d: "M138.07 5.59998H163.71C174.94 5.59998 180.99 13.09 180.99 22.09C180.99 31.09 174.94 38.22 163.71 38.22H152.62V53.6299H138.07V5.59998ZM161.83 17.69H152.62V26.12H161.83C162.401 26.1478 162.971 26.0594 163.507 25.8601C164.043 25.6608 164.532 25.3548 164.946 24.9607C165.36 24.5666 165.689 24.0925 165.914 23.5672C166.139 23.042 166.255 22.4764 166.255 21.905C166.255 21.3335 166.139 20.768 165.914 20.2427C165.689 19.7174 165.36 19.2434 164.946 18.8492C164.532 18.4551 164.043 18.1491 163.507 17.9499C162.971 17.7506 162.401 17.6622 161.83 17.69Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M152.87 53.8799H137.82V5.34998H163.71C174.19 5.34998 181.24 12.07 181.24 22.09C181.24 31.88 174.19 38.47 163.71 38.47H152.87V53.8799ZM138.32 53.3799H152.37V37.97H163.71C174.05 37.97 180.71 31.73 180.71 22.09C180.71 10.87 172.15 5.84998 163.71 5.84998H138.32V53.3799ZM161.83 26.38H152.37V17.45H161.83C162.434 17.4214 163.038 17.5157 163.604 17.7271C164.171 17.9386 164.689 18.2629 165.127 18.6803C165.564 19.0978 165.913 19.5997 166.151 20.1557C166.389 20.7117 166.511 21.3102 166.511 21.915C166.511 22.5198 166.389 23.1183 166.151 23.6743C165.913 24.2303 165.564 24.7322 165.127 25.1496C164.689 25.567 164.171 25.8913 163.604 26.1028C163.038 26.3143 162.434 26.4086 161.83 26.38V26.38ZM152.83 25.88H161.83C162.395 25.9552 162.969 25.9088 163.515 25.744C164.06 25.5792 164.564 25.2997 164.993 24.9243C165.422 24.5489 165.765 24.0861 166.001 23.5671C166.236 23.0481 166.358 22.4849 166.358 21.915C166.358 21.3451 166.236 20.7818 166.001 20.2628C165.765 19.7438 165.422 19.2811 164.993 18.9056C164.564 18.5302 164.06 18.2507 163.515 18.0859C162.969 17.9211 162.395 17.8748 161.83 17.95H152.83V25.88Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M200.57 17.98C210.79 17.98 218.64 25.33 218.64 37.57V40.22H195C195.73 42.45 198.25 44.61 202.64 44.61C205.444 44.6124 208.182 43.7613 210.49 42.17L215.81 50.17C212.36 53.12 206.17 54.49 200.98 54.49C190.11 54.49 181.61 47.65 181.61 36.2C181.63 26.12 189.34 17.98 200.57 17.98ZM194.88 31.98H206.33C205.97 30.47 204.75 27.81 200.57 27.81C199.274 27.7112 197.986 28.0822 196.941 28.8553C195.896 29.6284 195.165 30.7518 194.88 32.02V31.98Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M201 54.74C189.27 54.74 181.38 47.29 181.38 36.2C181.38 25.67 189.63 17.73 200.57 17.73C211.51 17.73 218.89 25.73 218.89 37.57V40.48H195.38C196.15 42.35 198.45 44.37 202.66 44.37C205.407 44.3742 208.09 43.5404 210.35 41.98L210.56 41.81L216.17 50.22L216 50.36C212.21 53.59 205.55 54.74 201 54.74ZM200.57 18.22C189.92 18.22 181.88 25.95 181.88 36.22C181.88 47.01 189.57 54.22 201 54.22C205.4 54.22 211.79 53.14 215.5 50.1L210.45 42.52C208.132 44.0304 205.427 44.8395 202.66 44.85C197.94 44.85 195.47 42.4 194.79 40.29L194.68 39.96H218.39V37.55C218.39 26 211.23 18.22 200.57 18.22ZM206.65 32.22H194.55L194.64 31.91C194.945 30.5946 195.71 29.4317 196.798 28.6319C197.885 27.8321 199.224 27.4483 200.57 27.55C204.89 27.55 206.18 30.28 206.57 31.92L206.65 32.22ZM195.22 31.72H206C205.56 30.22 204.28 28.05 200.57 28.05C197.17 28.1 195.78 30.03 195.22 31.77V31.72Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M246.65 34.3999C246.65 30.7999 244.71 29.3999 241.65 29.3999C240.575 29.3898 239.513 29.6324 238.548 30.1084C237.584 30.5843 236.746 31.2802 236.1 32.1399V53.5999H223.1V18.8499H236.1V22.8499C238.1 20.5399 241.94 18.0199 248.1 18.0199C256.16 18.0199 259.69 22.9199 259.69 28.9699V53.6699H246.69L246.65 34.3999Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M259.86 53.8799H246.4V34.3999C246.4 31.2299 244.83 29.6799 241.61 29.6799C240.587 29.669 239.575 29.8965 238.656 30.3443C237.736 30.7921 236.933 31.448 236.31 32.2599V53.8799H222.85V18.5999H236.31V22.2199C238.11 20.3699 241.75 17.7799 248.02 17.7799C255.43 17.7799 259.86 21.9699 259.86 28.9799V53.8799ZM246.86 53.3799H259.32V28.9299C259.32 22.2299 255.08 18.2299 247.98 18.2299C241.35 18.2299 237.76 21.2299 236.21 22.9699L235.77 23.4699V19.0999H223.35V53.3799H235.81V32.0699L235.88 31.9999C236.552 31.1191 237.42 30.406 238.414 29.9167C239.408 29.4274 240.502 29.1752 241.61 29.1799C245.12 29.1799 246.9 30.9399 246.9 34.3999L246.86 53.3799Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M271.06 53.34C273.72 56 277.68 57.15 281.43 57.15C284.43 57.15 289.49 55.9999 289.49 49.8799V48.0099C288.321 49.4828 286.832 50.6698 285.136 51.4808C283.439 52.2917 281.58 52.7052 279.7 52.6899C271.34 52.6899 264.43 47.22 264.43 35.34C264.43 23.74 271.13 17.98 279.7 17.98C281.57 17.9383 283.425 18.3258 285.122 19.1128C286.82 19.8998 288.314 21.0654 289.49 22.52V18.85H302.49V49.85C302.49 64.9 290.11 67.71 281.49 67.71C275.764 67.8758 270.159 66.0405 265.64 62.52L271.06 53.34ZM289.49 31.66C288.07 30.2539 286.159 29.4543 284.16 29.43C280.63 29.43 277.68 31.09 277.68 35.34C277.68 39.59 280.63 41.24 284.16 41.24C286.159 41.2156 288.07 40.4161 289.49 39.01V31.66Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M281.43 67.99C275.647 68.1727 269.984 66.3181 265.43 62.75L265.26 62.62L271.01 52.93L271.23 53.16C274.012 55.6897 277.672 57.0318 281.43 56.9C283.77 56.9 289.24 56.22 289.24 49.9V48.68C288.051 50.0373 286.583 51.1222 284.937 51.8608C283.291 52.5994 281.504 52.9743 279.7 52.96C272.2 52.96 264.18 48.34 264.18 35.36C264.18 24.5 270.13 17.75 279.7 17.75C281.495 17.7022 283.279 18.047 284.927 18.7604C286.574 19.4738 288.047 20.5384 289.24 21.88V18.62H302.7V49.9C302.7 65.64 289.37 67.99 281.43 67.99ZM265.91 62.49C270.352 65.8966 275.835 67.663 281.43 67.49C289.18 67.49 302.2 65.1999 302.2 49.8799V19.1H289.74V23.22L289.3 22.7C288.146 21.2739 286.681 20.1312 285.017 19.3597C283.353 18.5883 281.534 18.2087 279.7 18.25C270.44 18.25 264.7 24.81 264.7 35.36C264.7 43.62 268.65 52.46 279.7 52.46C281.546 52.4789 283.371 52.074 285.035 51.2765C286.699 50.479 288.159 49.3102 289.3 47.86L289.74 47.36V49.9C289.74 56.9 283.38 57.42 281.43 57.42C277.653 57.5381 273.969 56.2316 271.11 53.7599L265.91 62.49ZM284.16 41.49C279.88 41.49 277.43 39.25 277.43 35.34C277.43 31.43 279.88 29.18 284.16 29.18C286.232 29.2033 288.213 30.0359 289.68 31.5L289.74 31.57V39.1L289.68 39.17C288.213 40.6341 286.232 41.4666 284.16 41.49V41.49ZM284.16 29.68C282.29 29.68 277.93 30.23 277.93 35.34C277.93 40.45 282.29 40.99 284.16 40.99C286.055 40.9595 287.868 40.217 289.24 38.91V31.76C287.866 30.4571 286.054 29.7152 284.16 29.68V29.68Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M333.12 49.74C331.12 51.97 327.29 54.49 321.17 54.49C313.1 54.49 309.65 49.67 309.65 43.69V18.85H322.65V38.14C322.65 41.67 324.52 43.04 327.65 43.04C328.712 43.0423 329.761 42.7957 330.711 42.3199C331.66 41.844 332.486 41.1522 333.12 40.3V18.85H346.12V53.6299H333.12V49.74Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M321.17 54.74C313.8 54.74 309.4 50.61 309.4 43.74V18.6H322.86V38.14C322.86 41.31 324.38 42.79 327.65 42.79C328.661 42.7954 329.659 42.5651 330.565 42.1172C331.471 41.6693 332.26 41.0163 332.87 40.21V18.6H346.33V53.8799H332.87V50.36C331.05 52.22 327.38 54.74 321.17 54.74ZM309.9 19.1V43.69C309.9 50.3 314.11 54.24 321.17 54.24C327.74 54.24 331.36 51.3099 332.94 49.5699L333.37 49.09V53.3799H345.83V19.1H333.37V40.4L333.31 40.47C332.649 41.3454 331.793 42.0556 330.811 42.5449C329.829 43.0342 328.747 43.2892 327.65 43.29C324.09 43.29 322.36 41.61 322.36 38.14V19.14L309.9 19.1Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M352.49 7.96996C352.492 6.53252 352.92 5.12793 353.72 3.9337C354.52 2.73948 355.656 1.8092 356.985 1.26049C358.313 0.71177 359.775 0.569237 361.184 0.850879C362.594 1.13252 363.889 1.8257 364.904 2.84282C365.92 3.85995 366.611 5.15536 366.891 6.56533C367.171 7.97529 367.026 9.43653 366.476 10.7644C365.925 12.0922 364.993 13.227 363.798 14.0254C362.603 14.8238 361.198 15.25 359.76 15.25C358.804 15.2526 357.856 15.066 356.973 14.701C356.089 14.336 355.286 13.7996 354.61 13.123C353.934 12.4463 353.399 11.6426 353.035 10.7583C352.671 9.87387 352.486 8.92625 352.49 7.96996V7.96996ZM353.28 18.85H366.28V53.6299H353.28V18.85Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M366.49 53.8799H353V18.5999H366.46L366.49 53.8799ZM353.49 53.3799H366V19.0999H353.53L353.49 53.3799ZM359.72 15.4999C358.23 15.5019 356.774 15.062 355.534 14.2358C354.294 13.4096 353.328 12.2342 352.756 10.8585C352.185 9.48274 352.034 7.96839 352.324 6.50705C352.613 5.04572 353.329 3.70308 354.382 2.64899C355.435 1.5949 356.776 0.87672 358.237 0.585362C359.698 0.294004 361.213 0.442548 362.589 1.01218C363.966 1.58181 365.142 2.54695 365.97 3.78547C366.798 5.02398 367.24 6.48023 367.24 7.96994C367.24 9.95839 366.454 11.8661 365.052 13.2769C363.651 14.6876 361.748 15.4867 359.76 15.4999H359.72ZM359.72 0.949956C358.336 0.949956 356.982 1.36047 355.831 2.12964C354.68 2.89881 353.783 3.99207 353.253 5.27115C352.723 6.55024 352.584 7.95772 352.855 9.31559C353.125 10.6735 353.791 11.9207 354.77 12.8997C355.749 13.8787 356.997 14.5453 358.354 14.8154C359.712 15.0855 361.12 14.9469 362.399 14.4171C363.678 13.8873 364.771 12.9901 365.54 11.8389C366.31 10.6878 366.72 9.33443 366.72 7.94996C366.72 6.10035 365.988 4.3259 364.684 3.01429C363.38 1.70268 361.61 0.960525 359.76 0.949956H359.72Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M397 34.3999C397 30.7999 395.06 29.3999 392 29.3999C390.909 29.3894 389.832 29.6399 388.858 30.1305C387.884 30.621 387.041 31.3374 386.4 32.2199V53.6799H373.4V18.8499H386.4V22.8499C388.4 20.5399 392.23 18.0199 398.4 18.0199C406.47 18.0199 409.99 22.9199 409.99 28.9699V53.6699H397V34.3999Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M410.19 53.8799H396.73V34.3999C396.73 31.2299 395.17 29.6799 391.94 29.6799C390.918 29.6674 389.908 29.8943 388.989 30.3423C388.07 30.7903 387.269 31.447 386.65 32.2599V53.8799H373.19V18.5999H386.65V22.2199C388.44 20.3699 392.09 17.7799 398.35 17.7799C405.77 17.7799 410.19 21.9699 410.19 28.9799V53.8799ZM397.19 53.3799H409.65V28.9299C409.65 22.2299 405.41 18.2299 398.31 18.2299C391.68 18.2299 388.1 21.2299 386.55 22.9699L386.11 23.4699V19.0999H373.69V53.3799H386.15V32.0699L386.21 31.9999C386.882 31.1191 387.75 30.406 388.744 29.9167C389.738 29.4274 390.832 29.1752 391.94 29.1799C395.45 29.1799 397.23 30.9399 397.23 34.3999L397.19 53.3799Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M435.79 5.59998H472.22V17.69H450.33V23.31H471.72V35.41H450.33V53.6299H435.79V5.59998Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M450.58 53.8799H435.58V5.34998H472.51V17.94H450.58V23.06H472V35.66H450.58V53.8799ZM436.04 53.3799H450.04V35.16H471.43V23.56H450.08V17.44H472V5.84998H436L436.04 53.3799Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M477.33 7.96991C477.324 6.52838 477.746 5.11752 478.543 3.91617C479.34 2.71482 480.475 1.77709 481.806 1.22177C483.136 0.666458 484.601 0.518563 486.016 0.796878C487.43 1.07519 488.73 1.76717 489.751 2.7851C490.771 3.80302 491.467 5.10106 491.749 6.51471C492.031 7.92837 491.888 9.39398 491.336 10.7258C490.784 12.0576 489.85 13.1957 488.65 13.9958C487.451 14.7958 486.042 15.2219 484.6 15.2199C483.646 15.2225 482.701 15.037 481.819 14.6738C480.938 14.3106 480.136 13.777 479.461 13.1035C478.785 12.43 478.249 11.6299 477.884 10.749C477.518 9.86808 477.33 8.92368 477.33 7.96991V7.96991ZM478.12 18.8499H491.12V53.6299H478.12V18.8499Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M491.34 53.8799H477.87V18.6H491.34V53.8799ZM478.34 53.3799H490.81V19.1H478.37L478.34 53.3799ZM484.57 15.4999C483.081 15.4999 481.625 15.0583 480.387 14.2309C479.148 13.4035 478.183 12.2275 477.613 10.8515C477.043 9.47561 476.894 7.9616 477.185 6.50092C477.475 5.04025 478.192 3.69851 479.246 2.64542C480.299 1.59233 481.64 0.875179 483.101 0.584632C484.562 0.294086 486.076 0.443202 487.452 1.01313C488.828 1.58306 490.004 2.5482 490.831 3.78651C491.658 5.02481 492.1 6.48065 492.1 7.96995C492.097 9.96104 491.307 11.8703 489.902 13.281C488.497 14.6917 486.591 15.4894 484.6 15.4999H484.57ZM484.57 0.949958C483.186 0.949958 481.832 1.36048 480.681 2.12965C479.53 2.89882 478.633 3.99207 478.103 5.27116C477.573 6.55024 477.434 7.95772 477.705 9.31559C477.975 10.6735 478.641 11.9207 479.62 12.8997C480.599 13.8787 481.847 14.5453 483.204 14.8154C484.562 15.0855 485.97 14.9469 487.249 14.4171C488.528 13.8873 489.621 12.9901 490.39 11.8389C491.159 10.6878 491.57 9.33443 491.57 7.94996C491.57 6.09863 490.837 4.32268 489.53 3.01078C488.224 1.69888 486.451 0.957893 484.6 0.949958H484.57Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M521.83 34.3999C521.83 30.7999 519.89 29.3999 516.83 29.3999C515.756 29.3897 514.695 29.6325 513.733 30.1085C512.77 30.5845 511.934 31.2804 511.29 32.1399V53.5999H498.29V18.8499H511.29V22.8499C513.29 20.5399 517.12 18.0199 523.29 18.0199C531.35 18.0199 534.88 22.9199 534.88 28.9699V53.6699H521.88L521.83 34.3999Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M535 53.8799H521.58V34.3999C521.58 31.2299 520.01 29.6799 516.79 29.6799C515.771 29.6628 514.763 29.8834 513.845 30.3243C512.926 30.7653 512.124 31.4143 511.5 32.2199V53.8399H498V18.5999H511.5V22.2199C513.29 20.3699 516.93 17.7799 523.2 17.7799C530.61 17.7799 535.04 21.9699 535.04 28.9799L535 53.8799ZM522 53.3799H534.46V28.9299C534.46 22.2299 530.22 18.2299 523.12 18.2299C516.49 18.2299 512.9 21.2299 511.35 22.9699L510.92 23.4699V19.0999H498.53V53.3799H511V32.0699L511.06 31.9999C511.732 31.1191 512.6 30.406 513.594 29.9167C514.588 29.4274 515.682 29.1752 516.79 29.1799C520.3 29.1799 522.08 30.9399 522.08 34.3999L522 53.3799Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M562.08 50.31C560.08 52.76 555.88 54.49 551.56 54.49C546.38 54.49 539.61 50.96 539.61 43.04C539.61 34.4 546.38 32.31 551.56 32.31C556.1 32.31 560.21 33.75 562.08 36.13V32.13C562.08 29.68 559.85 27.81 555.6 27.81C552.123 27.917 548.766 29.1094 546 31.22L541.61 23.22C546.29 19.47 552.77 17.96 558.02 17.96C566.66 17.96 575.09 20.96 575.09 32.58V53.58H562.09L562.08 50.31ZM562.08 42.25C561.21 41.02 558.98 40.38 556.96 40.38C554.94 40.38 552.43 41.1 552.43 43.26C552.43 45.42 554.8 46.07 556.96 46.07C559.12 46.07 561.21 45.42 562.08 44.19V42.25Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M551.56 54.7399C548.635 54.7142 545.799 53.7268 543.49 51.9299C542.156 50.873 541.088 49.5185 540.37 47.9749C539.653 46.4312 539.307 44.7412 539.36 43.0399C539.36 39.7399 540.55 32.0399 551.56 32.0399C555.93 32.0399 559.78 33.3299 561.83 35.4399V32.2199C561.83 29.7099 559.44 28.1499 555.6 28.1499C552.163 28.2399 548.841 29.4045 546.1 31.4799L545.87 31.6599L541.23 23.2199L541.4 23.0799C545.56 19.7599 551.75 17.7699 557.97 17.7699C569.3 17.7699 575.29 22.9099 575.29 32.6399V53.9199H561.83V51.0199C559.66 53.2199 555.64 54.7399 551.56 54.7399ZM551.56 32.5599C548.05 32.5599 539.86 33.5599 539.86 43.0399C539.86 51.1999 547.04 54.2399 551.56 54.2399C555.73 54.2399 559.97 52.5599 561.88 50.1599L562.33 49.5999V53.3799H574.79V32.5999C574.79 23.0699 569.13 18.2299 557.97 18.2299C551.97 18.2299 545.97 20.1299 541.88 23.2999L546.03 30.8599C548.816 28.8279 552.153 27.6909 555.6 27.5999C559.69 27.5999 562.33 29.3899 562.33 32.1699V36.8499L561.88 36.2799C560.07 33.9899 556.12 32.5599 551.56 32.5599ZM557 46.3199C554 46.3199 552.22 45.1699 552.22 43.2599C552.22 40.9499 554.69 40.1299 557 40.1299C559 40.1299 561.36 40.7399 562.32 42.1299L562.37 42.1999V44.2999L562.32 44.3699C561.32 45.6999 558.92 46.3199 557 46.3199ZM557 40.6299C556 40.6299 552.72 40.8199 552.72 43.2599C552.72 45.6999 555.72 45.8199 557 45.8199C559.12 45.8199 561.1 45.1199 561.87 44.1099V42.3299C561.06 41.3199 559.08 40.6299 557 40.6299Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M605.78 34.3999C605.78 30.7999 603.84 29.3999 600.78 29.3999C599.693 29.3926 598.619 29.6446 597.649 30.1351C596.679 30.6255 595.839 31.3402 595.2 32.2199V53.6799H582.2V18.8499H595.2V22.8499C597.2 20.5399 601.03 18.0199 607.15 18.0199C615.21 18.0199 618.74 22.9199 618.74 28.9699V53.6699H605.74L605.78 34.3999Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M619 53.8799H605.53V34.3999C605.53 31.2299 603.96 29.6799 600.74 29.6799C599.718 29.6674 598.707 29.8943 597.789 30.3423C596.87 30.7903 596.069 31.447 595.45 32.2599V53.8799H582V18.5999H595.47V22.2199C597.26 20.3699 600.9 17.7799 607.17 17.7799C614.58 17.7799 619.01 21.9699 619.01 28.9799L619 53.8799ZM606 53.3799H618.46V28.9299C618.46 22.2299 614.22 18.2299 607.12 18.2299C600.49 18.2299 596.9 21.2299 595.35 22.9699L594.92 23.4699V19.0999H582.48V53.3799H595V32.0699L595.06 31.9999C595.732 31.1191 596.6 30.406 597.594 29.9167C598.588 29.4274 599.682 29.1752 600.79 29.1799C604.3 29.1799 606.08 30.9399 606.08 34.3999L606 53.3799Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M643.08 17.98C651 17.98 655.89 21.58 657.84 24.54L649.48 32.38C648.841 31.4277 647.971 30.653 646.952 30.1284C645.932 29.6037 644.796 29.3462 643.65 29.38C639.98 29.38 636.81 31.69 636.81 36.15C636.761 37.0611 636.904 37.9724 637.231 38.8245C637.557 39.6765 638.059 40.4503 638.704 41.0956C639.35 41.7408 640.124 42.2429 640.976 42.5693C641.828 42.8957 642.739 43.039 643.65 42.99C644.793 43.0039 645.922 42.7377 646.938 42.2148C647.954 41.6918 648.827 40.928 649.48 39.99L657.84 47.91C655.84 50.79 651 54.46 643.08 54.46C632.08 54.46 623.56 47.26 623.56 36.17C623.56 25.08 632.06 17.98 643.08 17.98Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M643.08 54.74C631.44 54.74 623.31 47.12 623.31 36.2C623.31 25.28 631.44 17.73 643.08 17.73C650.88 17.73 655.92 21.18 658.08 24.4L658.19 24.57L649.47 32.77L649.31 32.52C648.687 31.6104 647.844 30.8731 646.86 30.3766C645.876 29.8801 644.782 29.6405 643.68 29.68C640.4 29.68 637.09 31.68 637.09 36.2C637.041 37.0783 637.178 37.9571 637.491 38.779C637.805 39.6008 638.289 40.3471 638.911 40.9692C639.533 41.5912 640.279 42.0749 641.101 42.3887C641.923 42.7025 642.802 42.8392 643.68 42.79C644.784 42.7985 645.874 42.538 646.855 42.0309C647.836 41.5239 648.678 40.7857 649.31 39.88L649.47 39.63L658.19 47.9L658.07 48.08C655.87 51.3 650.8 54.74 643.08 54.74ZM643.08 18.23C631.73 18.23 623.81 25.62 623.81 36.23C623.81 46.84 631.73 54.23 643.08 54.23C650.46 54.23 655.34 51.02 657.51 47.96L649.51 40.39C648.824 41.2957 647.937 42.0287 646.917 42.5305C645.898 43.0323 644.776 43.2889 643.64 43.28C640.11 43.28 636.55 41.09 636.55 36.19C636.55 31.29 640.11 29.19 643.64 29.19C644.774 29.1552 645.9 29.3931 646.924 29.8838C647.947 30.3745 648.837 31.1037 649.52 32.01L657.52 24.51C655.39 21.44 650.54 18.22 643.08 18.22V18.23Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M678.64 17.98C688.87 17.98 696.72 25.33 696.72 37.57V40.22H673.1C673.82 42.45 676.34 44.61 680.73 44.61C683.534 44.6124 686.272 43.7613 688.58 42.17L693.91 50.17C690.45 53.12 684.26 54.49 679.08 54.49C668.2 54.49 659.71 47.65 659.71 36.2C659.71 26.12 667.41 17.98 678.64 17.98ZM672.96 31.98H684.4C684.04 30.47 682.82 27.81 678.64 27.81C677.352 27.7215 676.075 28.0976 675.04 28.8699C674.005 29.6423 673.282 30.7598 673 32.02L672.96 31.98Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M679.08 54.74C667.34 54.74 659.46 47.29 659.46 36.2C659.46 25.67 667.7 17.73 678.64 17.73C689.58 17.73 696.97 25.73 696.97 37.57V40.48H673.46C674.23 42.35 676.52 44.37 680.73 44.37C683.48 44.3724 686.165 43.5389 688.43 41.98L688.64 41.81L694.24 50.22L694.07 50.36C690.29 53.59 683.63 54.74 679.08 54.74ZM678.64 18.22C668 18.22 660 25.96 660 36.22C660 47.01 667.68 54.22 679.12 54.22C683.52 54.22 689.91 53.14 693.62 50.1L688.56 42.52C686.243 44.033 683.537 44.8423 680.77 44.85C676.05 44.85 673.58 42.4 672.9 40.29L672.8 39.96H696.51V37.55C696.47 26 689.3 18.22 678.64 18.22ZM684.72 32.22H672.63L672.71 31.91C673.018 30.5966 673.785 29.4361 674.871 28.637C675.958 27.8379 677.295 27.4524 678.64 27.55C682.96 27.55 684.26 30.28 684.64 31.92L684.72 32.22ZM673.29 31.72H684.08C683.64 30.22 682.36 28.05 678.64 28.05C677.454 27.9484 676.27 28.2648 675.293 28.9441C674.316 29.6235 673.608 30.6231 673.29 31.77V31.72Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M707.73 39.08C709.256 39.078 710.748 39.5288 712.017 40.3752C713.287 41.2216 714.276 42.4257 714.861 43.8349C715.446 45.2441 715.6 46.7952 715.302 48.2917C715.005 49.7882 714.271 51.1629 713.192 52.2418C712.113 53.3206 710.738 54.0551 709.242 54.3523C707.745 54.6495 706.194 54.4959 704.785 53.9111C703.376 53.3263 702.172 52.3366 701.325 51.0672C700.479 49.7978 700.028 48.3057 700.03 46.78C700.059 44.7467 700.879 42.8046 702.317 41.3667C703.755 39.9288 705.697 39.1084 707.73 39.08V39.08Z", fill: "#EC3E3F" }),
        React__default['default'].createElement("path", { d: "M25.9301 55.1699C39.9415 55.1699 51.3001 43.8114 51.3001 29.7999C51.3001 15.7885 39.9415 4.42993 25.9301 4.42993C11.9186 4.42993 0.560059 15.7885 0.560059 29.7999C0.560059 43.8114 11.9186 55.1699 25.9301 55.1699Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M56.37 37.1499H25.23C25.0632 37.1487 24.9009 37.2039 24.7694 37.3065C24.6379 37.4091 24.5449 37.5532 24.5055 37.7153C24.4662 37.8774 24.4827 38.048 24.5525 38.1995C24.6223 38.351 24.7412 38.4745 24.89 38.5499L56 54.62C56.1126 54.6761 56.2377 54.7025 56.3635 54.6969C56.4892 54.6912 56.6114 54.6535 56.7185 54.5874C56.8256 54.5214 56.9141 54.429 56.9756 54.3192C57.0371 54.2094 57.0696 54.0858 57.07 53.9599V37.8899C57.0703 37.7004 56.9978 37.518 56.8676 37.3803C56.7373 37.2426 56.5592 37.1602 56.37 37.1499V37.1499Z", fill: "#EC3E3F" }),
        React__default['default'].createElement("path", { d: "M19.62 29.62C23.8726 29.62 27.3201 26.1726 27.3201 21.92C27.3201 17.6674 23.8726 14.22 19.62 14.22C15.3674 14.22 11.92 17.6674 11.92 21.92C11.92 26.1726 15.3674 29.62 19.62 29.62Z", fill: fillOne }),
        React__default['default'].createElement("path", { d: "M88.3601 55.1699C102.372 55.1699 113.73 43.8114 113.73 29.7999C113.73 15.7885 102.372 4.42993 88.3601 4.42993C74.3486 4.42993 62.9901 15.7885 62.9901 29.7999C62.9901 43.8114 74.3486 55.1699 88.3601 55.1699Z", fill: fillTwo }),
        React__default['default'].createElement("path", { d: "M82.0601 29.7099C86.3624 29.7099 89.8501 26.2222 89.8501 21.9199C89.8501 17.6176 86.3624 14.1299 82.0601 14.1299C77.7578 14.1299 74.2701 17.6176 74.2701 21.9199C74.2701 26.2222 77.7578 29.7099 82.0601 29.7099Z", fill: fillOne })));
};
var LogoWithText = React__default['default'].memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 245 240" }, props),
        React__default['default'].createElement("path", { d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" }),
        React__default['default'].createElement("path", { d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 19.99 12.76" }, props),
        React__default['default'].createElement("path", { d: "M20,8.44C19.24,3.67,15.6,0,11.26,0A8.87,8.87,0,0,0,3.35,5.67H2.82v0A3.33,3.33,0,0,0,0,9.19v3.5H1.66V9.58A2.1,2.1,0,0,1,3.77,7.47h0A2.11,2.11,0,0,1,5.88,9.58v3.11h.8L20,12.76Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 17.55 16.47" }, props),
        React__default['default'].createElement("path", { d: "M9.1,16.47H8.45A8.46,8.46,0,0,1,0,8V7H17.55V8A8.46,8.46,0,0,1,9.1,16.47Zm-7.59-8A7,7,0,0,0,8.45,15H9.1A7,7,0,0,0,16,8.45Z" }),
        React__default['default'].createElement("path", { d: "M8.62,7a5.65,5.65,0,0,1,.51-1.57A4.85,4.85,0,0,1,13,2.52a2.13,2.13,0,0,1,.79.15,2,2,0,0,1,1.09,1.21A4.43,4.43,0,0,1,14.62,7h1.61a5.65,5.65,0,0,0,0-3.59,3.44,3.44,0,0,0-1.93-2.07C12.1.36,9.24,1.87,7.8,4.7A7.28,7.28,0,0,0,7.08,7Z" }),
        React__default['default'].createElement("path", { d: "M1.34,7H2.91A5.33,5.33,0,0,1,2.64,6a4.71,4.71,0,0,1,.55-3.53,2.23,2.23,0,0,1,1.44-1A1.84,1.84,0,0,1,5,1.5c1.23,0,2.48,1.14,3.09,2.74a8,8,0,0,1,1-1.37C8,.94,6.2-.26,4.39.05A3.73,3.73,0,0,0,2,1.65a6.12,6.12,0,0,0-.78,4.68A5.61,5.61,0,0,0,1.34,7Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 140.33251 84.04614" }, props),
        React__default['default'].createElement("path", { d: "M208.94913,109.26046,196.10653,77.4084a12.34208,12.34208,0,0,0-17.48809-8.04115l-7.2781,3.63877a4.11344,4.11344,0,1,0,3.67907,7.3584l7.27809-3.63877a4.13824,4.13824,0,0,1,3.55874-.0603,4.07578,4.07578,0,0,1,2.25709,2.67509l10.68124,26.25582c-.30423-.02248-.3797-2.85138-.68777-2.85138H156.47938a12.17029,12.17029,0,0,0-11.77448,8.8031,20.52113,20.52113,0,0,0-8.85656,0,12.17025,12.17025,0,0,0-11.77448-8.8031h-41.628c-.30808,0,.17238,2.8289-.13158,2.85138L92.42318,79.40841a4.11148,4.11148,0,0,1,5.832-2.683l7.2781,3.63878a4.11344,4.11344,0,0,0,3.67905-7.3584L101.93453,69.367A12.34141,12.34141,0,0,0,84.43,77.47665L71.603,109.26156a12.24341,12.24341,0,0,0-1.25532,8.24452l3.61081,18.06257A20.62267,20.62267,0,0,0,94.12581,152.101h18.26732a20.62261,20.62261,0,0,0,20.16728-16.53234l3.06922-15.3535a12.21873,12.21873,0,0,1,9.29345,0l3.06922,15.3535A20.62265,20.62265,0,0,0,168.15958,152.101h18.26731a20.62261,20.62261,0,0,0,20.16729-16.53234l3.61082-18.06257A12.24324,12.24324,0,0,0,208.94913,109.26046Z", transform: "translate(-70.11009 -68.05485)" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 489.70988 411.5772" }, props),
        React__default['default'].createElement("path", { d: "M81.834,415.01551v30.73168a6.89367,6.89367,0,0,0,9.21307,6.4427,514.83761,514.83761,0,0,1,156.17116-21.77632c64.427,0,122.41139,9.40634,163.90242,24.54669a6.8937,6.8937,0,0,0,9.21307-6.44271v-33.502c-43.61709-16.42892-105.08049-25.77082-169.24985-25.77082S125.51553,398.58659,81.834,415.01551Z", transform: "translate(-6.19672 -43.78689)" }),
        React__default['default'].createElement("path", { d: "M325.75478,267.993,254.885,119.35981l-3.80119-8.18224-3.86562,8.18224L169.45478,282.61794,44.91729,173.73622,79.12805,386.34545c46.38747-16.17121,106.88448-24.93329,171.82693-24.93329s125.37505,8.76208,171.7625,24.93329L457.05711,173.7362,332.77733,282.61794Z", transform: "translate(-6.19672 -43.78689)" }),
        React__default['default'].createElement("circle", { cx: "244.88712", cy: "29.37873", r: "29.37874" }),
        React__default['default'].createElement("path", { d: "M53.87265,137.7215a23.838,23.838,0,1,0-23.90227,23.77357q.06433.0002.12869,0A23.77359,23.77359,0,0,0,53.87265,137.7215Z", transform: "translate(-6.19672 -43.78689)" }),
        React__default['default'].createElement("circle", { cx: "465.8719", cy: "93.93462", r: "23.838" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 541.16 532" }, props),
        React__default['default'].createElement("path", { d: "M552.54,34H448.64a18,18,0,0,0-13.71,6.49L165.25,360.86l-32.83-33a18.11,18.11,0,1,0-25.61,25.61l33.91,33.92-86.22,86A54.11,54.11,0,0,0,54.36,550l.14.13h0a54.12,54.12,0,0,0,76.53.14l.13-.14,86-86.22,33.92,33.91a18,18,0,0,0,25.51.11l.1-.11a18,18,0,0,0,.1-25.51l-.1-.1-33-32.83L564.08,169.65a18,18,0,0,0,6.5-13.71V52A18,18,0,0,0,552.54,34Z", transform: "translate(-29.42 -34)" }),
        React__default['default'].createElement("path", { d: "M276.37,172.54l-111.3-132A18,18,0,0,0,151.36,34H47.46a18,18,0,0,0-18,18v103.9a18,18,0,0,0,6.5,13.71L178.06,289.43Z", transform: "translate(-29.42 -34)" }),
        React__default['default'].createElement("path", { d: "M459.28,387.38l33.91-33.92a18.11,18.11,0,1,0-25.61-25.61l-32.83,33-18-20.57L326.52,415.7l28.14,23.63-33,32.83a18,18,0,0,0-.11,25.51l.11.1a18,18,0,0,0,25.51.11l.1-.11,33.91-33.91,86.05,86.22a54.21,54.21,0,0,0,76.66-76.66Z", transform: "translate(-29.42 -34)" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 660 542" }, props),
        React__default['default'].createElement("path", { d: "M561.8,403.3C554.8,396.1,278,5.7,269.3,0.6C250.5,1,55.2,0.4,31.1,0.6C14.9-1.5,0.3,11.6,0.5,27.7v486.1\n        c0,15.2,12.3,27.3,27.3,27.3c15.2,0,27.3-12.3,27.3-27.3V411.1h169.2v102.6c0.2,36.2,54.6,36.2,54.6,0V394.6\n        c0.9-2.1,1.5-4.4,1.9-6.8c8,4.4,107.9,165,121,153.3c2.7,0.6,242.8,0,245.4,0.2c6.6,0,12.1-6.3,12.1-13.8\n        C659.5,463,616.6,409.9,561.8,403.3z M55,74.8l95.8,132.8H55V74.8z M55,356.3v-94.1h135.2c6.8,9.5,27.1,37.7,33.8,46.9v47H55V356.3z\n        " })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default['default'].createElement("path", { d: "M12.6,43.6l11.6,4.8c-1.3,3.3-2.4,6.7-3.1,10.2l-0.4,2l16.6,16.6l2-0.4c3.5-0.8,6.9-1.8,10.2-3.1l4.8,11.6\n        c0.2,0.4,0.6,0.6,1,0.4c0.1,0,0.2-0.1,0.3-0.2l7.3-7.3c2.4-2.4,3.7-5.7,3.5-9.1L66,64.4c13.5-9.9,27.1-27.4,30.8-57.8\n        c0.4-2.7-1.5-5.3-4.3-5.6C92.1,1,91.6,1,91.2,1C60.8,4.8,43.4,18.4,33.4,31.8l-4.7-0.2c-3.4-0.2-6.7,1.1-9.1,3.5l-7.3,7.3\n        c-0.3,0.3-0.4,0.7-0.1,1.1C12.4,43.4,12.5,43.5,12.6,43.6z M59.3,25.8c3.5-3.5,9.2-3.5,12.7,0c3.5,3.5,3.5,9.2,0,12.7\n        c-3.5,3.5-9.2,3.5-12.7,0C55.8,35.1,55.7,29.4,59.3,25.8C59.3,25.9,59.3,25.9,59.3,25.8z M10.5,78.5c-1.9-0.7-4-0.8-6-0.5\n        c-0.4,0.1-0.7,0-1-0.3c-0.3-0.3-0.4-0.8-0.2-1.2c2.1-4.6,7.8-13.8,18-6.3c0.2,0.2,0.2,0.5,0,0.7c0,0,0,0,0,0\n        c-2.8,2.2-4.3,5.6-4.2,9.1c0,0.4,0.4,0.8,0.8,0.8c3.5,0.1,6.9-1.4,9.1-4.1c0.2-0.2,0.5-0.3,0.7-0.1c0,0,0.1,0,0.1,0.1\n        c1.4,1.7,5.3,7.2,1,12.5c-1.9,2.3-4.6,3.7-7.5,4C17,93.6,9.2,95,6,98.6c-0.4,0.5-1.1,0.5-1.5,0.1c-0.2-0.1-0.3-0.3-0.3-0.5\n        C3,94.4,1.3,85.9,10.5,78.5z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 278 337.2" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M134,335.8c-67-47-134-68-134-167v-121c0-5,3-8,8-9l17-1c39-3,76-16,109-37c3-1,7-1,9,0c33,21,71,34,110,37\n          l17,1c4,1,8,4,8,9v121c0,98-66,118-134,167C141,337.8,137,337.8,134,335.8z M167,130.8l-46,46l-10-11c-14-13-34,7-21,20l21,21\n          c6,6,15,6,21,0l56-56C201,137.8,181,117.8,167,130.8z" }))));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default['default'].createElement("g", { transform: "translate(0,-952.36218)" },
            React__default['default'].createElement("path", { d: "m 42.0625,7.5625 -1.8125,7.875 c -2.75595,0.77851 -5.37117,1.84596 -7.8125,3.21875 L 25.59375,14.375 C 24.835057,13.902783 23.758037,14.025482 23.125,14.65625 L 14.65625,23.125 c -0.630768,0.633037 -0.753467,1.710057 -0.28125,2.46875 l 4.28125,6.84375 c -1.372787,2.44133 -2.440242,5.05655 -3.21875,7.8125 l -7.875,1.8125 C 6.6887135,42.258434 6.0063721,43.104538 6,44 l 0,12 c 0.00637,0.895462 0.6887135,1.741566 1.5625,1.9375 l 7.875,1.8125 c 0.596768,2.112544 1.368779,4.130217 2.3125,6.0625 l -7.125,6.71875 C 9.396793,73.689428 9.0072376,75.53535 9,77 c -0.00653,1.321484 0.2151957,2.92605 1.53125,4.34375 0.02037,0.02129 0.04121,0.04213 0.0625,0.0625 l 8,8 C 19.785429,90.59815 21.14554,91 22.5,91 c 1.25119,0 2.675725,-0.39435 3.875,-1.59375 l 7.375,-7.375 c 2.062336,1.043905 4.227746,1.889384 6.5,2.53125 l 1.8125,7.875 C 42.258434,93.311286 43.104538,93.993628 44,94 l 12,0 c 0.895462,-0.0064 1.741566,-0.688714 1.9375,-1.5625 l 1.8125,-7.875 c 2.75595,-0.7785 5.37117,-1.84595 7.8125,-3.21875 l 6.84375,4.28125 c 0.758693,0.472217 1.835713,0.349518 2.46875,-0.28125 L 85.34375,76.875 c 0.630768,-0.633037 0.753467,-1.710057 0.28125,-2.46875 L 81.34375,67.5625 c 1.372787,-2.4414 2.440242,-5.0566 3.21875,-7.8125 l 7.875,-1.8125 C 93.311286,57.741566 93.993628,56.895462 94,56 L 94,44 C 93.9936,43.104538 93.311286,42.258434 92.4375,42.0625 L 84.5625,40.25 C 83.783992,37.49405 82.716537,34.87883 81.34375,32.4375 L 85.625,25.59375 C 86.097217,24.835057 85.974518,23.758037 85.34375,23.125 L 76.875,14.65625 C 76.241963,14.025482 75.164943,13.902783 74.40625,14.375 L 67.5625,18.65625 C 65.12117,17.28346 62.50595,16.21601 59.75,15.4375 L 57.9375,7.5625 C 57.741566,6.6887135 56.895462,6.0063721 56,6 L 44,6 C 42.936614,6 42.228998,6.8390955 42.0625,7.5625 z M 45.59375,10 l 8.8125,0 1.71875,7.40625 c 0.162501,0.71854 0.75379,1.32241 1.46875,1.5 3.213465,0.7819 6.211429,2.126228 9,3.75 0.800368,0.466051 1.410064,0.41429 2.125,-0.03125 l 6.46875,-4.03125 6.21875,6.21875 -4.03125,6.46875 c -0.504806,0.810038 -0.378909,1.504971 0.03898,2.241122 1.571148,2.767697 2.908823,5.71545 3.679766,8.883878 0.17759,0.71496 0.78146,1.306249 1.5,1.46875 L 90,45.59375 l 0,8.8125 -7.40625,1.71875 c -0.71854,0.162501 -1.32241,0.75379 -1.5,1.46875 -0.781903,3.2135 -2.126228,6.211449 -3.75,9 -0.466053,0.800367 -0.41429,1.410064 0.03125,2.125 L 81.40625,75.1875 75.1875,81.40625 68.71875,77.375 c -0.801518,-0.499497 -1.378601,-0.436532 -2.125,-0.03125 -2.835837,1.539813 -5.786535,2.9681 -9,3.75 -0.71496,0.17759 -1.306249,0.78146 -1.46875,1.5 L 54.40625,90 45.59375,90 43.875,82.59375 c -0.162501,-0.71854 -0.75379,-1.32241 -1.46875,-1.5 -1.980458,-0.481885 -3.873853,-1.182927 -5.6875,-2.03125 l 6.9375,-6.90625 C 45.776917,72.70635 47.894347,73 50,73 55.872569,73 61.940687,70.87185 66.40625,66.40625 70.893257,61.91975 73,55.9137 73,50 73,47.48647 72.749182,44.85605 71.90625,42.34375 71.477223,41.056662 69.552689,40.602762 68.59375,41.5625 l -12.28125,12.28125 -8.59375,-1.5625 -1.5625,-8.625 12.25,-12.25 C 59.394234,30.441401 58.914325,28.46639 57.59375,28.0625 54.755973,27.20428 51.799328,27 49,27 43.422107,27 37.974506,29.18176 33.59375,33.5625 29.127111,38.02913 27.074469,44.16683 27,49.96875 c -0.02737,2.1323 0.23204,4.24025 0.78125,6.34375 L 20.75,62.96875 c -0.772047,-1.715279 -1.391307,-3.51553 -1.84375,-5.375 -0.17759,-0.71496 -0.78146,-1.306249 -1.5,-1.46875 L 10,54.40625 10,45.59375 17.40625,43.875 c 0.71854,-0.162501 1.32241,-0.75379 1.5,-1.46875 0.781903,-3.21347 2.12518,-6.21204 3.75,-9 0.418498,-0.718084 0.423183,-1.395794 -0.03125,-2.125 L 18.59375,24.8125 24.8125,18.59375 31.28125,22.625 c 0.801518,0.499497 1.378595,0.436521 2.125,0.03125 2.835828,-1.539753 5.786535,-2.9681 9,-3.75 0.71496,-0.17759 1.306249,-0.78146 1.46875,-1.5 z M 49,31 c 1.332977,0 2.648518,0.0652 3.9375,0.21875 L 42.59375,41.5625 c -0.460972,0.455191 -0.678451,1.143873 -0.5625,1.78125 l 2,11 c 0.140826,0.803775 0.821225,1.484174 1.625,1.625 l 11,2 c 0.627841,0.105469 1.301195,-0.110966 1.75,-0.5625 l 10.4375,-10.4375 C 68.961312,47.9515 69,48.9796 69,50 69,54.9707 67.257663,59.8986 63.59375,63.5625 59.969967,67.1863 54.904977,69 50,69 47.735613,69 45.621899,68.76365 43.625,68.09375 42.93148,67.862887 42.115974,68.05108 41.59375,68.5625 l -18.03125,18 C 23.327027,86.798 22.743604,87 22.5,87 22.363754,87 21.533383,86.6897 21.40625,86.5625 L 13.46875,78.625 C 13.354202,78.5016 12.999999,77.4775 13,77 c 10e-7,-0.6392 0.310029,-1.48195 0.46875,-1.65625 L 31.375,58.4375 c 0.555541,-0.519523 0.771895,-1.37221 0.53125,-2.09375 C 31.223821,54.30985 30.971089,52.2527 31,50 31.06277,45.10965 32.810205,40.00228 36.40625,36.40625 40.100704,32.71181 44.456135,31 49,31 z", transform: "translate(0,952.36218)" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$s,
    GroupsIcon: Icon$r,
    HamburgerIcon: Icon$q,
    HamburgerCloseIcon: Icon$p,
    HomeIcon: Icon$o,
    IfoIcon: Icon$n,
    InfoIcon: Icon$m,
    LanguageIcon: Icon$l,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$k,
    MoreIcon: Icon$j,
    NftIcon: Icon$i,
    PoolIcon: Icon$h,
    SunIcon: Icon$g,
    TelegramIcon: Icon$f,
    TicketIcon: Icon$e,
    TradeIcon: Icon$d,
    TwitterIcon: Icon$c,
    DiscordIcon: Icon$b,
    IglooIcon: Icon$a,
    NestIcon: Icon$9,
    ClubIcon: Icon$8,
    CrownIcon: Icon$7,
    BattleIcon: Icon$6,
    CompounderIcon: Icon$5,
    LaunchpadIcon: Icon$4,
    AuditIcon: Icon$3,
    SettingIcon: Icon$2
});

var MenuButton = styled__default['default'](Button)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$h;

var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 240px;\n    margin-top: 4px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 240px;\n    margin-top: 4px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var MenuCloseIcon = styled__default['default'](Icon$p)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  fill: ", ";\n"], ["\n  fill: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.setting;
});
var MenuIcon = styled__default['default'](Icon$q)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  fill: ", ";\n"], ["\n  fill: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.setting;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$T, { className: "mobile-icon" }),
        React__default['default'].createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "8px" }, isPushed ? (React__default['default'].createElement(MenuCloseIcon, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(MenuIcon, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Penguin home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Penguin home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$g, templateObject_2$8, templateObject_3$5;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.penguinfinance.io",
            },
            {
                label: "Liquidity",
                href: "https://exchange.penguinfinance.io/#/pool",
            },
        ],
    },
    {
        label: "Igloos",
        icon: "IglooIcon",
        href: "/igloos",
    },
    {
        label: "Compounder",
        icon: "CompounderIcon",
        href: "/compounder",
    },
    {
        label: "Nests",
        icon: "NestIcon",
        href: "/nests",
    },
    {
        label: "Club",
        icon: "ClubIcon",
        href: "/club",
    },
    {
        label: "Arena",
        icon: "BattleIcon",
        href: "/arena",
    },
    {
        label: "Launchpad",
        icon: "LaunchpadIcon",
        href: "/launchpad",
    },
    {
        label: "Emperor",
        icon: "CrownIcon",
        href: "/emperor",
        badge: "LIVE",
        badgeLightColor: "#37DB94",
        badgeDarkColor: "#37DB94",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://penguinswap.info",
            },
            {
                label: "Tokens",
                href: "https://penguinswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://penguinswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://penguinswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.penguinfinance.io",
            },
            {
                label: "Github",
                href: "https://github.com/penguinswap",
            },
            {
                label: "Docs",
                href: "https://docs.penguinfinance.io",
            },
            {
                label: "Blog",
                href: "https://penguinswap.medium.com",
            },
        ],
    },
    {
        label: "Audited by CertiK",
        icon: "AuditIcon",
        href: "/audit",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 44;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ",
    ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return isPushed ? theme.colors.textSubtle : "transparent";
});
var MenuEntry = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ",
    ";\n  color: ", ";\n  box-shadow: ",
    ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return secondary ? theme.colors.background : "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return isActive ? "inset 4px 0px 0px " + theme.colors.menuIcon : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.menuIcon;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$f, templateObject_2$7, templateObject_3$4;

var Container$2 = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ",
    ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return isOpen && isPushed ? "rgba(133, 133, 133, 0.705)" : "transparent";
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$19, null) : React__default['default'].createElement(Icon$1a, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$e, templateObject_2$6;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href, target: "_blank" } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons$3 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  &::-webkit-scrollbar {\n    width: 0px;\n  }\n  &:hover {\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  &::-webkit-scrollbar {\n    width: 0px;\n  }\n  &:hover {\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n"])));
var Badge = styled__default['default'](Tag)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  font-weight: 600;\n  color: ", ";\n  color: ", ";\n  border-color: ", ";\n  border-color: ", ";\n"], ["\n  font-weight: 600;\n  color: ", ";\n  color: ", ";\n  border-color: ",
    ";\n  border-color: ",
    ";\n"])), function (_a) {
    var theme = _a.theme, badgeLightColor = _a.badgeLightColor;
    return !theme.isDark && badgeLightColor;
}, function (_a) {
    var theme = _a.theme, badgeDarkColor = _a.badgeDarkColor;
    return theme.isDark && badgeDarkColor;
}, function (_a) {
    var theme = _a.theme, badgeLightColor = _a.badgeLightColor;
    return !theme.isDark && badgeLightColor;
}, function (_a) {
    var theme = _a.theme, badgeDarkColor = _a.badgeDarkColor;
    return theme.isDark && badgeDarkColor;
});
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, { className: "panel-body-container" }, links.map(function (entry) {
        var Icon = Icons$3[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass
            ? entry.calloutClass
            : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true
                ? entry.initialOpenState
                : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(Flex, { width: "100%", justifyContent: "space-between", alignItems: "center" },
                    React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                    entry.badge && (React__default['default'].createElement(Badge, { variant: "primary", outline: true, badgeLightColor: entry.badgeLightColor, badgeDarkColor: entry.badgeDarkColor }, entry.badge))))));
    })));
};
var templateObject_1$d, templateObject_2$5;

var PriceLink$1 = styled__default['default'].a(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var PenguinPrice = function (_a) {
    var penguinPriceUsd = _a.penguinPriceUsd;
    return penguinPriceUsd ? (React__default['default'].createElement(PriceLink$1, { href: "https://info.pangolin.exchange/#/token/0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c", target: "_blank" },
        React__default['default'].createElement(Icon$T, { width: "26px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + penguinPriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var PenguinPrice$1 = React__default['default'].memo(PenguinPrice);
var templateObject_1$c;

var Icons$2 = IconModule;
var MoonIcon = Icons$2.MoonIcon, SunIcon = Icons$2.SunIcon;
var StyledButton$1 = styled__default['default'](Button)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  padding: 0 0 0 24px;\n"], ["\n  padding: 0 0 0 24px;\n"])));
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default['default'].createElement(StyledButton$1, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React__default['default'].createElement(Flex, { alignItems: "center" },
            React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React__default['default'].memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });
var templateObject_1$b;

var Icons$1 = IconModule;
var SocialLinks = function (_a) {
    var socials = _a.socials;
    return (React__default['default'].createElement(Flex, null, socials && socials.map(function (social, index) {
        var Icon = Icons$1[social.icon];
        var iconProps = {
            width: "24px",
            color: "textSubtle",
            style: { cursor: "pointer" },
        };
        var mr = index < socials.length - 1 ? "8px" : 0;
        // if (social.items) {
        //   return (
        //     <Dropdown
        //       key={social.label}
        //       position="top"
        //       target={<Icon {...iconProps} mr={mr} />}
        //     >
        //       {social.items.map((item) => (
        //         <Link
        //           external
        //           key={item.label}
        //           href={item.href}
        //           aria-label={item.label}
        //           color="textSubtle"
        //         >
        //           {item.label}
        //         </Link>
        //       ))}
        //     </Dropdown>
        //   );
        // }
        return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
            React__default['default'].createElement(Icon, __assign({}, iconProps))));
    })));
};
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var PriceLink = styled__default['default'].a(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 6px 0;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 6px 0;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var PefiRatio = function (_a) {
    var pefiRatio = _a.pefiRatio, type = _a.type;
    return pefiRatio ? (React__default['default'].createElement(PriceLink, { href: "https://info.pangolin.exchange/#/token/0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c", target: "_blank" },
        React__default['default'].createElement(Flex, null,
            type === "xPefi" ? (React__default['default'].createElement(Icon$x, { width: "24px", mr: "8px" })) : (React__default['default'].createElement(Icon$v, { width: "24px", mr: "8px" })),
            React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, pefiRatio.toFixed(3) + " PEFI")))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var PefiRatio$1 = React__default['default'].memo(PefiRatio);
var templateObject_1$a;

var Container = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingIcon = styled__default['default'](Icon$Y)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  fill: ", "; ;\n"], ["\n  fill: ", "; ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.setting;
});
var FooterItem = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 40px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 40px;\n  padding: 0 16px;\n"])));
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, penguinPriceUsd = _a.penguinPriceUsd, pefiRatio = _a.pefiRatio, iPefiRatio = _a.iPefiRatio, socials = _a.socials;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(SettingIcon, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(FooterItem, null,
            React__default['default'].createElement(PenguinPrice$1, { penguinPriceUsd: penguinPriceUsd }),
            socials && React__default['default'].createElement(SocialLinks$1, { socials: socials })),
        React__default['default'].createElement(FooterItem, null,
            React__default['default'].createElement("div", null,
                pefiRatio !== undefined && (React__default['default'].createElement(PefiRatio$1, { pefiRatio: pefiRatio, type: "xPefi" })),
                iPefiRatio !== undefined && (React__default['default'].createElement(PefiRatio$1, { pefiRatio: iPefiRatio, type: "iPefi" }))),
            React__default['default'].createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }))));
};
var templateObject_1$9, templateObject_2$4, templateObject_3$3;

var StyledPanel = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  border-color: ", ";\n\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    border-color: ", ";\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ",
    ";\n  border-color: ", ";\n\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    border-color: ", ";\n    width: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0;
}, function (_a) {
    var isDark = _a.isDark;
    return isDark && "#0C0B15";
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isDark = _a.isDark;
    return isDark && "#0C0B15";
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu, isDark = props.isDark;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu, isDark: isDark },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$8;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.isDark ? '#fff' : theme.colors.secondary;
});
var Tooltip = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -20px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ",
    ";\n  position: absolute;\n  bottom: -20px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return isTooltipDisplayed ? "block" : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var StyledCopyIcon = styled__default['default'](Icon$W)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  fill: ", ";\n"], ["\n  fill: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.isDark ? '#fff' : theme.colors.secondary;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(StyledCopyIcon, { width: "20px", color: "secondary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$7, templateObject_2$3, templateObject_3$2;

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 280 280" }, props),
        React__default['default'].createElement("circle", { cx: "150", cy: "150", r: "120", fill: "white" }),
        React__default['default'].createElement("g", { transform: "translate(0.000000,280.000000) scale(0.100000,-0.100000)", fill: "#1850e2", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1255 2789 c-155 -15 -377 -82 -510 -155 -174 -94 -375 -269 -479\n        -416 -367 -520 -346 -1220 50 -1698 261 -314 615 -494 1016 -516 325 -18 685\n        96 928 295 325 265 509 616 535 1021 11 170 -29 439 -83 563 -10 23 -25 58\n        -32 77 -22 56 -96 187 -147 259 -65 91 -242 266 -335 328 -202 137 -432 220\n        -665 243 -111 11 -163 11 -278 -1z m275 -580 c71 -11 212 -59 269 -92 212\n        -122 372 -351 410 -587 74 -452 -249 -883 -707 -942 -382 -50 -743 176 -877\n        550 -130 362 32 780 380 981 53 31 190 79 257 90 75 12 192 13 268 0z" }),
            React__default['default'].createElement("path", { d: "M1157 1642 c-15 -16 -17 -48 -17 -244 0 -205 2 -226 18 -241 16 -15\n        48 -17 244 -17 205 0 226 2 241 18 15 16 17 48 17 244 0 205 -2 226 -18 241\n        -16 15 -48 17 -244 17 -205 0 -226 -2 -241 -18z" }))));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["Coinbase"] = "coinbase";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Coinbase",
        icon: Icon,
        connectorId: exports.ConnectorNames.Coinbase,
    },
    // {
    //   title: "TrustWallet",
    //   icon: TrustWallet,
    //   connectorId: ConnectorNames.Injected,
    // },
    // {
    //   title: "MathWallet",
    //   icon: MathWallet,
    //   connectorId: ConnectorNames.Injected,
    // },
    // {
    //   title: "TokenPocket",
    //   icon: TokenPocket,
    //   connectorId: ConnectorNames.Injected,
    // },
    // {
    //   title: "WalletConnect",
    //   icon: WalletConnect,
    //   connectorId: ConnectorNames.WalletConnect,
    // },
    // {
    //   title: "Binance Chain Wallet",
    //   icon: BinanceChain,
    //   connectorId: ConnectorNames.BSC,
    // },
    // {
    //   title: "SafePal Wallet",
    //   icon: SafePalWallet,
    //   connectorId: ConnectorNames.Injected,
    // },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://penguin-finance.medium.com/penguin-finance-getting-started-923c383bb060", external: true },
            React__default['default'].createElement(Icon$V, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "8px",
            } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://cchain.explorer.avax.network/address/" + account, mr: "16px" }, "View on AvaxScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserInfo = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var NicknameButton = styled__default['default'](Button)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  margin-right: 10px;\n  box-shadow: ", ";\n"], ["\n  background: ", ";\n  color: ", ";\n  margin-right: 10px;\n  box-shadow: ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? theme.colors.red : "#e4efef");
}, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#ffffff" : "#EC3E3F");
}, function (_a) {
    var theme = _a.theme;
    return !theme.isDark
        ? "0px -2px 0px 0px #dbcccc inset"
        : "0px -2px 0px 0px #a0323d inset";
});
var ConnectButton = styled__default['default'](Button)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  box-shadow: ", ";\n"], ["\n  background: ",
    ";\n  color: ",
    ";\n  padding-left: ", ";\n  padding-right: ", ";\n  box-shadow: ",
    ";\n"])), function (_a) {
    var theme = _a.theme, isConnected = _a.isConnected;
    return isConnected && !theme.isDark ? "#e4efef" : theme.colors.red;
}, function (_a) {
    var isConnected = _a.isConnected, theme = _a.theme;
    return isConnected && !theme.isDark ? "#EC3E3F" : "#ffffff";
}, function (_a) {
    var isConnected = _a.isConnected;
    return isConnected && "28px";
}, function (_a) {
    var isConnected = _a.isConnected;
    return isConnected && "8px";
}, function (_a) {
    var theme = _a.theme, isConnected = _a.isConnected;
    return isConnected && !theme.isDark
        ? "0px -2px 0px 0px #dbcccc inset"
        : "0px -2px 0px 0px #a0323d inset";
});
var AccountContainer = styled__default['default'].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 16px;\n  margin-top: 8px;\n  padding: 16px 20px;\n  border: 2px solid ", ";\n"], ["\n  background: ",
    ";\n  border-radius: 16px;\n  margin-top: 8px;\n  padding: 16px 20px;\n  border: 2px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.isDark ? theme.colors.secondary : "#fff";
}, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#141223" : "#f2f0f4");
});
var WalletDropdown = styled__default['default'](Dropdown)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  .dropdown-content {\n    background: transparent;\n    box-shadow: none;\n    left: 0;\n  }\n"], ["\n  .dropdown-content {\n    background: transparent;\n    box-shadow: none;\n    left: 0;\n  }\n"])));
var YourAssetsLabel = styled__default['default'](Text)(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.red;
});
var StyledButton = styled__default['default'](Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n  border-radius: 12px;\n  padding: 0 24px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n  border-radius: 12px;\n  padding: 0 24px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.isDark && theme.colors.red;
}, function (_a) {
    var theme = _a.theme;
    return theme.isDark && "#ffffff";
}, function (_a) {
    var theme = _a.theme;
    return theme.isDark && theme.colors.red;
});
var StyledLinkExternal = styled__default['default'](LinkExternal)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  svg {\n    fill: ", ";\n  }\n"], ["\n  color: ", ";\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.red;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.red;
});
var Label = styled__default['default'](Text)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#fff" : theme.colors.secondary);
});
var LowAvaxBalance = styled__default['default'].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background: ", ";\n  border: 1px solid #ffb237;\n  padding: 16px 12px;\n  border-radius: 16px;\n"], ["\n  background: ", ";\n  border: 1px solid #ffb237;\n  padding: 16px 12px;\n  border-radius: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#463b66" : "#fff7eb");
});
var Warning = styled__default['default'](Icon$C)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  fill: #ffb237;\n"], ["\n  fill: #ffb237;\n"])));
var WalletWrapper = styled__default['default'].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  background: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: 50px;\n  padding: 8px;\n  margin-right: -20px;\n  z-index: 1;\n  cursor: pointer;\n  svg {\n    fill: ", ";\n  }\n"], ["\n  background: ",
    ";\n  border: 2px solid\n    ", ";\n  border-radius: 50px;\n  padding: 8px;\n  margin-right: -20px;\n  z-index: 1;\n  cursor: pointer;\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.isDark ? theme.colors.secondary : "#fff";
}, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? theme.colors.red : "#EC3E3F");
}, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? theme.colors.red : "#EC3E3F");
});
var ConnectedButtonWrapper = styled__default['default'].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var ArrowDown = styled__default['default'](Icon$11)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin-left: 0;\n"], ["\n  margin-left: 0;\n"])));
var PefiBalances = styled__default['default'].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  padding-top: 18px;\n"], ["\n  padding-top: 18px;\n"])));
var UserBlock = function (_a) {
    var account = _a.account, nickname = _a.nickname, login = _a.login, logout = _a.logout, pefiBalance = _a.pefiBalance, avaxBalance = _a.avaxBalance, iPefiBalance = _a.iPefiBalance;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal;
    var accountEllipsis = account
        ? account.substring(0, 4) + "..." + account.substring(account.length - 4)
        : null;
    var addMetamask = function (tokenAddress, tokenSymbol, tokenDecimals) { return __awaiter(void 0, void 0, void 0, function () {
        var provider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = window.ethereum;
                    if (!provider) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, provider.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: tokenAddress,
                                    symbol: tokenSymbol,
                                    decimals: tokenDecimals,
                                    image: "",
                                },
                            },
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    console.log("Error => addMetamask");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleAddTokensToMetaMask = function () { return __awaiter(void 0, void 0, void 0, function () {
        var pefiAddress, iPefiAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pefiAddress = "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c";
                    iPefiAddress = "0xE9476e16FE488B90ada9Ab5C7c2ADa81014Ba9Ee";
                    return [4 /*yield*/, addMetamask(pefiAddress, "PEFI", 18)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, addMetamask(iPefiAddress, "iPEFI", 18)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var renderAccountData = function () {
        return (React__default['default'].createElement(AccountContainer, null,
            React__default['default'].createElement(YourAssetsLabel, { fontSize: "20px", bold: true }, "Your Assets"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account || "" }, accountEllipsis),
            (avaxBalance || 0) < 0.25 && (React__default['default'].createElement(Flex, { justifyContent: "center", mb: "16px", mt: "18px" },
                React__default['default'].createElement(LowAvaxBalance, null,
                    React__default['default'].createElement(Flex, { alignItems: "flex-start" },
                        React__default['default'].createElement(Warning, { mr: "8px" }),
                        React__default['default'].createElement("div", null,
                            React__default['default'].createElement(Label, { fontSize: "14px", bold: true }, "AVAX Balance Low"),
                            React__default['default'].createElement(Label, { fontSize: "14px" }, "You need AVAX for transaction fees.")))))),
            React__default['default'].createElement(PefiBalances, null,
                React__default['default'].createElement(Flex, null,
                    React__default['default'].createElement(Icon$T, { width: "24px", mr: "8px" }),
                    React__default['default'].createElement(Flex, { width: "100%", justifyContent: "space-between" },
                        React__default['default'].createElement(Label, { fontSize: "20px" }, "PEFI"),
                        React__default['default'].createElement(Label, { fontSize: "20px" }, pefiBalance))),
                iPefiBalance !== undefined && (React__default['default'].createElement(Flex, null,
                    React__default['default'].createElement(Icon$u, { width: "24px", mr: "8px" }),
                    React__default['default'].createElement(Flex, { width: "100%", justifyContent: "space-between" },
                        React__default['default'].createElement(Label, { fontSize: "20px" }, "iPEFI"),
                        React__default['default'].createElement(Label, { fontSize: "20px" }, iPefiBalance)))),
                React__default['default'].createElement(Flex, null,
                    React__default['default'].createElement(Icon$w, { width: "24px", mr: "8px" }),
                    React__default['default'].createElement(Flex, { width: "100%", justifyContent: "space-between" },
                        React__default['default'].createElement(Label, { fontSize: "20px" }, "AVAX"),
                        React__default['default'].createElement(Label, { fontSize: "20px" }, avaxBalance)))),
            React__default['default'].createElement(Flex, { mb: "16px", mt: "16px" },
                React__default['default'].createElement(StyledLinkExternal, { small: true, href: "https://cchain.explorer.avax.network/address/" + account, mr: "16px" }, "View on AvaxScan")),
            React__default['default'].createElement(Flex, { justifyContent: "center" },
                React__default['default'].createElement(StyledButton, { scale: "sm", mr: "8px", onClick: handleAddTokensToMetaMask }, "Add Tokens"),
                React__default['default'].createElement(StyledButton, { scale: "sm", variant: "secondary", onClick: function () {
                        logout();
                        window.localStorage.removeItem(connectorLocalStorageKey);
                    } }, "Logout"))));
    };
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(UserInfo, null,
        nickname && nickname.length > 0 && (React__default['default'].createElement(NicknameButton, { scale: "sm", variant: "tertiary" }, nickname)),
        React__default['default'].createElement(WalletDropdown, { contentClassName: "dropdown-content", target: React__default['default'].createElement(ConnectedButtonWrapper, null,
                React__default['default'].createElement(WalletWrapper, null,
                    React__default['default'].createElement(Icon$t, null)),
                React__default['default'].createElement(ConnectButton, { scale: "sm", isConnected: true, variant: "tertiary", endIcon: React__default['default'].createElement(ArrowDown, null) }, accountEllipsis)) }, renderAccountData()))) : (React__default['default'].createElement(ConnectButton, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var templateObject_1$5, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;

var StyledAvatar = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$Q, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$4, templateObject_2$1;

var Icons = IconModule;
var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  border-color: ", ";\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  border-color: ", ";\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isDark = _a.isDark;
    return isDark && "#0C0B15";
});
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ",
    ";\n    max-width: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var SettingButton = styled__default['default'](Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 32px;\n"], ["\n  width: 32px;\n"])));
var Menu = function (_a) {
    var _b;
    var account = _a.account, nickname = _a.nickname, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, penguinPriceUsd = _a.penguinPriceUsd, pefiRatio = _a.pefiRatio, iPefiRatio = _a.iPefiRatio, links = _a.links, socials = _a.socials, profile = _a.profile, pefiBalance = _a.pefiBalance, avaxBalance = _a.avaxBalance, iPefiBalance = _a.iPefiBalance, children = _a.children, onSettingClick = _a.onSettingClick;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    var Icon = Icons["SettingIcon"];
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight ===
                currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu, isDark: isDark },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, { alignItems: "center" },
                React__default['default'].createElement(UserBlock, { account: account, nickname: nickname || "", pefiBalance: pefiBalance, avaxBalance: avaxBalance, iPefiBalance: iPefiBalance, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }),
                React__default['default'].createElement(SettingButton, { variant: "tertiary", scale: "sm", ml: "8px", onClick: onSettingClick },
                    React__default['default'].createElement(Icon, { width: "22px" })))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, penguinPriceUsd: penguinPriceUsd, pefiRatio: pefiRatio, iPefiRatio: iPefiRatio, pushNav: setIsPushed, links: links, socials: socials }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants.INFO,
    _a[types.SUCCESS] = variants.SUCCESS,
    _a[types.DANGER] = variants.DANGER,
    _a[types.WARNING] = variants.WARNING,
    _a);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [
        id,
        removeHandler,
    ]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#800020",
    primary: "#EC3E3F",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#372871",
    success: "#4040ff",
    warning: "#FFB237",
    textColour: "#ffffff",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { primary: "#EC3E3F", textColour: "#ffffff", background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#000000", textDisabled: "#BDC2C4", textSubtle: "#2D2159", menuIcon: "#372871", borderColor: "#E9EAEB", card: "#FFFFFF", menu: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    }, red: "#EC3E3F" });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { primary: "#ffffff", textColour: "#000000", secondary: "#30264f", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#353547", text: "#ffffff", textDisabled: "#666171", textSubtle: "#ffffff", menuIcon: "#A893CA", borderColor: "#524B63", card: "#30264f", menu: "#121021", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    }, red: "#d4444c" });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(20, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    background: lightColors.menu,
    setting: lightColors.menuIcon,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.menu,
    setting: darkColors.menuIcon,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

exports.AddIcon = Icon$1d;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1c;
exports.ArrowDownIcon = Icon$1b;
exports.ArrowDropDownIcon = Icon$1a;
exports.ArrowDropUpIcon = Icon$19;
exports.ArrowForwardIcon = Icon$18;
exports.AutoRenewIcon = Icon$17;
exports.AvaxLogoIcon = Icon$w;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout$1;
exports.BattleIcon = Icon$y;
exports.BinanceIcon = Icon$16;
exports.BlockIcon = Icon$1f;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$15;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$13;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$14;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$1h;
exports.CheckmarkIcon = Icon$12;
exports.ChevronDownIcon = Icon$11;
exports.ChevronLeftIcon = Icon$10;
exports.ChevronRightIcon = Icon$$;
exports.ChevronUpIcon = Icon$_;
exports.CloseIcon = Icon$Z;
exports.CogIcon = Icon$Y;
exports.CommunityIcon = Icon$X;
exports.CopyIcon = Icon$W;
exports.CrownIcon = Icon$z;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1g;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$V;
exports.IPefiLogoIcon = Icon$v;
exports.IPefiLogoIconTop = Icon$u;
exports.IconButton = IconButton;
exports.IglooIcon = Icon$A;
exports.Image = Image;
exports.InfoIcon = Icon$1e;
exports.Input = Input$1;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$U;
exports.LogoIcon = Icon$T;
exports.LogoRoundIcon = Icon$S;
exports.Menu = Menu;
exports.MinusIcon = Icon$R;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NestIcon = Icon$B;
exports.NoProfileAvatarIcon = Icon$Q;
exports.OpenNewIcon = Icon$P;
exports.Overlay = Overlay;
exports.PenguinRoundIcon = Icon$N;
exports.PenguinsIcon = Icon$O;
exports.PrizeIcon = Icon$M;
exports.Progress = Progress;
exports.ProgressBunny = Icon$J;
exports.Radio = Radio;
exports.RemoveIcon = Icon$L;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$F;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$E;
exports.SyncAltIcon = Icon$D;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$H;
exports.TicketRound = Icon$G;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$K;
exports.WalletIcon = Icon$t;
exports.WarningIcon = Icon$C;
exports.Won = Icon$I;
exports.XPefiLogoIcon = Icon$x;
exports.alertVariants = variants;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
