import {Route, Routes } from 'react-router-dom'

import {NewMovie} from "../pages/NewMovie"
import {Home} from "../pages/Home"
import {Details} from "../pages/Details"
import {Perfil} from "../pages/Perfil"


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewMovie />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}
