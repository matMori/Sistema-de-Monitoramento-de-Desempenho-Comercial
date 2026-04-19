export function calcularComissao(valor: number, status: string) {
  if (status !== "confirmada") return 0;

  return valor * 0.1;
}
