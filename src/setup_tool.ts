export class SetupTool {
  private template_path_: string;
  
  public get template_path() : string {
    return this.template_path_;
  }
  
  private parameters_: string;

  constructor(template_path: string, parameters: string) {
    this.template_path_ = template_path;
    this.parameters_ = parameters;
    const obj = JSON.parse(this.parameters_);
  }
}
