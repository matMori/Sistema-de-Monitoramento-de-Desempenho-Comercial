import { User } from "@/types";

let usuarios: User[] = [];

export async function GET() {
  return Response.json(usuarios);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { nome, email, tipo } = body;

  if (!nome || !email || !tipo) {
    return Response.json(
      { error: "Dados obrigatórios" },
      { status: 400 }
    );
  }

  const novoUsuario: User = {
    id: usuarios.length + 1,
    nome,
    email,
    tipo,
  };

  usuarios.push(novoUsuario);

  return Response.json(novoUsuario, { status: 201 });
}
