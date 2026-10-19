import { globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
const eslintConfig = [...nextVitals, ...nextTs, globalIgnores(['.next/**','out/**','next-env.d.ts','server/**'])];
export default eslintConfig;
