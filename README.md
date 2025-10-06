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
