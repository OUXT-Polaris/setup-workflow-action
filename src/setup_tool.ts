import * as fs from "fs";

export class SetupTool {
  private template_path_: string;
  private parameters_json : JSON;

  public get template_path(): string {
    return this.template_path_;
  }

  private parameters_: string;

  private replace(key : string, value: string) {
    
  }

  constructor(template_path: string, parameters: string) {
    this.template_path_ = template_path;
    this.parameters_ = parameters;
    this.parameters_json = JSON.parse(this.parameters_);
  }
}
