import {BookmarkContextProvider} from '@contexts';
import {Navigator} from '@routes';
import {IS_ANDROID} from '@utils';
import toastConfig from '@utils/toast';
import React from 'react';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <BookmarkContextProvider>
      <Navigator />
      <Toast
        config={toastConfig}
        position={IS_ANDROID ? 'bottom' : 'top'}
        autoHide
        onPress={() => Toast.hide()}
        visibilityTime={3000}
        topOffset={IS_ANDROID ? undefined : -20}
        bottomOffset={IS_ANDROID ? 0 : undefined}
      />
    </BookmarkContextProvider>
  );
};

export default App;
