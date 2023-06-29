import { createContext, useContext, useState, useEffect } from "react";
import {api} from "../services/api"

const AuthContext = createContext({})

export function AuthProvider({children}){

}


export function useAuth(){
    const context = useContext(AuthContext)

    return context
}