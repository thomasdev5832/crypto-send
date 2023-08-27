import React, { createContext } from "react";

export const DetailsContext = createContext();

const DetailsProvider = () => {
  return (
    <DetailsContext.Provider>

    </DetailsContext.Provider>
  )
};

export default DetailsProvider;