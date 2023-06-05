import { useState } from 'react'

const initialState = [
  {
    id: 1,
    hora: '05:00 - 06:00',
    lunes: 'Investigación II',
    martes: 'Arquitectura de software',
    miercoles: 'Métodos numéricos',
    jueves: '-------------',
    viernes: '-------------',
  },
  {
    id: 2,
    hora: '06:00 - 07:00',
    lunes: 'Arquitectura de software',
    martes: '-------------',
    miercoles: 'Cálculo integral',
    jueves: 'Física mecánica',
    viernes: '-------------',
  },
  {
    id: 3,
    hora: '07:00 - 08:00',
    lunes: 'Fundamentos de bases de datos',
    martes: 'Electiva disciplinar I',
    miercoles: '-------------',
    jueves: 'Investigación II',
    viernes: 'Métodos numéricos',
  },
  {
    id: 4,
    hora: '08:00 - 09:00',
    lunes: 'Electiva disciplinar I',
    martes: '-------------',
    miercoles: 'Investigación II',
    jueves: 'Cálculo integral',
    viernes: 'Arquitectura de software',
  },
]

export default function Ejercicio4() {
  /**
   * Declaración de variables en estados de react para cargar la tabla.
   */
  const [state] = useState(initialState)

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>4.</strong> Escribe un programa que muestre tu horario de clase mediante una tabla.
      </h3>

      <div className="flex flex-col gap-8 h-full items-center pt-4">
        <table>
          <thead>
            <tr>
              <th className='py-2 border border-slate-700'>Hora</th>
              <th className='py-2 border border-slate-700'>Lunes</th>
              <th className='py-2 border border-slate-700'>Martes</th>
              <th className='py-2 border border-slate-700'>Miércoles</th>
              <th className='py-2 border border-slate-700'>Jueves</th>
              <th className='py-2 border border-slate-700'>Viernes</th>
            </tr>
          </thead>
          <tbody className='bg-green-100 text-sm'>
            {state.map((item) => (
              <tr key={item.id}>
                <td className='p-2 border border-slate-700 text-center'>{item.hora}</td>
                <td className='p-2 border border-slate-700 text-center'>{item.lunes}</td>
                <td className='p-2 border border-slate-700 text-center'>{item.martes}</td>
                <td className='p-2 border border-slate-700 text-center'>{item.miercoles}</td>
                <td className='p-2 border border-slate-700 text-center'>{item.jueves}</td>
                <td className='p-2 border border-slate-700 text-center'>{item.viernes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
