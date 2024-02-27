import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Job } from "../../components";
import {  HomeWrapper } from "../../wrapper";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getJobs } from "../../reducers/jobSlice";
export default function Jobs(){
    const dispatch = useDispatch<AppDispatch>()
    const {jobs} = useSelector((state:RootState)=>state.job);
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const [filtered, setFiltered] = useState<any>([])
    const [search, setSearch] = useState(false)
    const handleCheckboxChange = (event:any) => {
      const { value, checked } = event.target;
      if (checked) {
          setCheckedValues(prevValues => [...prevValues, value]);
      } else {
          setCheckedValues(prevValues => prevValues.filter(item => item !== value));
      }
    };
    const filterJobs = () => {
      setSearch(true)
      setFiltered(jobs.filter(job =>
        checkedValues.every(checkedValue => JSON.stringify(job).includes(checkedValue))
    ));
  };
    useEffect(()=>{
      dispatch(getJobs(''))
      console.log(filtered)
    },[jobs])
    return (
    <HomeWrapper>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>Trending Jobs</h2>
    <p>JobNest // Latest Jobs</p>
    </div>
    <Container fluid className="p-5 bg-white">
    <Row>
    <Col sm={4}  xl={4}  xxl={2} className="d-flex job-filter text-muted py-5 flex-column bg-light gap-3  text-left   rounded-3 shadow-sm">
    <span className="topic">Categories</span>
    <Form.Check value="Accounting" label="Accounting" onChange={handleCheckboxChange} />
    <Form.Check value="Commercial" label="Commercial" onChange={handleCheckboxChange} />
    <Form.Check value="IT & Technology" label="IT & Technology" onChange={handleCheckboxChange} />
    <Form.Check label="Engineering" value="Engineering" onChange={handleCheckboxChange} />
    <Form.Check label="Sales & Marketing" value="Sales & Marketing" onChange={handleCheckboxChange} />
    <Form.Check label="Support Service" value="Support Service" onChange={handleCheckboxChange} />
    <Form.Check label="Hotel & Catering" value="Hotel & Catering" onChange={handleCheckboxChange} />
    <span className="topic">Tags</span>
    <Form.Check value="C++" label="C++" onChange={handleCheckboxChange}/>
    <Form.Check value="Creative" label="Creative" onChange={handleCheckboxChange}/>
    <Form.Check value="Designer" label="Designer" onChange={handleCheckboxChange}/>
    <Form.Check value="Developer" label="Developer" onChange={handleCheckboxChange}/>
    <Form.Check value="Full Time" label="Full Time" onChange={handleCheckboxChange}/>
    <Form.Check value="Javascript" label="Javascript" onChange={handleCheckboxChange}/>
    <Form.Check value="Remote" label="Remote" onChange={handleCheckboxChange}/>
    <span className="topic">Locations</span>
    <Form.Check value="Remote" label="Remote" onChange={handleCheckboxChange}/>
    <Form.Check value="Nairobi" label="Nairobi" onChange={handleCheckboxChange}/>
    <Form.Check value="Mombasa" label="Mombasa" onChange={handleCheckboxChange}/>
    <Form.Check value="Kisumu" label="Kisumu" onChange={handleCheckboxChange}/>
    <Form.Check value="Nyeri" label="Nyeri" onChange={handleCheckboxChange}/>
    <Form.Check value="Nakuru" label="Nakuru" onChange={handleCheckboxChange}/>
    <Form.Check value="Nanyuki" label="Nanyuki" onChange={handleCheckboxChange}/>
    <Form.Check value="Machakos" label="Machakos" onChange={handleCheckboxChange}/>
    <span className="topic">Job Type</span>
    <Form.Check value="Freelance" label="Freelance" onChange={handleCheckboxChange}/>
    <Form.Check value="Full Time" label="Full Time" onChange={handleCheckboxChange}/>
    <Form.Check value="Part Time" label="Part Time" onChange={handleCheckboxChange}/>
    <Form.Check value="Hybrid" label="Hybrid" onChange={handleCheckboxChange}/>
    <Button className="button" onClick={filterJobs}>Search</Button>
    </Col>
    <Col sm={8} xl={8} xxl={10} className="d-block flex-wrap d-xxl-flex" >
     {search &&  <span className="text-primary cursor text-decoration-underline" onClick={()=>setSearch(false)}>Reset</span>}
     {search && filtered && filtered.length > 0 ? filtered.map((job:any)=>{
        return <Job count={job.count} logo={job.logo} _id={job._id} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline}/>
    }) : search && <p>No matching jobs found. </p>}

    {(jobs && jobs.length > 0 && !search ) ? jobs.map((job:any)=>{
        return <Job count={job.count} logo={job.logo} _id={job._id} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline}/>
    }): !search && <p>No jobs posted</p>}

    {/* <Job _id="1" company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas" skills={['C++', 'Designer', 'Developer']} currency="$" salary={1000} deadline=''/> */}
    </Col>
    </Row>
    </Container>
    </HomeWrapper>
    )
}