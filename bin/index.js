#!/usr/bin/env node

import { Command } from "commander";
import { initProject } from "../lib/init.js";

// Create the CLI program instance for AgileSpec.
const program = new Command();

// Configure the CLI name, description, and version.
program
    .name("agilespec")
    .description("AgileSpec CLI for AI-driven development workflows")
    .version("0.1.0");

// Register the `init` command to initialize the AgileSpec project structure.
program
    .command("init")
    .description("Initialize the project with AgileSpec structure and rules")
    .action(async () => {
        try {
            await initProject();
        } catch (error) {
            console.error("Error during initialization::", error.message);
            process.exit(1);
        }
    });

// Parse command-line arguments and execute the CLI.
program.parse();
