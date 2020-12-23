import { Carousel, CarouselItem } from 'react-bootstrap';
import React from 'react'

const CarouselComponent = () => {
    return (
        <Carousel indicators={true}  className='mb-3' style={{ maxHeight:'21rem' }}>
        <CarouselItem style={{ maxHeight:'21rem' }}>
            <img className='d-block w-100' src='/carousel/amd.jpg' />
            <Carousel.Caption>
                <h2>First Slide</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quas dolore et inventore nam expedita, dolores magni explicabo ratione laudantium!</p>
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ maxHeight:'21rem'}}>
            <img className='d-block w-100' src='/carousel/second.jpg' fluid />
            <Carousel.Caption>
                <h2>Second Slide</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quas dolore et inventore nam expedita, dolores magni explicabo ratione laudantium!</p>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ maxHeight:'21rem' }}>
            <img className='d-block w-100' src='/carousel/third.jpg' />
            <Carousel.Caption>
                <h2>Third Slide</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quas dolore et inventore nam expedita, dolores magni explicabo ratione laudantium!</p>
            </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    )
}

export default CarouselComponent
