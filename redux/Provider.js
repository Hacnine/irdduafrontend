"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
