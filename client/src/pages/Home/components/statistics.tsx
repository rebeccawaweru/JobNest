import { Stats } from "../../../components"
export default function Statistics(){
    return (
    <div className='bg-primary text-white d-grid gap-5 d-lg-flex d-md-flex justify-content-center stats p-5 p-lg-0 p-md-0'>
    <Stats custom="stat" num="14.3 K" title="Jobs Available"/>
    <Stats custom="stat" num="4.5 K"  title="Completed Jobs"/>
    <Stats custom="stat" num="49 K" title="Worldwide Client’s"/>
    <Stats custom='custom' num="25 B" title="Total Payout"/>
    </div> 
    )
}