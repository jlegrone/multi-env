/* eslint no-console: 0 */
require('multi-env')();

const cases = [
  {
    var: 'MULTI_ENV_TEST',
    expected: 'WORKING',
  },
  {
    var: 'PRIMARY_ONLY',
    expected: 'AVAILABLE',
  },
  {
    var: 'SECONDARY_ONLY',
    expected: 'AVAILABLE',
  },
  {
    var: 'NOT_SET',
    expected: undefined,
  },
];

cases.forEach((tc) => {
  const val = process.env[tc.var];
  if (val !== tc.expected) {
    console.error(
      `Expected environment variable "${tc.var}" to equal "${tc.expected}"; got value "${val}"`,
    );
    process.exit(1);
  }
});

console.info('All test cases passed!');
