'use client';
import Image from "next/image";
import "./page.css"
import Barba from "./barba.png"
import Barba2 from "./barba2.png"
import Barba3 from "./barba3.png"
import Espada from "./espada.png"
import classes from "../jsons/classes.json"
import Linha from "./linha.png"
import { useEffect, useState } from "react";
import Orcs_homen_Bruxo from "../components/personagens/orcs/homen/bruxo";
import Orcs_mulher_Bruxo from "../components/personagens/orcs/mulher/bruxo";
import Orcs_homen_Monge from "../components/personagens/orcs/homen/monge";



export default function Home() {
  const [descri, setdescri] = useState("")
  const[pergaminho, setpergaminho] = useState("Barbaro")
  const [arque, setarque] = useState(classes["Barbaro"].arquetipo)
  const [imagem,setimagem] = useState("")
  const [popup,setpopup] = useState(false)
  const [ proximo, setproximo] = useState(1)
  const [ barba, setbarba] = useState("")
  const [ roupa, setroupa] = useState("")
  //personagem
  const [cor_cabelo, setcor_cabelo] =useState([0,0,0])
  const [cor_pele, setcor_pele] =useState("#FF0000")  
  const [cor_roupa, setcor_roupa] = useState("#FF0000")
  const [cor_roupa_escura, setcor_roupa_escura] = useState("#FF0000")
  const [nome, setnome] = useState("")
  const [classe, setclasse] = useState("")
  const [ subclasse, setsubclasse] = useState("")
  const [raca, setraca] = useState("")
  const [forca, setforca] = useState("")
  const [destreza, setdestreza] = useState("")
  const [constituicao, setconstituicao] = useState("")
  const [inteligencia, setinteligencia] = useState("")
  const [sabedoria, setsabedoria] = useState("")
  const [carisma, setcarisma] = useState("")
  const caracter ={
      "nome":nome,
      "classe":classe,
      "subclasse":subclasse,
      "raca":raca,
      "cor_cabelo":cor_cabelo,
      "cor_pele":cor_pele,
      "cor_roupa":cor_roupa,
      "cor_roupa_escura":cor_roupa_escura,
      "forca":forca,
      "destreza":destreza,
      "constituicao":constituicao,
      "inteligencia":inteligencia,
      "sabedoria":sabedoria,
      "carisma":carisma
  }
  useEffect(()=>{
  },[])
  function selecionar_classe(nome){
    setpergaminho(nome)
    setdescri(classes[nome].descri)
    setarque(classes[nome].arquetipo)
    setimagem(classes[nome].img)
  }
  function selecionar_arquetipo(nome){
    setsubclasse(nome)
  }
  function hexToRgb(hex){
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [ r, g, b ];
  };
  function mudar_pele(e){
    setcor_pele(e)
  }
  function mudar_cabelo(e){
    setcor_cabelo(e)
  }
  function darkenColor(hex, percent) {
    setcor_roupa(hex)
    // Garantir que o valor hexadecimal comece com #
    if (hex[0] === '#') {
      hex = hex.slice(1);
    }
  
    // Converter hex para valores RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Reduzir cada componente RGB para escurecer a cor
    r = Math.max(0, r - (r * percent / 100));
    g = Math.max(0, g - (g * percent / 100));
    b = Math.max(0, b - (b * percent / 100));
  
    // Converter de volta para hex
    r = Math.round(r).toString(16).padStart(2, '0');
    g = Math.round(g).toString(16).padStart(2, '0');
    b = Math.round(b).toString(16).padStart(2, '0');
  
    // Retornar o valor hex escurecido
    setcor_roupa_escura(`#${r}${g}${b}`);
  }

  return (
    <body suppressHydrationWarning>
        <div className={popup?"popup_ok show":"popup_ok"} >
          <div className="pop">
            <p>Atenção</p>
            <p>Pense bem ao escolher sua classe. Pois não podera mudá-la. Deseja escolha essa classe?</p>
            <div className="botoes">
              <div className="button">
                <button onClick={() => {setproximo(3); setpopup(false)}}>Sim</button>
              </div>
              <div className="button">
                <button onClick={() => setpopup(false)} id="n">Não</button>
              </div>
            </div>
          </div>
        </div>
        <div className="inicio">
          <div id={proximo==1?"menu":""} className="menu">
            <div className="classes">
              <p className="titulo">Escolha sua Classe</p>
              <Image alt="icon" src={Linha} width={100} height={70}></Image>
              <div className="lista">{
                Object.keys(classes).map((item, key) => (
                  <div key={key} className="item" id={pergaminho==item?"show": ""} onClick={()=> selecionar_classe(item)} >
                    <Image alt="icon" src={classes[item].img} width={50} height={50} ></Image>
                    <p>{item}</p>
                  </div>
                ))
              }
              </div>
              <div className="button">
                  <button onClick={() => setproximo(2)} >Proximo</button>
              </div>
            </div>
            <div className="descri">
              <Image alt="icon" src={imagem} width={100} height={100}/>
              <p>Descrição</p>
              <p>{descri}</p>
              <p>Sub-Classes:</p>
              {pergaminho ===""?"":
              Object.keys(classes[pergaminho].arquetipo).map((item, key) => (<p className="historia" key={key}><strong>{arque[item].nome}</strong></p>))}
            </div>
          </div>
          <div id={proximo==2?"menu":""} className="menu">
            <div className="classes">
              <p className="titulo">Subclasses de {pergaminho}</p>
              <Image alt="icon" src={Linha} width={100} height={70}></Image>
              <div className="lista">
                {
                  Object.keys(classes[pergaminho].arquetipo).map((item, key) => (
                    <div key={key} className="item" id={subclasse==item?"show": ""} onClick={()=> selecionar_arquetipo(item)} >
                      <Image alt="icon" src={arque[item].img} width={80} height={80} ></Image>
                      <p>{arque[item].nome}</p>
                    </div>
                  ))
                }
              </div>
              <div className="botoes">
                <div  className="button">
                    <button id="n" onClick={() => setproximo(1)} >Voltar</button>
                </div>
                <div className="button">
                    <button onClick={() => setpopup(true)} >Proximo</button>
                </div>
              </div>
            </div>
            <div className="descri">
              <Image alt="image"  src={imagem} width={100} height={100}/>
              <p>Descrição</p>
              <p>{subclasse ==""?"":
              (classes[pergaminho].arquetipo)[subclasse].text}</p>
            </div>
          </div>
          <div id={proximo==3?"menu":""} className="custom">
            <div className="personagem">
            <div className="avatar">
                <Orcs_homen_Monge cor_da_pele={cor_pele} cor_roupa={cor_roupa} cor_cabelo={cor_cabelo} cor_roupa_escura={cor_roupa_escura} ></Orcs_homen_Monge>
              </div>
              </div>
            <div className="opcoes">
              <p className="titulo">Opções</p>
              <div className="cor">
                <div className="colum">
                  <p>Pele</p>
                  <input type="color" onChange={(e) => mudar_pele(e.target.value)}></input>
                </div>
                <div className="colum">
                  <p>Roupa</p>
                  <input type="color" onChange={(e) => darkenColor(e.target.value, 20)}></input>
                </div>
                <div className="colum">
                  <p>Cabelo</p>
                  <input type="color" onChange={(e) => mudar_cabelo(e.target.value)}></input>
                </div>
              </div>
                <div className="selecionar">
                  <p>Barbas</p>
                  <div className="cor">
                    <Image onClick={() => setbarba("barba1")}alt="image" width={40} height={40} src={Barba} ></Image>
                    <Image onClick={() => setbarba("barba2")}alt="image" width={40} height={40} src={Barba2} ></Image>
                    <Image onClick={() => setbarba("barba3")}alt="image" width={40} height={40} src={Barba3} ></Image>
                  </div>
                </div>
                <p>Roupas</p>
                <div className="cor">
                  <Image onClick={() => setroupa("roupa1")}alt="image" width={40} height={40} src={Barba} ></Image>
                  <Image onClick={() => setroupa("roupa2")}alt="image" width={40} height={40} src={Barba2} ></Image>
                  <Image onClick={() => setroupa("roupa3")}alt="image" width={40} height={40} src={Barba3} ></Image>
                </div>
            </div>
          </div>        
        </div>
    </body>
  );
}