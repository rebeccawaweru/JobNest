import { useDispatch, useSelector} from "react-redux"
import { Job } from "../../components"
import { AppDispatch, RootState } from "../../store"
import { useEffect, useState } from "react"
import { getJobs } from "../../reducers/jobSlice"
export default function MyJobs({id,handleView}:any){
    const dispatch = useDispatch<AppDispatch>()
    const {jobs} = useSelector((state:RootState)=> state.job)
    const {user} = useSelector((state:RootState) => state.user)
    const [apply,setApply] = useState([])
    const myJobs = jobs.filter(function(job:any){
        return job.poster === user._id
    })

    useEffect(()=>{
        dispatch(getJobs('')).then((res)=>{
            const applied = res.payload.filter(function(job:any){
                const c = job.applications.filter(function(j:any){
                      return j.id === user._id
                  });
                  return c.length > 0
             })
             setApply(applied)
        })
    },[id])
    return <div className="d-flex flex-wrap">
   
    {(user.type === 'employer' && myJobs && myJobs.length > 0) ? myJobs.map((job:any)=>{
        return <Job _id={job._id} logo={job.logo} count={job.applications.length} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline} handleView={handleView}/>
    }) : user.type === 'employer' && !myJobs ? <p className="my-2">You have not posted any jobs</p> : null}

    {(user.type === 'candidate' && apply && apply.length > 0) ? apply.map((job:any)=>{
        return <Job _id={job._id} logo={job.logo} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline}/>
    }) : user.type === 'candidate' && apply.length === 0 ? <p>You have not applied for any jobs</p> : null}
    {/* <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/>
    <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/>
    <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/>
    <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/> */}

    </div>
}