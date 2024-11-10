'use client';
import Image from "next/image";
import "./page.css"
import Espada from "./espada.png"
import Axios from "../../../servidor";
import { useState } from "react";
import Popup from "../components/popup";


export default function Home() {
    const [username, setusername] = useState("")
    const [senha, setsenha] = useState("")
    const [csenha, setcsenha] = useState("")
    const [erro, seterro] = useState(false)
    const [check,setcheck] =useState("")
    const [titulo, settitulo] =useState("")
    const [subtitulo, setsubtitulo] =useState("")
    function cadastrar(){
        if(csenha=== "" || senha === "" || username === ""){
            seterro(true)
            settitulo("Sem dados")
            setsubtitulo("Preencha todos os campos")
        }
        else{
            Axios.post("api/auth", {username: username, password:senha})
            .then( res =>{
                console.log(res.data)
            })    
        }
    }
    function checar_senha(s){
        setcsenha(s)
        if(s === senha){
            setcheck("")
        }
        else{
            setcheck("Estão diferentes")
        }
    }

  return (
    <body>
      <div className="principal">
            <Popup status={erro}>
                <p className="titulo">{titulo}</p>
                <p className="subtitulo">{subtitulo}</p>
                <div className="button">
                  <button >Ok</button>
              </div>
            </Popup>
          <Image height={90} width={90} className="espada" src={Espada} />
          <div className="menu">
              <p>Registrar</p>
              <div className="input">
                  <input onChange={(e) => setusername(e.target.value)} value={username} placeholder="Usuário"/>    
              </div>
              <div className="input">
                  <input onChange={(e) => setsenha(e.target.value)} value={senha} placeholder="Senha"/>    
              </div>
              <div className="input">
                <div className={check !== "Estão diferentes"?"target": "target show"} >{check}</div>
                  <input onChange={(e) => checar_senha(e.target.value)} value={csenha} placeholder="Confirmar senha"/>    
              </div>
              <div className="button">
                  <button onClick={() => cadastrar()} >Cadastrar</button>
              </div>
              
          </div>
      </div>
  </body>
  );
}
