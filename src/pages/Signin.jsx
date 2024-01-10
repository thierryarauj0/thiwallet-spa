
import logo from "../assets/thi-wallet.png";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx"
import { Link } from "react-router-dom";



export default function Signin(){

    // const name = " thierry ";
     return (
        
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">

           

            <img src={logo} alt="logo" className="w-45"/>

            <form className="flex flex-col justify-center gap-2 w-full text-2x2">


            <Input type="Email"  placeholder=" Email"/>

            <Input type="Senha"  placeholder=" Senha"/>


            <Button text="entrar" type="submit"/>
        

            </form>
            <p className="text-white text 2x1">Não tem uma conta ? Cliquei aqui para se  <Link to="/Signup" className="text-sky-400 hover:text-sky-800"> registrar</Link>{""}</p>
        </div>
    
    );

}