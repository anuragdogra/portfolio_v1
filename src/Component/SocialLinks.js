const SocialLinks = ()=>{
     const Links = [
        {
            id:1,
            child:(
                <>
                Linkedin
                <i className="text-2xl text-white fa-brands fa-linkedin"></i>
                </>
            ),
            style:"rounded-tr-md",
            href:"https://www.linkedin.com/in/hj-8ba70617a/",
            

        },
        {
            id:2,
            child:(
                <>
                Mail
               <i class="text-2xl text-white fa-regular fa-envelope"></i>
                </>
            ),
            href:"https://mail.google.com/",
            

        },
        {
            id:3,
            child:(
                <>
                Github
                <i class="text-2xl text-white fa-brands fa-github"></i>
                </>
            ),
            href:"https://github.com/anuragdogra",
            

        },
        {
            id:4,
            child:(
                <>
                Resume
                <i class="text-2xl text-white fa-regular fa-id-card"></i>
                </>
            ),
            href:'/Resume.pdf',
            style:"rounded-br-md",
            download:true
           

        },
       
     ]
    return(
        <div className=" flex left-0  sm:flex-auto  top-[35%]    fixed  ">
            <ul>
            {Links.map(({id,child,href,style,download})=>(
                <li key={id} className={`flex justify-center items-center w-40 h-14 px-4  bg-opacity-25  hover:ml-[-10px] duration-300 hover:rounded-md ml-[-110px] text-black bg-gray-500 ${style}`}> 
                    <a rel="noreferrer" href={href} download={download} target='_blank' className="flex justify-between item-center w-full   text-white">{child}</a>                 
                </li>
                 ))}
            </ul>
        </div>
    )
}
export default SocialLinks;