export default function input({type , placeholder}){
    return(
     <input
            type={type}
            placeholder={placeholder}
            className="rounded p-2 w-full"
        />
 
    );
}