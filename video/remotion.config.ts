/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { existsSync } from "node:fs";

import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Use the cloud image browser when available; other machines use Remotion defaults.
if (existsSync("/usr/bin/chromium")) {
  Config.setBrowserExecutable("/usr/bin/chromium");
}
