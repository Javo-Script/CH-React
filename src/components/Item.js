import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount  from './itemCount'

export default function Item (props) {


  return(
    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.category}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="secondary">{props.price}</Button>
        <ItemCount />
      </Card.Body>
    </Card>
  )
}