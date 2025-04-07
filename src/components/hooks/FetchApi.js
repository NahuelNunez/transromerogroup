export const FetchApi = async () => {
    try {


        const respon = await fetch("https://transporteromerogroup-backend.onrender.com/expresoPromotions/getAll")
        const data = await respon.json()
        return data

    } catch (error) {
        console.log('No se pudo obtener la informacion', error)
    }
} 