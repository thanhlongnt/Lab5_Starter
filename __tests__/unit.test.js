// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('Is Valid Phone: Parenthesis', () => {
  expect(isPhoneNumber("(510)-990-4632")).toBe(true);
  expect(isPhoneNumber("408-999-5678")).toBe(true);
});

test('Is Valid Phone: No Parenthesis', () => {
  expect(isPhoneNumber("408-999-5678")).toBe(true);
});

test('Is not valid phone num: no formating', () => {
  expect(isPhoneNumber("5109904632")).toBe(false);
});

test('Is not valid phone num: missing format', () => {
  expect(isPhoneNumber("(510)-9904632")).toBe(false);
});

// isEmail
test('Is valid email: @ucsd.edu domain', () => {
  expect(isEmail("tnguyentrong@ucsd.edu")).toBe(true);
});

test('Is valid email: @gmail.com domain', () => {
  expect(isEmail("natejohnson234@gmail.com")).toBe(true);
});

test('Is not valid email: missing domain', () => {
  expect(isEmail("natejohnson234@")).toBe(false);
});

test('Is not valid email: no prefix', () => {
  expect(isEmail("@gmail.com")).toBe(false);
});


// isStrongPassword



// isDate



// isHexColor

