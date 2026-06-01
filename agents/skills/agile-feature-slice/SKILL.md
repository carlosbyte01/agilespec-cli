---
name: agile-feature-slice
description: Slices a feature into smaller, testable user stories using vertical slicing. Identifies dependencies and updates the backlog.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# Agile Feature Slice

## Usage

Invoked manually with [`/agile-feature-slice`](./SKILL.md) or triggered when the user wants to break down a high-level feature.

## Action Flow

1. **Read**: Load the target feature file from `docs/agile/features/`.
2. **Vertical Slicing**: Identify the smallest independent, testable deliverables.
3. **Creation**: Create individual user stories by calling the [`/agile-story-add`](../agile-story-add/SKILL.md) skill for each slice.
4. **Dependencies**: Determine dependencies between the newly created user stories.
5. **Notify User**: Inform the user that the feature was sliced and show a table with new user stories and their dependencies.

## Activation (NLP Triggers)

- "Slice the feature"
- "Break down feature [ID/Name]"
- "Slice this into smaller user stories"
- "Create stories from the [Name] feature"
