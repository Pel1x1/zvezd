import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Добавляем кастомные правила
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      // Отключаем стандартное правило ESLint
      "no-unused-vars": "off",
      
      // Отключаем TypeScript-версию правила
      "@typescript-eslint/no-unused-vars": "off",
      
      // Отключаем предупреждение о <img>
      "@next/next/no-img-element": "off",  

      
      // Опционально: игнорировать переменные с _ 
      // "@typescript-eslint/no-unused-vars": [
      //   "error",
      //   { 
      //     argsIgnorePattern: "^_", 
      //     varsIgnorePattern: "^_",
      //     caughtErrorsIgnorePattern: "^_"
      //   }
      // ],
      
      // Для ошибок с <img> (если нужно)
      "@next/next/no-img-element": "warn"
    }
  }
];

export default eslintConfig;
