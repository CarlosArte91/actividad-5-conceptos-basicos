import { useState } from 'react'

export default function Ejercicio9() {
  /**
   * Declaración de variables en estados de react para capturar el input.
   */
  const [state, setState] = useState({
    num: '',
    suma: 0,
    count: 0,
  })

  /**
   * Variable de salida de información.
   */
  const [output, setOutput] = useState('')
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
      setOutput(state.suma / state.count)
      setIsFinded(true)
    } else {
      setState({
        ...state,
        num: '',
        suma: state.suma + newNum,
        count: state.count + 1,
      })
    }
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>9.</strong> Escribe un programa que calcule la media de un conjunto de números positivos
        introducidos por teclado. A priori, el programa no sabe cuántos números se introducirán.
        El usuario indicará que ha terminado de introducir los datos cuando meta un número
        negativo.
      </h3>

      <div className="flex flex-col gap-8 h-full items-center pt-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="num">Agrega los números a promediar</label>
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

        <span className="bg-blue-200 px-6 py-5 rounded-md w-2/3 text-center">
          { output ? <p>El promedio es <strong>{output}</strong></p> : null}
        </span>
      </div>
    </div>
  )
}
