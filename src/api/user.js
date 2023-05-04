import axios from 'axios'

export const user = async (state) => {
    const petition = await axios.get('https://arithmetic-calculator-production.up.railway.app/user')
    state(petition.data)
}
