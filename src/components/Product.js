import React, { Component } from 'react';
import data from '../item-data.json';
import '../Product.css';
import Carousel from './Carousel';

class Product extends Component {
    render() {
        const info = data.CatalogEntryView[0];
        console.log(info);
        return (
            <div className="Main-product">
                <div className="Product-page">
                    <ProductView />
                    <ProductInfo />
                </div>
                <ReviewInfo />
            </div>
        );
    }
}

class ProductView extends Component {
    render() {
        const info = data.CatalogEntryView[0];
        return (
            <div className="Product-view">
                <h3> {info.title}</h3>
                <figure>
                    <img src={info.Images[0].PrimaryImage[0].image} alt="Blender" className="Primary-image"/>
                </figure>
                <Carousel/>
                
            </div>
        );
    }
}

class ProductInfo extends Component {
    render() {
        const info = data.CatalogEntryView[0];
        const descriptionList = info.ItemDescription[0].features.map((item, index) => {
            return ( <li key={ index }> {item} </li>)
        });
        console.log(descriptionList);
        return (
            <div className="product-info">
                <div className="price-details">
                    <h2>{info.Offers[0].OfferPrice[0].formattedPriceValue}</h2>
                    <span>{info.Offers[0].OfferPrice[0].priceQualifier}</span>
                </div>
                <div className="promotion-details">
                    <li>{info.Promotions[0].Description[0].shortDescription}</li>
                    <li>{info.Promotions[1].Description[0].shortDescription}</li>
                </div>

                <PurchaseInfo />

                <div className="product-details">
                    <h4>Product Highlights</h4>
                    <ul> {descriptionList} </ul>
                </div>
            </div>
        );
    }
}

class PurchaseInfo extends Component {
    constructor (props) {
		super(props);
		
		this.state = {
			count: 0
		};
		
		this.decrementCount = this.decrementCount.bind(this);
		this.incrementCount = this.incrementCount.bind(this);
    }
    
    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    decrementCount() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="purchase-details">
                <div className="counter">
                    <h3>quantity: </h3>
                    <button className="counterBtn" onClick={this.decrementCount}>-</button>
                    <h3 className="counterDisplay" >{this.state.count}</h3>
                    <button className="counterBtn" onClick={this.incrementCount}>+</button>
                </div>
                <div className="purchase-buttons">
                    <button className="storeBtn primary">PICK UP IN STORE</button>
                    <button className="cartBtn primary">ADD TO CART</button>
                </div>
                <div className="return-details">

                </div>
                <div className="share-buttons">
                    <button className="registryBtn secondary">ADD TO REGISTRY</button>
                    <button className="listBtn secondary">ADD TO LIST</button>
                    <button className="shareBtn secondary">ADD TO SHARE</button>
                </div>
            </div>
        );
    }
}

class ReviewInfo extends Component {
    render() {
        const info = data.CatalogEntryView[0];
        const totalReviews = info.CustomerReview[0].totalReviews;
        const proReview = info.CustomerReview[0].Pro[0];
        const conReview = info.CustomerReview[0].Con[0];
        return (
            <div className="Review-info">
                <div className="header-section">
                    <span>overall</span>
                    <a href="#" className="total-reviews">view all {totalReviews} reviews</a>
                </div>
                <div className="comments-section">
                    <div className="comments-head">
                        <div className="pro-head">
                            <h4>PRO</h4>
                            <span>most helpful 4-5 star review</span>
                        </div>
                        <div className="con-head">
                            <h4>CON</h4>
                            <span>most helpful 1-2 star review</span>
                        </div>
                    </div>
                    <div className="comments-body">
                        <div className="pro-body">
                            <h3>{proReview.title}</h3>
                            <p>{proReview.review}</p>
                        </div>
                        <div className="con-body">
                            <h3>{conReview.title}</h3>
                            <p>{conReview.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;