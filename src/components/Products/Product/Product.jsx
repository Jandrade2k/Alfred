import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ produto, addBandeija }) => {
  const classes = useStyles();

  const handleAddBandeija = () => addBandeija(produto.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={produto.media.source} title={produto.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {produto.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${produto.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: produto.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddBandeija}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

