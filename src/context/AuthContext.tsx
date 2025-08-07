import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useState, useEffect } from "react";
import { app } from "firebaseApp";
import { on } from "events";

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext({ user: null as User | null});

export const AuthContextProvider = ({ children }: AuthProps) => {
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    //auth 상태가 변경되면 user를 업데이트
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user: currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

