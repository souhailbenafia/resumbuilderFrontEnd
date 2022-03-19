import axios from "axios";
import { ERRORS, SET_USER } from "../reducers/types";
import jwtDecode from "jwt-decode";
import { setAuth } from "../../../util/setauth";

export const Registration = (form,navigate)=>dispatch=>{
axios.post("https://localhost:7154/api/authentication/register",form)
.then(
    res=>{
        navigate('/login')
        dispatch({
        
            type: ERRORS,
            payload:{}
        })
    }
)
.catch(err=>{
    console.log(form)
    dispatch({ 
        type: ERRORS,
        payload: err.response.data
    })

})
}
export const LoginAction = (form,navigate)=>dispatch=>{
    axios.post("https://localhost:7154/api/authentication/login",form)
    .then(
        res=>{
            const token = res.data.authData.token
            const role = res.data.authData.role[0]
            localStorage.setItem('role',role)
            localStorage.setItem('jwt',token)
            const decode = jwtDecode(token)
            dispatch( setUser(decode))
            setAuth(token,role)

        }
    )
    .catch(err=>{
        console.log(form)
        dispatch({   
            type: ERRORS,
            payload: err.response.data
        })
    
    })

    }
    
    export const setUser=(decode)=>({
        type : SET_USER,
        payload: decode
    } 
    )