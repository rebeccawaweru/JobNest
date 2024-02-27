import { Button, Image, Stack } from "react-bootstrap";
import { Rating } from ".";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getJob, deleteJob, getJobs, updateJob } from "../reducers/jobSlice";
import Swal from "sweetalert2";
import { baseURL } from "../utils/helpers";
import client from "../api/client";

interface JobType {
    count?:number,
    logo:string,
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
    const {_id,logo,company,title,location2,currency,salary,deadline,skills,count,handleView} = props
    const handleClick = () => {
        dispatch(getJob(_id))
    };

    const handleSide = () =>{
        dispatch(getJob(_id)).then(()=>{
            localStorage.setItem('jobid', _id);
            handleView()
        })
    }
    const handleApply = ()=>{
        dispatch(getJob(_id)).then((res:any)=>{
            if (token) {
                const apply = res.payload.applications &&  res.payload.applications.filter(function(j:any){
                    return j.id === user._id
                }) 
                if (apply.length > 0) {
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
                Swal.fire({
                    title: `Apply for ${title} at ${company}`,
                    text: 'Choose',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'Apply with Profile',
                    cancelButtonText: 'Upload CV & Apply',
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
                    } else {
                        Swal.fire({
                            title: `Upload CV for ${title} at ${company}`,
                            html: `
                                <input type="file" id="fileInput" accept=".pdf,.doc,.docx">
                            `,
                            icon: 'info',
                            showCancelButton: true,
                            confirmButtonText: 'Submit',
                            cancelButtonText: 'Cancel',
                          
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const fileInput = document.getElementById('fileInput') as HTMLInputElement;
                                const file = fileInput?.files?.[0];
                                if (!file) {
                                    Swal.fire('Please choose a file', '', 'error');
                                    return;
                                }
                                const formData = new FormData();
                                formData.append("file", file);
                                client.post('/file/upload', formData)
                                .then((res) => {
                                    console.log(res.data.files);
                                    // Initialize job.applications as an empty array if it's undefined
                                    const updatedApplications = Array.isArray(job.applications) ? [...job.applications] : [];
                                    updatedApplications.push({
                                        name: res.data.files,
                                        id: user._id
                                    });
                                    dispatch(updateJob({
                                        id: _id,
                                        values: {
                                            ...job,
                                            applications: updatedApplications
                                        }
                                    })).then(() => {
                                        Swal.fire('Success', 'Your CV has been sent!', 'success');
                                    });
                                }) .catch((error) => {
                                        Swal.fire('File upload failed', error.message, 'error');
                                    });
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                Swal.fire('File upload cancelled', '', 'error');
                            }
                        });
                        
                    }
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
            //  navigate('/employer')
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
         <Image src={baseURL+logo} alt="job-logo" className="logo"/>
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
        {(user.type === "employer") ?  <Button onClick={handleSide} variant="success" className="rounded-pill">Applications ({count})</Button> :
        (current !== '/apply' && user.type === 'candidate') ?  <Button onClick={handleApply} variant="success" className="rounded-pill px-4 button">Apply</Button> 
        :  (current !== '/apply' && user.type === 'employer') ? null : ''  }
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