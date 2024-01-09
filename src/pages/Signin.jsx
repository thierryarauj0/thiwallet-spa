import logo from "../assets/thi-wallet.png";


export default function Signin(){

    // const name = " thierry ";
     return (
        
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} alt="logo" className="w-35"/>
            <form className="flex flex-col justify-center gap-2 w-full text-2x2">
                <input
                type="email"
                placeholder="Seu Email"
                className="rounded p-2 w-full"
                />

                 <input
                type="password"
                placeholder="Sua Senha"
                className="rounded p-2 w-full"
                 />


                <button 
                  type="submit"
                 className="px-4 py-2 rounded w-full font-bold text-white text-2x1"
                 >
                Entrar
                </button>

            </form>
            <p className="text-white text 2x1">Não tem uma conta ? Clique aqui para se registrar</p>
        </div>
    
    );

}