import { http } from '@/services';

const search = async (query: string): Promise<any> => {
  const { data } = await http.get('/items', { params: { search: query } });

  return data;
};

export default search;
