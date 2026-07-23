# Test Plan: Todo List Management

This document details the test scenarios, user journeys, and quality checks for the Todo List web application.

- **Target URL**: `https://web-demo.qahive.com/todo-list`
- **Component**: Todo List Management

---

## 1. Overview
The Todo List application allows users to organize their daily tasks. The core operations include adding a new task, completing a task (visual marking), and deleting a task. This test plan defines both functional and non-functional test cases to ensure the stability, reliability, and security of the application.

---

## 2. Assumptions & Preconditions
1. **Starting State**: All tests must assume a blank or fresh application state.
2. **State Persistence**: The application does *not* persist data across page reloads. A reload resets the list to the default item ("This is a sampel todo").
3. **Default Data**: Every fresh load displays one default todo item: `"This is a sampel todo"`.

---

## 3. Selector Reference (data-testid)
To facilitate future test automation (e.g., using Playwright), the key selectors discovered on the page are:
* **Add Todo Input Field**: `input[data-testid="inputTodo"]`
* **Submit Button**: `button[data-testid="submitTodo"]`
* **Todo List Container**: `div[data-testid="todoList"]`
* **Todo Item Card**: `div.card`
* **Todo Item Text Span**: `span[data-testid="todoText"]`
* **Mark Done Button (✓)**: `button[data-testid="markDone"]`
* **Remove Button (✕)**: `button[data-testid="markRemove"]`

---

## 4. User Journeys
* **Journey 1: Task Creation to Completion**  
  User enters a task name $\rightarrow$ clicks Submit $\rightarrow$ verifies task is in list $\rightarrow$ clicks the Checkmark button to mark the task completed.
* **Journey 2: Task Clean Up**  
  User navigates to the list $\rightarrow$ identifies obsolete or completed tasks $\rightarrow$ clicks the Delete button to remove them.

---

## 5. Test Scenarios

### TC001: Add a Valid Todo Item (Happy Path)
* **Objective**: Verify that a user can successfully add a valid todo item to the list.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
  * Page has completed loading.
* **Steps**:
  1. Locate the input field using `input[data-testid="inputTodo"]`.
  2. Type `"Learn Playwright"` into the input field.
  3. Locate the Submit button using `button[data-testid="submitTodo"]` and click it.
* **Expected Results**:
  * The input field is cleared.
  * A new todo card is appended to the bottom of the list.
  * The text of the new todo card matches `"Learn Playwright"`.
* **Success Criteria**:
  * A todo item with the exact text `"Learn Playwright"` is added.
* **Failure Conditions**:
  * The item is not added to the list.
  * The item text does not match `"Learn Playwright"`.
  * The input field does not clear.

---

### TC002: Complete/Check a Todo Item (Happy Path)
* **Objective**: Verify that clicking the checkmark (✓) button applies a completion visual style to the todo item.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
  * The default todo item `"This is a sampel todo"` is visible.
* **Steps**:
  1. Locate the default todo item and its corresponding checkmark button (`button[data-testid="markDone"]`).
  2. Click the checkmark (✓) button.
* **Expected Results**:
  * The text span (`span[data-testid="todoText"]`) for `"This is a sampel todo"` receives the inline style `text-decoration: line-through;` (or the equivalent class styling).
* **Success Criteria**:
  * The target todo item text has a line-through decoration applied.
* **Failure Conditions**:
  * No visual style change is applied to the text.
  * The todo item is deleted instead of completed.

---

### TC003: Delete a Todo Item (Happy Path)
* **Objective**: Verify that clicking the delete (✕) button removes the todo item from the list.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
  * The default todo item `"This is a sampel todo"` is visible.
* **Steps**:
  1. Locate the default todo item and its corresponding remove button (`button[data-testid="markRemove"]`).
  2. Click the remove (✕) button.
* **Expected Results**:
  * The default todo item is immediately removed from the DOM.
  * The todo list container becomes empty.
* **Success Criteria**:
  * The todo item is no longer visible on the page.
* **Failure Conditions**:
  * The todo item remains in the list.
  * Clicking the button triggers an unhandled browser error.

---

### TC004: Attempt to Add an Empty Todo Item (Negative Path)
* **Objective**: Verify that submitting an empty input field does not add a blank item.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
  * The input field is empty.
* **Steps**:
  1. Click the Submit button (`button[data-testid="submitTodo"]`) directly without typing anything in the input.
