import { linkMenu } from '../../data/linkMenu';
import { ItemLink } from '../../pages/toolbox/interface';

const LinkWeb = () => {
  const items:ItemLink[] = linkMenu
  return (
    <ul className='flex '>
      {items.map((item,index)=> ( 
        <li key={item.id} className={`rounded-xl mx-5 py-2 px-5 bg-primary ${index === items.length -1? 'mr-0':''}`}>
          <a className='w-full block font-bold text-secundary' href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default LinkWeb