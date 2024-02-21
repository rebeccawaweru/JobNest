import { Button, Image } from "react-bootstrap"
import prof from '../assets/images/banner3.png'
export default function Candidate(){
    return <div className="border cwrap border-light bg-white shadow-sm py-3  mb-3  d-flex flex-column justify-content-center align-items-center shadow-sm">
       <Image src={prof} alt="candidate" className="profile rounded-circle"/>
       <p>Software Developer</p>
       <p>React MongoDB </p>
       <Button href="/resume">Resume</Button>
    </div>
}