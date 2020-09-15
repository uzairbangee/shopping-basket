import React, { Fragment, useState } from 'react'
import "./header.css";
import logo from "./../../images/logo.svg";
import logoIcon from "./../../images/icon.png";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    paperAnchorRight: {
        top: '60px',
        width: '320px'
    },
    icon_back: {
        display: 'none',
        cursor: 'pointer'
    },
    [theme.breakpoints.down('xs')]: {
        paperAnchorRight: {
            width: '100%'
        },
        icon_back: {
            display: 'block',
            cursor: 'pointer'
        }
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const openDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div className="main__header">
                <div className="inner__section">
                    <div className="logo__box">
                        <img src={logo} className="logo" alt="logo"/>
                        <img src={logoIcon} className="logo_icon" alt="logo"/>
                    </div>

                    <form className="input__area">
                        <button className="selectBar">
                            <span className="select_button_in"><ArrowDropDownIcon/></span>
                        </button>
                        <input className="search" type="text" placeholder="Search Walmart"/>
                        <button className="searchButton">
                            <span className="search_button_in"><SearchIcon/></span>
                        </button>
                    </form>

                    <div className="account__infos">
                        <div className="account_box no_mobile">
                            <span className="icons">
                                <img alt="person" src="https://i5.walmartimages.com/dfw/63fd9f59-e6fd/58bc58d4-79e6-4302-b5f4-9d7f0eef1508/v1/user-nav-white.487755544c4763ca6d9aa9c165e93fe6aba79542.svg" width="24" height="24" />
                            </span>
                            <span className="header__text">Sign in</span>
                        </div>
                        <div className="account_box no_mobile">
                            <span className="icons">
                                <img alt="return" src="https://i5.walmartimages.com/dfw/63fd9f59-392b/48a699e6-5299-4b55-8895-28b7af730df3/v1/easyreorder-white.2dd182909686a6375f21a1a3a0c8a34ae845667c.svg" width="24" height="24" />
                            </span>
                            <span className="header__text">Favorites</span>
                        </div>
                        <div className="account_box" onClick={openDrawer}>
                            <span className="icons">
                                <img alt="cart" src="https://i5.walmartimages.com/dfw/63fd9f59-392b/48a699e6-5299-4b55-8895-28b7af730df3/v1/cart-nav-white.00018279d92b8685ff0d50c146eefe5491200c0b.svg" width="24" height="24" />
                            </span>
                            <div className="cart__count">
                                1
                            </div>
                        </div>
                    </div>
                </div>

                <SwipeableDrawer
                    anchor={'right'}
                    open={open}
                    onClose={closeDrawer}
                    onOpen={openDrawer}
                    classes={{ paperAnchorRight: classes.paperAnchorRight}}
                    >
                        <div className="sidebar__full">
                            <header className="sidebar__header">
                                <ArrowBackIosIcon className={classes.icon_back} onClick={closeDrawer}/>
                                <span>Cart</span>
                                <span>0 items</span>
                            </header>
                            <div className="cart__box">
                                <div className="cart_empty_box">
                                    <span>Your cart is currenty empty</span>
                                </div>
                            </div>
                            <footer className="sidecart__footer">
                                <div className="footer__inner">
                                    <div className="total__price_bar">
                                        <span className="subtotal_heading">Subtotal</span>
                                        <span className="subtotal_amount">$0.00</span>
                                    </div>
                                    <button className="checkout_cart_button">Check out</button>
                                </div>
                            </footer>
                        </div>
                </SwipeableDrawer>
            </div>
        </Fragment>
    )
}

export default Header;