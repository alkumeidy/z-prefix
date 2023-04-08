import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
   loggedIn: false,
   user: {} 
  });

export {useGlobalState, setGlobalState};