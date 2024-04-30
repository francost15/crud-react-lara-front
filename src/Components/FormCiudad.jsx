import React,{useEffect,useState,useRef} from 'react'
import {sendRequest, sendRequest} from '../functions';
import DivInput from './DivInput';

const formCiudad = () => {
    const [name, setName] = useState('');
    const NameInput = useRef();
    let method = 'POST';
    let url = '/api/ciudades';
    let redirect ='';
    useEffect( () =>{
        NameInput.current.focus();
        getCiudades();
    },[]);
    const getCiudades = async() =>{
        if(URLSearchParams.id !== null){
            const res = await sendRequest('GET','',(url+'/'+params.id));
            setName(res.data.name);
        }
    }
    const save = async(e) =>{
        e.preventDefault();
        if(params.id !== null){
            method= 'PUT';
            url = '/api/ciudades/'+params.id;
            redirect = '/';
        }
        const res = await sendRequest(method,{name:name},url,redirect);
        if(method == 'POST' && res.status == true){
            setName('');
        }
    }
  return (
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-md4 offset-md-4'>
                <div className='card border border-info'>
                    <div className='card-header bg-info border border-info'>
                        {params.tittle}
                    </div>
                    <div className='card-body'>
                        <form onSubmit={save}>
                            <DivInput type='text' icon='fa-building'
                            value={name} className='form-control'
                            placeholder='Name' required='required'
                            ref={NameInput}
                            handleChange={(e)=>setName(e.target.value)} />
                            <div className='d-grid col-10 mx-auto'>
                                <button className='btn btn-dark'>
                                    <i className='fa-solid fa-save'></i>
                                    Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default formCiudad