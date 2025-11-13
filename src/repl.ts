import {getProcess} from "./getProcess";
import {relayUrl, relaySecret} from "./config";
import {error} from "./logger";

export const send = (command: string) => {
  const url = relayUrl();
  const secret = relaySecret();
  const data = {command, secret, source: "tidal"};

  if (url && url.startsWith("http")) {
    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    }).catch((err) => {
      error(`Relay to ${url} failed: ${err}`);
    });
  }

  const lines = command.split("\n");
  const proc = getProcess();
  proc.stdin.write(":{\n");
  lines.forEach((line) => {
    proc.stdin.write(line);
    proc.stdin.write("\n");
  });
  proc.stdin.write(":}\n");
};

export const quit = () => {
  const proc = getProcess();
  proc.kill();
};
