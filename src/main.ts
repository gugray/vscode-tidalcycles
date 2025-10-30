import { commands, ExtensionContext } from 'vscode';
import { quit } from './repl';
import { evalCommand, evalMultiCommand } from './evalCommands';
// import { Config } from './config';

export const activate = (context: ExtensionContext) => {
  // const config = new Config();

  const evalCommandRegistered = commands.registerCommand(
    'anode.eval',
    evalCommand
  );

  const evalMultiCommandRegistered = commands.registerCommand(
    'anode.evalMulti',
    evalMultiCommand
  );

  context.subscriptions.push(evalCommandRegistered, evalMultiCommandRegistered);
};

export function deactivate() {
  quit();
}
