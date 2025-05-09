import { useState } from 'react'
import { useNavigate} from 'react-router'

import { fetchUser } from '../../api/auth'
import { saveUserInfo } from '../../store/userStore';

export default function loginPage () {
    const [key, setKey] = useState('');
    const [error, setError] = useState('');

    const navigate: (route: string) => void = useNavigate();

    const handleLogin = async () => {
        const user = await fetchUser(key)

        if (!user) {
            setError('A chave inserida é inválida. Por favor verifique e tente novamente');
            return
        }

            saveUserInfo(user)
            navigate("/dashboard")
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold text-center">Entrar</h1>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Insira sua chave"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </div>
    </div>
    )
}