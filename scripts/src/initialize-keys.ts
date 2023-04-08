import { execSync } from "node:child_process";
import * as fs from "fs";
import { Log } from "./script-logging";

const generateKeys = () => {
  execSync("ssh-keygen -b 4096 -t rsa -f ../keys/key.pem -m pem -N ''");
};

const createFolder = () => {
  if (fs.existsSync("../keys")) {
    Log.error("Directory 'keys' already exists; aborting");
    process.exit(1);
  } else {
    fs.mkdirSync("keys");
  }
};

try {
  Log.debug("Creating directory: 'keys'");
  createFolder();
  generateKeys();
  Log.info("Created private/public key pair.");
} catch (e) {
  Log.error("Failed to generate keys", e);
  process.exit(1);
}
