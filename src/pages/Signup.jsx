import Input from "../components/Input.jsx";
import logo from "../assets/thi-wallet.png";
import Button from "../components/Button.jsx";
import { BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Signup (){


return(

    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-6 w-[35rem] relative">

        <Link to="/Signin">  <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/> </Link>

        <img src={logo} alt="logo" className="w-60"/>


        <h1 className="text-white font-bold text-5xl py-5">Registrar</h1>

        <form className="flex flex-col items-center justify-center gap-4 w-full text-2xl"> 

            <Input type="text" placeholder="Seu nome"/>

            <Input type="text" placeholder="E-mail"/>

            <Input type="text" placeholder="Sua senha "/>

            <Input type="text" placeholder="Confirme sua senha "/>

            <Button type="submit" text="Cadastrar" />

        </form>

    </div>
   
);
}