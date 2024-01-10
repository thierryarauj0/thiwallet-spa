export default function button (  {text , type} )  {
    return(

        <button
         type={type}
          className="px-4 py-2 rounded w-full font-bold text-white text-2x1 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600"
        >
                                
         {text}

        </button>


    );


}