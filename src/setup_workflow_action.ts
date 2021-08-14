import { getInput, setFailed } from "@actions/core";

async function main() {
  try {
    const template = getInput("template");
    const parameters = getInput("parameters");
  } catch (error) {
    setFailed(error.message);
  }
}

main();
