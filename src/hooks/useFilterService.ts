import {Service} from '@utils';
import React, {useState} from 'react';

type Params = {
  data: Service[];
  category: string;
};

const useFilterService = ({category, data}: Params) => {
  const [filtered, setFiltered] = useState(data);

  const onFilter = React.useCallback(() => {
    if (category == 'all') {
      setFiltered(data);
      return;
    }
    const filtered = data.filter(item => item.category === category);
    setFiltered(filtered);
  }, [category, data]);

  React.useEffect(() => {
    onFilter();
  }, [category, data]);

  return {filtered};
};

export default useFilterService;
