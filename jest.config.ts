import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    moduleNameMapper: {
        '^@constants': '<rootDir>/src/constants',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@types': '<rootDir>/src/types',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@providers/(.*)$': '<rootDir>/src/providers/$1',
        '^@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^@utils': '<rootDir>/src/utils',
        '^@hooks': '<rootDir>/src/hooks',
        '^@decorators': '<rootDir>/src/decorators',
        '^@service': '<rootDir>/src/service',
        '^@context': '<rootDir>/src/context',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.ts',
    },
    testEnvironment: 'jsdom',
}

export default config
