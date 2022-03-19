import axios from "axios";

export const setAuth = (token,role)=>{
  if(token){
    axios.defaults.headers.common['Authorization'] = token;
  }else{
    delete axios.defaults.headers.common['Authorization']
  }
  if(role){
    axios.defaults.headers.common['Role'] = role;
  }else{
    delete axios.defaults.headers.common['Role']
  }
}