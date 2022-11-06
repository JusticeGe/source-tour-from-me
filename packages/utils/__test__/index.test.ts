import { describe, it, expect } from 'vitest'
import { isArray } from '../src'

describe("test for utils", () => {
    it("test for is array", () => {
        expect(isArray([])).toBe(true)
        expect(isArray(1)).toBe(false)
    })
})