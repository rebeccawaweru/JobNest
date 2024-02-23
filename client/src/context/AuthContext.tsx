// import { jwtDecode } from "jwt-decode";
import { createContext} from "react";

// interface decodeType {
//     exp:number,
//     iat:number,
//     _id:string
// }
interface AuthContextType {
     fullname:string | null
}
export  const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContent({children}:any){
    // const token:any = localStorage.getItem('token')
    // const decoded:decodeType = jwtDecode(token)
    const fullname = localStorage.getItem('fullname');
    return <AuthContext.Provider value={{fullname}}> 
      {children}
    </AuthContext.Provider>
}