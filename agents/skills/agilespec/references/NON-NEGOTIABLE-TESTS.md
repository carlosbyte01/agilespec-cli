# Governance: Non-Negotiable Tests (NNT)

NNTs are our primary defense against AI laziness and Greenwashing (when an agent modifies a test to pass instead of fixing the code).

### The Rules
- **Definition of Done:** A story is not "Done" until its NNTs pass in the actual test runner.
- **Immutability:** The agent can see these tests, but it cannot modify them. If an agent tries to "fix" a failing NNT by changing the assertion, the PR should be automatically rejected.
- **BDD Alignment:** Every NNT must be written in **Gherkin syntax** to ensure total clarity on what constitutes a "pass."
- **Failure Protocol:** If an NNT fails after 3 implementation attempts, the agent MUST stop and ask for human intervention.
