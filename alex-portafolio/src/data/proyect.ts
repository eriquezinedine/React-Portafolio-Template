import digital from '../img/digital.png'
import libreria from '../img/libreria.png'
import cine from '../img/cine.png'
import random from '../img/random.jpg'
import blog from '../img/blog.png'
import loginfb from '../img/loginfb.png'
import comerce from '../img/comerce.png'


export interface IProyect{
    title:string;
    description:string;
    demoLink: string;
    codeLink: string;
    rol?:string;
    img:string;
}

export const proyectInfo:IProyect[] =[
    {
        title:"Libreria",
        description: 'HTML, CSS, JS, MEAN',
        demoLink: '#',
        codeLink: '#',
        rol:'FRONTED',
        img: libreria
    },
    {
        title:"DigitalTask",
        description: 'C# NetCore , Angular y Boostrap',
        demoLink: '#',
        codeLink: '#',
        rol:'BACKEND',
        img: digital
    },
    {
        title:"App Cines",
        description: 'HTML5, C# NetCore, Angular, MaterialUI',
        demoLink: '#',
        codeLink: '#',
        rol: 'BACKEND',
        img: cine
    },
    {
        title:"MarketPlace",
        description: 'HTML5, FireBase, Nodejs, Express y Angular',
        demoLink: '#',
        codeLink: '#',
        rol:'BACKEND',
        img: random
    },
    {
        title:"Blog Anime",
        description: 'HTML, CSS, JS',
        demoLink: '#',
        codeLink: '#',
        rol:'FRONTED',
        img: blog
    },
    {
        title:"Login Social Media",
        description: 'HTML, CSS, JS, Firebase, Mysql, PHP',
        demoLink: '#',
        codeLink: '#',
        rol:'BACKEND',
        img: loginfb
    },
    {
        title:"Sistema de Ventas",
        description: 'WordPress, WooCommerce, Culqui',
        demoLink: '#',
        codeLink: '#',
        rol: 'FRONTED',
        img: comerce
    },
    {
        title:"Backend Delivery",
        description: 'C# NetCore, MongoDb, ApiRest Y JsonWeb Token',
        demoLink: '#',
        codeLink: '#',
        rol: 'BACKEND',
        img: random
    },
    {
        title:"MVC Sistema de Trasporte",
        description: 'C# NetCore, SQL, ApiRest, JQuery, Html5',
        demoLink: '#',
        codeLink: '#',
        rol: 'BACKEND',
        img: random
    },
    {
        title:"App Calculadora",
        description: 'Android Studio',
        demoLink: '#',
        codeLink: '#',
        rol: 'FRONTED',
        img: random
    },

]