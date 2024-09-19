import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    moduleNameMapper: {
        '^@constants': '<rootDir>/src/constants',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    coveragePathIgnorePatterns: ['src/assets'],
}

export default config
