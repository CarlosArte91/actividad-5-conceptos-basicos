import logo_ibero from './assets/imgs/logo_ibero.png'

export default function Portada() {
  return (
    <section className="bg-white flex flex-col gap-3 items-center shadow-xl rounded-lg w-3/5 mx-auto mt-6 text-center px-3 py-10">
      <img className='w-16' src={logo_ibero} alt="logo ibero" />

      <h2 className='text-lg font-semibold my-3'>Actividad 5 – Conceptos básicos</h2>

      <p className='font-semibold'>Integrantes</p>

      <ul className='flex flex-col gap-3 my-3'>
        <li>Angel Javier Zabaleta Torrez</li>
        <li>Carlos Arturo Cruz Gutierrez</li>
        <li>Leindis Dik Monterroza Hernandez</li>
        <li>Santiago Ricardo Ramirez</li>
      </ul>
    </section>
  )
}
