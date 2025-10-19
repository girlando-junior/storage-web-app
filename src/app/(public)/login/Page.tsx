"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    // Aqui você faria a autenticação real (ex: via API)
    // Após sucesso, salva token/role em cookie/localStorage
    document.cookie = "token=123456; path=/";

    // Redireciona para rota privada
    router.push("/dashboard");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Entrar
      </button>
    </main>
  );
}
