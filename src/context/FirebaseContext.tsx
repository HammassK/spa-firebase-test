import React, { createContext, useContext } from "react";
import { auth, db } from "../firebase/config";

const FirebaseContext = createContext({ auth, db });

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <FirebaseContext.Provider value={{ auth, db }}>
    {children}
  </FirebaseContext.Provider>
);
