import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './ProductStyles';

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product?.image} title={product?.nome} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product?.nome}
          </Typography>
          <Typography variant="h5">
            {product?.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions disabeSpacing clasName={classes.cardActions}>
        {/* FIXME: Adicionar a bandeija. (trocadilho Alfred) */}
        <IconButton aria-label="Adicionar ao Carrinho">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
