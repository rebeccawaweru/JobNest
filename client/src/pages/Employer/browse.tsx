import { useSelector } from "react-redux"
import { Candidate } from "../../components"
import { RootState } from "../../store"

export default function Browse(){
    const {users} = useSelector((state:RootState)=>state.user)
    const candidates = users.length > 0 && users.filter(function(user:any){
        return user.type === "candidate"
    });
    return <div className="d-flex flex-wrap gap-4 py-2">
    {candidates && candidates.length > 0 ? candidates.map((user:any)=>{
        return <Candidate _id={user._id} name={user.fullname} tagline="Software" skills={user.skills} customclass="cwrap"/>
    }) : <p>No candidates available</p>}
    {/* <Candidate/>
    <Candidate/>
    <Candidate/>
    <Candidate/> */}
    </div>
}