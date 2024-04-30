import {Service} from '@utils';
import React, {useState} from 'react';

type Params = {
  data: Service[];
  category: string;
};

const useFilterService = ({category, data}: Params) => {
  const [filtered, setFiltered] = useState(data);

  const onFilter = () => {
    if (category == 'all') {
      setFiltered(data);
      return;
    }
    const filtered = data.filter(item => item.category === category);
    setFiltered(filtered);
  };

  React.useEffect(() => {
    onFilter();
  }, [category]);

  return {filtered};
};

export default useFilterService;
