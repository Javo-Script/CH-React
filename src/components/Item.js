import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

export default function Item (props) {

  return(
    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.category}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <button>{props.price}</button>
        <Link to={`/details/${props.id}`}>Ver detalles</Link>
        {/* <ItemCount stock={props.stock} initial="0" id={props.id}/> */}
      </Card.Body>
    </Card>
  )
}