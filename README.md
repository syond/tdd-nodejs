## :coffee: Goals
I developed this code to apply what i've been lerning about TDD concept using the most popular technologies. In this project I used: eslint; jest; sucrase; sucrase/jest-plugin; supertest; cors; express;. I did integration tests for all the methods inside UserController.

## :runner: Tests Results
```
 PASS  __tests__/integration/user.test.js
  Users tests
    index
      √ should be able to list all the users (69 ms)
    store
      √ should be able to create new user (7 ms)
      √ should be able to return status 201 when create new user (6 ms)
      √ should not be able to create new user with same email (13 ms)
    show
      √ should be able to list specific user by ID (10 ms)
      √ should be able to return status 400 if not found specific user by ID (5 ms)
    update
      √ should be able to update user passing valid ID (19 ms)
      √ should not be able to update user witch not exist (9 ms)
    delete
      √ should be able to delete user (18 ms)
      √ should not be able to delete user witch not exist (5 ms)

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |    91.67 |     100 |     100 |
 UserController.js |     100 |    91.67 |     100 |     100 | 1
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        2.085 s
Ran all test suites.
```

## :floppy_disk: Installation

Before you start, you need to clone the repository using `git clone`.

1. Now we need to install the dependecies of the server, web, and mobile. Inside each one folder you'll run: `npm install` or `yarn install`.

2. Run `npm test`

Now you are ready to go! :)


## :email: Contact
syond94@gmail.com | 
[Linkedin](https://linkedin.com/in/syond)
