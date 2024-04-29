import React, {createContext} from 'react';
import {IBookmarkContext} from './type';
import {discoveredServices, recommendedServices, Service} from '@utils';
import Toast from 'react-native-toast-message';

const initialState: IBookmarkContext = {
  bookmarks: [],
  onToggleBookmark: () => {},
  isBookmarked: () => false,
};

export const BookmarkContext = createContext<IBookmarkContext>(initialState);

export const BookmarkContextProvider = ({children}: {children: React.ReactNode}) => {
  const [bookmarks, setBookmarks] = React.useState<Service[]>([]);

  const onToggleBookmark = (id: string) => {
    if (isBookmarked(id)) {
      setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
      Toast.show({text1: 'Removed from bookmark', type: 'success'});
    } else {
      const item = [...recommendedServices, ...discoveredServices].find(item => item.id === id);
      if (item) {
        setBookmarks([...bookmarks, item]);
        Toast.show({text1: 'Bookmarked', type: 'success'});
      }
    }
  };

  const isBookmarked = (id: string) => {
    return !!bookmarks.find(bookmark => bookmark.id === id);
  };

  return <BookmarkContext.Provider value={{bookmarks, onToggleBookmark, isBookmarked}}>{children}</BookmarkContext.Provider>;
};
