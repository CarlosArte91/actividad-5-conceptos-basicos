import { useState } from 'react'

export default function Ejercicio10() {
  /**
   * Declaración de variables en estados de react para capturar el input.
   */
  const [state, setState] = useState({
    num: '',
    count: 0,
    countImp: 0,
    suma: 0,
    mayor: 0,
  })

  /**
   * Variable de salida de información.
   */
  const [output, setOutput] = useState({ cantidad: '-', promedio: '-', mayor: '-' })
  const [isFinded, setIsFinded] = useState(false)

  /**
   * Variables para almacenar los errores de la validacion.
   */
  const [errors, setErrors] = useState({
    num: { active: false, message: '' },
  })

  /**
   * Declaración del método para capturar la entrada de datos del input.
   */
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({
      ...state, [name]: value
    })

    setErrors({
      num: { active: false, message: '' },
    })
  }

  /**
   * Manejador de evento del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    /**
     * Validaciones del input
     */
    if (!state.num) {
      setErrors({
        num: { active: true, message: 'Debe ingresar un número' },
      })
      return
    }

    /**
     * Si los datos son correctos se realizan los calculos y se muestra la respuesta.
     */
    const newNum = parseInt(state.num)
    if (newNum < 0) {
      setOutput({ cantidad: state.count, promedio: (state.suma / state.countImp).toFixed(1), mayor: state.mayor })
      setIsFinded(true)
    } else {
      const newSuma = newNum % 2 ? newNum : 0
      const numPar = newNum % 2 ? 0 : newNum
      const newMayor = numPar > state.mayor ? numPar : state.mayor
      const newCountImp = newSuma ? 1 : 0
      setState({
        ...state,
        num: '',
        count: state.count + 1,
        countImp: state.countImp + newCountImp,
        suma: state.suma + newSuma,
        mayor: newMayor,
      })
    }
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>10.</strong> Realiza un programa que vaya pidiendo números hasta que se introduzca un numero
        negativo y nos diga cuantos números se han introducido, la media de los impares y el
        mayor de los pares. El número negativo sólo se utiliza para indicar el final de la
        introducción de datos pero no se incluye en el cómputo.
      </h3>

      <div className="flex flex-col gap-8 h-full items-center pt-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="num">Agrega los números</label>
            <input
              className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
              type="number"
              id="num"
              name='num'
              disabled={isFinded}
              value={state.num}
              onChange={handleChange}
            />
            <span className="text-sm text-red-900">
              {errors.num.active ? errors.num.message : ''}
            </span>
          </div>

          <input
            className={`bg-sky-600 text-slate-100 px-4 py-2 rounded-lg cursor-pointer ${isFinded ? 'opacity-50 cursor-not-allowed bg-red-600' : 'hover:bg-sky-800'}`}
            type="submit"
            value="Agregar"
            disabled={isFinded}
          />
        </form>

        <table>
          <thead>
            <tr>
              <th className='p-2 border border-slate-700'>Números ingresados</th>
              <th className='p-2 border border-slate-700'>Promedio de impares</th>
              <th className='p-2 border border-slate-700'>Mayor número par</th>
            </tr>
          </thead>
          <tbody className='bg-green-100 text-sm'>
            <tr>
              <td className='p-2 border border-slate-700 text-center'>
                {output.cantidad}
              </td>

              <td className='p-2 border border-slate-700 text-center'>
                {output.promedio}
              </td>

              <td className='p-2 border border-slate-700 text-center'>
                {output.mayor}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
