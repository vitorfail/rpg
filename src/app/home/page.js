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
  const[pergaminho, setpergaminho] = useState("Barbaro")
  const [arque, setarque] = useState("")
  const [imagem,setimagem] = useState("")
  const [popup,setpopup] = useState(false)
  const [ proximo, setproximo] = useState(false)
  const [ subclasse, setsubclasse] = useState("")
  function selecionar_classe(nome){
    setpergaminho(nome)
    setdescri(classes[nome].descri)
    setarque(classes[nome].arquetipo)
    setimagem(classes[nome].img)
    setsubclasse(Object.keys(classes[nome].arquetipo)[0])
    alert(classes[pergaminho].arquetipo["Caminho do guerreiro Totemico"].text)
  }
  function selecionar_arquetipo(nome){
    setsubclasse(nome)

  }

  const classes ={
    "Barbaro":{
      descri:
        `Os Bárbaros podem ser guerreiros que carregam a brutalidade da sobrevivência na natureza ou até mesmo ser o possuidor de conhecimento de espíritos ancestrais. Eles são lutadores 
        bastante poderosos, que utilizam da fúria que faz seu poder e força aumentarem em combate.
        Além de causarem muito dano, os Bárbaros também conseguem aguentar dano, sendo muitas vezes 
        os tanques da equipe, eles também podem sentir o perigo através dos seus sentidos.`,
        arquetipo:{
          "Caminho do guerreiro Totemico":{
            text:`<p>Seu caminho é buscar a sintonia com o mundo natural, concedendo a você uma 
              afinidade com as bestas. A partir do 3° nível, quando você toma esse caminho, 
              você recebe a habilidade de conjurar as magias sentido bestial e falar com animais, 
              mas apenas na forma de rituais. A partir do 3° nível, quando você adota esse caminho, 
              você escolhe um totem espiritual e ganha suas características. 
              Os totêns são <strong>Águia:</strong>, <strong>Urso</strong>, <strong>Lobo</strong> <br></br><br></br>
              <strong>Águia:</strong> Quando estiver em fúria e não estiver vestindo uma armadura pesada, as outras 
              criaturas terão desvantagem nas jogadas de 
              ataque de oportunidade contra você e 
              você pode usar a ação de Disparada como uma 
              ação bônus no seu turno. O espirito da águia torna 
              você um predador que pode vagar pelo meio da briga com facilidade. <br></br><br></br>
              <strong>Lobo:</strong> Você ganha a sensibilidade predatória de um lobo. Você pode rastrear outras criaturas quando estiver 
              viajando a passo rápido e você
               pode se mover furtivamente quando estiver viajando a passo normal. <br></br><br></br>
               <strong>Urso:</strong> Você ganha a força de um urso. Sua capacidade de carga (incluindo carga máxima e capacidade
                de erguer) é dobrada e você tem vantagem em testes 
               de Força realizados para empurrar, puxar, erguer ou quebrar objetos.
               </p>`
          },
          "Caminho do Berseker":{ text:``},
          "Caminho do Battlerager":{ text:``},
          "Caminho do Guardião Ancestral":{ text:``},
          "Caminho do Arauto Ancestral":{ text:``},
          "Caminho do Zelote":{ text:``},
          "Caminho da Besta":{ text:``},
          "Caminho da Magia Selvagem":{ text:``}
        },
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
      arquetipo:{
        "Alquimista":{ text:``},
        "Artilheiro":{ text:``},
        "Ferreiro de Batalha":{ text:``},
        "Ameiro":{ text:``}
      },
      img:Artifice
    },
    "Bardo":{
      descri:`Artistas conhecedores das histórias do mundo, Bardos são capazes de realizar magia a partir de suas 
      obras, seja com música, pintura ou até mesmo um breve discurso. Bardos são especialistas na manipulação 
      não apenas mágica, mas também em tocar o coração dos alvos das mais variadas formas a partir de suas técnicas.`,
      arquetipo:{
        "Escola de Lore":{ text:``},
        "Escola do Valor":{ text:``},
        "Escola do Glamour":{ text:``},
        "Escola das Espadas":{ text:``},
        "Escola dos Sussurros":{ text:``},
        "Escola da Eloquência":{ text:``},
        "Escola da Criação":{ text:``},
        "Escola dos Espíritos":{ text:``}
    },
      img:Bardo
    },
    "Bruxo":{
      descri:`Entidades ancestrais aguardam nos limites da compreensão mortal aqueles com coragem
       o suficiente para adquirir poder e, a partir de um pacto, você foi um deles.
      Bruxos se tornam conjuradores arcanos a partir de pactos o que lhes dão além 
      das magias capacidades únicas e úteis tanto ofensivamente, quanto para suporte.`,
      arquetipo:{
        "A Arquifada":{ text:``},
        "O Demônio":{ text:``},
        "O Grande Velho":{ text:``},
        "O Imortal":{ text:``},
        "O Celeste":{ text:``},
        "A Lâmina Hexagonal":{ text:``},
        "O Insondável":{ text:``},
        "O Gênio":{ text:``},
        "O morto-vivo":{ text:``}
    },
      img:Bruxo
    },
    "Clerigo":{
      descri:`Servos dos Deuses e outras entidades Divinas, Clérigos são capazes 
      de realizar verdadeiros milagres por onde passam.
      Dependendo do cenário utilizado, podem tomar as mais variadas formas,
       pois seus poderes e motivações são ligados a cosmogonia de cada universo, 
       indo de servos de deuses bondosos ou completamente malignos.`,
       arquetipo:{
        "Domínio do Conhecimento":{ text:``},
        "Domínio da Vida":{ text:``},
        "Domínio Leve":{ text:``},
        "Domínio da Natureza":{ text:``},
        "Domínio da Tempestade":{ text:``},
        "Domínio da Enganação":{ text:``},
        "Domínio da Guerra":{ text:``},        
        "Domínio da Morte":{ text:``},
        "Domínio Arcano, Domínio Forja":{ text:``},
        "Domínio Sepultura":{ text:``},
        "Domínio de Ordem":{ text:``},
        "Domínio de Paz, Domínio Crepuscular":{ text:``}

       },
        img:Clerigo
    },
    "Druida":{
      descri:`Sábios e poderosos, druidas são conjurados divinos conectados diretamente com a natureza, 
      capaz de controlá-la ou tornar-se parte dela como animais, monstros e plantas diversas.
      Druidas misturam a versatilidade de quem controla a natureza, mas também as penalidades de
       quem não aceita a evolução trazida pela sociedade que afeta e muitas vezes destrói a origem de seus poderes.`,
       arquetipo:{
        "Círculo Druida da Terra":{ text:``},
        "Círculo Druida da Lua":{ text:``},
        "Círculo dos Sonhos":{ text:``},        
        "Círculo do Pastor":{ text:``},        
        "Círculo de Esporos":{ text:``},
        "Círculo de Estrelas":{ text:``},
        "Círculo de Fogo Selvagem":{ text:``}
       },
       img:Druida
    },
    "Guardiao":{
      descri:`Também chamado de Ranger em outras edições, os Guardiões são especialistas em terrenos e alvos específicos.
      O Guardião é um aliado versátil e um inimigo mortal capaz de atravessar a natureza selvagem com 
      facilidade e caçar seus inimigos marcados com técnica e eficiência.`,
      arquetipo: {
        "Caçador":{ text:``},
        "Fera":{ text:``},
        "Horizonte Walker":{ text:``},
        "Matador de Monstros":{ text:``},
        "Perseguidor da escuridão":{ text:``},
        "Fey Andarilho":{ text:``},
        "Enxameador":{ text:``}
      },
      img:Guardiao
    },
    "Guerreiro":{
      descri:`Treinados em combate com as mais variadas armas e equipamentos, os Guerreiros são, 
      provavelmente, a mais comum das classes existentes em D&D, pois englobam todos os aventureiros
       que não entrem nas demais categorias.
      Um guerreiro é tecnicamente a classe mais simples para novatos e uma das mais versáteis, 
      capaz de se manter diversificado ou se especializar no uso de uma arma ou manobra específica.`,
      arquetipo:{
        "Mestre de batalha":{ text:``},
        "Campeão":{ text:``},
        "Cavaleiro Ancião":{ text:``},
        "Cavaleiro Dragão Roxo":{ text:``},
        "Samurai":{ text:``},
        "Cavalheiro":{ text:``},
        "Arcano":{ text:``},
        "Eco Cavaleiro":{ text:``},
        "Guerreiro Psíquico":{ text:``},
        "Guerreiro Cavaleiro Rúnico":{ text:``},
      }
      ,
      img:Guerreiro
    },
    "Ladino":{
      descri:`Mestres da furtividade, dos talentos ocultos e até mesmo do assassinato, 
      muitos tratam o ladino como simples criminosos quando, na verdade, são 
      aventureiros fundamentais para qualquer grupo.
      Ladinos possuem um conjunto próprio de técnicas focadas em arrombamento, 
      manuseio de armadilhas, escalada, furto e técnicas que peguem o alvo desprevenido que sim, podem ser usadas para o mau caso queiram, 
      mas também criam exploradores e aventureiros vitais para qualquer grupo dentro e fora de masmorras.`,
      arquetipo:{
        "Malandro Arcano":{ text:``},
        "Assassino":{ text:``},
        "Ladrão":{ text:``},
        "Cérebro":{ text:``}, 
        "Espadachim":{ text:``}, 
        "Inquisitivo":{ text:``},
        "Escoteiro":{ text:``},
        "Fantasma":{ text:``},
        "Faca da Alma":{ text:``},

      },
      img:Ladino
    },
    "Monge":{
      descri:`Mestres no combate desarmado e no uso do misterioso Chi em habilidades únicas!
      O Monge é uma classe que foca sua força em rajadas de múltiplos ataques desarmados cada vez 
      mais fortes, além de técnicas que misturam artes marciais com o consumo de Chi, uma energia 
      que apenas ele possui no jogo.`,
      arquetipo:{
        "Ordem dos Escribas":{ text:``}, 
        "Caminho da Mão Aberta":{ text:``},
        "Caminho da Sombra":{ text:``},
        "Caminho dos Quatro Elementos":{ text:``},
        "Caminho da Longa Morte":{ text:``},
        "Caminho da Alma do Sol":{ text:``},
        "Caminho do Mestre Bêbado":{ text:``},
        "Caminho do Kensei, Caminho da Misericórdia":{ text:``},
        "Caminho do Eu Astral":{ text:``},
      },
        img:Monge
    },
    "Mago":{
      descri:`Estudiosos dedicados às regras arcanas, magos são os mais famosos usuários 
      de magia, graças ao grande poder e versatilidade capazes de adquirir com o tempo.

      Magos misturam os diferentes caminhos da magia com as restrições de precisar decorá-las
       diariamente, um equilíbrio que torna o Mago poderoso, mas também uma posição complexa para qualquer equipe.`,
      arquetipo:{
        "Escola de Abjuração":{ text:``},
        "Escola de Conjuração":{ text:``},
        "Escola de Adivinhação":{ text:``},
        "Escola de Encantamento":{ text:``},
        "Escola de Evocação":{ text:``}, 
        "Escola de Ilusão":{ text:``}, 
        "Escola de Necromancia":{ text:``},
        "Escola de Transmutação":{ text:``},
        "Canto de lâminas":{ text:``},
        "Magia de Guerra":{ text:``},
        "Cronurgista":{ text:``},
        "Graviturgista":{ text:``},
        "Ordem dos Escribas":{ text:``},
      }, 
        img:Mago
    },
    "Paladino":{
      descri:`Cavaleiros divinos com poderes vindos de entidades ou de um forte juramento, 
      Paladinos podem ser o exemplo perfeito de herói ou de um terrível algoz por onde passarem, 
      mas independente da forma, sempre serão lembrados por quem testemunhar seus poderes.
      Paladinos misturam o uso de armas e armaduras pesadas, montarias
       e poderes divinos advindos de um voto ou código de honra.`,
       arquetipo:{
        "Juramento de Devoção":{ text:``}, 
        "Juramento dos Antigos":{ text:``},
        "Juramento da Vingança":{ text:``},
        "Perjuro":{ text:``},
        "Juramento da Coroa":{ text:``}, 
        "Juramento da Conquista":{ text:``},
        "Juramento de Redenção":{ text:``},
        "Juramento de Glória":{ text:``},
        "Juramento dos Vigilantes":{ text:``}
      },
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
          <div id={proximo?"":"menu"} className="menu">
            <div className="classes">
              <p className="titulo">Classes</p>
              <Image alt="icon" src={Linha} width={100} height={70}></Image>
              <div className="lista">{
                Object.keys(classes).map((item, key) => (
                  <div key={key} className="item" id={pergaminho==item?"show": ""} onClick={()=> selecionar_classe(item)} >
                    <Image alt="icon" src={classes[item].img} width={80} height={80}layout="fixed" ></Image>
                    <p>{item}</p>
                  </div>
                ))
              }
              </div>
              <div className="button">
                  <button onClick={() => setproximo(true)} >Proximo</button>
              </div>
            </div>
            <div className="descri">
              <Image alt="icon" src={imagem} width={100} height={100}/>
              <p>Descrição</p>
              <p>{descri}</p>
              <p>Sub-Classes:</p>
              {pergaminho ===""?"":
              Object.keys(classes[pergaminho].arquetipo).map((item, key) => (<p key={key}><strong>{item}</strong></p>))}
            </div>
          </div>
          <div id={proximo?"menu":""} className="menu">
            <div className="classes">
              <p className="titulo">Subclasses de {pergaminho}</p>
              <Image alt="icon" src={Linha} width={100} height={70}></Image>
              <div className="lista">
                {
                  Object.keys(classes[pergaminho].arquetipo).map((item, key) => (
                    <div key={key} className="item" id={subclasse==item?"show": ""} onClick={()=> selecionar_arquetipo(item)} >
                      <Image alt="icon" src={classes[pergaminho].img} width={80} height={80}layout="fixed" ></Image>
                      <p>{item}</p>
                    </div>
                  ))
                }
              </div>
              <div className="botoes">
                <div  className="button">
                    <button id="n" onClick={() => setproximo(false)} >Voltar</button>
                </div>
                <div className="button">
                    <button onClick={() => setpopup(true)} >Proximo</button>
                </div>
              </div>
            </div>
            <div className="descri">
              <Image  src={imagem} width={100} height={100}/>
              <p>Descrição</p>
              <p>{subclasse ==""?"":
              (classes[pergaminho].arquetipo)[subclasse].text}</p>
            </div>
          </div>        
        </div>
    </body>
  );
}
