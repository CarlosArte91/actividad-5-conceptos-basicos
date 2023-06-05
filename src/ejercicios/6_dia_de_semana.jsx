import { useState } from 'react'

const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export default function Ejercicio6() {
  /**
   * Declaración de variables en estados de react para capturar los inputs.
   */
  const [state, setState] = useState('')

  const currentDay = new Date()

  /**
   * Manejador del evento para convertir la fecha
   */
  const handleDate = () => {
    const diaDeSemana = dias[currentDay.getDay()]
    const diaDelMes = currentDay.getDate()
    const mes = meses[currentDay.getMonth()]

    setState(`${diaDeSemana} ${diaDelMes} de ${mes}`)
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>6.</strong> Una empresa española de servicios tiene un pequeño problema, quiere que indiquemos en
        su página de inicio el día de la semana, tarea sencilla de no ser porque el servidor nos
        proporciona el día en inglés mediante la función date().
      </h3>

      <section className='flex flex-row gap-12 justify-center'>
        <div className="flex flex-col gap-8 h-full items-center pt-4 w-5/12">
          <p className='font-semibold text-lg'>
            Fecha del servidor
          </p>

          <span className="bg-blue-200 px-8 py-4 rounded-md w-4/5 text-center text-lg">
            {<p>{currentDay.toString()}</p>}
          </span>

          <button
            className='bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 rounded-lg cursor-pointer'
            onClick={handleDate}
          >
            Poner fecha en la página de la empresa
          </button>
        </div>

        <div className="h-full items-center w-5/12">
          <section className='bg-red-200 rounded-t-xl shadow-2xl mt-4'>
            <h3 className='text-lg bg-slate-800 text-slate-100 px-5 py-4  rounded-t-lg text-center font-semibold'>
              Empresa Española de servicios
            </h3>

            <span className='flex justify-end mr-5 mt-2 text-lg'>
              <p>
                Fecha: <strong>{state}</strong>
              </p>
            </span>

            <span className='bg-slate-400 block mx-6 my-4 rounded-lg h-20 opacity-50'></span>
            <span className='bg-slate-400 block mx-6 mt-4 rounded-t-lg h-12 opacity-50'></span>
          </section>
        </div>
      </section>
    </div>
  )
}
