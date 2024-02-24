import { useDispatch, useSelector} from "react-redux"
import { Job } from "../../components"
import { AppDispatch, RootState } from "../../store"
import { useEffect } from "react"
import { getJobs } from "../../reducers/jobSlice"
export default function MyJobs({id,handleView}:any){
    const dispatch = useDispatch<AppDispatch>()
    const {jobs} = useSelector((state:RootState)=> state.job)
    const {user} = useSelector((state:RootState) => state.user)
    const myJobs = jobs.filter(function(job:any){
        return job.poster === id
    })
    const applied = jobs.filter(function(job:any){
         const apply = job.applications.map(function(j:any){
             j.id === user._id
         });
         return apply
    })
    useEffect(()=>{
        dispatch(getJobs(''))
    },[id])
    return <div className="d-flex flex-wrap">
    {user.type === 'employer' && myJobs && myJobs.length > 0 && myJobs.map((job:any)=>{
        return <Job _id={job._id} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline} handleView={handleView}/>
    })}
    {user.type === 'candidate' && applied && applied.length > 0 && applied.map((job:any)=>{
        return <Job _id={job._id} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline}/>
    })}
    {/* <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/>
    <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/>
    <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/>
    <Job company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas"/> */}

    </div>
}