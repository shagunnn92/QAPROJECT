# End-to-End QA & API Testing — AutomationExercise

A fresher-friendly QA engineering portfolio project that evolved from manual test design into API testing, UI automation, defect triage and CI regression.

## What is included

- 48 structured test cases
- Positive, negative and boundary coverage
- Existing manual execution baseline
- Defect register with severity and QA classification
- Requirement/test traceability sheet
- Postman API collection
- Playwright UI + API automation
- GitHub Actions CI workflow
- Professional test plan and summary documentation

## Baseline results from the original manual pass

- 21 original test cases designed
- 15 executed
- 5 passed
- 9 failed
- 1 blocked
- 9 known issues documented
- 3 high-severity findings

These figures describe the original manual pass only; the expanded test cases have not been executed yet.

## Project structure

```text
.
├── docs/
│   ├── AutomationExercise_API.postman_collection.json
│   └── TEST_PLAN.md
├── tests/
│   ├── api/api.spec.js
│   └── ui/smoke.spec.js
├── .github/workflows/qa.yml
├── QA_Test_Tracker_Expanded.xlsx
├── package.json
├── playwright.config.js
└── README.md
```

## Run locally

```bash
npm install
npx playwright install
npm test
```

Open the HTML report:

```bash
npm run report
```

## API testing

Import `docs/AutomationExercise_API.postman_collection.json` into Postman and run the collection.

The public API documentation specifies, among other cases:
- GET `/api/productsList` → 200
- POST `/api/productsList` → 405
- GET `/api/brandsList` → 200
- PUT `/api/brandsList` → 405
- POST `/api/searchProduct` with `search_product` → 200
- POST `/api/searchProduct` without the parameter → 400
- POST `/api/verifyLogin` with invalid details → 404
- POST `/api/createAccount` → 201
- DELETE `/api/deleteAccount` → 200

## QA maturity

The project deliberately does not claim that the new automated cases have passed. Run them, capture the actual results, and then update the tracker and resume metrics.

## Resume-ready project title

**End-to-End QA & API Testing Framework | Playwright, Postman, JavaScript, GitHub Actions**
