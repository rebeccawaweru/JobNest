// import { jwtDecode } from "jwt-decode";
// import client from "../api/client";
import { createContext} from "react";
export  const AuthContext = createContext<string | null>(null)
export default function AuthContent({children}:any){
    const fullname:string|null = localStorage.getItem('fullname')
    return <AuthContext.Provider value={fullname}> 
      {children}
    </AuthContext.Provider>
}