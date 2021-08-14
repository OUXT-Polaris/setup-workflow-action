import * as fs from "fs";
import { type } from "os";
import { stringify } from "querystring";

export class SetupTool {
  private template_path_: string;

  public get template_path(): string {
    return this.template_path_;
  }

  private parameters_: string;

  private workflow_string_: string;

  public get workflow_string(): string {
    return this.workflow_string_;
  }

  private replace(key: string, value: any) {
    const replace_string = "$parameter." + key;
    this.workflow_string_ = this.workflow_string_.replace(
      replace_string,
      value
    );
  }

  private replaceAll(json: JSON) {
    for (const [key, value] of Object.entries(json)) {
      if (typeof key != "string") {
        throw new Error("key of the parameter should be string");
      }
      if (
        typeof value != "string" &&
        typeof value != "boolean" &&
        typeof value != "number"
      ) {
        throw new Error(
          "value of the parameter should be string, boolean, number"
        );
      }
      this.replace(key, value);
    }
  }

  constructor(template_path: string, parameters: string) {
    this.template_path_ = template_path;
    this.parameters_ = parameters;
    this.workflow_string_ = fs.readFileSync(this.template_path_, "utf8");
    this.replaceAll(JSON.parse(this.parameters_));
  }
}
