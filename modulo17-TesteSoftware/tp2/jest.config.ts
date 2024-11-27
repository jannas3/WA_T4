import type { Config } from "jest";
import nextJest from "next/jest.js";

// Configuração para integrar o Next.js com Jest
const createJestConfig = nextJest({
  dir: "./", // Diretório do projeto (raiz)
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Mapeamento do alias '@' para o diretório 'src'
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Mapeia '@/*' para '<rootDir>/src/*'
  },
};

// Exportação do Jest com a configuração do Next.js
export default createJestConfig(config);
