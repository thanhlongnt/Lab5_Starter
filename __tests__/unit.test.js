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
test('isStrongPassword - Abcd123', () => {
  expect(isStrongPassword("Abcd123")).toBe(true);
});

test('isStrongPassword - a___456', () => {
  expect(isStrongPassword("a___456")).toBe(true);
});

test('isStrongPassword - invalid starts with number', () => {
  expect(isStrongPassword("1234abcd")).toBe(false);
});

test('isStrongPassword - invalid too long', () => {
  expect(isStrongPassword("a1234567890123456")).toBe(false);
});

// isDate
test('isDate - 12/31/1999', () => {
  expect(isDate("12/31/1999")).toBe(true);
});

// isDate
test('isDate - 06/15/2023', () => {
  expect(isDate("06/15/2023")).toBe(true);
});

test('isDate - invalid year must be 4 digits', () => {
  expect(isDate("01/01/20")).toBe(false);
});

test('isDate - invalid bad delimiter and format', () => {
  expect(isDate("2020-01-01")).toBe(false);
});

// isHexColor
test('isHexColor - abc123', () => {
  expect(isHexColor("abc123")).toBe(true);
});

test('isHexColor - #fff', () => {
  expect(isHexColor("#fff")).toBe(true);
});

test('isHexColor - invalid wrong length', () => {
  expect(isHexColor("#1234")).toBe(false);
});

test('isHexColor - invalid not a hex code', () => {
  expect(isHexColor("zzzzzz")).toBe(false);
});

