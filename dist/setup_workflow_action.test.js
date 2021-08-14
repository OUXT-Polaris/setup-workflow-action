"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setup_tool_1 = require("./setup_tool");
test("read_repos", function () {
    var updater = new setup_tool_1.SetupTool("./src/example_workflow.yaml", "{ who-to-greet : octcat }");
    expect(updater).toBeDefined();
});
