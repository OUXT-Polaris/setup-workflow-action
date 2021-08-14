import { getInput, setFailed, debug } from "@actions/core";
import { SetupTool } from "./setup_tool";

async function main() {
  try {
    const template = getInput("template");
    const parameters = getInput("parameters");
    const project_path = getInput("project_path");
    const tool = new SetupTool(template, parameters, project_path);
    debug(tool.workflow_string);
  } catch (error) {
    setFailed(error.message);
  }
}

main();
