# @agilespec/cli

**AgileSpec** is an open-source framework for AI-driven development. It injects proven agile methodologies (Scrum, SDD, BDD, TDD) into AI coding agent workflows to ensure high-velocity, reliable, and observable product development.

## 1. Goal
The `@agilespec/cli` acts as the "Source of Truth" for the AgileSpec framework. It provides a CLI to bootstrap projects with the necessary folder structure and rule injection to guide AI agents correctly.

## 2. The Five Pillars
- **Scrum**: The Manager that drives the workflow and ensures agents stay on track.
- **SDD (Specification-Driven Development)**: The Architect that defines the high-level intent.
- **BDD (Behavior-Driven Development)**: The User that defines conversational logic using Gherkin.
- **TDD (Test-Driven Development)**: The Engineer that enforces code integrity.
- **AGENTS.md (Native support)**: Cross-agent compatibility standard.

## 3. Installation
To install the CLI globally:
```bash
npm i -g @agilespec/cli
```

## 4. Usage: Initialization
To set up a new or existing project with the AgileSpec framework:
```bash
cd /path/to/your/project
agilespec init
```

### What `agilespec init` does:
1. **Creates Data Folders**: Sets up `docs/agile/` with `features/`, `backlog/`, `stories/`, `done/`, and `in-review/`.
2. **Injects Agent Skills**: Creates `.agents/skills/agilespec/` and copies all framework rules there.
3. **Updates AGENTS.md**: Automatically links the project to the local AgileSpec rules for immediate agent discovery.

## 5. Development Cycle
AgileSpec follows a strict lifecycle:
1. **Feature Add/Slice**: Define and decompose high-level requirements.
2. **Story Add**: Define behavior via Gherkin Acceptance Criteria.
3. **TDD Loop (`/agile-story-start`)**:
   - Planning -> Test Creation -> Implementation -> Validation -> Review.

---

For more information, visit [www.agilespec.org](https://www.agilespec.org)
