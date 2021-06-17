// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Mock service workers setup
import { server } from './mocks/server.js';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Resets any request handlers that we may add during tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

