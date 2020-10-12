import { http } from '@/services';
import { ProductDetail } from '@/store/ducks/search/types';

export const getProduct = async (id: string): Promise<ProductDetail> => {
  if (!id) return null;

  const { data } = await http.get(`/api/items/${id}`);

  return data;
};
