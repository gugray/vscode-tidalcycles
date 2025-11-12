import {commands, ExtensionContext} from "vscode";
import {quit} from "./repl";
import {evalCommand, evalMultiCommand, hushCommand} from "./evalCommands";

export const activate = (context: ExtensionContext) => {
  const evalCommandRegistered = commands.registerCommand("tidal.eval", evalCommand);

  const evalMultiCommandRegistered = commands.registerCommand("tidal.evalMulti", evalMultiCommand);

  const hushCommandRegistered = commands.registerCommand("tidal.hush", hushCommand);

  context.subscriptions.push(evalCommandRegistered, evalMultiCommandRegistered, hushCommandRegistered);
};

export function deactivate() {
  quit();
}
