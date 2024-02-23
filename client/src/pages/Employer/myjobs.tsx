import { useSelector } from "react-redux"
import { Job } from "../../components"
import { RootState } from "../../store"
export default function MyJobs(){
    const {jobs} = useSelector((state:RootState)=> state.job)
    return <div className="d-flex flex-wrap ">
    {jobs && jobs.length > 0 && jobs.map((job)=>{
        return <Job/>
    })}
    <Job/>
    <Job/>
    <Job/>
    <Job/>
    </div>
}