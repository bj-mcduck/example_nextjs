import React from "react";
import Product from './product';
import { Card } from 'semantic-ui-react';

export default class ProductsComponent extends React.Component {
  componentDidMount() {
    const fetchProducts = async () => {
      const response = await fetch("//localhost:3000/v1/products");
      const { products } = await response.json();
      this.setState({ products });
    }

    fetchProducts();
  }

  render() {
    return (
      <Card.Group>
        {this.state?.products.map(product => {
          return <Product key={product.id} product={product} />
        })}
      </Card.Group>
    );
  }
}
