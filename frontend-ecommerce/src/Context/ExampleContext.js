import { createContext, useReducer, useState } from "react";

export const ExampleContext = createContext();

export const ExampleContextProvider = ({children})=>{
    const [INITIATL_STATE, setInitalState] = useState(false);
    
    const ExampleReducer = (state, action)=>{
        if(action.type === "ON"){
            if(INITIATL_STATE === false) setInitalState(true);
        }else{
            if(INITIATL_STATE === true) setInitalState(false);
        }
    }


    const [state, dispatch] = useReducer(ExampleReducer, INITIATL_STATE);

    return(
        <ExampleContext.Provider value={{value:state, dispatchExample: dispatch}} >
                {children}
        </ExampleContext.Provider>
    )

}