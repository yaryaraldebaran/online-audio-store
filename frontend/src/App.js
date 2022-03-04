import logo from './logo.svg';
import { Hasil, Kategori, NavbarComp, Products } from './components/index'
import { Col, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from './utils/constants';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      choosenCategory: "Headphones",
      keranjangs: []
    }
  }

  componentDidMount() {
    axios.get(API_URL + "/productByCategory/" + this.state.choosenCategory)
      .then(res => {
        const products = res.data;
        this.setState({ products })
      })
      .catch(error => {
        console.log(error);
      })
  }
  changeCategory = (value) => {
    this.setState({
      choosenCategory: value,
      products: []
    })
    axios.get(API_URL + "/productByCategory/" + value)
      .then(res => {
        const products = res.data;
        this.setState({ products })
      })
      .catch(error => {
        console.log(error);
      })
  }
  addToCart = (value) => {
    const pesananProduk = {
      jumlah: 1,
      nama: value.productName,
      harga: value.price,
      totalHarga : value.price
    }
    
    const index = this.state.keranjangs.findIndex(object => {
      return object.nama === value.productName;
    })
    if (index === -1) {
      this.state.keranjangs.push(pesananProduk)
    }
    else { 
      this.state.keranjangs[index].jumlah += 1;
      this.state.keranjangs[index].totalHarga += this.state.keranjangs[index].harga;
    }

    this.setState({ keranjangs: this.state.keranjangs });
    
  }
  render() {
    const { products, choosenCategory, keranjangs } = this.state
    return (
      <div className="App">
        <NavbarComp />
        <div className='mt-3'>
          <Container fluid>
            <Row>
              <Kategori changeCategory={this.changeCategory} choosenCategory={choosenCategory} />
              <Col>
                <h4><strong>Daftar produk</strong></h4>
                <hr />
                <Row>
                  {products && products.map((product) => (
                    <Products
                      key={product.idProducts}
                      product={product}
                      addToCart={this.addToCart}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil
              keranjangs={keranjangs}
              />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
