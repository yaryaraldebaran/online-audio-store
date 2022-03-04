import { toTitleCase } from '../utils/toTitleCase';
import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { numberWithCommas } from '../utils/addDot';

export default function Products({ product , addToCart}) {
    return (
        <Col md={4} xs={6} className='mb-4'>
            <Card style={{ width: '18rem' }} className='shadow' onClick={()=>addToCart(product)}>
                <Card.Img variant="top" src={"assets/images/"+
            product.category+
            "/"+product.pic} />
                <Card.Body>
                    <Card.Title>{toTitleCase(product.productName)}</Card.Title>
                    <Card.Text>
                        Rp. {numberWithCommas(product.price)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
