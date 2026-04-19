"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuários</h1>

      {users.length === 0 && <p>Nenhum usuário encontrado</p>}

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.nome}</p>
        </div>
      ))}
    </div>
  );
}
