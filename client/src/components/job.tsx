import { job1} from "../assets/images";
import { Button, Image, Stack } from "react-bootstrap";
import { Rating } from ".";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getJob, deleteJob, getJobs, updateJob } from "../reducers/jobSlice";
import Swal from "sweetalert2";
interface JobType {
    // logo?:string,
    _id:string,
    company:string,
    title:string,
    location2:string,
    currency?:string,
    salary?:number,
    deadline:string,
    skills:Array<string>,
    handleView?:any
    
}
export default function Job(props:JobType){
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {user} = useSelector((state:RootState) => state.user)
    const token = localStorage.getItem('token')
    const {job} = useSelector((state:RootState) => state.job)
    const current = location.pathname
    const {_id,company,title,location2,currency,salary,deadline,skills,handleView} = props
    const handleClick = () => {
        dispatch(getJob(_id))
    };
    const apply = (job && job.applications && job.applications.length > 0) && job.applications.filter(function(j:any){
        return j.id === user._id
    }) 
    const handleSide = () =>{
        dispatch(getJob(_id)).then(()=>{
            handleView()
        })
    }
    const handleApply = ()=>{
        dispatch(getJob(_id)).then(()=>{
            if (token) {
                if(!apply){
                    Swal.fire('Success', 'You already applied for this job. Browse more jobs', 'warning')
                } else {
            Swal.fire({
              title: 'Confirm',
              text: `Apply for ${title} at ${company}`,
              icon: 'info',
              confirmButtonText:'Proceed',
              confirmButtonColor:'blue',
              showCancelButton: true,
            }).then((result)=>{
              if(result.isConfirmed){
                   dispatch(updateJob({id:_id, values:{
                    ...job,
                    applications:[...job.applications, 
                        {
                            name:user.fullname,
                            id:user._id
                        }
                    ]
                   }})).then((res)=>{
                    console.log(res)
                    Swal.fire('Success', 'Application Sent!', 'success')
                   })
              }
            });
                     }
           } else {
              navigate('/login')
           }
        })
  
    }
    const handleDelete = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            confirmButtonText:'Delete',
            confirmButtonColor:'red',
            showCancelButton: true,
          }).then((result)=>{
            if(result.isConfirmed){
             dispatch(deleteJob(_id)).then(()=>{
             dispatch(getJobs(''))
             navigate('/employer')
             })
            }
          });

    }
    return(
        <div key={_id} className="border border-light bg-white shadow-sm p-3 jobwrap mb-3">
        {user.type === "employer" && 
           <div className="d-flex justify-content-end gap-3">
            <i className="bi bi-pencil-square text-success"></i>
            <i onClick={handleDelete} className="bi bi-trash3-fill text-danger"></i>
          </div>
        }
        <div className="d-grid d-lg-flex d-md-flex justify-content-between mt-3">
      
        <div className="d-flex gap-3">
         <Image src={job1} alt="job-logo" className="logo"/>
         <div className="d-grid gap-2">
         <span className="text-primary">{company}</span>
         <span className="topic fs-4">{title}</span>
         <span><i className="bi bi-geo-alt-fill text-muted"></i> {location2}</span>
         </div>
         </div>
         <Stack direction="horizontal" gap={3}>
         {current !== '/jobs/details' ?
         <Link onClick={handleClick} to="/jobs/details" className="rounded-pill bg-primary text-decoration-none text-white  px-3 py-2 button">Open</Link>
         : null}
        {((current === '/employer' || current === '/jobs/details') && user.type === "employer") ?  <Button onClick={handleSide} variant="success" className="rounded-pill">Applications ({job && job.applications && job.applications.length})</Button> :
        (current !== '/apply' && user.type === 'candidate') ?  <Button onClick={handleApply} variant="success" className="rounded-pill px-4 button">Apply</Button> 
        : null }
        </Stack>
        
         </div>
         <hr></hr>
         <div className="d-grid d-lg-flex d-md-flex justify-content-between">
         <Stack direction="horizontal" gap={2}>
            {skills && skills.map((s)=>{
                 return  <div key={s} className="bg-light text-secondary p-2">{s}</div>
            })}
         </Stack>
         <Rating/>
         </div>
         <hr></hr>
         <div className="d-flex justify-content-between">
            <div>
            <p>{currency} {salary}</p>
       
            </div>
            <p className="text-muted d-flex">Deadline: <span className="topic"><p>{new Date(deadline).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })}</p>
           </span></p>
         </div>

         
        </div>  
    )
}