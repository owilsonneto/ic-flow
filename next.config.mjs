export async function redirects() {
    return [
        {
            source: '/login',
            destination: '/',
            permanent: true,
        },
    ]
}