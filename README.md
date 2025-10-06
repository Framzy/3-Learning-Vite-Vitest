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

- We shoul import in explicit way lik describe, it, expect from vitest, due to vitest not including globals by default.
