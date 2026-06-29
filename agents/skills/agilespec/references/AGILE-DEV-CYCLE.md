# The SDD/BDD/TDD Development Loop

Our cycle is a closed loop where every line of code is justified by a Specification, described by a Behavior, and verified by a Test.

## Phase 1: The SDD/BDD Planning Loop
It start by gattering requirements from files in `docs/requirements/`. Then the human (or lead architect agent) enter in the loop to define the Features and slices it into Stories. It follows the next sequence of steps:
1. **Gattering Requirements:** 
    - **NEVER USE FILES FROM** `docs/agile/` as source of requirements. This folder is reserved for AgileSpec artifacts only.
    - Read the requirements from files in `docs/requirements/` and `docs/` folders.
    - If no files are detected on `docs/requirements/` and `docs/` folders:
        - MANDATORY INFORM THE USER "No requirements found on `docs/requirements/` folder and `docs/` folder".
        - Propose the user to start a new refinement session with [`/agile-refine-session`](../../agile-refine-session/SKILL.md) and talk about the project requirements.
2. **Feature Add (SDD):** High-level capability definition of requirements.
3. **Feature Slice (SDD):** Decomposition into atomic, vertical slices.
4. **Story Add:** Granular level of a requirement, defining the behavior through Gherkin Acceptance Criteria.

## Phase 2: The TDD Implementation Loop ([`/agile-story-start`](../../agile-story-start/SKILL.md))
When an agent picks up a story, it follows this strict TDD sequence:
1. **RED-GREEN-REFACTOR Loop:** Execute the [RED-GREEN-REFACTOR Loop](../../agile-story-start/references/RED-GREEN-REFACTOR-LOOP.md), this process implements the needed steps to warrant correct TDD implementation.
2. **Trigger Review:** Trigger **[`/agile-story-in-review`](../../agile-story-in-review/SKILL.md)** to move the story to review. See  for more information.


This loop repeats for every story in the dependency graph until the Feature is complete.
