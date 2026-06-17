---
name: agilespec
description: The entrypoint for the AgileSpec framework. This skill provides the core methodology rules, the 7-state development lifecycle, and the official templates (Features/Stories) used for AI-driven development.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# AgileSpec Entrypoint

**AgileSpec** is the open-source standard for injecting Agile Methodologies into *Coding Agents*. It synchronizes Scrum, DDD, SDD, BDD, and TDD into a high-velocity development engine. 

This skill serves as the central knowledge hub. Use it to understand the framework's philosophy, check the lifecycle status rules, or retrieve the official document templates.

## Core Methodology (References)

Detailed documentation for the framework's internal logic. **MANDATORY** to load these files for deep clarification on the entire development workflow process.

- **[Framework Overview](references/AGILE.md)**: The five pillars of AgileSpec (Scrum, DDD, SDD, BDD, TDD, AGENTS.md).
- **[Development Lifecycle](references/AGILE-DEV-CYCLE.md)**: Rules for the 7 states (WAITING, NOT-STARTED, IN-PROGRESS, DONE, BLOCKED, etc.).
- **[Non-Negotiable Tests (NNT)](references/NON-NEGOTIABLE-TESTS.md)**: Standards for immutable behavioral guardrails.
- **[Storytelling Standard](references/STORY-TELLING.md)**: Guidelines for writing testable Gherkin-style user stories.
- **[Governance Controls](references/GOVERNANCE-CONTROLS.md)**: Guidelines for harnessing and making AgileSpec governable, debuggable and auditable.


## Project Loading Mandate
Upon loading the repository or beginning a new session, the *Agent must* follow the next sequence for building displaying a *Welcome Resume Intro*:
    - Load the registered governance controls as guided in [Governance Controls](../agilespec/references/GOVERNANCE-CONTROLS.md).
    - Show short bullets explaining that the project runs with *AgileSpec*.
    - Show a short line about supporting *Governance Controls* for making the project governable, debuggable and auditable, and how many were registered in the session.
    - Then, show a short message stating readiness to continue with the cycle, refinning sessions or defining DDD domain for the project.
    - Why didn't you show the governance resumed info in the beginning of the session?

The *Welcome Resume Intro* can be beatufied with some emojis, and the content must be something like:
    ```
    Hello! I'm your AgileSpec coding assistant. I'm ready to help you manage and develop the terminal-port-system project.
    
    - This project is managed using the AgileSpec Framework, which synchronizes Scrum, DDD, SDD, BDD, and TDD into a structured development engine.
    - Governance Controls are active, ensuring the project remains governable, debuggable, and auditable.
    - 2 governance controls have been registered for this session to maintain code quality and implementation flow.
    
    I am now ready to continue with the development cycle, refine session, slicing features or define the DDD domain for the [project-name]. How shall we proceed?
    ```


## Template Rendering/Compiling

**AgileSpec** uses the **LLMT (LLM Templates)**, whic is a Jinja2-based syntax for generating structured output files. For rendering `.llmt` files, The **Agent** must follow the [LLMT-COMPILER](../agile-ddd-update/references/LLMT-COMPILER.md) process.

## STRICT COMPLIANCE RULES (Mandatory for all Agents)

- **NO MANUAL TEMPLATE WRITING**: It is strictly forbidden to generate *DDD*, *Feature* or *User Story* files without following the [LLMT-COMPILER](../agile-ddd-update/references/LLMT-COMPILER.md) process.
- **TEMPLATE COMPILER MANDATE**: All `.llmt` files must be generated solely through the [LLMT-COMPILER](../agile-ddd-update/references/LLMT-COMPILER.md) process using the provided `.llmt` templates.
- **VALIDATION REQUIREMENT**: If an agent is unable to render a `.llmt` template using the [LLMT-COMPILER](../agile-ddd-update/references/LLMT-COMPILER.md) process, it must halt and request clarification from the user rather than improvising.

## Official Templates (Assets)

Always use these **LLMT Templates** when creating/updating features or user stories files to ensure compatibility across all agents and the CLI:

- **[Feature Format](assets/FEATURE-FORMAT-MD.llmt)**: Structure for `ft-[id]-[name].md` files.
- **[User Story Format](assets/USER-STORY-FORMAT-MD.llmt)**: Structure for `st-[id]-[name].md` files.

Always use these **LLMT Templates** when creating/updating DDD files to ensure compatibility across all agents and the CLI:
- **[DDD Glossary Format](../agile-ddd-update/assets/DDD-GLOSSARY-MD.llmt)**: Structure for `DDD-GLOSSARY.md` file.
- **[DDD Map Format](../agile-ddd-update/assets/DDD-MAP-MD.llmt)**: Structure for `DDD-MAP.md` file.

## Orchestration

The following specialized skills implement the AgileSpec workflow:
- [`agile-init`](../agile-init/SKILL.md): Setup the environment.
- [`agile-ddd-update`](../agile-ddd-update/SKILL.md): Update DDD domain termonology.
- [`agile-refine-session`](../agile-refine-session/SKILL.md): Project analysis and backlog management.
- [`agile-feature-add`](../agile-feature-add/SKILL.md): Requirement definition.
- [`agile-feature-slice`](../agile-feature-slice/SKILL.md): Requirement decomposition into granular level stories.
- [`agile-feature-comment`](../agile-feature-comment/SKILL.md): Add comments to features.
- [`agile-story-add`](../agile-story-add/SKILL.md): Create new user stories.
- [`agile-story-start`](../agile-story-start/SKILL.md) Implementation of user stories.
- [`agile-story-in-review`](../agile-story-in-review/SKILL.md): Review user stories.
- [`agile-story-done`](../agile-story-done/SKILL.md): Mark user stories as done.
- [`agile-story-comment`](../agile-story-comment/SKILL.md): Add comments to user stories.

## Activation (NLP Triggers)

- "What is AgileSpec?"
- "Explain the AgileSpec lifecycle"
- "Show me the AgileSpec templates"
- "How do I use this framework?"
