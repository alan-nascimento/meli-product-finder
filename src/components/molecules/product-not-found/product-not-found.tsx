import React, { memo } from 'react';

import { Icon, Typography } from '@/components/atoms';

import { Container, NotFoundError } from './product-not-found.styles';

type Props = {
  type?: 'search';
};

const ProductNotFound: React.FC<Props> = ({ type }: Props) => (
  <Container data-testid="not-found-error">
    {type === 'search' ? (
      <>
        <Icon
          src="/not-found.svg"
          alt="Icono"
          title="No hay anuncios que coincidan con su búsqueda."
          size={80}
        />

        <div>
          <Typography variant="h5">
            No hay anuncios que coincidan con su búsqueda.
          </Typography>

          <ul>
            <li>
              <Typography>Revisa la ortografía de la palabra.</Typography>
            </li>
            <li>
              <Typography>
                Utilice palabras más genéricas o menos palabras.
              </Typography>
            </li>
          </ul>
        </div>
      </>
    ) : (
      <NotFoundError>
        <Typography variant="h5">Opss..</Typography>
        <Typography>Producto no encontrado.</Typography>
      </NotFoundError>
    )}
  </Container>
);

export default memo(ProductNotFound);
