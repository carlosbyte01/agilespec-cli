---
name: agile-feature-add
description: Adds a new feature to the AgileSpec project. Ensures proper ID formatting, creates the feature file using the standard template, and notifies the user.
---

# Agile Feature Add

## Usage

Invoked manually with [`/agile-feature-add`](./SKILL.md) or triggered by the user requesting a new high-level requirement.

## Action Flow

1. **Validation**: Check `docs/agile/features/` and `docs/agile/backlog/` for duplicate logic or contradictions.
2. **Formated ID**: Features must be named `ft-[id]-[name]` where `id` is a 6-digit ID (with leading zeroes) and `name` is the feature name (lowercase, hyphens). Example: `ft-000001-vite-migration`.
3. **Creation**: Create the file `docs/agile/features/[formated-name].md`.
4. **Structure**: Follow the [FEATURE-FORMAT.md](../agilespec/assets/FEATURE-FORMAT.md) template.
5. **Notify user**: Inform the user that the feature was added and show a table with name, description, and status.

## Activation (NLP Triggers)

- "Add a new feature"
- "Create a feature for [description]"
- "Add a new feature to the project"
- "Register a high-level requirement"
