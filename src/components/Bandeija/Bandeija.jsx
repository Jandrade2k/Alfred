import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Item from './Item/Item';
import useStyles from './Bandeija';

const Bandeija = ({ bandeija, onAlteraBandeijaQtd, onLimparBandeija, onBandeijaVazia }) => {
  const estilo = useStyles();

  const handleBandeijaVazia = () => onBandeijaVazia();

  const bandeijaVazia = () => (
    <Typography variant="subtitle1">Ops!Parece que sua bandeija está vazia,
      <Link className={estilo.link} to="/">comece adicionando coisas</Link>!
    </Typography>
  );

  if (!bandeija.line_items) return 'Carregando...';

  const bandeijaPadrao = () => (
    <>
      <Grid container spacing={3}>
        {bandeija.line_items.map((e) => (
          <Grid item xs={12} sm={4} key={e.id}>
            <Item item={e} onAlteraBandeijaQtd={onAlteraBandeijaQtd} onLimparBandeija={onLimparBandeija} />
          </Grid>
        ))}
      </Grid>
      <div className={estilo.cardDetails}>
        <Typography variant="h4">Subtotal: {bandeija.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={estilo.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleBandeijaVazia}>Bandeija Vazia</Button>
          <Button className={estilo.checkoutButton} size="large" type="button" variant="contained" color="primary">Comprar</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={estilo.toolbar} />
      <Typography className={estilo.title} variant="h3" gutterBottom>Sua Bandeija de compras</Typography>
      { !bandeija.line_items.length ? bandeijaVazia() : bandeijaPadrao() }
    </Container>
  );
};

export default Bandeija;
