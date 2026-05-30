---
name: agile-story-add
description: Adds a new user story to the AgileSpec backlog. Handles ID formatting, assigns the story to a feature, and sets dependencies.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# Agile Story Add

## Usage

Invoked manually with [`/agile-story-add`](./SKILL.md) or triggered by the user requesting a new granular requirement.

## Action Flow

1. **Validation**: Check for contradictions with existing features or stories.
2. **Formated ID**: User stories must be named `st-[id]-[name]` where `id` is a 6-digit ID (with leading zeroes) and `name` is the story name (lowercase, hyphens). Example: `st-000001-vite-migration`.
3. **Creation**: Create the file `docs/agile/backlog/[formated-name].md`.
4. **Structure**: Follow the [USER-STORY-FORMAT.md](../agilespec/assets/USER-STORY-FORMAT.md) template.
5. **Association**: Assign the story to its parent feature.
6. **Dependency Check**: If there are dependencies, set the status to `WAITING-ON-DEPENDENCY`.
7. **Notify User**: Inform the user that the story was added and show a status summary.

## Activation (NLP Triggers)

- "Add a new user story"
- "Create a story for [description]"
- "Add a user story to the backlog"
- "Document a requirement for [persona]"
