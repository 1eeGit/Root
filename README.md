# Instruction

## Description

**ROOT** is an interactive coding assignment server-less webpage with instant feedback and an automatic grading function, with the possibility of extending the platform into educational applications.


## Three main pages:
student login page, choose the course you're working with
coding assignments with an inbox
auto evaluation with feedback

## Third-party libraries:
- For style purposes: Bootstrap

- For functionality purposes: CodeMirror

## External API:
- JUDGE0 : for code evaluation, with 50 free usages per day, it would show an 'Execution error' if the usage is over the limit.

## How to run the project:
- Clone the repository
- Navigate to the project directory
- `npm install`
- `npm start`
- Open `http://localhost:3000/`

## How to use the project:
- `login(landing)` page: Note that the login page is not fully implemented, the password and username will not be checked now.
![Screenshot 2024-11-16 175204](https://github.com/user-attachments/assets/a0374a5b-62db-464e-93cc-e7ad66f9d75c)

- `Home` page: Go to the `Record`.
![Screenshot 2024-11-16 175210](https://github.com/user-attachments/assets/2fbbd8ab-a9eb-4d22-92fd-b1bf29b85a62)

- `About` page: a short description of root.
  ![Screenshot 2024-11-16 175108](https://github.com/user-attachments/assets/ae0c5433-f7b6-48b7-b90f-dff02f31b0af)

- `Contact` page: allows users to send messages (not implemented yet).
  ![Screenshot 2024-11-16 175151](https://github.com/user-attachments/assets/e0bf86ab-b949-48d1-a102-b3bb2e57dd48)

- `Record` page: Choose the assignment you want to work on, including Python, Java, and JavaScript.
  ![Screenshot 2024-11-16 175116](https://github.com/user-attachments/assets/b5328c5f-6cfa-44fa-b5dc-2c9410d8b94d)

    - `Coding(Assignments)` in `Records`: interactive coding editor, compile the input and compare the output with the expected output saved in assignment.js.
      ![Screenshot 2024-11-16 175127](https://github.com/user-attachments/assets/1e3416b8-323d-44fe-aad9-7bfe80277254)
