export function headers() {
    return {
        headers: {
            Authorization : `Token ${localStorage.getItem('app_token')}`,
            REACT: 'react',
        }
    }
}
