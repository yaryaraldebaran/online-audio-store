import { sumBy } from 'lodash';
import React, { Component } from 'react';
import { Badge, Button, Col, ListGroup, Row, Form } from 'react-bootstrap';
import { numberWithCommas } from '../utils/addDot';
import { titleCase } from '../utils/capitalizeLet';

export default class Hasil extends Component {
  minus = (value) => {
    value.harga += 100
  }
  plus = (value) => {
    console.log(value.harga);
  }
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4><strong>Hasil</strong></h4>
        <hr></hr>
        <Row>
          <Col xs={2}>
            <h6>Jumlah barang</h6>
          </Col>
          <Col>
            <h6 style={{ marginLeft: "0.6em" }}>Harga</h6>
          </Col>
          <Col>
            <h6>Total harga</h6>
          </Col>
        </Row>
        {
          keranjangs.length !== 0 && (
            <ListGroup variant='flush'>
              {keranjangs.map((menuKeranjang) => (
                <ListGroup.Item>
                  <Row>
                    <Col xs={2}>
                      <h4>
                        <Badge bg='dark'>
                          {menuKeranjang.jumlah}
                        </Badge>
                      </h4>
                    </Col>
                    <Col>
                      {titleCase(menuKeranjang.nama)}
                      <p>Rp. {numberWithCommas(menuKeranjang.harga)}</p>
                    </Col>
                    <Col>
                      <p>Rp. {numberWithCommas(menuKeranjang.totalHarga)}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}></Col>
                    <Col md={1}>
                      <Button variant='dark' onClick={() => this.minus(menuKeranjang)}><strong>-</strong></Button>
                    </Col>
                    <Col className='text-right' md="auto">{menuKeranjang.jumlah}</Col>
                    <Col ><Button variant='dark' onClick={() => this.plus(menuKeranjang)}><strong>+</strong></Button></Col>

                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )
        }
        <hr></hr>
        <Row>
          <p>Total pembayaran : Rp. {numberWithCommas(sumBy(keranjangs, (o) => { return o.totalHarga }))}</p>
        </Row>


        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
          </Form.Group>

        </Form>
        <hr></hr>
        <Button variant='dark'>Pesan</Button>
      </Col>
    );
  }
}
