import React, { useReducer } from "react";

import Context from "./Contextt";

function Provider({ children }) {

    const [state, dispatch] = useReducer()

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;