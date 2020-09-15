import React, {Fragment} from 'react';
import './home.css';
import CarouselSlider from './../../components/Carousel/CarouselSlider';
import product2 from "./../../images/product2.jpeg";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function Home() {
  return (
    <Fragment>
      <div className="section">
        <CarouselSlider/>
        <div className="product_bars">
            <div className="slider-frame">

                <div className="single__product">
                    <div className="product__inner">
                        <div className="favorite__area">
                            <button className="fav__button">
                                <FavoriteBorderOutlinedIcon/>
                            </button>
                        </div>
                        <a className="image__area">
                            <div className="image__box">
                                <img src={product2} alt="" className="product__image"/>
                            </div>
                        </a>
                        <div className="product__info_area">
                            <div className="product__price">$11.86</div>
                            <a className="product__title">
                                <span className="title">Pecan smoked Chicken Wings (Frozen)</span>
                            </a>
                            <div className="product__extra_info">Final cost by weight</div>
                        </div>

                        <div className="button__area">
                            <button className="add_to_cart">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="single__product">
                    <div className="product__inner">
                        <div className="favorite__area">
                            <button className="fav__button">
                                <FavoriteBorderOutlinedIcon/>
                            </button>
                        </div>
                        <a className="image__area">
                            <div className="image__box">
                                <img src={product2} alt="" className="product__image"/>
                            </div>
                        </a>
                        <div className="product__info_area">
                            <div className="product__price">$11.86</div>
                            <a className="product__title">
                                <span className="title">Pecan smoked Chicken Wings (Frozen)</span>
                            </a>
                            <div className="product__extra_info">Final cost by weight</div>
                        </div>

                        <div className="button__area">
                            <button className="add_to_cart">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="single__product">
                    <div className="product__inner">
                        <div className="favorite__area">
                            <button className="fav__button">
                                <FavoriteBorderOutlinedIcon/>
                            </button>
                        </div>
                        <a className="image__area">
                            <div className="image__box">
                                <img src={product2} alt="" className="product__image"/>
                            </div>
                        </a>
                        <div className="product__info_area">
                            <div className="product__price">$11.86</div>
                            <a className="product__title">
                                <span className="title">Pecan smoked Chicken Wings (Frozen)</span>
                            </a>
                            <div className="product__extra_info">Final cost by weight</div>
                        </div>

                        <div className="button__area">
                            <button className="add_to_cart">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="single__product">
                    <div className="product__inner">
                        <div className="favorite__area">
                            <button className="fav__button">
                                <FavoriteBorderOutlinedIcon/>
                            </button>
                        </div>
                        <a className="image__area">
                            <div className="image__box">
                                <img src={product2} alt="" className="product__image"/>
                            </div>
                        </a>
                        <div className="product__info_area">
                            <div className="product__price">$11.86</div>
                            <a className="product__title">
                                <span className="title">Pecan smoked Chicken Wings (Frozen)</span>
                            </a>
                            <div className="product__extra_info">Final cost by weight</div>
                        </div>

                        <div className="button__area">
                            <button className="add_to_cart">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
