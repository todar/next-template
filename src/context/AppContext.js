/**
 * This is a template for creating a simple state management system
 * using createContext and useReducer.
 *
 * @author Robert Todar <robert@roberttodar.com>
 * @license MIT
 * @property {Enum} types is an Enum containing the various calls to the dispatch.
 * @function useAppContext useTemplate is a custom hook for using [state, dispath] reducer.
 * @function AppProvider makes [state, dispatch] accessible to child components.
 */
import React, { createContext, useReducer } from "react";

/**  The starting state. This is used by createContext and useReducer. */
const defaultInitialState = {
  value: "Sample Context Demo!",
};

/**
 * An Enum containing the various calls to the dispatch.
 * @enum
 * @readonly
 * @property {string} SET_VALUE Sets payload.value to state.value.
 * @example dispatch({ type: types.SET_VALUE, payload: { value: 'Test' }})
 */
export const types = {
  /** Sets payload.value to state.value. */
  SET_VALUE: "SET_VALUE",
};

/**  This is the main reducer function that will be called from the provider. */
function reducer(state, action) {
  switch (action.type) {
    case types.SET_VALUE:
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      throw new Error(
        `reducer does not have the action type: ${action.type}`
      );
  }
}

/**
 * The main Context. Prefer to use the custom hook `useAppContext` instead.
 * @see useAppContext
 */
export const AppContext = createContext(defaultInitialState);

/** The provider will make accessible the [state, dispatch] from the reducer to all child components.  */
export const AppProvider = ({
  children,
  initialState = defaultInitialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook that prevents having to import both useContext & Context.
 * @example const [state, dispatch] = useAppContext();
 */
export const useAppContext = () => React.useContext(AppContext);

// Add any custom hooks below this section:
