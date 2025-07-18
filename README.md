
# MERN Testing & Debugging Assignment

## ✅ Testing Tools Used
- **Jest**: For unit and integration testing
- **React Testing Library**: For component testing
- **Supertest**: For API integration tests
- **Cypress**: For end-to-end testing

## 🧪 How to Run Tests

### Client Unit & Integration Tests
```bash
cd client
npm test -- --coverage
```

### Server Unit & Integration Tests
```bash
cd server
npm test -- --coverage
```

### Cypress End-to-End Tests
```bash
cd client
npx cypress open
```

## 📊 Code Coverage
Ensure 70% or higher coverage. Coverage reports will be available under `/coverage`.

## 🐞 Debugging Strategies
- Used `console.log`, `debugger`, and network tab
- Applied error boundaries in React
- Handled Express/Mongoose errors with middleware

## 📷 Screenshots
> Include screenshots from test coverage reports (`coverage/lcov-report/index.html`)
