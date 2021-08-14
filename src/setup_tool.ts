import * as fs from "fs";
import { type } from "os";
import { stringify } from "querystring";

export class SetupTool {
  private template_path_: string;

  public get template_path(): string {
    return this.template_path_;
  }

  private parameters_: string;

  private replace(key: string, value: string) {}

  private replaceAll(json: JSON) {
    for (const [key, value] of Object.entries(json)) {
      console.log(`${key}: ${value}`);
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
    }
  }

  constructor(template_path: string, parameters: string) {
    this.template_path_ = template_path;
    this.parameters_ = parameters;
    this.replaceAll(JSON.parse(this.parameters_));
  }
}
