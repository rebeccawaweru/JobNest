import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface propObject {
    icon:string,
    title:string,
    jobs:number
}
function JobCard(props:propObject) {
  const {icon,title,jobs} = props
  return (
    <Card className='d-block text-left align-items-center justify-content-center p-4 mx-1' style={{ width: '18rem' }}>
     <Card.Text  className='rounded-circle text-primary mx-2 mt-4 mb-4 fs-2'>
     <i className={`${icon} border rounded-circle p-4`}></i>
     </Card.Text>
      <Card.Body >
        <Card.Title className='fs-4 mt-4'>{title}</Card.Title>
        <Card.Text className='text-muted'>
        Total {jobs} Jobs Open
        </Card.Text>
        <Button variant='outline-secondary' className='fw-bold text-primary rounded-2 mt-4'>Explore Jobs <i className="bi bi-chevron-double-right"></i></Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;