---
name: agile-story-start
description: Marks a user story as in-progress and moves it to the stories folder after verifying prerequisites and dependencies. Use when beginning work on a specific story.
---

# Agile Story Start

## Usage

Invoked manually with [`/agile-story-start`](./SKILL.md) or triggered by the user to begin work on a specific user story.

## Action Flow

1. **Prerequisite Check**: Ensure the story status is NOT DONE, CANCELED, or REJECTED.
2. **Dependency Check**: Verify that all dependencies are DONE. If not, update the status to `WAITING-ON-DEPENDENCY` and stop.
3. **Move Story**: Move the story file from `docs/agile/backlog/` to `docs/agile/stories/`.
4. **State Update**: Change the status to `IN-PROGRESS` according to the [AGILE-DEV-CYCLE.md](../agilespec/references/AGILE-DEV-CYCLE.md).
5. **Update Feature**: Update the parent feature file status to `IN-PROGRESS`.
6. **Handoff**: Signal the primary code assistant to begin the TDD implementation loop.
7. **Notify User**: Inform the user that the story has been started.
8. **Add Comment**: Log that the story is in progress in the story file.
9. **Log Start on Parent Feature**: Add a start comment of the story to the parent feature file.
10. **Review Trigger**: Once finished, trigger [`/agile-story-in-review`](../agile-story-in-review/SKILL.md).

## Activation (NLP Triggers)

- "Start the user story [ID]"
- "Let's work on story [Name]"
- "Start processing the story"
- "Implement story [ID]"
