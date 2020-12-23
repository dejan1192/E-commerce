import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({product}) => {

    const [shadow, setShadow] = useState('');


    const handleHover = (e) => {
           setShadow('shadow-sm');
    }

    return (

        <Card className={`my-3 p-3 rounded ${shadow}`} onMouseOver={handleHover} onMouseOut={()=> setShadow('')}>
            <Link className='mb-3' to={`/products/${product._id}`}>
                <Card.Img variant='top' src={product.image}/>
            </Link>
            
           
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text>
                <Rating product={product} color="#f29f6b"  text={` ${product.numReviews} reviews`}/>
            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card>
    )
}

export default ProductCard
