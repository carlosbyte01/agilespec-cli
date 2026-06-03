# RED-GREEN-REFACTOR Loop Implementation

AgileSpec relies on the **RED-GREEN-REFACTOR** loop to implement stories, this file specifiecs the guardrails and the steps to take in each phase.

The **Agent** must implement the **RED-GREEN-REFACTOR** following the steps detailed below in the **Action Flow**.

## Notes

- The RED-GREEN-REFACTOR loop is execute per test scenario.
- As reinforcement the **Agent** must remember the meaning of **RED-GREEN-REFACTOR** stages:
    - **RED Stage**: Used to write the test scenario and assertions first, then execute the test to make it fail, and as the bussiness logic is not written yet, the scenarios goes on **red**.
    - **GREEN Stage**: Used to implement the minimun necesary business logic code to satisfy the test scenario. Then run the test again to ensure it passes, that makes the scenarios **green**.
    - **REFACTOR Stage**: Used to refactor the implemented bussiness logic to improve readability and maintainability, then run the test again to ensure it still passes, that makes the scenarios still on **green**.
- First you need to implement the **NNT (Non-Negotiable Test Scenarios)**, and then then the other scenarios.
- **Isolation of Layered Scenarios**:
    - Each User Story will have it's own test suite files. One file for the NNT scenarios, and one file for the other scenarios.
    - The test file must be named as `test-[user-story-name].[extension]`. Where the extension is the test framework's file extension (e.g. `.py` for Python, `.js` for JavaScript, etc.).
    - The NNT test suite will be named as `test-[user-story-name]-nnt.[extension]`.

## Action Flow

1. **Listing Scenarios**: Make a `scenario-list`, first add all the NNT scenarios, then add the other scenarios. This warranties the NNT have implementation priority.
2. **Test Implementation Loop**: Loop through `scenario-list`, and implement each scenario following the RED-GREEN-REFACTOR steps:
    - Execute **RED Stage**:
        - **Test Planning:** Analyze the delta between the current test implementation and the pending scenario to implement.
        - **Test Implementation**: Implement the test scenario and assertions first, then run the test to make it fail.
        - **Checkpoint-verification**:
            - This is a checkpoint for debugging purposes.
            - This checkpoint is **DISABLED by default**, and is only enabled when the user states they want to verify the test implementation.
            - Stop **ONLY if the user stated that they want to verify the test implementation**, before continuing to the *GREEN stage*.
            - Inform the user that the test scenario was implemented, and the agent will wait for confirmation to continue to the *GREEN stage*.
    - **Minimal message**: Inform the user that test scenario was implemented.
    - Execute **GREEN Stage**:
        - Implement the bussines logic following the business requirements.
        - Run the test to verify the implemented bussines logic passes, if does not pass, fix the logic and run the test again.
        - **Checkpoint-hard-stop**: 
            - The agent reached 3 attempts to implement the business logic.
            - If the test fails after 3 attempts, stop and inform the user. Maybe the agent needs to gather more information to correctly implement the business logic.
        - **MANDATORY**: 
            - Never implement slop business logic for the sake of making the test pass.
            - Do not get **Eagerly** on generating scenarios you think are needed.
    - **Minimal message**: Inform the user that bussines logic was implemented and is green.
    - Execute **REFACTOR Stage**.
    - **Minimal message**: Inform the user that code was refactored.
3. **Handoff**:
    - **Minimal message**: Inform the user that the story was implemented and is ready for review.
    - The **RED-GREEN-REFACTOR Loop** has been completed.
