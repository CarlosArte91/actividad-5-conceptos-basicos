import { useState } from 'react'

export default function Ejercicio1() {
  /**
   * Declaración de variables en estados de react para capturar los inputs.
   */
  const [state, setState] = useState({
    name: '',
    city: '',
  })

  /**
   * Variable de salida de información.
   */
  const [output, setOutput] = useState(false)

  /**
   * Variables para almacenar los errores de las validaciones.
   */
  const [errors, setErrors] = useState({
    name: { active: false, message: '' },
    city: { active: false, message: '' },
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
      name: { active: false, message: '' },
      city: { active: false, message: '' },
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
    if (!state.name && !state.city) {
      setErrors({
        name: { active: true, message: 'El nombre no puede ser vacío' },
        city: { active: true, message: 'La ciudad no puede ser vacía' },
      })
      return
    } else if (!state.name) {
      setErrors({
        ...errors, name: { active: true, message: 'El nombre no puede ser vacío' }
      })
      return
    } else if (!state.city) {
      setErrors({
        ...errors, city: { active: true, message: 'La ciudad no puede ser vacía' }
      })
      return
    }

    /**
     * Si los datos son correctos se imprime la respuesta.
     */
    setOutput(true)
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>1.</strong> Hacer un programa que escriba vuestro nombre (en negrita) y la ciudad dónde naciste.
      </h3>

      <div className="flex flex-col gap-8 h-full items-center pt-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Escribe tu nombre</label>
            <input
              className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
              type="text"
              id="name"
              name='name'
              value={state.name}
              onChange={handleChange}
            />
            <span className="text-sm text-red-900">
              {errors.name.active ? errors.name.message : ''}
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="city">Ciudad en que naciste</label>
            <input
              className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
              type="text"
              id="city"
              name='city'
              value={state.city}
              onChange={handleChange}
            />
            <span className="text-sm text-red-900">
              {errors.city.active ? errors.city.message : ''}
            </span>
          </div>

          <input className="bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 rounded-lg cursor-pointer" type="submit" value="Imprimir"/>
        </form>

        <span className="bg-blue-200 px-6 py-5 rounded-md w-2/3 text-center">
          { output ? <p>Tu nombre es <strong>{state.name}</strong> y eres de {state.city}</p> : null}
        </span>
      </div>
    </div>
  )
}
