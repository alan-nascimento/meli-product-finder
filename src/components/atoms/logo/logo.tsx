import React, { memo } from 'react';
import Link from 'next/link';

import { Icon } from '@/components/atoms';

import { Figure } from './logo.styles';

const Logo: React.FC = () => (
  <Link href="/">
    <Figure>
      <Icon
        src="/logo@2x.png"
        alt="Mercado Libre"
        title="Mercado Libre"
        size={36}
      />
    </Figure>
  </Link>
);

export default memo(Logo);
