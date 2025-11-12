import * as vscode from "vscode";

const getConfiguration = vscode.workspace.getConfiguration;
const configSection = "tidalcycles";

export const bootTidalPath = (): string | null => {
  return getConfiguration(configSection).get("bootTidalPath", null);
};

export const feedbackColor = () => {
  return getConfiguration(configSection).get("feedbackColor", "rgba(100,250,100,0.3)");
};

export const relayUrl = (): string | null => {
  return getConfiguration(configSection).get("relayUrl", null);
};

export const ghciPath = () => {
  return getConfiguration(configSection).get("ghciPath", "ghci");
};

export const consolePrompt = () => {
  return getConfiguration(configSection).get("consolePrompt", "t");
};

export const onlyLogErrors = () => {
  return getConfiguration(configSection).get("onlyLogErrors", false);
};

export class Config {
  readonly getConfiguration = vscode.workspace.getConfiguration;
  readonly configSection: string = "tidalcycles";

  constructor() {}

  public useStackGhci(): boolean {
    return this.getConfiguration(this.configSection).get("useStackGhci", false);
  }
}
