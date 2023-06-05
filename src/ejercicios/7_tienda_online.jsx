import { useState } from 'react'

import { FiShoppingCart } from 'react-icons/fi'

import img_1 from '../assets/imgs/img_1.png'
import img_2 from '../assets/imgs/img_2.png'
import img_3 from '../assets/imgs/img_3.png'

export default function Ejercicio7() {
  /**
   * Declaración de variables en estados de react ver las notificaciones.
   */
  const [state, setState] = useState({
    message: '',
    total: 0,
    notification: 0,
    gorra: { isInCar: false, text: 'Agregar al carro' },
    tennis: { isInCar: false, text: 'Agregar al carro' },
    balon: { isInCar: false, text: 'Agregar al carro' },
  })

  /**
   * Manejador del evento para agregar o quitar producto del carrito.
   */
  const handleButtons = (event) => {
    const { name } = event.target

    let newTotal = 0
    if (name === 'gorra') {
      newTotal = state.gorra.isInCar ? state.total - 24500 : state.total + 24500
    } else if (name === 'tennis') {
      newTotal = state.tennis.isInCar ? state.total - 49900 : state.total + 49900
    } else if (name === 'balon') {
      newTotal = state.balon.isInCar ? state.total - 67000 : state.total + 67000
    }

    let newMessage = ''
    if (!newTotal) {
      newMessage = ''
    } else if (newTotal < 30000) {
      newMessage = 'Compra más o te cobraremos $10000 de gastos de envío'
    } else if (newTotal > 30000 && newTotal < 90000) {
      newMessage = `Con solo $${90000 - newTotal} más podrás tener gastos de envío gratis`
    } else if (newTotal >= 90000) {
      newMessage = 'Gastos de envío incluidos ¡Vuelve pronto!'
    }

    const newState = {
      ...state,
      message: newMessage,
      total: newTotal,
      notification: state[name].isInCar ? state.notification - 1 : state.notification + 1,
      [name]: state[name].isInCar ? { isInCar: false, text: 'Agregar al carro' } : { isInCar: true, text: 'Quitar del carro' }
    }

    setState(newState)
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>7.</strong> La tienda online comprasweb.com quiere realizar una mejora en el código de su web.
        Necesita que la web, según lo almacenado en su carro de compras, muestre un mensaje u
        otro al usuario. En concreto quiere que:
      </h3>

      <section className='flex gap-8 justify-center'>
        <div className="flex flex-col gap-8 h-full items-center w-5/12">
          <span className="bg-blue-200 px-4 py-5 rounded-md text-center text-lg">
            <ul className='text-sm text-justify flex flex-col gap-5'>
              <li>
                <strong>1. </strong> Si la compra es inferior a 30000 pesos se le muestre un mensaje en negrita diciendo:
                (Compra más o te cobraremos 10000 de gastos de envío).
              </li>

              <li>
                <strong>2. </strong> Si la compra es superior a 30000 pesos pero inferior a 90000 pesos deberemos mostrar
                un número indicando cuanto le falta para llegar a 90000 pesos y tener gastos de envío
                gratuitos. Ejemplo: (Con solo 33.00 pesos más podrás tener gastos de envío gratis).
              </li>

              <li>
                <strong>3. </strong> Si la compra alcanza los 90000 pesos indicaremos un mensaje en negrita: (Gastos de
                envío incluidos ¡Vuelve pronto!).
              </li>
            </ul>
          </span>
        </div>

        <div className="h-full items-center w-6/12">
          <section className='bg-red-200 rounded-t-xl shadow-2xl pb-5'>
            <h3 className='flex justify-between text-lg bg-slate-800 text-slate-100 px-6 py-3  rounded-t-lg text-left font-semibold'>
              Compras Web

              <div className='flex gap-1 justify-center items-center'>
                <span
                  className={`bg-red-600 w-5 text-center p-0 pr-0.5 rounded-full text-sm ${!state.notification && 'hidden'}`}
                >
                  {state.notification}
                </span>
                <FiShoppingCart size={20} />
              </div>
            </h3>

            <span className={`bg-red-400 border border-red-500 block w-2/4 rounded-2xl py-1 px-3 mr-2 ml-auto text-sm text-center text-green-50 mt-1 ${!state.message && 'hidden'} ${state.total >= 90000 && 'font-bold'}`}>
              {state.message}
            </span>

            <span className='bg-gray-200 mx-3 mt-3 rounded-lg shadow-lg py-3 flex flex-col gap-3'>
              <article className='bg-gray-50 flex gap-3 shadow-xl hover:bg-gray-100 p-2 mx-2 text-sm items-center rounded-lg justify-between'>
                <img className='w-14 rounded-lg' src={img_2} alt="gorra" />

                <p>Gorra Strike-GH naranja.</p>

                <p className='font-semibold text-violet-900 text-lg'>
                  $24.500
                </p>

                <button
                  className={`text-slate-50 py-1 px-2 rounded-md ${state.gorra.isInCar ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
                  name='gorra'
                  onClick={handleButtons}
                >
                  {state.gorra.text}
                </button>
              </article>

              <article className='bg-gray-50 flex gap-3 shadow-xl hover:bg-gray-100 p-2 mx-2 text-sm items-center justify-between rounded-lg'>
                <img className='w-14 rounded-lg' src={img_1} alt="tennis" />

                <p>Tennis Nike color blanco.</p>

                <p className='font-semibold text-violet-900 text-lg'>
                  $49.900
                </p>

                <button
                  className={`text-slate-50 py-1 px-2 rounded-md ${state.tennis.isInCar ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
                  name='tennis'
                  onClick={handleButtons}
                >
                  {state.tennis.text}
                </button>
              </article>

              <article className='bg-gray-50 flex gap-3 shadow-xl hover:bg-gray-100 p-2 mx-2 text-sm items-center justify-between rounded-lg'>
                <img className='w-14 rounded-lg' src={img_3} alt="balon" />

                <p>Balon futbol profesional.</p>

                <p className='font-semibold text-violet-900 text-lg'>
                  $67.000
                </p>

                <button
                  className={`text-slate-50 py-1 px-2 rounded-md ${state.balon.isInCar ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
                  name='balon'
                  onClick={handleButtons}
                >
                  {state.balon.text}
                </button>
              </article>
            </span>
          </section>
        </div>
      </section>
    </div>
  )
}
