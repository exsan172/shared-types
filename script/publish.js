#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const currentPath = process.cwd();
const projectRoot = path.resolve(currentPath);
const rootPath    = path.resolve(process.cwd(), "..", "..")

const sharedTypesPath = path.join(rootPath, "node_modules", "@exsan172/shared-types");
const typesFolder     = projectRoot;
const sharedTypesSrc  = path.join(sharedTypesPath, "src");
const sharedTypesDist = path.join(sharedTypesPath, "dist");

// Pastikan folder "shared-types" ada di node_modules
if (!fs.existsSync(sharedTypesPath)) {
    console.error("Error: @exsan172/shared-types not found in node_modules. please install depedency firts.");
    process.exit(1);
}

// Hapus semua isi `src` sebelum menyalin
fs.rmSync(sharedTypesSrc, { recursive: true, force: true });

// Copy semua file dari "types" ke dalam "src"
fs.cpSync(typesFolder, sharedTypesSrc, { recursive: true });

console.log("Files replaced! Building @exsan172/shared-types...");

// clear dist
fs.rmSync(sharedTypesDist, { recursive: true, force: true });

// Jalankan build TypeScript
execSync("npm run build", { stdio: "inherit", cwd: sharedTypesPath });

console.log("Build complete! Pushing to GIT...");

// Commit dan push ke repository GitHub
execSync("git add .", { stdio: "inherit", cwd: sharedTypesPath });
execSync('git commit -m "Update shared types" || echo "No changes to commit"', { stdio: "inherit", cwd: sharedTypesPath });
execSync("git push origin main", { stdio: "inherit", cwd: sharedTypesPath });

console.log("Publish complete! Getting latest commit hash...");

// Ambil hash commit terbaru
const commitHash = execSync("git rev-parse HEAD", { cwd: sharedTypesPath }).toString().trim();

// Ambil URL repo dari git remote
let repoURL = execSync("git remote get-url origin", { cwd: sharedTypesPath }).toString().trim();

// Jika URL berbentuk SSH (git@github.com:username/repo.git), ubah ke format HTTPS
if (repoURL.startsWith("git@")) {
    repoURL = repoURL.replace("git@", "https://").replace(":", "/");
}

// Pastikan URL tidak berakhiran `.git`
repoURL = repoURL.replace(/\.git$/, "");

// Tampilkan link commit di GitHub
console.log(`Published to: ${repoURL}/commit/${commitHash}`);
