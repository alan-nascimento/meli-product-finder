import { Input, Button, Icon } from '@/components/atoms';

import { Form } from './search-form.styles';

const SearchForm = (): JSX.Element => (
  <Form>
    <Input name="search" placeholder="Search" value="" />
    <Button
      type="submit"
      icon={<Icon src="/icon-search@2x.png" alt="Search Icon" size={16} />}
    />
  </Form>
);

export default SearchForm;
