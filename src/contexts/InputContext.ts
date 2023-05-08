import {Dispatch, SetStateAction, createContext} from 'react';

type InputType = {
  setFocus: Dispatch<
    SetStateAction<{
      inputFocus: boolean;
      micFocus: boolean;
    }>
  >;
  focus: {
    inputFocus: boolean;
    micFocus: boolean;
  };
};

const InputContext = createContext<InputType>({
  setFocus: () => {},
  focus: {
    inputFocus: false,
    micFocus: false,
  },
});

export default InputContext;
