import React from 'react';

import { Image } from './icon.styles';

type Props = {
  src: string;
  alt: string;
  size: number;
};

const Icon: React.FC<Props> = ({ src, alt, size }: Props) => (
  <Image src={src} alt={alt} size={size} />
);

export default Icon;
