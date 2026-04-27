#!/usr/bin/env node

import { Command } from 'commander';
import { initProject } from '../lib/init.js';

const program = new Command();

program
  .name('agilespec')
  .description('AgileSpec CLI for AI-driven development workflows')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize the project with AgileSpec structure and rules')
  .action(async () => {
    try {
      await initProject();
    } catch (error) {
      console.error('Error during initialization:', error.message);
      process.exit(1);
    }
  });

program.parse();
