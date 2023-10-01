"use client"
import Image from "next/image";
import loginimage from "@/images/login.jpg"
import {useState} from "react"
import {useRouter} from "next/navigation"
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/user";

export default function login(){
    const [number, setNumber] = useState("")
    const [senha, setSenha] = useState("")
    const {push} = useRouter()

    function login(e){
        e.preventDefault()
        if(number == "123" && senha == "321"){
        serverLogin()
        push("/")
        }else{
            toast.error("dados invalidos")
        }
    }

    return(
        <div className="flex">
            <aside className="hidden lg:flex h-screen">
                <Image src={loginimage} className="h-auto w-auto object-auto"/>
            </aside>
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Entre com seu código médico</h2>
                <form onSubmit={login} className="flex flex-col gap-2">
                    <label htmlFor="number">Código médico: /123/</label>
                    <input type="number" id="number" min={0} max={999} className="bg-slate-600 p-1 rounded" value={number} onChange={(e)=> setNumber(e.target.value)}/>
                    <label htmlFor="password">Senha: /321/</label>
                    <input type="password" id="password" className="bg-slate-600 p-1 rounded" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                    <button className="bg-pink-600 p-2 rounded mt-2">Entrar</button>
                </form>
            </main>
        </div>
    )
}