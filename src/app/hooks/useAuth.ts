// import { useEffect, useState } from 'react'

// export function useAuth() {
//   const [user, setUser] = useState<{ name: string; role: string } | null>(null)

//   useEffect(() => {
//     // Simulação de autenticação
//     const token = document.cookie.includes('auth_token')
//     if (token) {
//       setUser({ name: 'Ana Clara', role: 'admin' })
//     }
//   }, [])

//   return { user }
// }