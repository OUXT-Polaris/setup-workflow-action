import { getInput, setFailed } from "@actions/core";
import { SetupTool } from "./setup_tool";

async function main() {
  try {
    console.log("start setting up workflow");
    const template = getInput("template");
    const parameters = getInput("parameters");
    const project_path = getInput("project_path");
    const tool = new SetupTool(template, parameters, project_path);
    console.log("===== Workflow =====");
    console.log(tool.workflow_string);
    console.log("===== Workflow =====");
  } catch (error) {
    setFailed(error.message);
  }
}

main();
