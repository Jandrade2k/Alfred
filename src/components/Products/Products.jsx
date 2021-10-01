import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ produtos, addBandeija }) => {
  const classes = useStyles();

  if (!produtos.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {produtos.map((produto) => (
          <Grid key={produto.id} item xs={12} sm={6} md={4} lg={3}>
            <Product produto={produto} addBandeija={addBandeija} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

