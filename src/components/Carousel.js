import React, { Component } from 'react';
import data from '../item-data.json';
import '../Product.css';

            
const images = data.CatalogEntryView[0].Images[0].AlternateImages;
let imgUrls = [];

images.map(item => {
    imgUrls.push(item.image);
})

const lastIndex = imgUrls.length - 1;

class Carousel extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 1
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		if( this.state.currentImageIndex === 1) {
            this.setState({
                currentImageIndex: lastIndex - 1
            });
        } else {
            this.setState({
                currentImageIndex: this.state.currentImageIndex - 1
            });
        }
	}
	
	nextSlide () {
		if( this.state.currentImageIndex === lastIndex - 1 ) {
            this.setState({
                currentImageIndex: 1
            });
        } else {
            this.setState({
                currentImageIndex: this.state.currentImageIndex + 1
            });
        }
	}
	
	render () {
		return (
			<div className="carousel">
                <a href="#" className="slide-arrow" onClick={this.previousSlide}>&#8249;</a>
                <div className="images-container">
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex - 1]} />
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex]} />
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex + 1]} />
                </div>
                <a href="#" className="slide-arrow" onClick={this.nextSlide}>&#8250;</a>
			</div>
		);
	}
}


export default Carousel;