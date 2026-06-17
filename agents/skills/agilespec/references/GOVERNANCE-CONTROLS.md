# Governance Controls

This reference document provides an overview of the *governance controls* used in the *AgileSpec CLI*, it describes in detail the different types of governance controls, their purpose and use cases.


## Defining Governance Controls
Governance controls are dissabled by default, but the user could activate them by stating it on natural language.

### Built-in Governance Controls
There are several already defined as part of the *AgileSpec Framework*, and are already written on the skill files and reference documents.

- They are disabled by default.
- The user could disable/enable them by stating it on natural language as needed.

### User-defined Governance Controls
These are defined by the user on their own, and are not part of the *AgileSpec Framework*.

- They are enabled by default.
- The user could disable/enable them by stating it on natural language as needed.


## Governance Control Types

### VALIDATION-ACTION:
It validates conditions to decide continuation to next steps.
    - Syntax: `VALIDATION-ACTION:<state>:<tag-name>: <condition>`
        - `state`: 
            - `ENABLED` is the default if not specified, it indicates the validation action is active and will be executed.
            - `DISABLED` to indicate the validation action is inactive and will not be executed.
        - `tag-name`: a unique identifier for the validation action, compound of words joined with `-` (e.g. `verify-valid-status`)
        - `condition`: the condition to validate, using a natural language expression.
    - Examples: 
        - **VALIDATION-ACTION:verify-valid-response-code:** validate the response code from API is [200, 201], if not, raise an error on console and continue execution.
        - **VALIDATION-ACTION:ENABLED:verify-file-content:** verify the content of the file matches the expected content, using a regular expression, if not, raise an error on console and ask the user for instructions.
        - **VALIDATION-ACTION:DISABLED:verify-something-else:** It means this validation is dissabled and will not be executed.

### AUDIT-ACTION:
This type is used to stop the execution and allow the user/agents to conduct inspections or take corrective actions.
    - Syntax: `AUDIT-ACTION:<state>:<tag-name>: <condition>`
        - `<state>`: 
            - `ENABLED` is the default state if not specified, it indicates the audit action is active, and it will be executed.
            - `DISABLED` to indicate the audit action is inactive, and it will not be executed.
        - `<tag-name>`: a unique identifier for the audit action, compound of words joined with `-` (e.g. `verify-something-else`).
        - `<condition>`: the condition to validate, using a natural language expression.
    - Examples:
        - **AUDIT-ACTION:stop-before-code-submition:** Please stop before submitting the code, as the user is requiring to review the code before proceeding.
