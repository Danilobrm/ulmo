import {Dispatch, SetStateAction, createContext} from 'react';

type SearchModalType = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const SearchModalContext = createContext<SearchModalType>({
  modalVisible: false,
  setModalVisible: () => {},
});

export default SearchModalContext;
