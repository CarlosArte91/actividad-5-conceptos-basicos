import { useState } from 'react'

export default function Ejercicio8() {
  /**
   * Declaración de variables en estados de react para capturar el inputs.
   */
  const [state, setState] = useState({
    num: '',
  })

  /**
   * Variables de salida de información.
   */
  const [output, setOutput] = useState([
    { id: 1, multiplicando: '', multiplicador: '1', producto: '' },
    { id: 2, multiplicando: '', multiplicador: '2', producto: '' },
    { id: 3, multiplicando: '', multiplicador: '3', producto: '' },
    { id: 4, multiplicando: '', multiplicador: '4', producto: '' },
    { id: 5, multiplicando: '', multiplicador: '5', producto: '' },
    { id: 6, multiplicando: '', multiplicador: '6', producto: '' },
    { id: 7, multiplicando: '', multiplicador: '7', producto: '' },
    { id: 8, multiplicando: '', multiplicador: '8', producto: '' },
    { id: 9, multiplicando: '', multiplicador: '9', producto: '' },
    { id: 10, multiplicando: '', multiplicador: '10', producto: '' },
  ])

  /**
   * Variables para almacenar errores de validacion.
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
   * Manejador de evento del formulario del número.
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
     * Si el dato es correcto se realizan las multiplicaciones y se muestra la respuesta.
     */
    const numRight = parseInt(state.num)
    const newOutput = []
    for (let i = 1; i < 11; i++) {
      const item = { id: i, multiplicando: numRight, multiplicador: i, producto: numRight * i  }
      newOutput.push(item)
    }
    setOutput(newOutput)
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>8.</strong> Muestra la tabla de multiplicar de un número introducido por teclado. El resultado se debe
        mostrar en una tabla en HTML.
      </h3>

      <section className='flex flex-row gap-24 justify-center'>
        <div className="flex flex-col gap-8 h-full items-center pt-4">
          <form className="flex flex-col gap-4 w-3/5" onSubmit={handleSubmit}>
            <div className="flex flex-col text-center">
              <label htmlFor="num">Ingresa un número</label>
              <input
                className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1 text-center"
                type="number"
                id="num"
                name='num'
                value={state.num}
                onChange={handleChange}
              />
              <span className="text-sm text-red-900">
                {errors.num.active ? errors.num.message : ''}
              </span>
            </div>

            <input className="bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 rounded-lg cursor-pointer" type="submit" value="Multiplicar"/>
          </form>
        </div>

        <div className="flex flex-col gap-8 h-full items-center pt-4">
          <table>
            <thead>
              <tr>
                <th className='py-2 px-4 border border-slate-700'>Operación</th>
                <th className='py-2 px-4 border border-slate-700'>Resultado</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 text-sm'>
              {output.length && (
                output.map((item) => (
                  <tr key={item.id}>
                    <td className='p-1 border border-slate-700 text-center'>
                      {`${item.multiplicando} × ${item.multiplicador}`}
                    </td>

                    <td className='p-1 border border-slate-700 text-center'>
                      {item.producto}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
