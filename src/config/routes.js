// Layout
import LayoutPublic from '../Layout/LayoutPublic';
//import LayoutAdmin from '../layout/LayoutAdmin';

//Admin Pages



//Public Website Pages
import Home from '../pages/PublicPage/Home/Home';
import About from '../pages/PublicPage/About/About';
import Team from '../pages/PublicPage/Team/Team';
import Vehicules from '../pages/PublicPage/Vehicules/Vehicules';
import Research from '../pages/PublicPage/Research/Research';
//import Sponsors from '../pages/PublicPage/Sponsors/Sponsors';
import Contact from '../pages/PublicPage/Contact';



//Other
import Error404 from '../pages/Error404';

const routes = [
    //Configuración de rutas admin
/*
    {

        //Dentro de admin Este display es para el administrador de la pagina.
        path: "/admin", //Siempre que la ruta tenga una barra admin, va a cargar este layout
        component: LayoutAdmin,
        exact: false,   //No es exact, porque queremos que con admin, siempre tenga este layout
        routes:[
            
            {
                //Si alguna de estas rutas fueran exact: false. Si se escribe mal el nombre siempre cargaria esa
                //Dentro de admin, siempre nos va a mandar al componente Home
                path: "/admin", //Cuando solo es admin
                component: AdminHome,   //Aparece el home
                exact: true,    //Tiene que ser especifica la ruta para cargar este layout
            },

            //Siempre se pone el error 404 al final de las rutas
            {
                //Si no se cumple ninguna ruta, se despliega este componente
                //No pongo ruta, porque no es posible saber que va a escribir el usuario
                component: Error404,
            }
        ]
    },
*/

    //Rutas de la pagina para el end-user
    {
        //Si alguna de estas rutas fueran exact: false. Si se escribe mal el nombre siempre cargaria esta
        //Dentro de admin, siempre nos mandara al home
        path: "/", //Desde la raíz
        component: LayoutPublic,
        exact: false, //Pueden existir diferentes raices como la de admin. pero esta será la misma siempre
        routes: [
            //home
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/home",
                component: Home,
                exact: true
            },
            {
                path: "/about",
                component: About,
                exact: true
            },
            {
                path: "/team",
                component: Team,
                exact: true
            },
            {
                path: "/vehicules",
                component: Vehicules,
                exact: true
            },
            {
                path: "/research",
                component: Research,
                exact: true
            },
            // {
            //     path: "/sponsors",
            //     component: Sponsors,
            //     exact: true
            // },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            //Error 404
            {
                //Si no se cumple ninguna ruta, se despliega este componente
                //No pongo ruta, porque no es posible saber que va a escribir el usuario
                component: Error404
            }
        ]

    }
]

export default routes;