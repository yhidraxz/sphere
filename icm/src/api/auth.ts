interface user {
    id: string
    key: string
}

export async function fetchUser(key: string): Promise<user | null> {
    try {
          const res = await fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key
          }),
        });

        if (res.status === 401) {
            console.error('key inválida')
            return null
        }

        if (!res.ok) {
            console.error("erro do servidor")
            return null
        }

        const data = await res.json()

        return {
            id: data.userId,
            key,
        };

    } catch (err) {
        console.error('failed to check user:', err);
        return null
    }
       
}
