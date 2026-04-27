# The SDD/BDD/TDD Development Loop

Our cycle is a closed loop where every line of code is justified by a Specification, described by a Behavior, and verified by a Test.

## Phase 1: The SDD/BDD Planning Loop
It start by gattering requirements from files in `docs/requirements/`. Then the human (or lead architect agent) enter in the loop to define the Features and slices it into Stories. It follows the next sequence of steps:
1. **Gattering Requirements:** 
    - Read the requirements from files in `docs/requirements/`.
    - If no files on `docs/requirements/`, MANDATORY INFORM THE USER "No requirements found on `docs/requirements/` folder". Then, read files from `docs/` folder, but exclude `docs/agile/` folder (NEVER USE FILES FROM `docs/agile/` FOLDER) as source of requirements.
    - If no files are detected on `docs/requirements/` and `docs/` folders:
        - MANDATORY INFORM THE USER "No requirements found on `docs/requirements/` folder and `docs/` folder".
        - Propose the user to start a new refinement session with [`/agile-refine-session`](../../agile-refine-session/SKILL.md) and talk about the project requirements.
2. **Feature Add (SDD):** High-level capability definition of requirements.
3. **Feature Slice (SDD):** Decomposition into atomic, vertical slices.
4. **Story Add:** Granular level of a requirement, defining the behavior through Gherkin Acceptance Criteria.

## Phase 2: The TDD Implementation Loop ([`/agile-story-start`](../../agile-story-start/SKILL.md))
When an agent picks up a story, it follows this strict TDD sequence:
1. **Agent Planning:** Analyze the delta between the current code and the BDD scenarios.
2. **Test Creation:** Generate the unit tests and NNT hooks based on the BDD specs.
3. **Implementation:** Write the business logic to pass the tests.
4. **NNT Validation:** Execute mandatory Non-Negotiable scenarios.
5. **Trigger Review:** Trigger **[`/agile-story-in-review`](../../agile-story-in-review/SKILL.md)** to move the story to review. See  for more information.


This loop repeats for every story in the dependency graph until the Feature is complete.
