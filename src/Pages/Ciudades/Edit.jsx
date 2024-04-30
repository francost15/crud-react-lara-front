import React from "react";
import { userParams } from 'react-router-dom';
import formCiudad from "../../Components/formCiudad";

const Edit = () =>{
    const {id} = userParams();
    return (
        <formCiudad id={id} tittle='Edit Ciudad'></formCiudad>
    )     
}

export default Edit