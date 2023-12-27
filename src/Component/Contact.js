const Contact = ()=>{
    return(
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
            <div className="flex flex-col p-4 justify-center 
            max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6 text-xl"> Submit the form below to contact me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/7d356842-1227-496e-b1b5-f4162410d1df" method="POST" className="flex flex-col w-full md:w-1/2">
                     <input type="text" name="name" placeholder="enter your name" className="   p-2 shadow-lg hover:shadow-cyan-500/50 bg-transparent border-2  rounded-md 
                     text-white focus:outline-none" />
                      <input type="text" name="email" placeholder="enter your email" className="p-2 shadow-lg hover:shadow-cyan-500/50 my-4 bg-transparent border-2 rounded-md
                     text-white focus:outline-none" />
                     <textarea name="message" placeholder="enter your message" rows="10" className="p-2 shadow-lg hover:shadow-cyan-500/50 bg-transparent border-2 rounded-md text-white
                     focus:outline-none py-2" >
                     </textarea>
                     <button className="animate-border rounded-md text-white bg-white bg-gradient-to-r from-red-400 via-purple-400 to-sky-500 bg-[length:300%_300%]  px-6 py-3 my-4
                     mx-auto  flex items-center rounded:md hover:scale-110 duration-300">
                        Let's talk
                     </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;