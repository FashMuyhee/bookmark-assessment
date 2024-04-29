import {Service} from '@utils';

export interface IBookmarkContext {
  bookmarks: Service[];
  onToggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}
