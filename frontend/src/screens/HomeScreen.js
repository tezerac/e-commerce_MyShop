import React from 'react'
import Products from '../Products'
import Product from '../component/Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  return(
    <>
    <h1>Latest Product</h1>
    <Row>
      {Products.map((singleProductFromJson)=>(
        <Col key={singleProductFromJson._id} sm={12} md={6} la={4} xl={3}>
         <Product productItem={singleProductFromJson}/>
         </Col>  
      ))}
    </Row>
    </>
  
  )
}

export default HomeScreen