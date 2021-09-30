import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product';

const Produtos = [
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
  { id: 1, nome: 'Sanduba Loko', price: 19.99, image: 'https://i.pinimg.com/originals/16/f9/30/16f930f77df63839cafce90fde848929.jpg', description: 'Sanduba tão loko que não pode ser descrito.' },
]

const ProductGrid = () => {
  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {
          Produtos.map((produto) => {
            <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={produto} />
            </Grid>
          })
        }
      </Grid>
    </div>
  );
}

export default ProductGrid;
