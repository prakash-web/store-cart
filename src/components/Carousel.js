import React, { Component } from 'react';
import data from '../item-data.json';
import '../Product.css';

            
const images = data.CatalogEntryView[0].Images[0].AlternateImages;
let imgUrls = [];

images.map(item => {
    imgUrls.push(item.image);
})


class Carousel extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
                <a href="#" className="slide-arrow" onClick={this.previousSlide}>&#8249;</a>
                <div className="images-container">
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex]} />
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex + 1]} />
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex + 2]} />
                </div>
                <a href="#" className="slide-arrow" onClick={this.nextSlide}>&#8250;</a>
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);


export default Carousel;