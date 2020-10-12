import { http } from '@/services';
import { ProductList } from '@/store/ducks/search/types';

const search = async (query: string): Promise<ProductList> => {
  if (!query) return null;

  const { data } = await http.get('/api/items', { params: { search: query } });

  return data;
};

export default search;
