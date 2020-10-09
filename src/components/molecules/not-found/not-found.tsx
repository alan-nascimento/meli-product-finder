import React, { memo } from 'react';

import { Icon, Typography } from '@/components/atoms';

import { Container } from './not-found.styles';

const NotFound: React.FC = () => (
  <Container>
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
  </Container>
);

export default memo(NotFound);
