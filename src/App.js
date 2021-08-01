import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './pages/Home'
import Navigation from "./components/Navigation"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Singleproducts from './pages/Singleproducts'
import { CartContext } from "./CartContext"
import {useState,useEffect } from 'react'
import { getCart,storeCart } from "./helper"
const App = () => {
const [cart,setCart] =  useState({})

useEffect(()=>{
    getCart().then(cart=>{
        setCart(JSON.parse(cart))
    })
},[])

useEffect(()=>{
    storeCart(cart);
},[cart])

    return (
        <Router>
            <CartContext.Provider value={{cart,setCart}}>
                <Navigation/>
                <Switch>
                    <Route exact={true} path="/" component={Home}></Route>
                    <Route path="/products" exact component={Products}></Route>
                    <Route path="/products/:id" exact component={Singleproducts}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </CartContext.Provider>
        </Router>
    )
}

export default App
