---
name: agile-story-start
description: Marks a user story as in-progress and moves it to the stories folder after verifying prerequisites and dependencies. Use when beginning work on a specific story.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# Agile Story Start

## Usage

Invoked manually with [`/agile-story-start`](./SKILL.md) or triggered by the user to begin work on a specific user story.

## Action Flow

1. **Prerequisite Check**: Ensure the story status is NOT DONE, CANCELED, or REJECTED.
2. **Dependency Check**: Verify that all dependencies are DONE. If not, update the status to `WAITING-ON-DEPENDENCY` and stop.
3. **Move Story**: Move the story file from `docs/agile/backlog/` to `docs/agile/stories/`.
4. **Status Update**: Change the story file by updating the status to `IN-PROGRESS`.
5. **Update Feature**: Update the parent feature file status to `IN-PROGRESS`.

6. **Notify User**: Inform the user that the story has been started.
7. **Add Comment**: Log that the story is in progress in the story file.
8. **Log Start on Parent Feature**: Update the parent feature file, by adding a start comment of the story.
9. **Handoff**: Signal the primary code assistant to begin the [RED-GREEN-REFACTOR Loop](./references/RED-GREEN-REFACTOR-LOOP.md).

10. **Review Trigger**: Once finished, trigger [`/agile-story-in-review`](../agile-story-in-review/SKILL.md).

## Activation (NLP Triggers)

- "Start the user story [ID]"
- "Let's work on story [Name]"
- "Start processing the story"
- "Implement story [ID]"
