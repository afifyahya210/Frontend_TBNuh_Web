import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <Helmet title="Cart">
            <CommonSection title="Keranjang Belanja" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length===0 ? (
                                <h2 className='fs-4 text-center'>Tidak ada barang di keranjang</h2> 
                                ):(
                                    <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th>Gambar</th>
                                        <th>Nama barang</th>
                                        <th>Harga</th>
                                        <th>Jumlah</th>
                                        <th>Hapus</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        cartItems.map((item,index)=>(
                                            <Tr item={item} key={index} />                                        
                                        ))
                                    }
                                </tbody>
                            </table>
                                )
                            }

                        </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                                <span className='product__price' style={{ fontWeight: 'bold' }}>Rp {totalAmount.toLocaleString('id-ID')}</span>

                                </h6>
                            </div>

                            <p className='fs-6 mt-2'>pajak dan ongkos kirim akan diakumulasi ketika Checkout</p>
                            
                            <div>
                                <button className='buy__btn w-100'><Link to='/checkout'>Checkout</Link></button>
                                <button className='buy__btn w-100 mt-3'><Link to='/shop'>Lanjut Belanja</Link></button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({item})=>{

    const dispatch = useDispatch()

    const deleteProduct = ()=>{
        dispatch(cartActions.deleteItem(item.id))
    }

    return (
        <tr >
            <td><img src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td className='product__price fs-6 mt-2'>Rp {item.price.toLocaleString('id-ID')}</td>
            <td>{item.quantity}pcs</td>
            <td><motion.i 
                whileTap={{ scale: 1.2 }}
                onClick={deleteProduct}
                class="ri-delete-bin-line">
                </motion.i></td>
        </tr>
    )
}

export default Cart
