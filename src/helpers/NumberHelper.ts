function toBRL(value: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl',
  }).format(value);
}

function brlToNumber(brl: string) {
  return brl.replace(/\./, '').replace(/\,/, '.');
}

export const NumberHelper = {
  toBRL,
  brlToNumber,
};
