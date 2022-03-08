import React,{useState, useEffect} from 'react';
import { IProyect } from '../../data/proyect';

interface link{
    id:string;
    name:string;
}

const Select = ({proyectos, setProyectos, setEditProyectos}:any) => {
    const [count, setCount] = useState(0)
    const [List, setList] = useState<link[]>([])
    const [abrir, setAbrir] = useState(false);
    let list:link[] =[
        {id:'l-1',name:'All'},
        {id:'l-2',name:'FRONTED'},
        {id:'l-3',name:'BACKEND'}
    ]

    useEffect(() => {
      setList(list)
    }, [])

    const start= (index:number)=>{
        let init = list[0]
        list[0] = list[index]
        list[index] = init
        setList(list)
        setAbrir(!abrir)
        setCount(count + 1)
        if(count === 1){
            setCount(0)
            if(List[index].name === 'All'){
                setEditProyectos(proyectos)
            }else{
                let NuevosProyectos = proyectos.filter((proyecto:IProyect)=> proyecto.rol === List[index].name)
                setEditProyectos(NuevosProyectos);
                console.log(NuevosProyectos)
            }
        }
    }

return (
    <ul className={`bg-primary w-max text-secundary overflow-hidden rounded-xl relative transition-all duration-300 ${abrir? 'h-max':'h-11'}`}>
        {List.map((element,index) => <li onClick={()=>start(index)} className={`font-bold pr-16 pl-2 pt-3 pb-1 cursor-pointer border-b-2  border-solid ${abrir?'border-secundary':'border-transparent'} `} key={element.id}>{element.name}</li> )}
        <i className="fa-solid fa-angle-down absolute top-4 right-3 cursor-pointer transition-all duration-300" style={{transform: abrir?'rotate(180deg)':''}}></i>
    </ul>
  )
}

export default Select