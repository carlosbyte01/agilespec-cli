---
name: agilespec
description: The entrypoint for the AgileSpec framework. This skill provides the core methodology rules, the 7-state development lifecycle, and the official templates (Features/Stories) used for AI-driven development.
---

# AgileSpec Entrypoint

**AgileSpec** is the open-source standard for injecting Agile Methodologies into AI Coding Agents. It synchronizes Scrum, SDD, BDD, and TDD into a high-velocity development engine. 

This skill serves as the central knowledge hub. Use it to understand the framework's philosophy, check the lifecycle status rules, or retrieve the official document templates.

## Core Methodology (References)

Detailed documentation for the framework's internal logic. **MANDATORY** to load these files for deep clarification on the entire development workflow process.

- **[Framework Overview](references/AGILE.md)**: The five pillars of AgileSpec (Scrum, SDD, BDD, TDD, AGENTS.md).
- **[Development Lifecycle](references/AGILE-DEV-CYCLE.md)**: Rules for the 7 states (WAITING, NOT-STARTED, IN-PROGRESS, DONE, BLOCKED, etc.).
- **[Non-Negotiable Tests (NNT)](references/NON-NEGOTIABLE-TESTS.md)**: Standards for immutable behavioral guardrails.
- **[Storytelling Standard](references/STORY-TELLING.md)**: Guidelines for writing testable Gherkin-style user stories.

## Official Templates (Assets)

Always use these templates when creating/updating features or user stories files to ensure compatibility across all agents and the CLI.

- **[Feature Format](assets/FEATURE-FORMAT.md)**: Structure for `ft-[id]-[name].md` files.
- **[User Story Format](assets/USER-STORY-FORMAT.md)**: Structure for `st-[id]-[name].md` files.

## Orchestration

The following specialized skills implement the AgileSpec workflow:
- [`agile-init`](../agile-init/SKILL.md): Setup the environment.
- [`agile-refine-session`](../agile-refine-session/SKILL.md): Project analysis and backlog management.
- [`agile-feature-add`](../agile-feature-add/SKILL.md) / [`agile-feature-slice`](../agile-feature-slice/SKILL.md): Requirement definition.
- [`agile-story-add`](../agile-story-add/SKILL.md): Create new user stories.
- [`agile-story-start`](../agile-story-start/SKILL.md) Implementation of user stories.
- [`agile-story-in-review`](../agile-story-in-review/SKILL.md): Review user stories.
- [`agile-story-done`](../agile-story-done/SKILL.md): Mark user stories as done.

## Activation (NLP Triggers)

- "What is AgileSpec?"
- "Explain the AgileSpec lifecycle"
- "Show me the AgileSpec templates"
- "How do I use this framework?"
