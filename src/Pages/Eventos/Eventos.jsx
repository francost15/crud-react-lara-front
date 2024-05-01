import { useEffect, useState, useRef } from 'react';
import { confirmation, sendRequest } from '../../functions';
import { Link } from 'react-router-dom';
import DivAdd from '../../Components/DivAdd';
import DivTable from '../../Components/DivTable';

const Eventos = () => {
    const [eventos, setEventos] = useState([]);
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha_inicio, setFecha_inicio] = useState('');
    const [fecha_fin, setFecha_fin] = useState('');
    const [operation, setOperation] = useState('');
    const [title, setTitle] = useState('');
    const [ciudadId, setCiudadId] = useState('');
    const [ciudades, setCiudades] = useState([]);
    const [classLoad, setClassLoad] = useState('');
    const [classTable, setClassTable] = useState('d-none');
    const [rows, setRows] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(0);
    const nameInput = useRef();
    const closeModal = useRef();
    let method = '';
    let url = '';
    useEffect(()=>{
      getEventos(1);
      getCiudades();
    },[]);
    const getEventos = async(page) => {
      const res = await sendRequest('GET','/api/eventos?page='+page,'');
      setEventos (res.data);
      setRows(res.total);
      setPageSize(res.per_page);
      setClassTable('');
    }
    const getCiudades = async() =>{
      const res = await sendRequest('GET','','/api/ciudades','');
      setCiudades(res);
    }
    const deleteEventos = (id,nombre) =>{ 
      confirmation (nombre, '/api/eventos/'+id, 'eventos');
    }
    const clear= () =>{
      setNombre('');
      setDescripcion('');
      setFecha_inicio('');
      setFecha_fin('');
      setCiudadId(1);
    }
    const openModal = (op,n,d,fi,ff,c,sc) =>{
      clear();
      setTimeout( () => NameInput.current.focus(), 600);
      setOperation (op);
      setId(sc);
      if (op == 1){
        setTitle('Create eventos');
      }
      else
        setTitle('Update eventos');
        setNombre('n');
        setDescripcion('d');
        setFecha_inicio('fi');
        setFecha_fin('ff');
        setCiudadId(c);
      }
      const save = async(e) =>{ 
        e.preventDefault(); 
        if (operation == 1){ 
          method = 'POST';
          url = '/api/eventos'
        }
        else{
          method = 'PUT';
          url = '/api/eventos/'+id;
        }
        const form = {nombre: nombre, descripcion: descripcion, fecha_inicio: fecha_inicio, fecha_fin: fecha_fin, ciudadId: ciudadId};
        const res = await sendRequest (method, form, url,'');
        if (method == 'PUT' && res.status == true){
          close.current.click();
        }
        if(res.status == true){
          clear();
          getEventos (page);
          setTimeout(() => NameInput.current.focus(),3000);
        }
      }
      const goPage = (p) =>{
        setPage(p);
        getEventos(p);
      }
    return (
      <div className="container mx-auto px-4">
      <DivAdd>
        <button className='bg-black mr-3 ' data-bs-toggle='modal'
        data-bs-target='#modalEventos' onClick={()=>openModal(1)}>
          <i className='fa-solid fa-circle-plus'></i> Add
        </button>
      </DivAdd>
      <DivTable col='10' off= '1' classLoad={classLoad} classTable={classTable}>
        <table className="table table-border">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>fecha_inicio</th>
              <th>fecha_fin</th>
              <th>Ciudades</th>
            </tr>
          </thead>
          <tbody>
            {ciudades.map((ciudad) => (
              <tr key={ciudad.id}>
                <td className="border px-6 py-4 text-center">{ciudad.nombre}</td>
                <td className="border px-6 py-4 text-center">
                  <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 mr-2">
                    <Link to='/editar'>Editar</Link>
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700" onClick={() => deleteCiudad(ciudad.id,ciudad.nombre)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DivTable>
    </div>
    )
}

export default Eventos