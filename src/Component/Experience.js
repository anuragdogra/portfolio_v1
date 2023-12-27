import css from "../Assets/css.png"
import html from "../Assets/html (1).png"
import javascript from "../Assets/javascript.png"
import tailwind from "../Assets/tailwind.png"
import react from "../Assets/react.png"
import c from "../Assets/c++.png"

const Experience = ()=>{
    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'

        },
        {
            id:3,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'

        },
        {
            id:4,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'

        },
        {
            id:5,
            src:react,
            title:'React',
            style:'shadow-blue-500'

        },
        {
            id:6,
            src:c,
            title:'C++',
            style:'shadow-blue-700'

        },
    ]
    return(
        <div name="experience" className="bg-gradient-to-b to-gray-800 from-black w-full h-screen min-h-screen">
            <div className="max-w-screen-lg flex flex-col mx-auto text-white h-full w-full justify-center">
                <div>
                    <p className="text-4xl border-b-4 border-gray-500 p-1 inline">Experience</p>
                    <p className="py-5">These are the technologies I've worked with</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3  text-center gap-8 py-10 px-12 sm:px-0">
              {
                techs.map(({id,src,title,style})=>(
                    
                     <div key={id} className={`shadow-md hover:scale-105 duration-300 rounded-lg py-1 ${style}`} >
                        <img src={src} alt="html" className=" w-20 mx-auto"/>
                        <p className="mt-1">{title}</p>
                     </div>
                  
                ))
              }
               </div>
              

            </div>
        </div>
    )
}
export default Experience;