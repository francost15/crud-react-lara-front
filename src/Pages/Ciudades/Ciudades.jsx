import { useEffect, useState } from "react"
import { confirmation, sendRequest } from "../../functions"
import DivAdd from "../../Components/DivAdd"
import { Link } from "react-router-dom"
import { DivTable } from "../../Components"

export const Ciudades = () => {
  const [ciudades, setCiudades] = useState([])
  const [classLoad, setClassLoad] = useState('')
  const [classTable, setClassTable] = useState('d-none')
  useEffect(() => {
    getCiudades();
  }, []);
  const getCiudades = async() =>{
    const res = await sendRequest('GET',{},'/api/ciudades');
    setCiudades(res);
    setClassTable('');
    setClassLoad('d-none');
  }
  const deleteCiudad = (id,name) => {
    confirmation(name,('/api/ciudades/'+id,'/'));
  }
  
  return (
    <div className="container mx-auto px-4">
      <DivAdd>
        <button className="mt-3 bg-black text-white p-2 rounded-lg hover:bg-gray-700">
          <Link to='/add'></Link>Añadir
        </button>
      </DivAdd>
      <DivTable col='6' off= '3' classLoad={classLoad} classTable={classTable}>
        <table className="w-full mx-auto mt-6">
          <thead>
            <tr>
              <th className="border px-6 py-4 text-center">#</th>
              <th className="border px-6 py-4 text-center">Nombre</th>
              <th className="border px-6 py-4 text-center"></th>
              <th className="border px-6 py-4 text-center"></th>
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
