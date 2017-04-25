/* global test:true */

const sum = (first, second) => {
  return first + second
}

test('adds two numbers', () => {
  expect(sum(123, 123)).toBe(246);
});
