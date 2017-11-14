const multiEnv = require('../index.js');

function clearEnv() {
  delete process.env.MULTI_ENV_TEST;
  delete process.env.PRIMARY_ONLY;
  delete process.env.SECONDARY_ONLY;
}

describe('Configuration present in package.json', () => {
  beforeAll(() => {
    clearEnv();
    multiEnv();
  });

  test('Unspecified environment variables are undefined', () => {
    expect(process.env.UNDEFINED_ENV_VAR).toBe(undefined);
  });

  test('Primary environment overrides secondary environments', () => {
    expect(process.env.MULTI_ENV_TEST).toBe('WORKING');
  });

  test('Environment variables are merged', () => {
    expect(process.env.PRIMARY_ONLY).toBe('AVAILABLE');
    expect(process.env.SECONDARY_ONLY).toBe('AVAILABLE');
  });
});
