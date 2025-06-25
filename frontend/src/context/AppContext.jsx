// import { createContext } from "react";
// import { doctors } from "../assets/assets";

// export const AppContext = createContext()

// const AppContextProvider = () => {



//     const value = {
//         doctors

//     }
//     return(
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export default AppContextProvider


import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const currencySymbol = 'Rs.'

  const value = {
    doctors,currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
