---
name: agile-init
description: Initializes the Agentic Agile environment by creating the necessary directory structure and verifying core configuration files. Use when starting a new project with AgileSpec.
---

# Agile Init

## Usage

This skill is automatically triggered when the user wants to initialize the project, or it can be manually invoked using [`/agile-init`](./SKILL.md).

## Action Flow

1. **Create directory structure**:
   - `docs/agile/features/`
   - `docs/agile/backlog/`
   - `docs/agile/stories/`
   - `docs/agile/done/`
   - `docs/agile/in-review/`
2. **Verify core files**: Ensure `AGENTS.md` is present in the project root and the `agilespec` master skill is available.
3. **Notify user**: Inform the user that the "Agile structure ready."
4. **Transition**: Prompt the user to start a refinement session using [`/agile-refine-session`](../agile-refine-session/SKILL.md).
5. **Domain Definition**: If the **Agent** detects some terminology ambiguity, or need to separate the content in domain or bounded context areas, prompt the user to define the domain of the project using [`/agile-ddd-update`](../agile-ddd-update/SKILL.md).

## Activation (NLP Triggers)

- "Init the project"
- "Initialize the agile structure"
- "Create the initial project folders"
- "Set up the agile workspace"
