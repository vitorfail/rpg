'use client';
import Image from "next/image";
import "./page.css"
import Espada from "./espada.png"


export default function Home() {

  return (
    <body>
      <div className="principal">
          <Image height={90} width={90} className="espada" src={Espada} />
          <div className="menu">
              <p>Registrar</p>
              <div className="input">
                  <input placeholder="Usuário"/>    
              </div>
              <div className="input">
                  <input placeholder="Senha"/>    
              </div>
              <div className="input">
                  <input placeholder="Confirmar senha"/>    
              </div>
              <div className="button">
                  <button>Entrar</button>
              </div>
              
          </div>
      </div>
  </body>
  );
}
