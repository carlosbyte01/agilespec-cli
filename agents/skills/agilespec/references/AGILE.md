# Welcome to AgileSpec

> Standard Agile is too slow for 2026, VibeCoding is like guessing what the user wants in a undeterministic way, and SW Engineering Methodologies by itselft does not build a product.

**AgileSpec** is a open source format for AI-driven development. Its goal is to inject Agile Methodologies into AI Coding Agents. Levearing Scrum, SDD, BDD and TDD, proven methodologies that work on human teams, now they work for AI Coding Agents.

**The five pillars of AgileSpec**:
- **AGENTS.md (Native support)**: It relies on the AGENTS.md standard to guarantee compatibility between different AI coding agents; **claude**, **antigravity**, **vscode**, **cursor**, **gemini-cli**, **codex**, **pi**, **aider**, and counting.  
- **Scrum**: **The Manager** that drives the workflow and ensures the agents stay on track. It is the one that decides what to do next based on statuses and graph dependencies.
- **SDD (Specification Driven Development)**: Is **The Architect** that defines the high-level intent and project structure, with clear and concise specifications. It ensures the agent understands "What" we are building.
- **BDD (Behavior Driven Development)**: **The User** that defines the conversational logic using Gherkin (Given/When/Then). It ensures the agent understands "How" it should behave.
- **TDD (Test Driven Development)**: Is **The Engineer** that enforces code integrity and quality through a Red-Green-Refactor loop. It ensures the agent delivers "Proven" results.


The orchestration of this five pillars is what makes AgileSpec a high-velocity engine for AI-driven development, with HITL (Human-in-the-loop), immediate observavility and product development state at any moment.

