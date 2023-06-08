import React from 'react'
import { Container, Row, Col, } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Invoice = () => {

    const totalQty = useSelector(state=>state.cart.totalQuantity)
    const totalAmount = useSelector(state=>state.cart.totalAmount)
    
    return (
        <Helmet title='Invoice'>
            <CommonSection title='Pesanan anda berhasil' />
            <section>
                <Container>
                    <Row>

                        <Col lg="8">
                            <h4 className='mb-4 fw-bold fs-4'>Terimakasih telah melakukan pemesanan</h4> 
                            <span>             
                            <h6> * Pesanan akan kami proses paling lama 2x24 jam setelah pembayaran </h6>
                            <h6> * Pembayaran dilakukan dengan metode transfer rekening bank </h6>
                            <h6> * Screenshoot halaman ini untuk konfirmasi pesanan </h6>
                            <h6> * Konfirmasi pesanan dan pembayaran dilakukan via Whatsapp </h6>
                            </span>                      
                        </Col>

                        <Col lg='4'>
                            <div className='checkout__cart'>
                                <h6>Total Pesanan Anda : <span>{totalQty} barang </span></h6>
                                <h6>Subtotal: <span>Rp {totalAmount}</span></h6>
                                <h6> 
                                    <span>
                                        Ongkos Kirim : <br />
                                        Gratis Ongkir
                                    </span>
                                    <span>Rp 0</span> 
                                </h6>

                                <h4>
                                    Total : <span>Rp {totalAmount}</span>
                                </h4>
                                <button className='buy__btn auth__btn w-100'><Link to='/home'>Beranda</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Invoice
