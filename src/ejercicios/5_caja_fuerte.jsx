import { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import { TbReload } from 'react-icons/tb'

export default function Ejercicio5() {
  /**
   * Declaración de variables en estados de react para capturar los inputs.
   */
  const [state, setState] = useState({
    num_1: 0,
    num_2: 0,
    num_3: 0,
    num_4: 0,
  })

  const [count, setCount] = useState(4)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isRight, setIsRight] = useState(false)

  /**
   * Variable de salida de información.
   */
  const [output, setOutput] = useState({
    error: false,
    message: '',
  })


  /**
   * Declaración de métodos para capturar la entrada de datos des los inputs.
   */
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({
      ...state, [name]: value
    })
  }

  /**
   * Manejador de evento del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const clave = '1234'
    const acceso = `${state.num_1}${state.num_2}${state.num_3}${state.num_4}`

    /**
     * Validacion de las claves
     */
    if (clave !== acceso) {
      const newCount = count - 1
      setCount(newCount)

      if (!newCount) {
        setIsDisabled(true)
        setOutput({
          error: true,
          message: 'No te quedan más intentos'
        })

      } else {
        setOutput({
          error: true,
          message: `La clave es incorrecta, te quedan ${newCount} intentos`
        })
      }
    } else {
      setOutput({
        error: false,
        message: 'Felicidades, abriste la caja fuerte'
      })
      setIsRight(true)
    }
  }

  const handleReload = () => {
    setState({
      num_1: 0,
      num_2: 0,
      num_3: 0,
      num_4: 0,
    })
    setCount(4)
    setIsDisabled(false)
    setIsRight(false)
    setOutput({
      error: false,
      message: '',
    })
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="mt-6 mb-4 text-center">
        <strong>5.</strong> Realiza el control de acceso a una caja fuerte. La combinación será un número de 4 cifras.
        El programa nos pedirá la combinación para abrirla. Si no acertamos, se nos mostrará el
        mensaje “Lo siento, esa no es la combinación” y si acertamos se nos dirá “La caja fuerte se
        ha abierto satisfactoriamente”. Tendremos cuatro oportunidades para abrir la caja fuerte
      </h3>

      <p className='text-center text-sm text-blue-900 font-semibold mb-6'>Para este ejercicio se asignó la clave 1234</p>

      <div className="flex flex-col gap-8 h-full items-center pt-4 relative mt-4">
        <button
          className='flex items-center gap-1 text-sm bg-sky-600 hover:bg-sky-800 text-white font-semibold px-2 py-2 rounded-lg cursor-pointer absolute left-4 -top-8'
          onClick={handleReload}
        >
          Reiniciar <TbReload size={20} />
        </button>

        {isRight && <ConfettiExplosion />}

        <span className={`bg-blue-200 px-6 py-5 rounded-md w-2/4 text-center ${output.error ? 'text-red-800' : 'text-green-700'}`}>
          { output ? <p>{output.message}</p> : null}
        </span>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-5">
            <input
              className="border border-slate-900 w-12 rounded-md my-1 pl-3 py-1"
              type="number"
              name='num_1'
              min={0}
              max={9}
              value={state.num_1}
              disabled={isDisabled}
              onChange={handleChange}
            />

            <input
              className="border border-slate-900 w-12 rounded-md my-1 pl-3 py-1"
              type="number"
              name='num_2'
              min={0}
              max={9}
              value={state.num_2}
              disabled={isDisabled}
              onChange={handleChange}
            />

            <input
              className="border border-slate-900 w-12 rounded-md my-1 pl-3 py-1"
              type="number"
              name='num_3'
              min={0}
              max={9}
              value={state.num_3}
              disabled={isDisabled}
              onChange={handleChange}
            />

            <input
              className="border border-slate-900 w-12 rounded-md my-1 pl-3 py-1"
              type="number"
              name='num_4'
              min={0}
              max={9}
              value={state.num_4}
              disabled={isDisabled}
              onChange={handleChange}
            />
          </div>

          <input
            className={`text-slate-100 px-4 py-2 rounded-lg ${isDisabled ? 'opacity-50 cursor-not-allowed bg-red-600' : 'bg-sky-600 hover:bg-sky-800 cursor-pointer'}`}
            type="submit"
            value="Abrir caja fuerte"
            disabled={isDisabled}
          />
        </form>
      </div>
    </div>
  )
}
