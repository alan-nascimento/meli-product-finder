import React, { memo } from 'react';
import Link from 'next/link';

import { Icon } from '@/components/atoms';

import { Figure } from './logo.styles';

const Logo: React.FC = () => (
  <Figure>
    <Link href="/">
      <Icon src="/logo@2x.png" alt="Logo" size={36} />
    </Link>
  </Figure>
);

export default memo(Logo);
