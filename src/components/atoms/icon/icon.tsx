import React, { memo } from 'react';

import { Image } from './icon.styles';

type Props = {
  src: string;
  alt: string;
  size: number;
  title: string;
};

const Icon: React.FC<Props> = ({ src, alt, size, title }: Props) => (
  <Image src={src} alt={alt} size={size} title={title} />
);

export default memo(Icon);
