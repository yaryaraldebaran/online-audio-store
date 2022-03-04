import { Col } from 'react-bootstrap'
import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../utils/constants'
export default class Kategori extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            choosenCategory : "Headphones"
        }
    }
    componentDidMount() {
        axios.get(API_URL + '/getCategories')
            .then(res => {
                const categories = res.data;
                this.setState({ categories })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const { categories } = this.state;
        const {changeCategory, choosenCategory}=this.props;
        // console.log(categories);
        return (

            <Col md={2} mt="2">
                <h4><strong>Kategori</strong></h4><hr />
                <ListGroup>
                    {categories && categories.map((category) => (
                        <ListGroup.Item 
                        onClick={()=>changeCategory(category.category)}>{category.category}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>

        )
    }
}