> More to come on [www.agilespec.org](https://www.agilespec.org)

## How to install
```
npm i -g @agilespec/cli@latest
```

## How to use
1. Initialize the project
    
    Locate your project folder:
    ```bash
    cd /path/to/your/project
    ```
    
    Init using `agilespec` CLI:
    ```bash
    agilespec init
    ```

    Init using `npx`:
    ```bash
    npx @agilespec/cli@latest init
    ```
2. Open your coding agent and start the development cycle, let's said you are using [`pi` coding agent](https://pi.dev/)
    ```
    user:   /agile-init or "Start an AgileSpec session"
    
    agent:  I validated the project is already initialized, I will start a /agile-refine-session to understand the project better.
    
    agent:  What would you like to build? Please describe the features or the high-level goal of this project.
    
    user:   I want to build a Task Management CLI for adding tasks on the fly, and store them in superlight JSON database.
    
    agent:  I will start a /agile-feature-add to add the new feature to the project.
    
    agent:  Based on your requirement, we have a new feature for this project:
            ┌───────────┬─────────────────────┬─────────────┐
            │ ID        │ Title               │ Status      │
            ├───────────┼─────────────────────┼─────────────┤
            │ ft-000001 │ Task Management CLI │ NOT-STARTED │
            └───────────┴─────────────────────┴─────────────┘
    
    agent:  And we have three user stories on backlog:
            ┌───────────┬─────────────────────────────┬─────────────┐
            │ ID        │ Title                       │ Status      │
            ├───────────┼─────────────────────────────┼─────────────┤
            │ st-000001 │ Initialize database storage │ NOT-STARTED │
            ├───────────┼─────────────────────────────┼─────────────┤
            │ st-000002 │ Add a task via CLI          │ NOT-STARTED │
            ├───────────┼─────────────────────────────┼─────────────┤
            │ st-000003 │ List all tasks              │ NOT-STARTED │
            └───────────┴─────────────────────────────┴─────────────┘
    
    agent:  I recommend beginning with st-000001: Initialize database storage. Shall I proceed?
    
    user:   Yes please start working that feature
    
    agent:  I will start the user story st-000001.
    
    agent:  I've completed the implementation of the database storage initialization!
    
            ### Achievements:
            - st-000001:    Initialize database storage:
                            Successfully set up db.js to initialize an empty tasks.json file if it doesn't exist.
                            All tests passed.
    
            The story is now IN-REVIEW.
            You can review the code or let me know if I should proceed with the next story: st-000002: Add a task via CLI.
    
            Should I mark st-000001 as DONE and start working on adding tasks?
    
    user:   Yes please go ahead.
    
    agent:  I've completed the implementation of adding tasks via the CLI!
    
            ### Achievements:
            - st-000002:    Add a task via CLI: Implemented the addTask function in db.js
                            Updated index.js to handle the add command.
                            You can now run node index.js add "My task".
            
            The story is now IN-REVIEW. If you approve,
            I'll mark it as DONE and move on to the final story: st-000003: List all tasks.
    
    user:   I reviewed, approved
    
    agent:  I've completed the implementation of listing all tasks!
    
            ### Achievements:
            - st-000003:    List all tasks: Implemented the getTasks function in db.js
                            Added the list command to index.js.
                            It now displays all tasks with their status, or a friendly message if the list is empty.
            
            The story is now IN-REVIEW. All tests (both database logic and CLI integration) are passing.
            
            Once you approve this final story, I will mark the entire feature ft-000001 as DONE.
    
    user:   The story looks ok, approved
    
    agent:  I've completed the Task Management CLI!
            ### Summary of Achievements:
                - st-000001: Initialize database storage: Set up the JSON persistence layer.
                - st-000002: Add a task via CLI: Implemented adding tasks with unique IDs.
                - st-000003: List all tasks: Implemented the display of all saved tasks.
            
            The feature ft-000001: Task Management CLI is now officially DONE.
            
            You can use the CLI now:
                - node index.js add "Learn AgileSpec"
                - node index.js list
    ```

## Agent commands and NLP triggers
All agents could be invoked by the user using the command `/agile-[command]` or by the system using the NLP triggers.

| Command                 | NLP Trigger                                |
| ---                     | ---                                             |
| [`/agile-init`](agents/skills/agile-init/SKILL.md)           | "Init the project", "Initialize the agile structure", "Create the initial project folders", "Set up the agile workspace" |
| [`/agile-refine-session`](agents/skills/agile-refine-session/SKILL.md) | "Refine the session", "Start the refine session", "Refine the project", "Refine the user stories" |
| [`/agile-feature-add`](agents/skills/agile-feature-add/SKILL.md)    | "Add a new feature", "Create a feature for [description]", "Add a new feature to the project", "Register a high-level requirement" |
| [`/agile-feature-slice`](agents/skills/agile-feature-slice/SKILL.md)  | "Slice the feature", "Break down feature [ID/Name]", "Slice this into smaller user stories", "Create stories from the [Name] feature" |
| [`/agile-feature-comment`](agents/skills/agile-feature-comment/SKILL.md)| "Add a comment to feature [ID]", "Comment on feature [ID]", "I've added a comment to feature [ID]", "Feature [ID] has a comment" |
| [`/agile-story-add`](agents/skills/agile-story-add/SKILL.md)      | "Add a new user story", "Create a story for [description]", "Add a user story to the backlog", "Document a requirement for [persona]" |
| [`/agile-story-comment`](agents/skills/agile-story-comment/SKILL.md)  | "Add a comment to story [ID]", "Comment on story [ID]", "I've added a comment to story [ID]", "Story [ID] has a comment" |
| [`/agile-story-start`](agents/skills/agile-story-start/SKILL.md)    | "Start the user story [ID]", "Let's work on story [Name]", "Start processing the story", "Implement story [ID]" |
| [`/agile-story-in-review`](agents/skills/agile-story-in-review/SKILL.md)| "The user story is in review", "Move story [ID] to in review", "I've put the story in review", "Story [ID] is in review", "Mark the user story as in review" |
| [`/agile-story-done`](agents/skills/agile-story-done/SKILL.md)     | "The user story is done", "I've completed the story", "Story [ID] is finished", "Mark the user story as completed" |


<!-- ## The AgileSpec Framework for guardrailing AI Coding Agents -->

## Why this works: Parallel Orchestration
We eliminate "chat-based" bottlenecks by separating **WAITING-ON-DEPENDENCY** (System-locked) from **BLOCKED** (Human-locked). Our reactive dependency graph allows multiple agents to sit in a "waiting" state and trigger automatically the second their prerequisites hit the `/done` folder. 

## Governance: Anti Greenwashing
To prevent agents from "cheating" by modifying tests to force a pass, we enforce **Non-Negotiable Tests (NNT)**. These are immutable behavioral guardrails that the agent must satisfy but is physically forbidden from editing.

## The 7-State Lifecycle
We don't just use "Todo" and "Done." Our lifecycle ensures the AI knows exactly where it stands:
- **WAITING-ON-DEPENDENCY**: The foundation is missing. Don't start yet.
- **NOT-STARTED**: The path is clear. Ready for an agent to pick up.
- **IN-PROGRESS**: Active development.
- **DONE**: Verified, tested, and archived.
- **BLOCKED**: We need a human to make a decision or provide an API key.
- **CANCELED / REJECTED**: Scope changes or failed quality checks.

## MANDATORY RULES
1. NEVER update/modify/delete any of the files under `docs/agile/` directory. This is an agent/rules/guardrails directory and should not be modified by any agent.

## The automatic triggers
When running project indexing, the agent will automatically trigger the following actions:
1. [`/agile-init`](agents/skills/agile-init/SKILL.md) if the project is not initialized yet, ask the human (or lead architect agent) if they want to initialize the project.
2. [`/agile-refine-session`](agents/skills/agile-refine-session/SKILL.md) If there are doubts about the project, or not detected features, or not detected user stories, inform the human (or lead architect agent) about entering on a refine session.
