import { Ranking } from "@/types";

export async function GET() {
  const ranking: Ranking[] = [
    { usuario: "João", total: 500 },
    { usuario: "Maria", total: 300 },
  ];

  return Response.json(ranking);
}
