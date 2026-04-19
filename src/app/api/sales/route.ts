import { calcularComissao } from "@/services/saleService";
import { Sale } from "@/types";

let vendas: Sale[] = [];

export async function GET() {
  return Response.json(vendas);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { usuario_id, valor, status } = body;

  if (!usuario_id || !valor || !status) {
    return Response.json(
      { error: "Dados obrigatórios" },
      { status: 400 }
    );
  }

  if (valor <= 0) {
    return Response.json(
      { error: "Valor inválido" },
      { status: 400 }
    );
  }

  const comissao = calcularComissao(valor, status);

  const novaVenda: Sale = {
    id: vendas.length + 1,
    usuario_id,
    valor,
    status,
    comissao,
  };

  vendas.push(novaVenda);

  return Response.json(novaVenda, { status: 201 });
}
