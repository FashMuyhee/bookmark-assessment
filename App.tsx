import {BookmarkContextProvider} from '@contexts';
import {Navigator} from '@routes';
import React from 'react';

const App = () => {
  return (
    <BookmarkContextProvider>
      <Navigator />
    </BookmarkContextProvider>
  );
};

export default App;
