import { http } from '@/services';

const getProduct = async (id: string): Promise<any> => {
  const { data } = await http.get(`/api/items/${id}`);

  return data;
};

export default getProduct;
