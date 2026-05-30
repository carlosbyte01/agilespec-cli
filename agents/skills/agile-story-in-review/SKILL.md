---
name: agile-story-in-review
description: Moves a user story to the review state and waits for approval. Use when a story is completed and ready for evaluation.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# Agile Story In Review

## Usage

Invoked manually with [`/agile-story-in-review`](./SKILL.md) or triggered when a user story's work is finished.

## Action Flow

1. **State Update To IN-REVIEW**: Change the status to `IN-REVIEW`.
2. **Move Story**: Move the file from `docs/agile/stories/` to `docs/agile/in-review/`.
3. **Notify User**: Inform the user that the story is in review and show a status summary.
4. **Log Review**: Add a comment indicating it is waiting for approval.
5. **Wait**: Hold for human (or lead architect agent) approval.
   - MANDATORY: You must explicitly ask the user for approval.
6. **Next Steps**:
   - If approved, trigger [`/agile-story-done`](../agile-story-done/SKILL.md).
   - If rejected, return to the implementation loop and clarify requirements.

## Activation (NLP Triggers)

- "The user story is in review"
- "Move story [ID] to in review"
- "I've put the story in review"
- "Story [ID] is in review"
- "Mark the user story as in review"
