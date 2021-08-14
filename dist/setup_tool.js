"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupTool = void 0;
var SetupTool = /** @class */ (function () {
    function SetupTool(template_path, parameters) {
        this.template_path_ = template_path;
        this.parameters_ = parameters;
        var obj = JSON.parse(this.parameters_);
    }
    Object.defineProperty(SetupTool.prototype, "template_path", {
        get: function () {
            return this.template_path_;
        },
        enumerable: false,
        configurable: true
    });
    return SetupTool;
}());
exports.SetupTool = SetupTool;
