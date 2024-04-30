import React, { useEffect, useState, useRef } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import DivAdd from '../../components/DivAdd';
import DivTable from '../../components/DivTable';
import DivSelect from '../../components/DivSelect';
import DivInput from '../../components/DivInput';
import Modal from '../../components/Modal';
import { confirmation, sendRequest } from '../../functions';

const Eventos = () => {
    const [eventos, setEventos] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [operation, setOperation] = useState('');
    const [title, setTitle] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [departments, setDepartments] = useState([]);
    const [classLoad, setClassLoad] = useState('');
    const [classTable, setClassTable] = useState('d-none');
    const [rows, setRows] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(0);
    const nameInput = useRef();
    const closeModal = useRef();
    let method = '';
    let url = '';
    let redir = '';
    useEffect(()=>{
      getEventos(1);
      getCiudades();
    },[]);
    const getEmpleados = async(page) => {
      const res = await sendRequest('GET','/api/eventos?page='+page,'');
      setEmpleados (res.data);
      setRows(res.total);
      setPageSize(res.per_page);
      setClassTable('');
    }
    const getCiudades = async() =>{
      const res = await sendRequest('Get','','/api/ciudades','');
      setCiudades(res);
    }
    const deleteEventos = (id,name) =>{ 
      confirmation (name, '/api/eventos/'+id, 'eventos');
    }
    const clear= () =>{
      setName('');
      setEmail('');
      setPhone('');
      setDepartmentId(1);
    }
    const openModal = (op,n,e,p,d,em) =>{
      clear();
      setTimeout( () => NameInput.current.focus(), 600);
      setOperation (op);
      setId(em);
      if (op == 1){
        setTitle('Create eventos');
      }
      else
        setTitle('Update eventos');
        setName('n');
        setEmail('e');
        setPhone('p');
        setDepartmentId(d);
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
        const form = {name: name, email: email, phone: phone, deparment_id: departmentId};
        const res = await sendRequest (method, form, url,'');
        if (method == 'PUT' && res.status == true){
          close.current.click();
        }
        if(res.status == true){
          clear();
          getEmployees (page);
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
        <button className='btn btn-dark' data-bs-toggle='modal'
        data-bs-target='#modalEmployees' onClick={()=>openModal(1)}>
          <i className='fa-solid fa-circle-plus'></i> Add
        </button>
      </DivAdd>
      <DivTable col='10' off= '1' classLoad={classLoad} classTable={classTable}>
        <table className="table table-border">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>EMAIL</th>
              <th>PHONE</th>
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