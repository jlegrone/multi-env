const multiEnv = require('./multienv.js');

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

  test('Environment variables are extended', () => {
    expect(process.env.PRIMARY_EXPANDED).toBe('PRIMARY:EXPANDED');
    expect(process.env.SECONDARY_EXPANDED).toBe('SECONDARY:EXPANDED');
  });
});

describe('Passing filenames in when calling multi-env', () => {
  beforeAll(() => {
    clearEnv();
    multiEnv(['pass.env']);
  });

  test('Unspecified environment variables are undefined', () => {
    expect(process.env.UNDEFINED_ENV_VAR).toBe(undefined);
  });

  test('Environment variables are loaded from the passed files', () => {
    expect(process.env.PASSED_IN).toBe('AVAILABLE');
  });

  test('Passed in environment override other environemnts', () => {
    expect(process.env.MULTI_ENV_TEST).toBe('PASSED');
  });

  test('Environment variables are merged', () => {
    expect(process.env.PRIMARY_ONLY).toBe('AVAILABLE');
    expect(process.env.SECONDARY_ONLY).toBe('AVAILABLE');
  });

  test('Environment variables are extended', () => {
    expect(process.env.PRIMARY_EXPANDED).toBe('PRIMARY:EXPANDED');
    expect(process.env.SECONDARY_EXPANDED).toBe('SECONDARY:EXPANDED');
  });
});
