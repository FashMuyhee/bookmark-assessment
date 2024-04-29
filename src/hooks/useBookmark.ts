import {BookmarkContext} from '@contexts';
import {useContext} from 'react';

export const useBookmark = () => {
  return useContext(BookmarkContext);
};
