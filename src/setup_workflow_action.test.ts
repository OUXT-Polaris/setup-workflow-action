import { SetupTool } from "./setup_tool";

test("read_repos", () => {
  const updater = new SetupTool(
    "./src/example_workflow.yaml",
    '{ "who-to-greet" : "octcat", "action-name" : "example" }'
  );
  expect(updater).toBeDefined();
});
