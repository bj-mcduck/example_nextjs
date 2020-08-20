import React from "react";
import { Card, Icon, Label } from 'semantic-ui-react';

export default class ProductComponent extends React.Component {
  render() {
    const product = this.props.product;
    const productPrice = product.price;
    let metaHtml = <Label color="olive">${productPrice}</Label>;
    let promoDescription = '';
    const promotion = product.promotions[0];

    if (promotion) {
      const salePrice = (productPrice * promotion.discount).toFixed(2);
      const savings = (productPrice - salePrice).toFixed(2);
      metaHtml = <div>
          <Label color="green"><Icon name="dollar sign" />{salePrice}</Label>
          <Label color="red"><strike><Icon name="dollar sign" />{productPrice}</strike></Label>
        </div>;
      promoDescription = <div>
          Save ${savings} with
          <Label color="blue"><Icon name="hashtag" />{promotion.code}</Label>
        </div>;
    }

    return (
      <div className="product">
        <Card>
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Meta>
              {metaHtml}
            </Card.Meta>
            <Card.Description>
              Found in: {product.department.name}
              {promoDescription}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
