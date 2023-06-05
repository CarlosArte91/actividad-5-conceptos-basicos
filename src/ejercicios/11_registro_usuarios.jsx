import { useState } from 'react'
import { TbReload } from 'react-icons/tb'

export default function Ejercicio11() {
  /**
   * Declaración de variables en estados de react para capturar los inputs.
   */
  const [state, setState] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
  })

  /**
   * Variable de salida de información.
   */
  const [output, setOutput] = useState([])

  /**
   * Variables para almacenar los errores de las validaciones.
   */
  const [errors, setErrors] = useState({
    name: { active: false, message: '' },
    lastname: { active: false, message: '' },
    email: { active: false, message: '' },
    phone: { active: false, message: '' },
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
      lastname: { active: false, message: '' },
      email: { active: false, message: '' },
      phone: { active: false, message: '' },
    })
  }

  /**
   * Manejador de evento del formulario de nuevo usuario
   */
  const handleSubmitGreater = (event) => {
    event.preventDefault();

    /**
     * Validaciones de los inputs
     */
    if (!state.name && !state.lastname && !state.email && !state.phone) {
      setErrors({
        ...errors,
        name: { active: true, message: 'Debe ingresar un nombre' },
        lastname: { active: true, message: 'Debe ingresar un apellido' },
        email: { active: true, message: 'Debe ingresar un correo' },
        phone: { active: true, message: 'Debe ingresar un teléfono' },
      })
      return
    } else if (!state.name) {
      setErrors({
        ...errors, name: { active: true, message: 'Debe ingresar un nombre' }
      })
      return
    } else if (!state.lastname) {
      setErrors({
        ...errors, lastname: { active: true, message: 'Debe ingresar un apellido' }
      })
      return
    } else if (!state.email) {
      setErrors({
        ...errors, email: { active: true, message: 'Debe ingresar un correo' }
      })
      return
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      setErrors({
        ...errors, email: { active: true, message: 'El correo ingresado no es valido' }
      })
      return
    } else if (!state.phone) {
      setErrors({
        ...errors, phone: { active: true, message: 'Debe ingresar un teléfono' }
      })
      return
    } else if (!/^[0-9]+$/.test(state.phone)) {
      setErrors({
        ...errors, phone: { active: true, message: 'El teléfono ingresado no es valido' }
      })
      return
    }

    /**
     * Si los datos son correctos se crea el nuevo usuario y se agrega a la tabla.
     */
    const usersTable = [ ...output ]
    const newUser = { ...state, id: output.length + 1 }
    usersTable.push(newUser)
    setOutput(usersTable)

    setState({
      name: '',
      lastname: '',
      email: '',
      phone: '',
    })
  }

  const handleReload = () => {
    setState({
      name: '',
      lastname: '',
      email: '',
      phone: '',
    })
    setOutput([])
    setErrors({
      name: { active: false, message: '' },
      lastname: { active: false, message: '' },
      email: { active: false, message: '' },
      phone: { active: false, message: '' },
    })
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="my-6 mb-10 text-center">
        <strong>11.</strong> Realizar un formulario que permita ingresar los datos de usuario
        y registrarlos para agregarlos en una tabla, realizar validaciones para los campos
        del formulario que no permita ingresar registros con campos vacíos.
      </h3>

      <section className='flex flex-row gap-6 justify-center pt-4 relative mt-4'>
        <button
          className='flex items-center gap-1 text-sm bg-sky-600 hover:bg-sky-800 text-white font-semibold px-2 py-2 rounded-lg cursor-pointer absolute left-4 -top-8'
          onClick={handleReload}
        >
          Reiniciar <TbReload size={20} />
        </button>

        <div className="px-2 h-full items-center pt-2 ml-8 w-4/12">
          <form className="flex flex-col gap-1" onSubmit={handleSubmitGreater}>
            <div className="flex flex-col">
              <label htmlFor="name">Nombre</label>
              <input
                className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
                id="name"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
              <span className="text-sm text-red-900">
                {errors.name.active ? errors.name.message : ''}
              </span>
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastname">Apellido</label>
              <input
                className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
                id="lastname"
                name="lastname"
                value={state.lastname}
                onChange={handleChange}
              />
              <span className="text-sm text-red-900">
                {errors.lastname.active ? errors.lastname.message : ''}
              </span>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Correo electrónico</label>
              <input
                className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <span className="text-sm text-red-900">
                {errors.email.active ? errors.email.message : ''}
              </span>
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone">Teléfono</label>
              <input
                className="border border-1 border-slate-900 rounded-md my-1 pl-3 py-1"
                id="phone"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
              <span className="text-sm text-red-900">
                {errors.phone.active ? errors.phone.message : ''}
              </span>
            </div>

            <input className="bg-sky-600 hover:bg-sky-800 text-slate-100 px-4 py-2 mt-3 rounded-lg cursor-pointer" type="submit" value="Agregar usuario"/>
          </form>
        </div>

        <div className="flex flex-col items-center h-full pt-4 w-6/12">
          <table>
            <thead>
              <tr>
                <th className='p-2 border border-slate-700'>N°</th>
                <th className='p-2 border border-slate-700'>Nombre</th>
                <th className='p-2 border border-slate-700'>Apellido</th>
                <th className='p-2 border border-slate-700'>Correo electónico</th>
                <th className='p-2 border border-slate-700'>Teléfono</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 text-sm'>
              {!!output.length && output.map((item) => (
                <tr key={item.id}>
                  <td className='p-2 border border-slate-700 text-center'>
                    {item.id}
                  </td>

                  <td className='p-2 border border-slate-700 text-center'>
                    {item.name}
                  </td>

                  <td className='p-2 border border-slate-700 text-center'>
                    {item.lastname}
                  </td>

                  <td className='p-2 border border-slate-700 text-center'>
                    {item.email}
                  </td>

                  <td className='p-2 border border-slate-700 text-center'>
                    {item.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
