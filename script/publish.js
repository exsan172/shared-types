#!/usr/bin/env node
const { execSync }    = require("child_process");
const path            = require("path");
const fs              = require("fs");
const currentPath     = process.cwd();
const projectRoot     = path.resolve(currentPath);
const rootPath        = path.resolve(process.cwd(), "..", "..")
const sharedTypesPath = path.join(rootPath, "node_modules", "@exsan172/shared-types");
const typesFolder     = projectRoot;
const sharedTypesSrc  = path.join(sharedTypesPath, "src");
const sharedTypesDist = path.join(sharedTypesPath, "dist");

if (!fs.existsSync(sharedTypesPath)) {
    console.error("Error: @exsan172/shared-types not found in node_modules. please install depedency firts.");
    process.exit(1);
}

fs.rmSync(sharedTypesSrc, { recursive: true, force: true });
fs.cpSync(typesFolder, sharedTypesSrc, { recursive: true });

const isMac   = process.platform === "darwin";
const sedFlag = isMac ? "-i ''" : "-i";

execSync(
    `find ${sharedTypesPath}/src -type f -name "*.ts" -exec sed ${sedFlag} 's|@/|../../../../src/|g' {} +`,
    { stdio: "inherit" }
);

console.log("Building @exsan172/shared-types...");

fs.rmSync(sharedTypesDist, { recursive: true, force: true });
execSync("npm run build", { stdio: "inherit", cwd: sharedTypesPath });

console.log("Build complete! Pushing to GIT...");

execSync("git add .", { stdio: "inherit", cwd: sharedTypesPath });
execSync('git commit -m "Update shared types" || echo "No changes to commit"', { stdio: "inherit", cwd: sharedTypesPath });
execSync("git push origin main", { stdio: "inherit", cwd: sharedTypesPath });

console.log("Publish complete! Getting latest commit hash...");

const commitHash = execSync("git rev-parse HEAD", { cwd: sharedTypesPath }).toString().trim();
let repoURL      = execSync("git remote get-url origin", { cwd: sharedTypesPath }).toString().trim();

if (repoURL.startsWith("git@")) {
    repoURL = repoURL.replace("git@", "https://").replace(":", "/");
}

repoURL = repoURL.replace(/\.git$/, "");

console.log(`Published to: ${repoURL}/commit/${commitHash}`);
