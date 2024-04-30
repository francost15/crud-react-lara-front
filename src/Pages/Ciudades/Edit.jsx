import { useParams } from 'react-router-dom';
import FormCiudad from '../../Components/FormCiudad';

const Edit = () => {
    const { id } = useParams();
    return (
        <FormCiudad id={id} tittle='Edit Ciudad'></FormCiudad>
    )     
}

export default Edit;