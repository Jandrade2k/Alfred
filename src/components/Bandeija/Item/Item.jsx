import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const Item = ({ item, addBandeija, delBandeija }) => {
  const estilo = useStyles();

  const handleBandeijaQtd = (itemId, novoValor) => addBandeija(itemId, novoValor);

  const handleLimparBandeija = (itemId) => delBandeija(itemId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} className={estilo.media} />
      <CardContent className={estilo.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={estilo.cardActions}>
        <div className={estilo.buttons}>
          <Button type="button" size="small" onClick={() => handleBandeijaQtd(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleBandeijaQtd(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleLimparBandeija(item.id)}>Remover</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
