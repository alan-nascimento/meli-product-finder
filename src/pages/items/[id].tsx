import { useRouter } from 'next/router';

import { DefaultTemplate } from '@/templates';

export default function Product(): JSX.Element {
  const router = useRouter();

  return (
    <DefaultTemplate>
      <h1>{router.query.id}</h1>
    </DefaultTemplate>
  );
}
