'use client';
import Image from "next/image";
import "./page.css"
import Espada from "./espada.png"
import Barbaro from "./barbaro.png"
import Artifice from "./artifice.png"
import Bardo from "./bardo.png"
import Bruxo from "./bruxo.png"
import Clerigo from "./clerego.png"
import Druida from "./druida.png"
import Guardiao from "./guardiao.png"
import Guerreiro from "./guerreiro.png"
import Ladino from "./ladino.png"
import Monge from "./monge.png"
import Mago from "./mago.png"
import Paladino from "./paladino.png"
import Linha from "./linha.png"
import { useState } from "react";



export default function Home() {
  const [descri, setdescri] = useState("")
  const[pergaminho, setpergaminho] = useState("")
  const [arque, setarque] = useState("")
  const [imagem,setimagem] = useState("")
  const [popup,setpopup] = useState(false)
  function selecionar_classe(nome){
    setpergaminho(nome)
    setdescri(classes[nome].descri)
    setarque(classes[nome].arquetipo)
    setimagem(classes[nome].img)

  }
  const classes_menu =[

  ]
  const classes ={
    "Barbaro":{
      descri:
        `Os Bárbaros podem ser guerreiros que carregam a brutalidade da sobrevivência na natureza ou até mesmo ser o possuidor de conhecimento de espíritos ancestrais. Eles são lutadores 
        bastante poderosos, que utilizam da fúria que faz seu poder e força aumentarem em combate.
        Além de causarem muito dano, os Bárbaros também conseguem aguentar dano, sendo muitas vezes 
        os tanques da equipe, eles também podem sentir o perigo através dos seus sentidos.`,
        arquetipo:`Caminho do guerreiro Totemico,\n Caminho do Berseker,
         Caminho do Battlerager, Caminho do Guardião Ancestral, Caminho do Arauto Ancestral, Caminho do Zelote, Caminho da Besta,
         Caminho da Magia Selvagem`,
         img:Barbaro
    },
    "Artifice":{
      descri:
        `A classe Artífice são personagens geniais, sendo sempre inventores, 
        metalúrgicos e/ou alquimistas que utilizam seus conhecimentos de ciência e 
        tecnologia com magia para criar seus equipamentos.
        Enquanto classes de combate utilizam armas corpo a corpo e 
        classes conjuradoras usa a magia, o Artífice auxiliará sua equipe usando armas de fogo, bombas e até mesmo 
        autômatos para o auxiliar em combate.`,
      arquetipo: "Alquimista, Artilheiro, Ferreiro de Batalha, Ameiro",
      img:Artifice
    },
    "Bardo":{
      descri:`Artistas conhecedores das histórias do mundo, Bardos são capazes de realizar magia a partir de suas 
      obras, seja com música, pintura ou até mesmo um breve discurso. Bardos são especialistas na manipulação 
      não apenas mágica, mas também em tocar o coração dos alvos das mais variadas formas a partir de suas técnicas.`,
      erquetipo:`Escola de Lore,
      Escola do Valor, Escola do Glamour, 
      Escola das Espadas, Escola dos Sussurros, 
      Escola da Eloquência, Escola da Criação, Escola dos Espíritos,`,
      img:Bardo
    },
    "Bruxo":{
      descri:`Entidades ancestrais aguardam nos limites da compreensão mortal aqueles com coragem
       o suficiente para adquirir poder e, a partir de um pacto, você foi um deles.
      Bruxos se tornam conjuradores arcanos a partir de pactos o que lhes dão além 
      das magias capacidades únicas e úteis tanto ofensivamente, quanto para suporte.`,
      arquetipo:`A Arquifada,
      O Demônio,
      O Grande Velho,
      O Imortal,
      O Celeste,
      A Lâmina Hexagonal,
      O Insondável, O Gênio,
      O morto-vivo`,
      img:Bruxo
    },
    "Clerigo":{
      descri:`Servos dos Deuses e outras entidades Divinas, Clérigos são capazes 
      de realizar verdadeiros milagres por onde passam.
      Dependendo do cenário utilizado, podem tomar as mais variadas formas,
       pois seus poderes e motivações são ligados a cosmogonia de cada universo, 
       indo de servos de deuses bondosos ou completamente malignos.`,
       arquetipo:`
       Domínio do Conhecimento Domínio da Vida,
        Domínio Leve,
        Domínio da Natureza, Domínio da Tempestade, Domínio da Enganação, Domínio da Guerra,
        Domínio da Morte,
        Domínio Arcano, Domínio Forja,
        Domínio Sepultura,
        Domínio de Ordem, Domínio de Paz, Domínio Crepuscular`,
        img:Clerigo
    },
    "Druida":{
      descri:`Sábios e poderosos, druidas são conjurados divinos conectados diretamente com a natureza, 
      capaz de controlá-la ou tornar-se parte dela como animais, monstros e plantas diversas.
      Druidas misturam a versatilidade de quem controla a natureza, mas também as penalidades de
       quem não aceita a evolução trazida pela sociedade que afeta e muitas vezes destrói a origem de seus poderes.`,
       arquetipo:`Círculo Druida da Terra,
       Círculo Druida da Lua,
       Círculo dos Sonhos,
       Círculo do Pastor,
       Círculo de Esporos, Círculo de Estrelas,
       Círculo de Fogo Selvagem`,
       img:Druida
    },
    "Guardiao":{
      descri:`Também chamado de Ranger em outras edições, os Guardiões são especialistas em terrenos e alvos específicos.
      O Guardião é um aliado versátil e um inimigo mortal capaz de atravessar a natureza selvagem com 
      facilidade e caçar seus inimigos marcados com técnica e eficiência.`,
      arquetipo:`Caçador,
      Fera,
      Horizonte Walker,
      Matador de Monstros,
      Perseguidor da escuridão,
      Fey Andarilho,
      Enxameador`,
      img:Guardiao
    },
    "Guerreiro":{
      descri:`Treinados em combate com as mais variadas armas e equipamentos, os Guerreiros são, 
      provavelmente, a mais comum das classes existentes em D&D, pois englobam todos os aventureiros
       que não entrem nas demais categorias.
      Um guerreiro é tecnicamente a classe mais simples para novatos e uma das mais versáteis, 
      capaz de se manter diversificado ou se especializar no uso de uma arma ou manobra específica.`,
      arquetipo:`Mestre de batalha,
      Campeão,
      Cavaleiro Ancião,
      Cavaleiro Dragão Roxo,
      Samurai,
      Cavalheiro,
      Arcano
      ,Eco Cavaleiro,
      Guerreiro Psíquico,
      Guerreiro Cavaleiro Rúnico`,
      img:Guerreiro
    },
    "Ladino":{
      descri:`Mestres da furtividade, dos talentos ocultos e até mesmo do assassinato, 
      muitos tratam o ladino como simples criminosos quando, na verdade, são 
      aventureiros fundamentais para qualquer grupo.
      Ladinos possuem um conjunto próprio de técnicas focadas em arrombamento, 
      manuseio de armadilhas, escalada, furto e técnicas que peguem o alvo desprevenido que sim, podem ser usadas para o mau caso queiram, 
      mas também criam exploradores e aventureiros vitais para qualquer grupo dentro e fora de masmorras.`,
      arquetipo:`Malandro Arcano, Assassino,
      Ladrão,
      Cérebro, Espadachim, Inquisitivo,
      Escoteiro,
      Fantasma,
      Faca da Alma`,
      img:Ladino
    },
    "Monge":{
      descri:`Mestres no combate desarmado e no uso do misterioso Chi em habilidades únicas!
      O Monge é uma classe que foca sua força em rajadas de múltiplos ataques desarmados cada vez 
      mais fortes, além de técnicas que misturam artes marciais com o consumo de Chi, uma energia 
      que apenas ele possui no jogo.`,
      arquetipo:`
        Ordem dos Escribas, 
        Caminho da Mão Aberta,
        Caminho da Sombra,
        Caminho dos Quatro Elementos,
        Caminho da Longa Morte,
        Caminho da Alma do Sol,
        Caminho do Mestre Bêbado,
        Caminho do Kensei, Caminho da Misericórdia,
        Caminho do Eu Astral`,
        img:Monge
    },
    "Mago":{
      descri:`Estudiosos dedicados às regras arcanas, magos são os mais famosos usuários 
      de magia, graças ao grande poder e versatilidade capazes de adquirir com o tempo.

      Magos misturam os diferentes caminhos da magia com as restrições de precisar decorá-las
       diariamente, um equilíbrio que torna o Mago poderoso, mas também uma posição complexa para qualquer equipe.`,
      arquetipo:`
        Escola de Abjuração,
        Escola de Conjuração,
        Escola de Adivinhação,
        Escola de Encantamento,
        Escola de Evocação, Escola de Ilusão, Escola de Necromancia,
        Escola de Transmutação,
        Canto de lâminas,
        Magia de Guerra,
        Cronurgista,
        Graviturgista,
        Ordem dos Escribas`,
        img:Mago
    },
    "Paladino":{
      descri:`Cavaleiros divinos com poderes vindos de entidades ou de um forte juramento, 
      Paladinos podem ser o exemplo perfeito de herói ou de um terrível algoz por onde passarem, 
      mas independente da forma, sempre serão lembrados por quem testemunhar seus poderes.
      Paladinos misturam o uso de armas e armaduras pesadas, montarias
       e poderes divinos advindos de um voto ou código de honra.`,
       arquetipo:`
        Juramento de Devoção, Juramento dos Antigos,
        Juramento da Vingança,
        Perjuro,
        Juramento da Coroa, Juramento da Conquista,
        Juramento de Redenção,
        Juramento de Glória,
        Juramento dos Vigilantes`,
        img:Paladino
    },
  }
  return (
    <body>
        <div className={popup?"popup_ok show":"popup_ok"} >
          <div className="pop">
            <p>Atenção</p>
            <p>Pense bem ao escolher sua classe. Pois não podera mudá-la. Deseja escolha essa classe?</p>
            <div className="botoes">
              <div className="button">
                <button>Sim</button>
              </div>
              <div className="button">
                <button onClick={() => setpopup(false)} id="n">Não</button>
              </div>
            </div>
          </div>
        </div>
        <div className="inicio">
          <div className="menu">
            <div className="classes">
              <p className="titulo">Classes</p>
              <Image src={Linha} width={100} height={70}></Image>
              <div className="lista">
                <div className="item" id={pergaminho=="Artifice"?"show": ""} onClick={()=> selecionar_classe("Artifice")} >
                  <Image src={Artifice} width={80} height={80}layout="fixed" ></Image>
                  <p>Artifice</p>
                </div>
                <div className="item" id={pergaminho=="Barbaro"?"show": ""} onClick={()=> selecionar_classe("Barbaro")} >
                  <Image src={Barbaro} width={80} height={80}layout="fixed" ></Image>
                  <p>Barbaro</p>
                </div>
                <div className="item" id={pergaminho=="Bardo"?"show": ""} onClick={()=> selecionar_classe("Bardo")} >
                  <Image src={Bardo} width={80} height={80} layout="fixed"></Image>
                  <p>Bardo</p>
                </div>
                <div className="item" id={pergaminho=="Bruxo"?"show": ""} onClick={()=> selecionar_classe("Bruxo")} >
                  <Image src={Bruxo} width={80} height={80} layout="fixed"></Image>
                  <p>Bruxo</p>
                </div>
                <div className="item" id={pergaminho=="Clerigo"?"show": ""} onClick={()=> selecionar_classe("Clerigo")} >
                  <Image src={Clerigo} width={70} height={70}></Image>
                  <p>Clerigo</p>
                </div>
                <div className="item" id={pergaminho=="Druida"?"show": ""} onClick={()=> selecionar_classe("Druida")} >
                  <Image src={Druida} width={70} height={70}></Image>
                  <p>Druida</p>
                </div>
                <div className="item" id={pergaminho=="Guardiao"?"show": ""} onClick={()=> selecionar_classe("Guardiao")} >
                  <Image src={Guardiao} width={70} height={70}></Image>
                  <p>Guardião</p>
                </div>
                <div className="item" id={pergaminho=="Guerreiro"?"show": ""} onClick={()=> selecionar_classe("Guerreiro")} >
                  <Image src={Guerreiro} width={70} height={70}></Image>
                  <p>Guerreiro</p>
                </div>
                <div className="item" id={pergaminho=="Ladino"?"show": ""} onClick={()=> selecionar_classe("Ladino")} >
                  <Image src={Ladino} width={70} height={70}></Image>
                  <p>Ladino</p>
                </div>
                <div className="item" id={pergaminho=="Paladino"?"show": ""} onClick={()=> selecionar_classe("Paladino")} >
                  <Image src={Paladino} width={70} height={70}></Image>
                  <p>Paladino</p>
                </div>
                <div className="item" id={pergaminho=="Mago"?"show": ""} onClick={()=> selecionar_classe("Mago")} >
                  <Image src={Mago} width={70} height={70}></Image>
                  <p>Mago</p>
                </div>
                <div className="item" id={pergaminho=="Monge"?"show": ""} onClick={()=> selecionar_classe("Monge")} >
                  <Image src={Monge} width={70} height={70}></Image>
                  <p>Monge</p>
                </div>
              </div>
              <div className="button">
                  <button onClick={() => setpopup(true)} >Escolher</button>
              </div>
            </div>
            <div className="descri">
              <Image  src={imagem} width={100} height={100}/>
              <p>Descrição</p>
              <p>{descri}</p>
              <p>Arquetipos: <strong>{arque}</strong></p>
            </div>
          </div>        
        </div>
    </body>
  );
}
