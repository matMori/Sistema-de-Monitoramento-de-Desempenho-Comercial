export interface User {
  id: number;
  nome: string;
  email: string;
  tipo: "gestor" | "vendedor";
}

export interface Sale {
  id: number;
  usuario_id: number;
  valor: number;
  status: "pendente" | "confirmada";
  comissao: number;
}

export interface Ranking {
  usuario: string;
  total: number;
}
