---
name: agile-story-done
description: Completes a user story, verifies all Acceptance Criteria (ACs) and Non-Negotiable Tests (NNTs), and cleans up the backlog. Use when work on a story is fully finished, verified, and approved after review.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# Agile Story Done

## Usage

Invoked manually with [`/agile-story-done`](./SKILL.md) or triggered when the user explicitly approves a story that is currently IN-REVIEW. Agents should NOT trigger this directly after coding; they must use `agile-story-in-review` first.

## Action Flow

1. **Prerequisite Check**: Ensure the story is currently in the `IN-REVIEW` state and has received explicit approval from the user (Human/Lead Architect).
2. **Verification of TDD Requirements**:
   - Check off all Acceptance Criteria (ACs).
   - Verify all Non-Negotiable Tests (NNTs) have passed (see [NON-NEGOTIABLE-TESTS.md](../agilespec/references/NON-NEGOTIABLE-TESTS.md)).
3. **State Update**: Change the status to `DONE`.
4. **Cleanup**: Move the file from `docs/agile/in-review/` to `docs/agile/done/`.
5. **Dependency Resolution**: Promote stories waiting for this one to `NOT-STARTED`.
6. **Log Success**: Add a completion comment to the story file.
7. **Log Success on Parent Feature**: Add a completion comment of the story to the parent feature file.
8. **Progress Audit**: If all stories in the parent feature are done, mark the feature as `DONE` and log it.
9. **Notify User**: Inform the user that the story was completed and show a status summary.

## Activation (NLP Triggers)

- "The user story is done"
- "I've completed the story"
- "Story [ID] is finished"
- "Mark the user story as completed"
