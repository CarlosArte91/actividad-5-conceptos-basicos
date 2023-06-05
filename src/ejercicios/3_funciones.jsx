import { useState } from 'react'

export default function Ejercicio3() {
  /**
   * Declaración de variables en estados de react para capturar los inputs.
   */
  const [state, setState] = useState({
    num_1: '',
    num_2: '',
    abs: '',
  })

  /**
   * Variables de salida de información.
   */
  const [output, setOutput] = useState({
    greater: '',
    absolute: '',
  })

  /**
   * Variables para almacenar los errores de las validaciones.
   */
  const [errors, setErrors] = useState({
    num_1: { active: false, message: '' },
    num_2: { active: false, message: '' },
    abs: { active: false, message: '' },
  })

  /**
   * Declaración de métodos para capturar la entrada de datos des los inputs.
   */
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({
      ...state, [name]: value
    })

    if (name === 'abs') {
      setErrors({
        ...errors, abs: { active: false, message: '' },
      })
    } else {
      setErrors({
        ...errors,
        num_1: { active: false, message: '' },
        num_2: { active: false, message: '' },
      })
    }

  }

  /**
   * Manejador de evento del formulario de número mayor
   */
  const handleSubmitGreater = (event) => {
    event.preventDefault();

    /**
     * Validaciones de los inputs
     */
    if (!state.num_1 && !state.num_2) {
      setErrors({
        ...errors,
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
     * Si los datos son correctos se calcula el número mayor y se muestra la respuesta.
     */
    const numMayor = parseInt(state.num_1) > parseInt(state.num_2) ? parseInt(state.num_1) : parseInt(state.num_2)
    setOutput({ ...output, greater: numMayor })
  }

  /**
   * Manejador de eventos del formulario de valor absoluto.
   */
  const handleSubmitAbsolute = (event) => {
    event.preventDefault();

    /**
     * Validaciones del input
     */
    if (!state.abs) {
      setErrors({
        ...errors, abs: { active: true, message: 'Ingresa el número base' }
      })
      return
    }

    /**
     * Si el dato es correcto se calcula el valor absoluto y se muestra la respuesta.
     */
    const numAbs = Math.abs(parseInt(state.abs))
    setOutput({ ...output, absolute: numAbs })
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>3.</strong> Realice un programa que implemente las siguientes funciones
        <br/>a. Implementar la función mayor(x, y)
        <br/>b. Implementar la función abs(x)
      </h3>

      <section className='flex flex-row gap-24 justify-center'>
        <div className="flex flex-col gap-8 h-full items-center pt-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmitGreater}>
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

            <input className="bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 rounded-lg cursor-pointer" type="submit" value="Número mayor"/>
          </form>

          <span className="bg-blue-200 px-6 py-3 rounded-md w-4/5 text-center text-lg">
            { output.greater ? <p><strong>{output.greater}</strong></p> : null}
          </span>
        </div>

        <div className="flex flex-col gap-8 h-full items-center pt-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmitAbsolute}>
            <div className="flex flex-col">
              <label htmlFor="abs">Ingresa un número</label>
              <input
                className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
                type="number"
                id="abs"
                name='abs'
                value={state.abs}
                onChange={handleChange}
              />
              <span className="text-sm text-red-900">
                {errors.abs.active ? errors.abs.message : ''}
              </span>
            </div>

            <input className="bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 rounded-lg cursor-pointer" type="submit" value="Valor absoluto"/>
          </form>

          <span className="bg-blue-200 px-6 py-3 rounded-md w-4/5 text-center text-lg">
            { output.absolute ? <p><strong>{output.absolute}</strong></p> : null}
          </span>
        </div>
      </section>
    </div>
  )
}
