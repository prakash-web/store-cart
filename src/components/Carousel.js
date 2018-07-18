import React, { Component } from 'react';
import data from '../item-data.json';
import '../Product.css';

// class Carousel extends Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//     }
//     render() {
    
    //         // return (
        //         //     <div className="carousel-container">
        //         //         <button>Previous</button>
        //         //         <div><img className="mini-images" src={info.Images[0].AlternateImages} /></div>
        //         //         <button>Next</button>
        //         //     </div>
        //         // );
        
        //         const { title, children } = this.props
        
        //         return (
            //         <div>
            //             <h2>{ title }</h2>
            //             { children }
            //         </div>
            //         )
            //     }
            // }
            
            
const images = data.CatalogEntryView[0].Images[0].AlternateImages;
let imgUrls = [];

images.map(item => {
    // console.log(item.image);
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
				{/* <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" /> */}
                <a href="#" className="slide-arrow" onClick={this.previousSlide}>&#8249;</a>
				{/* <ImageSlide url={ imgUrls[this.state.currentImageIndex] } /> */}
                <div className="images-container">
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex]} />
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex + 1]} />
                    <img className="mini-images" src= {imgUrls[this.state.currentImageIndex + 2]} />
                </div>
                <a href="#" className="slide-arrow" onClick={this.nextSlide}>&#8250;</a>
				{/* <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" /> */}
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

// const ImageSlide = ({ url }) => {
// 	const styles = {
// 		backgroundImage: `url(${url})`,
// 		backgroundSize: '200px',
// 		backgroundPosition: 'center'
// 	};
	
// 	return (
// 		<div className="image-slide" style={styles}></div>
// 	);
// }


export default Carousel;