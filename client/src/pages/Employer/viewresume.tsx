import { Container } from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../reducers/userSlice";
import { getJob } from "../../reducers/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { baseURL } from "../../utils/helpers";
import { Document, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
interface UserType {
    fullname:string,
    phone:string,
    about:string,
    email:string,
    website:string,
    education:Array<{}>,
    skills:Array<string>,
    experience:Array<{}>,
    certifications:Array<{}>,
}
export default function ViewResume(){
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>()
    const searchParams = new URLSearchParams(location.search);
    const userId:any = searchParams.get('user');
    const jobId:any = searchParams.get('job');
    const {user} = useSelector((state:RootState)=>state.user);
    const {job} = useSelector((state:RootState)=>state.job)
    const [userData, setUserData] = useState<UserType>({})
    const [file, setFile] = useState('')
    useEffect(()=>{
        dispatch(getUser(userId)).then((res)=>{
            setUserData(res.payload)
        })
        dispatch(getJob(jobId)).then((res)=>{
            console.log(res.payload.applications)
             const z = job.applications.filter(function(j:any){
                return j.id === userId
             })
             setFile(baseURL+z[0].name)
        })
    },[userId,jobId])
    return (
     <HomeWrapper>
     <Container id="pdf-content" className="border border-1 rounded-3 p-4 d-grid gap-3">
        <div>
        <div className="text-center d-grid">
        <span>{userData.fullname}</span>
        <span>{userData.phone} |<span>{userData.email}</span> | <a href="">{userData.website}</a></span>
        <a href="">www.linkedin.com</a>
        </div>
        <div>
            <p className="topic">SUMMARY</p>
            <hr/>
            <p className="text-muted">
            {userData.about}
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
            </p>
        </div>
        <div>
        <p className="topic">Education</p>
        <hr/>

        {userData && userData.education && userData.education.length > 0 && userData.education.map((e:any)=>{
            return <>
        <div className="d-flex justify-content-between">
        <p>{e.level} {e.field} at {e.school}</p>
        <p>{new Date(e.startdate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })} - {new Date(e.endate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })}</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </>
        })}
   

        </div>

        <div className="mt-2">
        <p className="topic">Experience</p>
        <hr/>
        {userData.experience && userData.experience.length > 0 && userData.experience.map((e:any)=>{
            return <> <div className="d-flex justify-content-between">
        <p>{e.title} at {e.company}</p>
        <p>{new Date(e.startdate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })} - {new Date(e.endate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })}</p>
        </div>
        <p className="text-muted">
          {e.description}   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
            </>
        })}
    
        </div>

        <div className="mt-2">
        <p className="topic">Skills</p>
        <hr/> 
        <div className="d-flex flex-wrap justify-content-between w-50">
        {userData.skills && userData.skills.length > 0 && userData.skills.map((e:any)=>{
            return <span key={e}><i className="bi bi-dot"></i>{e}</span>
        })} 
        </div>
        </div>

        <div className="mt-3">
        <p className="topic">Certifications/Accomplishments</p>
        <hr/>
        {userData.certifications && userData.certifications.length > 0 && userData.certifications.map((e:any)=>{
        return <>
        <div className="d-flex justify-content-between">
        <p>{e.org} {e.certname}</p>
        <p>Feb 2024</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </>
        })}
     
        </div>
        </div>

        <Document file={file}/>
        </Container>
  
     </HomeWrapper>
    )
}