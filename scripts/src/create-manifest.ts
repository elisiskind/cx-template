import * as RSA from "node-rsa";
import * as fs from "fs";
import { createHash } from "crypto";

const generateExtensionId = (privatekey: RSA) => {
  const publicKey = privatekey.exportKey("pkcs8-public-der");
  return createHash("sha256")
    .update(publicKey)
    .digest()
    .toString("hex")
    .split("")
    .map((x) => (parseInt(x, 16) + 0x0a).toString(26))
    .join("")
    .slice(0, 32);
};

const generatePublicKey = (privateKey: RSA) => {
  return privateKey
    .exportKey("pkcs8-public")
    .split("\n")
    .filter((s) => !s.includes("-----"))
    .join("");
};

const loadPrivateKey = () => {
  return new RSA(fs.readFileSync("keys/key.pem", "utf-8"));
};

const createManifest = () => {
  const privateKey = loadPrivateKey();
  const id = generateExtensionId(privateKey);
  const publicKey = generatePublicKey(privateKey);
};
