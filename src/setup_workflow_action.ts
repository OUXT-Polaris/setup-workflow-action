import { getInput, setFailed } from "@actions/core";
import { SetupTool } from "./setup_tool";

async function main() {
  try {
    const template = getInput("template");
    const parameters = getInput("parameters");
  } catch (error) {
    setFailed(error.message);
  }
}

main();
