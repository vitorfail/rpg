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
  const [pontos_totais, setpontos_totais] = useState(0)
  const [forca, setforca] = useState(0)
  const [destreza, setdestreza] = useState(0)
  const [constituicao, setconstituicao] = useState(0)
  const [inteligencia, setinteligencia] = useState(0)
  const [sabedoria, setsabedoria] = useState(0)
  const [carisma, setcarisma] = useState(0)
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
     setproximo(4)
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
          <div className={proximo==4?"pontos show":"pontos"}>
              <p className="titulo">Distribua Seus Pontos Iniciais</p>
              <p className="total_de_pontos">{pontos_totais}pts</p>
              <div className="distribuicao_pontos">
                <div className="cont">
                  <p>{forca}</p>
                  <p>-5</p>
                </div>
                <div className="cont">
                  <p>{destreza}</p>
                  <p>-5</p>
                </div>
                <div className="cont">
                  <p>{constituicao}</p>
                  <p>-5</p>
                </div>
                <div className="cont">
                  <p>{inteligencia}</p>
                  <p>-5</p>
                </div>
                <div className="cont">
                  <p>{sabedoria}</p>
                  <p>-5</p>
                </div>
                <div className="cont">
                  <p>{carisma}</p>
                  <p>-5</p>
                </div>
              </div>
            </div>
          <div id={proximo==3||proximo==4?"menu":""} className="custom">
            <div className="personagem">
            <div className="avatar">
                {PersonagemEscolhido && <PersonagemEscolhido  cor_da_pele={cor_pele} cor_roupa={cor_roupa} cor_cabelo={cor_cabelo} cor_roupa_escuro={cor_roupa_escura} />}
              </div>
              </div>
            <div className={menu_opcoes == true?"opcoes show":"opcoes"}>
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
              <p className="titulo">Sexo</p>
              <div className="cor" id="sexo">
                <div className="check"
                    onClick={() => {
                      setsexo("homem");
                      handleSelectPersonagem("1");
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                      <path d="M2270 5107 c-37 -10 -60 -44 -96 -149 -34 -96 -62 -126 -161 -169 -330 -142 -523 -353 -610 -669 -16 -57 -18 -110 -18 -453 l0 -389 -36 -18 c-81 -42 -143 -147 -143 -242 1 -127 59 -230 440 -778 229 -329 264 -382 264 -401 0 -51 -156 -218 -282 -302 -153 -102 -224 -133 -717 -308 -310 -111 -465 -194 -594 -318 -196 -188 -293 -434 -313 -793 l-7 -118 2563 0 2563 0 -7 118 c-29 521 -227 825 -661 1016 -44 20 -219 86 -390 147 -331 119 -442 168 -572 255 -131 87 -274 241 -276 297 -1 13 55 102 133 212 73 105 186 269 250 365 263 394 324 515 323 646 -1 92 -44 155 -128 185 l-35 13 5 270 c3 149 8 293 10 321 17 182 -62 438 -185 605 -184 247 -683 547 -1060 637 -85 20 -220 31 -260 20z"/>
                      </g>
                      </svg>
                </div>
                  <div className="check"
                        onClick={() => {
                          setsexo("mulher");
                          handleSelectPersonagem("1");
                        }}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M2400 5101 c-231 -50 -451 -168 -626 -334 -181 -171 -293 -340 -378 -569 -80 -214 -104 -366 -116 -719 -12 -369 -36 -562 -101 -807 -60 -229 -156 -424 -271 -547 -49 -55 -62 -88 -48 -131 14 -43 46 -65 170 -119 183 -80 444 -158 658 -196 41 -7 76 -17 78 -23 2 -6 -6 -49 -19 -96 l-22 -85 -456 -115 c-459 -116 -550 -145 -674 -218 -253 -149 -444 -386 -534 -661 -52 -159 -75 -365 -47 -419 35 -67 -180 -62 2546 -62 2726 0 2511 -5 2546 62 14 26 15 49 10 120 -28 404 -245 756 -591 960 -124 73 -215 102 -674 218 l-456 115 -22 85 c-13 47 -21 90 -19 96 2 6 37 16 78 23 203 37 456 111 636 188 141 60 178 84 191 126 15 44 3 77 -47 132 -235 254 -371 770 -372 1405 -1 620 -111 1058 -313 1246 -83 77 -161 111 -288 126 l-104 12 -65 53 c-126 104 -238 141 -450 148 -108 4 -152 1 -220 -14z"/>
</g>
</svg>
                  </div>
              </div>
              <p className="titulo">Raça</p>
              <div className="cor">
                <div className="check"
                          onClick={() => {
                            setsexo("mulher");
                            handleSelectPersonagem("1");
                          }}
                        >
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 471.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M2220 5114 c-367 -43 -607 -133 -865 -324 -228 -169 -395 -371 -515 -624 -82 -172 -122 -305 -155 -518 l-6 -38 -313 0 -313 0 -27 -26 c-29 -29 -34 -77 -13 -106 7 -9 158 -89 335 -177 l322 -161 0 -1039 0 -1039 -25 -54 c-51 -110 -56 -162 -53 -548 l3 -355 24 -34 c13 -18 42 -42 65 -52 39 -18 103 -19 1666 -19 1563 0 1627 1 1666 19 23 10 52 34 65 52 l24 34 3 363 c3 394 0 424 -53 541 l-25 53 0 1039 0 1039 322 161 c177 88 328 168 335 177 21 29 16 77 -13 106 l-27 26 -313 0 -313 0 -6 38 c-36 235 -79 374 -172 557 -215 424 -610 741 -1073 860 -148 38 -429 63 -550 49z m-967 -762 c17 -17 55 -41 84 -52 51 -19 78 -20 488 -20 l435 0 0 -29 c0 -37 -36 -90 -80 -115 -32 -19 -54 -21 -285 -24 -239 -3 -251 -4 -273 -25 -12 -11 -25 -38 -28 -58 -11 -66 -33 -77 -166 -81 -107 -3 -119 -5 -142 -27 -30 -28 -34 -75 -11 -109 10 -13 39 -28 71 -38 47 -13 58 -21 70 -49 16 -40 7 -75 -28 -99 -19 -14 -60 -16 -280 -16 -156 0 -258 4 -258 9 0 38 46 238 72 309 58 165 152 339 241 445 36 43 41 47 50 30 5 -10 23 -33 40 -51z m2347 -62 c102 -150 186 -349 226 -538 13 -61 24 -119 24 -127 0 -13 -36 -15 -259 -15 -242 0 -260 1 -283 20 -31 24 -39 59 -22 98 10 24 23 33 68 46 32 10 61 25 71 38 23 34 19 81 -11 109 -23 22 -35 24 -142 27 -134 4 -155 15 -166 82 -12 77 -16 78 -300 82 -232 3 -254 5 -286 24 -44 25 -80 78 -80 115 l0 29 435 0 c413 0 437 1 489 20 53 20 125 84 126 113 1 16 61 -52 110 -123z m-2671 -1279 l78 -40 6 -158 c3 -87 13 -191 22 -233 83 -377 329 -713 653 -892 l72 -40 0 -154 0 -154 -332 0 c-370 1 -399 -3 -520 -64 l-68 -34 0 904 c0 497 2 904 5 904 3 0 41 -18 84 -39z m2931 -865 l0 -904 -67 34 c-122 61 -151 65 -520 64 l-333 0 0 154 0 154 68 37 c230 126 448 361 557 601 84 185 114 315 122 527 l6 158 76 39 c42 21 79 39 84 40 4 0 7 -407 7 -904z"/>
                    </g>
                    </svg>
                </div>
                <div className="check"
                          onClick={() => {
                            setsexo("mulher");
                            handleSelectPersonagem("1");
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 130.000000 142.000000" preserveAspectRatio="xMidYMid meet">

                          <g transform="translate(0.000000,142.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                          <path d="M454 1406 c-181 -35 -265 -142 -295 -377 -7 -49 -15 -89 -20 -89 -16 0 -68 52 -99 100 -18 28 -34 49 -35 48 -2 -2 1 -46 6 -98 9 -87 14 -105 65 -206 63 -124 59 -91 38 -308 -11 -119 33 -242 118 -327 87 -87 210 -136 368 -146 273 -16 480 90 561 287 24 61 30 171 14 308 l-8 73 57 112 c52 103 57 119 64 207 5 52 8 96 7 98 -1 1 -17 -20 -35 -48 -31 -48 -83 -100 -99 -100 -5 0 -13 40 -20 88 -27 212 -105 327 -251 368 -76 22 -343 28 -436 10z m576 -500 c0 -2 -15 -13 -34 -24 -27 -16 -35 -29 -41 -60 -8 -48 -16 -56 -74 -72 -56 -15 -94 0 -115 45 -21 43 -21 42 17 37 21 -2 61 8 112 28 44 18 91 36 105 40 14 5 26 9 28 9 1 1 2 -1 2 -3z m-650 -41 c47 -19 100 -35 118 -35 36 0 40 -13 16 -48 -26 -38 -49 -44 -109 -32 l-55 11 -16 55 c-11 39 -23 58 -42 69 -50 27 2 15 88 -20z m-51 -266 c54 -130 54 -130 34 -150 -10 -11 -35 -22 -55 -25 -34 -6 -36 -5 -53 37 -9 24 -17 71 -18 104 0 61 19 165 31 165 4 0 31 -59 61 -131z m721 64 c22 -105 0 -233 -42 -241 -10 -2 -34 4 -54 14 -30 15 -35 21 -31 43 8 44 99 251 108 246 4 -3 13 -31 19 -62z m-420 -54 l0 -50 -37 3 c-44 4 -54 24 -19 38 15 5 31 21 38 35 6 14 13 25 15 25 1 0 3 -23 3 -51z m86 -10 c35 -13 25 -33 -19 -37 l-37 -3 0 53 1 53 15 -28 c8 -15 26 -32 40 -38z"/>
                          </g>
                          </svg>                
                </div>
                <div className="check"
                          onClick={() => {
                            setsexo("mulher");
                            handleSelectPersonagem("1");
                          }}>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M1112 2550 c-174 -32 -226 -130 -102 -192 143 -72 501 -57 586 23 56 53 16 122 -89 155 -62 19 -315 28 -395 14z m297 -80 c34 -6 77 -17 95 -24 l31 -13 -44 -12 c-117 -33 -344 -31 -423 3 l-33 14 30 11 c70 28 236 38 344 21z"/>
                            <path d="M1231 2122 c-19 -9 -43 -29 -53 -43 -23 -30 -33 -116 -24 -193 6 -46 14 -63 41 -90 44 -44 86 -52 141 -26 59 29 74 66 74 177 0 103 -17 146 -71 175 -42 23 -65 23 -108 0z"/>
                            <path d="M495 1866 c-80 -25 -147 -83 -189 -163 -14 -28 -246 -1055 -246 -1090 0 -16 63 -16 109 0 19 7 43 24 54 38 12 17 45 136 91 330 l72 304 38 -2 c22 -2 41 -4 43 -6 3 -3 -121 -544 -132 -574 -3 -9 10 -13 45 -13 41 0 55 5 83 30 31 27 39 46 76 183 66 237 58 220 94 213 17 -4 35 -10 40 -15 5 -5 -1 -43 -13 -87 -12 -44 -24 -88 -26 -99 -3 -11 16 12 41 50 121 185 160 283 175 438 6 56 12 116 15 132 5 30 2 33 -107 97 -62 36 -123 69 -135 73 -19 5 -23 14 -23 46 0 36 2 39 28 39 17 0 81 -31 164 -80 l135 -80 47 21 48 21 -133 81 c-74 44 -159 91 -189 103 -62 26 -141 30 -205 10z"/>
                            <path d="M1884 1866 c-35 -11 -301 -163 -328 -187 -4 -4 13 -16 38 -28 l47 -20 112 67 c176 106 200 113 211 61 9 -45 8 -46 -18 -53 -14 -3 -74 -36 -134 -72 l-110 -66 4 -76 c13 -204 40 -290 146 -465 l79 -132 -46 -43 c-43 -41 -45 -45 -28 -58 19 -14 100 -30 109 -22 2 3 -15 77 -39 164 -25 88 -42 162 -38 166 3 3 22 9 41 13 l35 6 44 -163 c55 -205 62 -223 103 -248 28 -17 118 -29 118 -16 0 2 -29 128 -65 280 -36 152 -65 282 -65 290 0 12 66 33 76 24 2 -3 35 -139 74 -304 41 -173 78 -310 88 -324 26 -35 79 -60 130 -60 37 0 43 3 38 18 -3 9 -55 247 -116 527 -74 342 -119 527 -136 562 -28 58 -82 111 -146 144 -53 27 -164 35 -224 15z"/>
                            <path d="M1198 1656 c-2 -14 -29 -28 -111 -56 -60 -20 -115 -44 -124 -53 -11 -11 -18 -46 -24 -114 -14 -176 -46 -274 -139 -428 -68 -111 -69 -105 25 -150 90 -43 95 -41 121 45 38 122 63 257 74 401 5 74 10 137 10 142 0 4 19 7 42 7 l41 0 -6 -127 c-14 -278 -65 -460 -227 -814 -62 -135 -68 -152 -59 -184 11 -38 51 -75 81 -75 11 0 36 8 56 17 27 13 37 14 40 5 2 -7 15 -26 29 -42 32 -39 89 -42 129 -6 l28 23 32 -33 c45 -48 94 -48 136 1 l31 34 29 -24 c40 -34 91 -34 123 1 13 14 27 34 30 44 5 17 7 17 42 -1 45 -23 56 -23 93 -4 20 10 33 28 41 55 12 39 10 44 -71 222 -148 327 -197 509 -215 801 l-7 107 46 0 46 0 0 -77 c0 -132 30 -310 77 -465 30 -100 28 -99 131 -50 82 40 82 39 18 144 -94 157 -128 262 -141 435 -9 114 -16 121 -151 166 -76 26 -100 38 -102 53 -2 17 -11 19 -87 19 -75 0 -85 -2 -87 -19z"/>
                            <path d="M611 834 c-7 -30 -10 -58 -8 -61 9 -8 84 8 104 22 17 13 15 17 -27 54 -25 22 -48 40 -51 41 -3 0 -11 -25 -18 -56z"/>
                            <path d="M730 179 c-16 -35 -26 -67 -22 -71 16 -16 175 -60 282 -79 146 -25 407 -27 560 -5 115 18 310 73 310 89 0 18 -53 127 -62 127 -5 0 -11 -7 -14 -15 -12 -29 -72 -57 -126 -57 -40 1 -58 -5 -85 -25 -37 -29 -111 -41 -153 -25 -18 7 -35 4 -65 -9 -52 -24 -101 -24 -149 0 -28 15 -44 17 -63 10 -13 -5 -38 -9 -55 -9 -34 0 -118 36 -118 51 0 4 -24 8 -54 8 -58 -1 -86 10 -128 49 l-27 25 -31 -64z"/>
                            </g>
                            </svg>
                </div>
                <div className="check"
                          onClick={() => {
                            setsexo("mulher");
                            handleSelectPersonagem("1");
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M825 4935 c-38 -37 -34 -81 12 -119 135 -112 208 -212 254 -346 18 -53 23 -97 28 -241 6 -172 7 -177 39 -242 60 -122 157 -177 312 -177 55 0 104 -6 124 -14 42 -17 82 -67 112 -139 l24 -56 -34 -69 c-19 -37 -43 -96 -52 -130 -17 -60 -18 -62 -38 -47 -53 40 -146 76 -209 82 -61 5 -67 4 -92 -21 l-27 -27 4 -222 3 -222 32 -67 c42 -90 100 -150 186 -193 38 -19 76 -35 83 -35 9 0 14 -12 14 -35 0 -19 -4 -35 -10 -35 -16 0 -132 46 -190 75 -165 84 -342 251 -414 392 -16 31 -15 32 13 52 77 55 103 192 56 288 -29 58 -45 74 -105 106 -55 29 -64 60 -57 197 6 117 24 167 117 325 80 134 88 170 43 205 -38 30 -72 23 -211 -46 -101 -49 -126 -66 -196 -138 -134 -135 -194 -264 -203 -437 l-5 -95 -36 -20 c-50 -26 -98 -93 -111 -154 -22 -102 27 -208 119 -260 42 -24 55 -25 220 -28 l175 -4 42 -73 c53 -91 147 -209 221 -276 131 -117 319 -221 476 -262 l86 -22 16 -55 c21 -73 84 -198 138 -274 52 -73 165 -182 240 -232 50 -33 53 -38 46 -63 -20 -69 -78 -138 -139 -164 -14 -6 -122 -14 -246 -17 -197 -7 -228 -10 -297 -32 -118 -39 -203 -92 -294 -182 -90 -90 -142 -174 -182 -294 -26 -77 -26 -78 -30 -474 -2 -286 0 -403 8 -418 22 -41 66 -50 211 -44 309 12 2615 16 2796 4 213 -14 286 -8 320 27 l24 23 -3 403 -4 402 -27 80 c-38 116 -91 199 -182 290 -92 92 -176 144 -290 182 -73 23 -99 26 -300 32 -218 6 -221 6 -275 35 -78 41 -116 72 -134 111 -9 18 -16 37 -16 43 0 5 27 26 59 46 124 76 272 239 341 376 13 25 35 78 50 119 l27 75 89 23 c160 43 345 145 476 262 75 68 169 186 221 277 l42 74 144 -2 144 -3 28 -105 c50 -183 106 -479 129 -675 12 -104 27 -201 34 -215 24 -50 101 -52 133 -4 15 23 15 37 4 152 -25 244 -93 609 -155 821 l-24 83 33 43 c44 59 61 129 45 195 -15 61 -57 122 -109 154 l-38 24 -6 94 c-9 171 -70 301 -204 435 -71 72 -95 89 -197 138 -145 70 -175 76 -210 42 -41 -41 -34 -71 44 -202 93 -158 111 -208 117 -325 7 -137 -2 -168 -57 -197 -60 -32 -76 -48 -105 -106 -47 -96 -21 -233 56 -288 28 -20 29 -21 13 -52 -52 -101 -195 -257 -304 -328 -91 -60 -262 -139 -302 -139 -4 0 -8 16 -8 35 0 23 5 35 14 35 7 0 45 16 83 35 86 43 144 103 186 193 l32 67 3 222 4 222 -27 27 c-25 25 -31 26 -92 21 -66 -7 -153 -40 -200 -77 l-27 -21 -26 78 c-14 43 -39 102 -53 130 l-27 53 30 67 c55 120 92 143 225 141 44 -1 99 4 122 11 60 17 133 70 170 125 50 73 63 132 63 275 0 156 18 242 70 349 41 81 112 165 213 248 46 39 50 81 11 121 -25 25 -29 26 -112 20 -272 -20 -523 -182 -641 -414 -26 -53 -26 -73 0 -107 18 -23 28 -27 63 -24 39 3 43 6 98 88 65 98 147 176 233 222 l59 31 -22 -34 c-93 -141 -132 -288 -132 -501 0 -123 -8 -158 -43 -196 -41 -44 -76 -55 -166 -53 -101 2 -170 -16 -229 -59 -59 -42 -92 -93 -152 -229 -29 -66 -63 -130 -76 -142 -51 -48 -140 -41 -191 15 -48 52 -45 95 18 253 62 157 85 198 142 250 91 84 200 120 328 109 75 -7 80 -6 104 18 51 51 23 121 -55 137 -214 41 -453 -65 -574 -253 l-35 -55 -69 1 c-64 0 -78 -4 -163 -47 -52 -26 -105 -47 -119 -47 -14 0 -67 21 -118 47 -85 43 -98 46 -165 46 l-72 -1 -30 50 c-44 73 -152 171 -229 208 -71 34 -176 60 -243 60 l-41 0 -22 68 c-43 132 -97 219 -200 322 -133 133 -242 192 -418 226 -114 22 -168 19 -197 -11z m464 -283 c101 -82 174 -205 216 -362 32 -125 42 -133 146 -124 162 14 305 -54 388 -184 48 -76 131 -295 131 -347 0 -109 -145 -170 -225 -95 -13 12 -49 80 -80 151 -67 150 -110 205 -193 246 -50 25 -69 28 -164 30 -113 2 -145 12 -185 55 -35 38 -43 73 -43 201 -1 141 -17 243 -54 341 -24 63 -39 92 -85 166 -15 24 -14 23 44 -9 33 -18 80 -49 104 -69z m-528 -774 c-23 -65 -26 -88 -26 -216 l0 -143 -70 3 -70 3 3 55 c7 116 58 239 136 323 23 26 45 47 48 47 2 0 -7 -33 -21 -72z m3640 7 c70 -85 116 -197 120 -295 3 -72 5 -70 -68 -70 l-68 0 0 143 c0 126 -3 150 -26 214 -29 82 -20 83 42 8z m-2878 -677 c67 -67 77 -102 77 -262 0 -150 -4 -153 -83 -73 -67 66 -77 101 -77 261 0 150 4 153 83 74z m2157 -74 c0 -160 -10 -195 -77 -261 -79 -80 -83 -77 -83 73 0 160 10 195 77 262 79 79 83 76 83 -74z m-1449 -240 c44 -20 60 -33 68 -55 17 -49 7 -60 -43 -43 -51 18 -104 60 -130 104 l-19 33 33 -6 c18 -4 59 -19 91 -33z m762 5 c-25 -43 -79 -86 -130 -103 -39 -13 -43 -13 -48 4 -11 34 15 67 74 93 72 32 82 35 104 36 17 1 17 0 0 -30z m-1387 -1659 c113 -94 209 -119 464 -120 94 0 164 -5 200 -15 79 -21 189 -78 243 -126 l47 -41 47 41 c54 48 164 105 243 126 36 10 106 15 200 15 257 1 341 22 454 112 45 37 67 48 94 48 50 0 82 -32 82 -83 0 -33 -6 -46 -37 -75 -54 -50 -133 -99 -211 -129 -61 -24 -85 -27 -282 -34 -170 -5 -228 -11 -276 -27 -79 -25 -165 -82 -211 -141 -51 -64 -61 -71 -106 -71 -32 0 -44 6 -65 32 -81 98 -146 145 -244 179 -53 18 -97 23 -278 29 -197 6 -220 9 -282 33 -78 30 -157 79 -210 129 -31 29 -38 42 -38 74 0 52 31 84 81 84 28 0 48 -9 85 -40z"/>
                            <path d="M335 2898 c-29 -26 -47 -92 -90 -325 -135 -739 -106 -1496 85 -2218 42 -161 62 -195 116 -195 32 0 74 42 74 74 0 13 -20 102 -45 198 -186 722 -203 1524 -49 2227 40 182 41 205 11 235 -32 32 -68 33 -102 4z"/>
                            <path d="M645 2818 c-20 -18 -30 -43 -45 -108 -27 -121 -67 -373 -84 -527 -20 -174 -41 -562 -32 -596 15 -63 87 -87 129 -44 22 21 24 35 35 258 13 252 29 412 63 632 l22 138 86 -84 c47 -46 115 -105 151 -131 36 -27 66 -49 68 -51 2 -1 -13 -40 -32 -86 -66 -159 -96 -323 -95 -506 1 -169 10 -221 43 -250 33 -28 66 -29 97 -4 23 18 23 21 24 232 1 197 3 221 27 309 35 128 71 215 89 213 8 -1 52 -17 99 -36 47 -19 92 -37 101 -40 15 -5 15 -11 3 -58 -18 -70 -18 -229 1 -299 24 -93 89 -127 142 -74 24 24 25 29 17 77 -5 29 -9 102 -9 162 0 101 3 115 29 173 28 61 29 64 13 97 -14 30 -25 36 -114 65 -191 62 -347 148 -493 273 -69 59 -172 174 -213 238 -17 26 -56 49 -82 49 -8 0 -26 -10 -40 -22z"/>
                            <path d="M4392 2827 c-12 -7 -30 -24 -39 -37 -48 -70 -146 -180 -213 -237 -145 -125 -283 -202 -475 -267 -98 -34 -122 -46 -135 -68 -13 -23 -13 -32 -1 -60 49 -119 53 -141 47 -243 -3 -55 -9 -121 -12 -146 -5 -42 -3 -48 21 -68 60 -46 118 -12 141 84 18 77 18 225 0 294 -12 47 -12 53 3 58 9 3 54 21 101 40 47 19 91 35 99 36 18 2 54 -85 89 -213 24 -88 26 -111 27 -308 0 -212 0 -214 24 -233 31 -25 64 -24 97 4 33 29 42 81 43 250 1 183 -29 347 -95 506 -19 46 -34 85 -32 86 2 2 32 24 68 51 36 26 104 85 151 131 l86 84 22 -138 c53 -348 65 -526 65 -943 1 -455 -26 -762 -95 -1107 -29 -142 -29 -153 -15 -182 26 -50 100 -55 130 -8 16 24 53 210 85 432 87 603 79 1278 -24 1884 -38 228 -51 282 -72 302 -25 24 -63 31 -91 16z"/>
                            <path d="M4825 1815 c-24 -23 -25 -28 -25 -172 -1 -400 -53 -807 -156 -1213 -24 -97 -44 -186 -44 -198 0 -31 43 -72 75 -72 16 0 38 11 54 28 47 46 146 480 190 832 41 320 54 725 26 779 -24 48 -81 56 -120 16z"/>
                            <path d="M513 1336 l-28 -24 3 -124 c5 -240 40 -539 93 -818 26 -132 37 -169 55 -187 29 -29 73 -30 102 -3 31 29 35 56 18 130 -48 206 -92 545 -105 815 -10 187 -10 190 -36 213 -34 29 -67 28 -102 -2z"/>
                            </g>
                            </svg>                
                  </div>
                <div className="check"
                          onClick={() => {
                            setsexo("mulher");
                            handleSelectPersonagem("1");
                          }}>
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                              <path d="M920 4753 c0 -397 3 -422 55 -529 35 -72 94 -145 157 -195 l53 -41 17 86 c50 248 174 493 339 670 l71 76 -69 0 c-38 0 -92 7 -120 15 -101 30 -203 154 -203 248 l0 37 -150 0 -150 0 0 -367z"/>
                              <path d="M2410 5005 l0 -115 150 0 150 0 0 115 0 115 -150 0 -150 0 0 -115z"/>
                              <path d="M3897 5071 c-8 -69 -37 -120 -97 -175 -62 -55 -124 -76 -223 -76 l-69 0 72 -77 c170 -184 295 -436 342 -688 l11 -64 30 17 c48 28 141 136 176 204 58 116 61 137 61 541 l0 367 -149 0 -148 0 -6 -49z"/>
                              <path d="M2275 4856 c-157 -45 -269 -102 -399 -206 -170 -135 -307 -351 -366 -579 -24 -93 -46 -302 -36 -353 l7 -38 464 0 465 0 0 600 0 600 -27 -1 c-16 0 -64 -11 -108 -23z"/>
                              <path d="M2710 4280 l0 -600 465 0 464 0 7 38 c10 51 -12 260 -36 355 -101 386 -403 691 -780 787 -43 11 -88 20 -99 20 l-21 0 0 -600z"/>
                              <path d="M1210 3530 l0 -150 135 0 135 0 0 -455 0 -456 378 3 378 3 49 25 c58 30 112 101 121 161 l7 39 147 0 147 0 7 -39 c9 -60 63 -131 121 -161 l49 -25 378 -3 378 -3 0 456 0 455 135 0 135 0 0 150 0 150 -135 0 -135 0 0 -150 0 -150 -1080 0 -1080 0 0 150 0 150 -135 0 -135 0 0 -150z"/>
                              <path d="M2515 2294 c-22 -19 -67 -48 -100 -65 -109 -53 -162 -59 -567 -59 l-368 0 -2 -97 c-5 -304 10 -453 61 -593 75 -205 248 -403 441 -504 37 -20 183 -81 324 -136 l257 -100 247 96 c136 53 274 110 307 127 264 132 460 393 509 680 14 81 19 208 17 420 l-1 107 -367 0 c-405 0 -459 6 -568 59 -33 17 -79 46 -102 65 -22 20 -43 36 -45 36 -1 -1 -21 -17 -43 -36z"/>
                              <path d="M1233 1116 c-96 -102 -137 -163 -188 -283 -61 -141 -76 -242 -82 -555 l-6 -278 297 0 296 0 0 459 0 460 -55 63 c-31 35 -79 100 -108 145 -29 45 -55 82 -59 83 -3 0 -46 -42 -95 -94z"/>
                              <path d="M3733 1127 c-29 -45 -77 -110 -108 -145 l-55 -63 0 -460 0 -459 295 0 295 0 0 210 c0 231 -11 361 -41 489 -21 92 -78 223 -130 298 -34 49 -187 213 -198 213 -3 -1 -29 -38 -58 -83z"/>
                              <path d="M1850 350 l0 -350 710 0 710 0 0 350 c0 193 -2 350 -5 350 -3 0 -27 -11 -53 -23 -26 -13 -183 -77 -349 -142 l-302 -117 -263 102 c-145 57 -303 120 -352 141 -49 22 -91 39 -93 39 -2 0 -3 -157 -3 -350z"/>
                              </g>
                              </svg>                
                </div>

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
