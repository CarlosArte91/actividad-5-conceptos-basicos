import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

import Portada from './portada'
import Ejercicio1 from './ejercicios/1_nombre_en_negrita'
import Ejercicio2 from './ejercicios/2_suma_dos_numeros'
import Ejercicio3 from './ejercicios/3_funciones'
import Ejercicio4 from './ejercicios/4_horario_clases'
import Ejercicio5 from './ejercicios/5_caja_fuerte'
import Ejercicio6 from './ejercicios/6_dia_de_semana'
import Ejercicio7 from './ejercicios/7_tienda_online'
import Ejercicio8 from './ejercicios/8_tabla_multiplicar'
import Ejercicio9 from './ejercicios/9_promedio_numeros'
import Ejercicio10 from './ejercicios/10_cuantos_numeros'
import Ejercicio11 from './ejercicios/11_registro_usuarios'

const items = [
  { route: '/ejercicio_1', text: 'Ejercicio 1' },
  { route: '/ejercicio_2', text: 'Ejercicio 2' },
  { route: '/ejercicio_3', text: 'Ejercicio 3' },
  { route: '/ejercicio_4', text: 'Ejercicio 4' },
  { route: '/ejercicio_5', text: 'Ejercicio 5' },
  { route: '/ejercicio_6', text: 'Ejercicio 6' },
  { route: '/ejercicio_7', text: 'Ejercicio 7' },
  { route: '/ejercicio_8', text: 'Ejercicio 8' },
  { route: '/ejercicio_9', text: 'Ejercicio 9' },
  { route: '/ejercicio_10', text: 'Ejercicio 10' },
  { route: '/ejercicio_11', text: 'Ejercicio 11' },
]

export default function App() {
  const navigate = useNavigate()

  return (
    <main className="bg-gray-200 h-screen flex flex-col">
      <nav className="bg-slate-800 text-slate-100 px-10 w-full">
        <h1 className="flex gap-3 text-2xl py-5 w-fit cursor-pointer" onClick={() => navigate("/")}>
          <AiOutlineHome size={27} />
          <span>Ir al inicio</span>
        </h1>
      </nav>

      <div className="flex flex-row h-screen">
        <aside className="bg-slate-300 w-1/5 drop-shadow-sm py-6">
          <h3 className="text-lg font-bold text-center">
            Lista de ejercicios
          </h3>
          <ul className="pt-6 flex flex-col">
            {items.map((item) => (
              <Link key={item.route} to={item.route}>
                <li className='hover:bg-slate-400 py-2 pl-4 border border-x-0 border-t-0 border-b-slate-400'>
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </aside>

        <section className="w-4/5 p-4">
          <div className="bg-slate-100 h-full p-6 rounded-lg drop-shadow-2xl">
            <Routes>
              <Route path='/' element={<Portada />} />
              <Route path='/ejercicio_1' element={<Ejercicio1 />} />
              <Route path='/ejercicio_2' element={<Ejercicio2 />} />
              <Route path='/ejercicio_3' element={<Ejercicio3 />} />
              <Route path='/ejercicio_4' element={<Ejercicio4 />} />
              <Route path='/ejercicio_5' element={<Ejercicio5 />} />
              <Route path='/ejercicio_6' element={<Ejercicio6 />} />
              <Route path='/ejercicio_7' element={<Ejercicio7 />} />
              <Route path='/ejercicio_8' element={<Ejercicio8 />} />
              <Route path='/ejercicio_9' element={<Ejercicio9 />} />
              <Route path='/ejercicio_10' element={<Ejercicio10 />} />
              <Route path='/ejercicio_11' element={<Ejercicio11 />} />
            </Routes>
          </div>
        </section>
      </div>

    </main>
  )
}
