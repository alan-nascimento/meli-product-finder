import { http } from '@/services';
import { ProductDetail } from '@/store/ducks/search/types';

const getProduct = async (id: string): Promise<ProductDetail> => {
  if (!id) return null;

  const { data } = await http.get(`/api/items/${id}`);

  return data;
};

export default getProduct;
