import { Dropdown } from '@wirecore/wirestyle';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Dropdown
        data={[{ title: 'Item 1', Item1: 'Item1' }]}
        selectedValue={{ title: 'Item 1', Item1: 'Item1' }}
      />
    </div>
  );
};

export default Home;
