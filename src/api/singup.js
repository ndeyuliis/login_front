import axios from 'axios'

export const singUp = async (user) => {
    console.log(user, "registro")
    const petition = await axios.post('https://arithmetic-calculator-production.up.railway.app/register/singup',{
     "userName": user.email,
     "password":  user.password,
    })
    .then((response) => {
        console.log(response.data)
        alert('The user ' + user.email + " was created")
    })
    .catch((error) => {
        console.log(error.response.data)
        alert(error.response.data.msg)
    })
}