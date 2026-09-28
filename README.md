# End-to-End QA & API Testing Framework

![QA Regression](https://github.com/shagunnn92/QAPROJECT/actions/workflows/qa.yml/badge.svg)

A QA automation project built around the AutomationExercise web application. The project combines manual test case design, UI automation, API testing, defect tracking, and continuous integration using GitHub Actions.

## What I worked on

- Designed and documented manual test scenarios
- Covered positive, negative, and boundary cases
- Executed an initial manual test pass and documented defects
- Automated important UI workflows using Playwright
- Added API tests for positive and negative scenarios
- Created a Postman collection for API testing
- Added GitHub Actions to run the regression suite automatically
- Generated Playwright reports for test execution results

## Tools Used

- **Playwright** — UI and API automation
- **JavaScript** — test implementation
- **Postman** — API testing
- **Git & GitHub** — version control
- **GitHub Actions** — CI automation
- **Excel / Word / Markdown** — QA documentation

## Automated Testing

### UI Tests

The Playwright UI suite currently covers:

- Invalid login
- Products page
- Product search
- Product details
- Add product to cart
- Remove product from cart

### API Tests

The API suite currently covers:

- `GET /api/productsList`
- `POST /api/productsList`
- `GET /api/brandsList`
- `PUT /api/brandsList`
- `POST /api/searchProduct`
- `POST /api/verifyLogin`

Both successful and negative API scenarios are included, with HTTP status code and response validation.

## Latest Test Results

The latest local regression run completed with:

**12 / 12 tests passed**

- 6 UI tests
- 6 API tests
- 0 failures

The same test suite also runs through GitHub Actions whenever changes are pushed to the repository or a pull request is created.

## Manual QA

The project contains **48 structured test cases** covering areas such as:

- Registration
- Login
- Products
- Search
- Categories and brands
- Cart
- Checkout
- Account management
- Subscription
- API testing

The test cases include positive, negative, and boundary scenarios.

## Initial Manual Test Results

The original manual testing pass contained:

- 21 test cases designed
- 15 test cases executed
- 5 passed
- 9 failed
- 1 blocked
- 9 issues documented
- 3 high-severity findings

These results represent the initial manual testing baseline. The later Playwright and API automation results are reported separately.

## Defect Tracking

A structured defect register is included in the QA tracker.

Each documented issue includes relevant information such as:

- Defect ID
- Test case reference
- Severity
- Priority
- Steps to reproduce
- Expected result
- Actual result
- QA classification

The initial testing identified issues across areas including checkout, validation, account management, and API behaviour.

## Postman Collection

A Postman collection is included in:

`docs/AutomationExercise_API.postman_collection.json`

It can be imported into Postman to run the documented API scenarios manually.

## Repository Contents

- `tests/ui/` — Playwright UI automation tests
- `tests/api/` — API automation tests
- `docs/` — test plan, Postman collection, and project documentation
- `QA_Test_Tracker_Expanded.xlsx` — manual test cases, execution tracking, and defect information
- `QA_Test_Summary_Report_Upgraded.docx` — QA summary report
- `.github/workflows/qa.yml` — GitHub Actions workflow
- `playwright.config.js` — Playwright configuration
- `package.json` — project dependencies and test scripts

## Running the Tests

Install the project dependencies:

```bash
npm install