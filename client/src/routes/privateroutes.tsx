import { useEffect } from "react";
import { useNavigate } from "react-router";
interface PrivateRoutesProps{
    element: JSX.Element
}
export default function PrivateRoutes({element:Element}:PrivateRoutesProps){
    const token:any = localStorage.getItem('token');
    const navigate = useNavigate()
    useEffect(()=>{
        if (!token){
            navigate('/login')
        }
    },[token])
    return Element
}