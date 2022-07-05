import { createContext, useMemo, useReducer } from 'react';

const initial = {
  tours: [],
  tourGuides: [],
};

export const MockContext = createContext({});

const mockReducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'SET_TOURS': {
      newState.tours = [...action.payload];
    }
    case 'SET_TOUR_GUIDES': {
      newState.tourGuides = [...action.payload];
    }
    default:
      break;
  }
  return newState;
};

export const MockProvider = ({ children }) => {
  const [data, dispatch] = useReducer(mockReducer, initial);

  const memoized = useMemo(() => ({ data, dispatch }), [data, dispatch]);

  return (
    <MockContext.Provider value={memoized}>{children}</MockContext.Provider>
  );
};