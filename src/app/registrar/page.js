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
    const [erro, seterro] = useState(false)
    const [check, setcheck] =useState("")
    function cadastrar(){
        Axios.post("api/auth", {username: username, password:senha})
        .then( res =>{
            console.log(res.data)
        })
    }
    function checar_senha(s){
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
                <p className="titulo"></p>
                <p className="subtitulo"></p>
                <button>Ok</button>
            </Popup>
          <Image height={90} width={90} className="espada" src={Espada} />
          <div className="menu">
              <p>Registrar</p>
              <div className="input">
                  <input onChange={(e) => setusername(e.target.value)} placeholder="Usuário"/>    
              </div>
              <div className="input">
                  <input onChange={(e) => setsenha(e.target.value)} placeholder="Senha"/>    
              </div>
              <div className="input">
                <div className={check !== "Estão diferentes"?"target": "target show"} >{check}</div>
                  <input onChange={(e) => checar_senha(e.target.value)} placeholder="Confirmar senha"/>    
              </div>
              <div className="button">
                  <button onClick={() => cadastrar()} >Cadastrar</button>
              </div>
              
          </div>
      </div>
  </body>
  );
}
