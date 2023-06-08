import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import Invoice from '../pages/Invoice'


const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path='home' element={<Home/>}/>
        <Route path='home/:id' element={<ProductDetails/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route 
            path='checkout' 
            element={
                <ProtectedRoute>
                    <Checkout />
                </ProtectedRoute>
            }
        />
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='invoice' element={<Invoice/>}/>
    </Routes> 
};
export default Routers
