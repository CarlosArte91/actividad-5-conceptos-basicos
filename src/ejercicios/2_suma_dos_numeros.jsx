import { useState } from 'react'
import { TbReload } from 'react-icons/tb'

export default function Ejercicio2() {
  /**
   * Declaración de variables en estados de react para capturar los inputs.
   */
  const [state, setState] = useState({
    num_1: '',
    num_2: '',
  })

  /**
   * Variable de salida de información.
   */
  const [output, setOutput] = useState('')

  /**
   * Variables para almacenar los errores de las validaciones.
   */
  const [errors, setErrors] = useState({
    num_1: { active: false, message: '' },
    num_2: { active: false, message: '' },
  })

  /**
   * Declaración de métodos para capturar la entrada de datos des los inputs.
   */
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({
      ...state, [name]: value
    })

    setErrors({
      num_1: { active: false, message: '' },
      num_2: { active: false, message: '' },
    })
  }

  /**
   * Manejador de evento del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    /**
     * Validaciones de los inputs
     */
    if (!state.num_1 && !state.num_2) {
      setErrors({
        num_1: { active: true, message: 'Debe ingresar el primer número' },
        num_2: { active: true, message: 'Debe ingresar el segundo número' },
      })
      return
    } else if (!state.num_1) {
      setErrors({
        ...errors, num_1: { active: true, message: 'Debe ingresar el primer número' }
      })
      return
    } else if (!state.num_2) {
      setErrors({
        ...errors, num_2: { active: true, message: 'Debe ingresar el segundo número' }
      })
      return
    }

    /**
     * Si los datos son correctos se calcula la suma y se muestra la respuesta.
     */
    const totalSuma = parseInt(state.num_1) + parseInt(state.num_2)
    setOutput(totalSuma)
  }

  const handleReload = () => {
    setState({
      num_1: '',
      num_2: '',
    })
    setOutput('')
    setErrors({
      num_1: { active: false, message: '' },
      num_2: { active: false, message: '' },
    })
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>2.</strong> Hacer un programa que escriba el resultado de la suma de dos variables (x = -1 e y= 9, por ejemplo).
      </h3>

      <div className="flex flex-col gap-8 h-full items-center pt-4 relative mt-4">
        <button
          className='flex items-center gap-1 text-sm bg-sky-600 hover:bg-sky-800 text-white font-semibold px-2 py-2 rounded-lg cursor-pointer absolute left-4 -top-8'
          onClick={handleReload}
        >
          Reiniciar <TbReload size={20} />
        </button>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="num_1">Primer número</label>
            <input
              className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
              type="number"
              id="num_1"
              name='num_1'
              value={state.num_1}
              onChange={handleChange}
            />
            <span className="text-sm text-red-900">
              {errors.num_1.active ? errors.num_1.message : ''}
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="num_2">Segundo número</label>
            <input
              className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
              type="number"
              id="num_2"
              name='num_2'
              value={state.num_2}
              onChange={handleChange}
            />
            <span className="text-sm text-red-900">
              {errors.num_2.active ? errors.num_2.message : ''}
            </span>
          </div>

          <input className="bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 rounded-lg cursor-pointer" type="submit" value="Sumar"/>
        </form>

        <span className="bg-blue-200 px-6 py-5 rounded-md w-2/3 text-center">
          { output ? <p>El resultado es <strong>{output}</strong></p> : null}
        </span>
      </div>
    </div>
  )
}
