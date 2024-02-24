import { Button, Image } from "react-bootstrap"
import prof from '../assets/images/banner3.png'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { getUser } from "../reducers/userSlice"
interface UserType {
    _id:string,
    name:string,
    tagline:string,
    skills:Array<string>,
    customclass?:string
}
export default function Candidate(props:UserType){
    const dispatch = useDispatch<AppDispatch>()
    const {_id, name, tagline, skills, customclass} = props
    return <div key={_id} className={`${customclass} border border-light bg-white shadow-sm py-3  mb-3  d-flex flex-column justify-content-center align-items-center shadow-sm`}>
       <Image src={prof} alt="candidate" className="profile rounded-circle"/>
       <p>{name}</p>
       <p>{tagline} </p>
       <div className="d-flex flex-wrap gap-2">
       {skills && skills.length > 0 && skills.map((skill)=>{
           return <p key={skill}>{skill}</p>
       })}
       </div>
       <Link onClick={()=>dispatch(getUser(_id))} to={`/resume?user=${_id}`} className="bg-success text-white p-2 text-decoration-none">View <i className="bi bi-box-arrow-up-right"></i></Link>
       {/* <Button href="/resume">Resume</Button> */}
    </div>
}