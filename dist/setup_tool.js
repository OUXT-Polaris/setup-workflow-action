"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupTool = void 0;
var SetupTool = /** @class */ (function () {
    function SetupTool(template_path, parameters) {
        this.template_path_ = template_path;
        this.parameters_ = parameters;
        this.replaceAll(JSON.parse(this.parameters_));
    }
    Object.defineProperty(SetupTool.prototype, "template_path", {
        get: function () {
            return this.template_path_;
        },
        enumerable: false,
        configurable: true
    });
    SetupTool.prototype.replace = function (key, value) { };
    SetupTool.prototype.replaceAll = function (json) {
        for (var _i = 0, _a = Object.entries(json); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log(key + ": " + value);
            if (typeof key != "string") {
                throw new Error("key of the parameter should be string");
            }
            if (typeof value != "string" &&
                typeof value != "boolean" &&
                typeof value != "number") {
                throw new Error("value of the parameter should be string, boolean, number");
            }
        }
    };
    return SetupTool;
}());
exports.SetupTool = SetupTool;
