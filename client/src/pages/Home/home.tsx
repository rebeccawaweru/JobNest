import { HomeWrapper } from "../../wrapper"
import { Introduction, Categories, About, Statistics, JobProcess } from "./components"
export default function Home(){
    return (
    <HomeWrapper>
    <Introduction/>
    <Categories/>
    <About/>
    <Statistics/>
    <JobProcess/>
    </HomeWrapper>
    )
}