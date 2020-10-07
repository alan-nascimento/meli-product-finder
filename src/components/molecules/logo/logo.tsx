import React from 'react';
import Link from 'next/link';

import { Icon } from '@/components/atoms';

import { Container } from './logo.styles';

const Logo: React.FC = () => (
  <Container>
    <Link href="/">
      <Icon src="/logo@2x.png" alt="Logo" size={36} />
    </Link>
  </Container>
);

export default Logo;