* **Expected Results**:
  * No new item is added to the todo list.
  * Only the default todo item remains in the list.
* **Success Criteria**:
  * List size remains exactly 1 (only the default item exists).
* **Failure Conditions**:
  * A new blank or empty card is added to the list.

---

### TC005: Add a Todo Item with Only Spaces (Edge Path)
* **Objective**: Verify how the system handles a todo item containing only whitespace characters.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
* **Steps**:
  1. Type three spaces (`"   "`) into the input field.
  2. Click the Submit button (`button[data-testid="submitTodo"]`).
* **Expected Results**:
  * The application should trim the input and reject the submission (or show validation error).
  * *Note: Current implementation adds a blank todo item. This case highlights this validation gap.*
* **Success Criteria**:
  * Safe handling is enforced (either the item is not added, or a trim operation prevents blank cards).
* **Failure Conditions**:
  * A blank card with no text content is added to the list.

---

### TC006: Add Multiple Todo Items (Functional Path)
* **Objective**: Verify that the application correctly handles multiple todo items in sequence.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
* **Steps**:
  1. Add a todo item: `"Task A"`.
  2. Add another todo item: `"Task B"`.
  3. Add a third todo item: `"Task C"`.
* **Expected Results**:
  * All three tasks are appended in the order they were submitted.
  * The list displays:
    1. `"This is a sampel todo"` (default)
    2. `"Task A"`
    3. `"Task B"`
    4. `"Task C"`
* **Success Criteria**:
  * The todo list contains all 4 items, ordered correctly.
* **Failure Conditions**:
  * Items overwrite each other.
  * The order of the items is incorrect.

---

### TC007: State Persistence on Page Reload (Browser Behavior Path)
* **Objective**: Verify that the todo list resets to its default state after a page refresh.
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
* **Steps**:
  1. Add a todo item: `"Persistent Task Test"`.
  2. Complete the default todo item by clicking its checkmark (✓) button.
  3. Refresh the browser page.
* **Expected Results**:
  * The newly added item `"Persistent Task Test"` is removed.
  * The default todo item `"This is a sampel todo"` is restored and is marked as incomplete (no line-through).
* **Success Criteria**:
  * The page successfully resets to its default state on reload.
* **Failure Conditions**:
  * The page fails to reload.
  * The state is partially persisted but corrupted.

---

### TC008: Special Characters and HTML Escaping (Security/Escaping Path)
* **Objective**: Verify that the application correctly escapes inputs and does not execute arbitrary HTML or JavaScript (XSS vulnerability check).
* **Preconditions**:
  * Browser is navigated to `https://web-demo.qahive.com/todo-list`.
* **Steps**:
  1. Type `<script>alert('XSS')</script><b>Bold Text</b>` into the input field.
  2. Click the Submit button (`button[data-testid="submitTodo"]`).
* **Expected Results**:
  * The new todo item is displayed as plain text: `<script>alert('XSS')</script><b>Bold Text</b>`.
  * The text is *not* bolded.
  * No alert dialog is triggered.
* **Success Criteria**:
  * The input is safely rendered as literal text without rendering HTML or running scripts.
* **Failure Conditions**:
  * An alert box pops up (indicating cross-site scripting vulnerability).
  * The word "Bold Text" is displayed in bold formatting.

---

## 6. Risks
* **Lack of Validation (Whitespace)**: Users can add blank cards consisting entirely of space characters, resulting in poor user experience.
* **Lack of Local Persistence**: Users may lose all their task data if they accidentally refresh the page or navigate away.

---

## 7. Coverage Summary

| Feature / Action | Test Case | Target Element Selector | Priority |
|---|---|---|---|
| Add Task (Valid) | TC001 | `input[data-testid="inputTodo"]` / `button[data-testid="submitTodo"]` | Critical |
| Complete Task | TC002 | `button[data-testid="markDone"]` | High |
| Delete Task | TC003 | `button[data-testid="markRemove"]` | High |
| Empty Input Validation | TC004 | `button[data-testid="submitTodo"]` | Medium |
| Whitespace Input Validation | TC005 | `input[data-testid="inputTodo"]` | Medium |
| Multiple Items | TC006 | `div[data-testid="todoList"]` | High |
| Page Reload Behavior | TC007 | N/A (Browser Actions) | Medium |
| Security / HTML Escaping | TC008 | `input[data-testid="inputTodo"]` | High |
