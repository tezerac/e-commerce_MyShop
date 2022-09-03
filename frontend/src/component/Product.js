import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({productItem}) => {
  return ( 
  <Card className='my-3 p-3 rounded'>
        <a href={`/productItem/${productItem._id}`}>
           <Card.Img src={productItem.image} variant='top'/>
        </a>

      <Card.Body>
        <a href={`/productItem/${productItem._id}`}>
           <Card.Title as='div'>
             <strong> {productItem.name}</strong>
           </Card.Title>
        </a>

      <Card.Text as='div'>
        <Rating 
        value={productItem.rating}
        text={`${productItem.numReviews} reviews`}/>
      </Card.Text>
      
      <Card.Text as='h3'>${productItem.price}</Card.Text>
      </Card.Body>
  </Card>
  )
}

export default Product