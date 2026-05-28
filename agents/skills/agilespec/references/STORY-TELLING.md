# Writing Executable Specifications (SDD/BDD)

In this framework, a User Story is more than a description—it is an executable input for our agents.

## The Atomic Story
Every story lives in `docs/agile/backlog/st-[id].md`, for more detailssee [USER-STORY-FORMAT.md](../assets/USER-STORY-FORMAT.md).
- **Format:** 
    ```
    "As a [persona], I can [action] so that [value]." 
    ```
    Example:
    ```
    As a user, I want to be able to log in to the application so that I can access my account.
    ```

## BDD: Behavior as Logic
We use **BDD** to bridge the gap between human intent and machine execution. 
- **The Specs (AC):** You must use strict Gherkin syntax. This is the logic the agent parses to understand state transitions.
    ```
    Scenario: User logs in successfully

    Given the user is on the login page
    When the user enters their email and password
    And the user clicks the login button
    Then the user should be redirected to the dashboard
    And the user should see a success message
    ```

- **The Guardrails (NNT):** Define the "Non-Negotiable" scenarios that protect the core business logic, see [NON-NEGOTIABLE-TESTS.md](./NON-NEGOTIABLE-TESTS.md).

## Token Budgeting
Agents perform better when they have less noise and more signal. 
- **The Story:** Keep it concise.
- **The Scenarios:** This is where you spend your "context budget." If an agent has clear Given/When/Then scenarios, it will rarely hallucinate.
