import logo from '../../img/perfil.jpg'
import LinkWeb from './LinkWeb'
const MenuMovilTop = () => {
  return (
    <nav className='pl-7 pr-8 pt-4'>
      <section className='max-w-screen-xl m-auto md:flex md:items-center md:justify-center'>
        <article className='flex justify-between items-center w-full md:justify-end md:flex-row-reverse'>
            <h5 className='text-2xl font-black text-primary'>Alex Ortiz</h5>
            <div className='w-14 h-14 bg-primary rounded-full flex items-center justify-center md:mr-7'>
              <figure className=' rounded-full overflow-hidden w-12 h-12 border-2 border-secundary'>
                  <img className='w-full h-full' src={logo} />
              </figure>
            </div>
        </article>
        <article className='hidden md:block'>
          <LinkWeb />
        </article>
      </section>
    </nav>
  )
}

export default MenuMovilTop