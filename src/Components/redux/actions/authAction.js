import axios from "axios";
import { ERRORS, SET_USER } from "../reducers/types";
import jwtDecode from "jwt-decode";
import { setAuth } from "../../../util/setauth";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const generateError = (error) =>
toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

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
    dispatch({ 
        type: ERRORS,
        payload: err.response.data
    })

})
}

export const RegistrationRec = (form,navigate)=>dispatch=>{
    axios.post("https://localhost:7154/api/authentication/registerRecruter",form)
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
            const role = res.data.authData.roles[0]
            const userId = res.data.authData.id
            localStorage.setItem('role',role)
            localStorage.setItem('jwt',token)
            localStorage.setItem('userId',userId)
            const decode = jwtDecode(token)
            dispatch( setUser(decode))
            navigate('/home');
            setAuth(token,role)
           

        }
        
    )
    .catch(err=>{
        
        dispatch({   
            type: ERRORS,
            payload: err.response.data
            
        })
    
    })

    }

    export const Logout = ()=>dispatch=>{
        localStorage.removeItem('role')
        localStorage.removeItem('jwt')
        localStorage.removeItem('userId')
        dispatch({
            type: SET_USER,
            payload: {}
        })
    }

    
    export const setUser=(decode)=>({
        type : SET_USER,
        payload: decode
    } 
    )
