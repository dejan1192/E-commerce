import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Image, Row, Card, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from '../components/product/Rating';


const ProductView = ({match}) => {

    const [product, setProduct] = useState({});

    useEffect(()=>{
        const getProduct = async () => {
            const res = await axios.get(`/api/products/${match.params.id}`);
            console.log(res);
            setProduct(res.data.product);
        }
        getProduct();
    }, [])

    return (
        <Container>
        <Link to='/' className='btn btn-dark my-3'>GoBack</Link>
           <Row >
            <Col  md={6}>
                    <Image src={product.image} fluid rounded/>
             </Col>

            <Col md={6}>
                <Row>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item as='h3'>
                            {product.name}
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                        <Rating product={product} color="#f29f6b"  text={` ${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Brand: <strong>{product.brand}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Category: <strong>{product.category}</strong>
                        </ListGroup.Item>
                    
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                      
                    </ListGroup>
                </Col>
                <Col md={6}>
                <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                       {product.countInStock > 0 ? 'In stock ' : 'Out of stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block btn-success' type='btn' disabled={product.countInStock === 0}><i class="fas fa-cart-plus"></i> Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                </Row>
                <Row className='my-3'>
                   <Col md={12}>
                     {product.description}
                   </Col>
                </Row>
            </Col>
               
                
             
           </Row>
         
        </Container>
    )
}

export default ProductView
