import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const check = 'auth provider is working'

    const authInfo={check}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;