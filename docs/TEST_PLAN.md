# QA Test Plan — AutomationExercise

## Objective
Build a reproducible QA project covering functional, negative, boundary, API, UI automation, regression and CI validation for AutomationExercise.

## Scope
Registration, authentication, product discovery, search, category/brand navigation, cart, checkout, invoice, account management, subscription and public REST APIs.

## Test design
- Positive: valid flows behave as intended.
- Negative: invalid input/methods are rejected safely.
- Boundary: empty, very long, unusual or edge values are handled predictably.
- Regression: previously discovered issues receive repeatable tests.
- API: status code, response structure and key data assertions.

## Source baseline
The initial tracker contained 21 designed test cases. 15 were executed: 5 passed, 9 failed and 1 was blocked. Six registration cases were still pending. The expanded suite contains 48 test cases.

## Important QA note
A missing feature should not automatically be classified as a defect without a requirement or acceptance criterion. The bug register therefore distinguishes confirmed defects from product gaps/potential defects where requirement traceability is needed.

## Execution policy
Only record Pass/Fail/Blocked after an actual run. New cases in the expanded tracker are intentionally marked Not Executed until they are run.

## Toolchain
- Excel: test case and defect tracking
- Postman: API collection
- Playwright: UI and API automation
- JavaScript/Node.js: automation
- Git/GitHub: version control
- GitHub Actions: CI regression execution
