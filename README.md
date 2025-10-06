# 3-Learning-Vite-Vitest

- Trying Vitest in vite
- Website Documentation :
  [Vitest Website](https://www.vitest.dev)

## Introduction

- By default, we don't need to add any configuration when using Vitest
- After installing Vitest, we can immediately use Vitest to run unit test files Just like Jest, Vitest will by default run unit tests for files with the suffix
  test.js/ts or spec.js/ts
- To run unit tests using Vitest, we can use the command:

```zsh
  npx vitest --run name/file.test.js
```

## Implementation

- We should import in explicit way lik describe, it, expect from vitest, due to vitest not including globals by default.

but we can make globals by adding a configuration file. And then we can remove the import statement.

```ts
import { describe, expect, it } from "vitest";
```

```js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
});
```

- To want make configuration [Config Reference](https://www.vitest.dev/config/)

- Vitest compatible with jest

## Chai test assertions

- Vitest uses Chai assertions by default, which provides a rich set of assertion methods for writing tests.
- You can use `expect` from Vitest to perform assertions in your tests, similar to how you would in Jest.

## Mocking

- In the Jest material, we have discussed Mocking, which is creating fake objects, making it easier when
- we want to test interactions with other objects.
- Vitest also supports Mocking.
- Vitest Mocking is compatible with Jest Mocking, so we can perform Mock Functions, Mock Modules, and Mock Classes, as discussed in the NodeJS Unit Test class.

## Benchmarking

- One of the interesting features in Vitest is Benchmarking.
- Benchmarking is performing a performance test on the code we have created.
- Benchmarking can be used to run our code repeatedly, so we can
- see the speed performance of the code we have created.
- To create a benchmark, we must use a file format with the extension .bench.ts/js or .benchmark.js/ts.
- To run Benchmarking, we must use the command:

```zsh
npx vitest bench --run filename

# example

npx vitest bench --run tests/hello.bench.ts
```

- PLEASE NOTE, the Benchmarking feature is still experimental, so it is possible that it may change in the future.

## Coverage

- Just like Jest, Vitest also has a Coverage feature to detect the Unit Test Coverage that we have created.
- That way, we can see which code is not yet covered by the Unit Test that we have created. Vitest supports the V8 or Istambul library as a library for performing Code Coverage.
  https://v8.dev/blog/javascript-code-coverage
  https://istanbul.js.org/
- We can choose which library to use in the configuration file, but the default selection is V8
  To perform Code Coverage, add --coverage when running vitest, for example: npx vitest --run --coverage filename
