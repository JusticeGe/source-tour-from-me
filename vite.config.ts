import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // or 'c8', // todo: 为啥istanbul 和c8测试出来的测试覆盖率是不一致的
      reporter: ['json', 'html'],
    },
  },
})
