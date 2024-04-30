import { userParams } from 'react-router-dom';
import FormCiudad from '../../Components/FormCiudad';

const Edit = () =>{
    const {id} = userParams();
    return (
        <FormCiudad id={id} tittle='Edit Ciudad'></FormCiudad>
    )     
}

export default Edit