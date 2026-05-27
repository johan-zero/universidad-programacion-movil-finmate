import { existsSync } from 'node:fs';

const required = [
  'README.md',
  'docs/entrega_1_diseno.md',
  'src/app',
  'src/presentation',
  'src/domain',
  'src/data',
  'src/core'
];

const missing = required.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error('Faltan elementos:', missing.join(', '));
  process.exit(1);
}

console.log('OK - estructura por capas validada');
