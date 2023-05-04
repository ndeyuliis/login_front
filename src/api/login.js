import axios from 'axios'

export const login = async (user) => {
    console.log(user, "registro")
    const petition = await axios.put('https://arithmetic-calculator-production.up.railway.app/register/login',{
     "userName": user.email,
     "password":  user.password,
    })
    .then((response) => {
        if(response.data.token)
        alert('Welcome ' + user.email)
    })
    .catch((error) => {
        console.log(error.response.data)
        alert(error.response.data.msg)
    })
}
