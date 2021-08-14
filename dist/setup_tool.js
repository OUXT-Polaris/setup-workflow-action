"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupTool = void 0;
var fs = __importStar(require("fs"));
var SetupTool = /** @class */ (function () {
    function SetupTool(template_path, parameters, project_path) {
        this.template_path_ = template_path;
        this.parameters_ = parameters;
        this.project_path_ = project_path;
        this.workflow_string_ = fs.readFileSync(this.template_path_, "utf8");
        this.replaceAll(JSON.parse(this.parameters_));
    }
    Object.defineProperty(SetupTool.prototype, "template_path", {
        get: function () {
            return this.template_path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetupTool.prototype, "workflow_string", {
        get: function () {
            return this.workflow_string_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetupTool.prototype, "project_path", {
        get: function () {
            return this.project_path_;
        },
        enumerable: false,
        configurable: true
    });
    SetupTool.prototype.makeDirectory = function (path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    };
    SetupTool.prototype.replace = function (key, value) {
        var replace_string = "$parameter." + key;
        this.workflow_string_ = this.workflow_string_.replace(replace_string, value);
    };
    SetupTool.prototype.replaceAll = function (json) {
        for (var _i = 0, _a = Object.entries(json); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (typeof key != "string") {
                throw new Error("key of the parameter should be string");
            }
            if (typeof value != "string" &&
                typeof value != "boolean" &&
                typeof value != "number") {
                throw new Error("value of the parameter should be string, boolean, number");
            }
            this.replace(key, value);
        }
    };
    SetupTool.prototype.setup = function () {
        this.makeDirectory(this.project_path_ + "/.github");
        this.makeDirectory(this.project_path_ + "/.github/workflows");
        var path = require("path");
        var filename = path.basename(this.template_path_);
        var workflow_name = path.basename(this.template_path_, ".yaml");
        fs.writeFileSync(this.project_path_ + "/.github/workflows/" + filename, this.workflow_string_);
    };
    return SetupTool;
}());
exports.SetupTool = SetupTool;
