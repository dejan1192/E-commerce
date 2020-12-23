import React, { useEffect, useState } from 'react'
import ProductCard from '../components/product/ProductCard';
import {Row, Col, Carousel, CarouselItem, Container } from 'react-bootstrap';
import axios from 'axios';
import CarouselComponent from '../components/CarouselComponent';

const HomeView = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async () => {
            const res = await axios.get('/api/products');
           
            setProducts(res.data.products);
        }
        getProducts();
    },[])

    return (
     <>
       
       <Row>
            <CarouselComponent />
        </Row>
    <Container >
        <h3>Latest products <span>(4)</span></h3>
      <Row>
         
        {products.map(p => (
          <Col  key={p._id} xl={3} lg={3} md={6} sm={12}><ProductCard product={p}/></Col>
        ))}
      </Row>
    </Container>
     </>
    )
}

export default HomeView
