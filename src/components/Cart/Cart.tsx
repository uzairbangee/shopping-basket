import React, { ReactElement, Fragment, useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux"
import {RootState} from "./../../store";
import "./cart.css";

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

interface Props {
    open: boolean,
    openDrawer: ( ) => void,
    closeDrawer: ( ) => void,
} 

const Cart = ({open, openDrawer, closeDrawer}: Props): ReactElement => {
    const classes = useStyles();
    const cart = useSelector((state: RootState) => state.cart);
    return (
        <Fragment>
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
                            {
                                cart.length > 0 
                                ?
                                <div className="cart__item">
                                    <div className="cart__item_box">
                                        <span className="cart_image__area">
                                            <div className="cart_image">
                                                <img src="" className="cart__image"/>
                                            </div>
                                        </span>
                                        <div className="cart__info__box">
                                            <span className="cart__product_title">jfghf hgfghfgf</span>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="cart_empty_box">
                                    <span>Your cart is currenty empty</span>
                                </div>
                            }
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
        </Fragment>
    )
}

export default Cart;