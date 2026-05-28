<!-- This is the template for user stories. -->
# st-[id]: [Title]
# Feature: ft-[id]: [Title] <!-- This is the Feature this story belongs to -->

## User Story

As a [persona],

I want to [action],

so that [value].

## Acceptance Criteria

### Scenario-[id]: [scenario]
```
Given [context]
When [action]
Then [result]
```

## Non-Negotiable Tests <!--Inmutable scenarios, see docs/agile/rules/NON-NEGOTIABLE-TESTS.md -->
### NNT-[id]: [test]
```
Given [context]
When [action]
Then [result]
```

## Status

**NOT-STARTED**

## Dependencies
<!-- A table with columns: ID, STATUS, Title -->

| ID     | STATUS        | Title                          |
|--------|---------------|--------------------------------|
| st-000 | DONE          | This is the first user story   |
| st-001 | IN-PROGRESS   | This is the second user story  |
| st-002 | NOT-STARTED   | This is the third user story   |
| ...    |  ...          | ...                            |
| st-00N | NOT-STARTED   | This is the last user story    |


## Comments 
<!-- Optional: Comments from agents or user, it must be brief and concise -->
<!-- 
A table with columns: [agent-name or user], [date], [comment]
Example: 
-->
| Agent                   | Datetime              | Comment                                  |
|-------------------------|-----------------------|------------------------------------------|
| `/agile-story-add`      | 2000-01-01 - 12:00:00 | Added this user story                    |
| `User`                  | 2000-01-01 - 12:00:00 | User updated this user story             |
| `/agile-story-start`    | 2000-01-01 - 12:00:00 | Started working on this user story       |
| `/agile-story-in-review`| 2000-01-01 - 12:00:00 | User story is in review                  |
| `/agile-story-done`     | 2000-01-01 - 12:00:00 | User story is done                       |
