# Instruction

## Description

**ROOT** is an interactive coding assignment server-less webpage with instant feedback and an automatic grading function, with the possibility of extending the platform into educational applications.


## Three main pages:
student login page, choose the course you're working with
coding assignments with an inbox
auto evaluation with feedback

## Third party libraries:
- For style purposes: Bootstrap

- For functionality purposes: CodeMirror

## External API:
- JUDGE0 : for code evaluation, with 50 free usage per day, it would show 'Execution error' if the usage is over the limit.

## How to run the project:
- Clone the repository
- Navigate to the project directory
- `npm install`
- `npm start`
- Open `http://localhost:3000/`

## How to use the project:
- `login(landing)` page: Note that the login page is not fully implemented, the password and username will not be checked now.
- `Home` page: Go to the `Record`.
- `About` page: short discription of root.
- `Contact` page: allow users to send messages (not implemented yet).
- `Record` page: Choose the assignment you want to work on, including Python, Java, and JavaScript.
    - `Coding(Assignments)` in `Records`: interactive coding editor, compile the input and compare the output with the expected output saved in assignment.js.
