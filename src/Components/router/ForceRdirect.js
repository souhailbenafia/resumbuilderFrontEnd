import React from 'react'
import { Navigate } from 'react-router-dom'

const  ForceRdirect =({user,children})=> {
    if(user.isConnected){
        return <Navigate to="/login" replace/>
    }
    return children
}

export default ForceRdirect