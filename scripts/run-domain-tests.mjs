function assert(condition, message) {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

const transactions = [
  { type: 'income', amount: 1000 },
  { type: 'expense', amount: 250 },
  { type: 'expense', amount: 150 }
];

const income = transactions.filter((item) => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
const expense = transactions.filter((item) => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);

assert(income === 1000, 'El total de ingresos no coincide.');
assert(expense === 400, 'El total de gastos no coincide.');
assert(income - expense === 600, 'El balance no coincide.');

console.log('OK - pruebas de dominio ejecutadas correctamente');
