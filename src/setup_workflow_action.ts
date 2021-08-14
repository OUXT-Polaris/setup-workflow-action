import { getInput, setFailed } from "@actions/core";
import { SetupTool } from "./setup_tool";

async function main() {
  try {
    const template = getInput("template");
    const parameters = getInput("parameters");
    const project_path = getInput("project_path");
    new SetupTool(template, parameters, project_path);
  } catch (error) {
    setFailed(error.message);
  }
}

main();
