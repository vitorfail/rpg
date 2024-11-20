'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
import "./page.css"
import Barba from "./barba.png"
import Barba2 from "./barba2.png"
import Barba3 from "./barba3.png"
import Espada from "./espada.png"
import classes from "../jsons/classes.json"
import Linha from "./linha.png"
import { useEffect, useState } from "react";


export default function Home() {
  const [descri, setdescri] = useState("")
  const[pergaminho, setpergaminho] = useState("Barbaro")
  const [arque, setarque] = useState(classes["Barbaro"].arquetipo)
  const [imagem,setimagem] = useState("")
  const [popup,setpopup] = useState(false)
  const [ proximo, setproximo] = useState(1)
  const [ barba, setbarba] = useState("")
  const [ roupa, setroupa] = useState("")
  const [ menu_opcoes, setmenu_opcoes] = useState(false)
  //personagem
  const [cor_cabelo, setcor_cabelo] =useState([0,0,0])
  const [cor_pele, setcor_pele] =useState("#FF0000")  
  const [cor_roupa, setcor_roupa] = useState("#FF0000")
  const [cor_roupa_escura, setcor_roupa_escura] = useState("#FF0000")
  const [nome, setnome] = useState("")
  const [classe, setclasse] = useState("")
  const [ subclasse, setsubclasse] = useState("")
  const [raca, setraca] = useState("orcs")
  const [sexo, setsexo] = useState("mulher")
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
    r = Math.max(0, r - (r * percent / 200));
    g = Math.max(0, g - (g * percent / 10));
    b = Math.max(0, b - (b * percent / 500));
  
    // Converter de volta para hex
    r = Math.round(r).toString(16).padStart(2, '0');
    g = Math.round(g).toString(16).padStart(2, '0');
    b = Math.round(b).toString(16).padStart(2, '0');
  
    // Retornar o valor hex escurecido
    setcor_roupa_escura("#"+String(r)+String(g)+String(b));
  }
  function escolher(){
     setmenu_opcoes(true)
  }
  const [personagem, setPersonagem] = useState(null);

  // Função para importar dinamicamente o personagem baseado no número
  const carregarPersonagem = (num) => {
    return dynamic(() => import(`../components/personagens/${raca}/${sexo}/${pergaminho}`));
  };

  // Função para lidar com a escolha do personagem
  const handleSelectPersonagem = (num) => {
    setPersonagem(num);
  };

  const PersonagemEscolhido = personagem ? carregarPersonagem(personagem) : null;

  return (
    <body suppressHydrationWarning>
        <div className={popup?"popup_ok show":"popup_ok"} >
          <div className="pop">
            <p>Atenção</p>
            <p>Pense bem ao escolher sua classe. Pois não podera mudá-la. Deseja escolha essa classe?</p>
            <div className="botoes">
              <div className="button">
                <button onClick={() => {setproximo(3); setpopup(false); handleSelectPersonagem("1")}}>Sim</button>
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
                {PersonagemEscolhido && <PersonagemEscolhido  cor_da_pele={cor_pele} cor_roupa={cor_roupa} cor_cabelo={cor_cabelo} cor_roupa_escuro={cor_roupa_escura} />}
              </div>
              </div>
            <div className={menu_opcoes == true?"opcoes.show":"opcoes"}>
              <p className="titulo">Opções</p>
              <div className="cor">
                <div className="colum">
                  <p>Pele</p>
                  <input type="color" onChange={(e) => mudar_pele(e.target.value)} value={cor_pele}></input>
                </div>
                <div className="colum">
                  <p>Roupa</p>
                  <input type="color" onChange={(e) => darkenColor(e.target.value, 20)} value={cor_roupa}></input>
                </div>
                <div className="colum">
                  <p>Cabelo</p>
                  <input type="color" onChange={(e) => mudar_cabelo(e.target.value)} value={cor_cabelo} ></input>
                </div>
              </div>
              <div className="cor" id="sexo">
                <div
                    type="checkbox"
                    checked={sexo =="homem"? true:false}
                    onChange={() => {
                      setsexo("homem");
                      handleSelectPersonagem("1");
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                      <path d="M2270 5107 c-37 -10 -60 -44 -96 -149 -34 -96 -62 -126 -161 -169 -330 -142 -523 -353 -610 -669 -16 -57 -18 -110 -18 -453 l0 -389 -36 -18 c-81 -42 -143 -147 -143 -242 1 -127 59 -230 440 -778 229 -329 264 -382 264 -401 0 -51 -156 -218 -282 -302 -153 -102 -224 -133 -717 -308 -310 -111 -465 -194 -594 -318 -196 -188 -293 -434 -313 -793 l-7 -118 2563 0 2563 0 -7 118 c-29 521 -227 825 -661 1016 -44 20 -219 86 -390 147 -331 119 -442 168 -572 255 -131 87 -274 241 -276 297 -1 13 55 102 133 212 73 105 186 269 250 365 263 394 324 515 323 646 -1 92 -44 155 -128 185 l-35 13 5 270 c3 149 8 293 10 321 17 182 -62 438 -185 605 -184 247 -683 547 -1060 637 -85 20 -220 31 -260 20z"/>
                      </g>
                      </svg>
                </div>
                  <div
                        type="checkbox"
                        checked={sexo =="mulher"? true:false}
                        onChange={() => {
                          setsexo("mulher");
                          handleSelectPersonagem("1");
                        }}
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M2400 5101 c-231 -50 -451 -168 -626 -334 -181 -171 -293 -340 -378 -569 -80 -214 -104 -366 -116 -719 -12 -369 -36 -562 -101 -807 -60 -229 -156 -424 -271 -547 -49 -55 -62 -88 -48 -131 14 -43 46 -65 170 -119 183 -80 444 -158 658 -196 41 -7 76 -17 78 -23 2 -6 -6 -49 -19 -96 l-22 -85 -456 -115 c-459 -116 -550 -145 -674 -218 -253 -149 -444 -386 -534 -661 -52 -159 -75 -365 -47 -419 35 -67 -180 -62 2546 -62 2726 0 2511 -5 2546 62 14 26 15 49 10 120 -28 404 -245 756 -591 960 -124 73 -215 102 -674 218 l-456 115 -22 85 c-13 47 -21 90 -19 96 2 6 37 16 78 23 203 37 456 111 636 188 141 60 178 84 191 126 15 44 3 77 -47 132 -235 254 -371 770 -372 1405 -1 620 -111 1058 -313 1246 -83 77 -161 111 -288 126 l-104 12 -65 53 c-126 104 -238 141 -450 148 -108 4 -152 1 -220 -14z"/>
</g>
</svg>
                  </div>
              <div className="cor">
              <label><input type="checkbox" checked={sexo =="mulher"? true:false} onChange={() => { setsexo("mulher"); handleSelectPersonagem("1"); }}/>
                  Humans
                </label>
                <label><input type="checkbox" checked={sexo =="mulher"? true:false} onChange={() => { setsexo("mulher"); handleSelectPersonagem("1"); }}/>
                  Orcs
                </label>
                <label><input type="checkbox" checked={sexo =="mulher"? true:false} onChange={() => { setsexo("mulher"); handleSelectPersonagem("1"); }}/>
                  Elfos
                </label>
                <label><input type="checkbox" checked={sexo =="mulher"? true:false} onChange={() => { setsexo("mulher"); handleSelectPersonagem("1"); }}/>
                  Anjos
                </label>
              </div>
              <div className="cor">
                <div className="button">
                    <button onClick={() => escolher()} >Escolher</button>
                </div>
              </div>
            </div>
          </div>        
        </div>
    </body>
  );
}
