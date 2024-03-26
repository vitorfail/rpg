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
            text:[<p className="arquetipo">Seu caminho é buscar a sintonia com o mundo natural, concedendo a você uma 
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
               </p>]
          },
          "Caminho do Berseker":{ text:[<p className="arquetipo">
            Para alguns bárbaros a fúria é um meio para se alcançar um objetivo e o Caminho do Berserker
             é banhado em sangue e violência. Conforme entra em fúria, ele se joga sobre seus inimigos vibrando 
             no caos da batalha, sem se preocupar com sua segurança ou bem-estar, focando-se apenas na destruição
              de seus inimigos. <br></br><br></br>
          <strong>Frenesi:</strong> Sempre que entra em Fúria pode escolher entrar em Frenesi. Durante 
          um Frenesi você pode fazer um único ataque com arma, com uma Ação Bônus, em cada um de seus turnos 
          após esse. Quando o frenesi acabar você sofre um nível de exaustão.<br></br><br></br>

        <strong>Fúria sem Mente:</strong> Você não pode ser Encantado ou Assustado durante uma Fúria. Caso 
        esteja Encantado ou Assustado, ao entrar em Fúria o efeito é suspenso pela sua duração.<br></br><br></br>

        <strong>Presença Intimidadora:</strong> Você pode rugir ameaçadoramente a uma criatura a até 9m. 
        O alvo deve passar em resistência de SAB (CD = 8 + bônus de proficiência + modificador de Carisma) ou 
        ficar Assustado por 1 turno. Em turnos seguintes você pode estender o efeito por mais um turno gastando
         uma ação. Esse efeito acaba caso alvo termine seu turno sem linha de visão ou a mais de 18m de você.
          Um alvo que passe no teste torna-se imune ao efeito por 24h.<br></br><br></br>

        <strong>Retaliação:</strong> Sempre que sofrer dano de uma criatura adjacente ao 
        seu personagem, você pode usar sua Reação para realizar um ataque corpo-a-corpo com arma contra ela.
          </p>]},
          "Caminho do Battlerager":{ text:[<p className="">
            omente anões seguidores do deus da guerra e que trilham o Caminho da Fúria podem seguir 
            o caminho do Battlerager. Conhecidos como Kuldjargh (literalmente "o machado idiota" em Anão), 
            eles se especializaram no combate com uma volumosa armadura repleta de cravos pontiagudos, com a 
            qual eles se entregam a fúria do combate e lançam-se sobre seus adversários, transformando seus próprios 
            corpos em armas letais. <br></br><br></br>

        <strong>Fúria com Armadura:</strong> A partir do 3º nível, você ganha à habilidade de usar a Armadura de
        Espinhos como uma arma (veja descrição do item abaixo). Enquanto estiver usando essa armadura sob
          o efeito da Fúria, você pode usa-la para fazer um ataque corpo a corpo contra um alvo adjacente a você 
          como uma ação bônus. Se o ataque acertar, os espinhos infligem 1D4 de dano perfurante, mais seu modificador
          de Força. Além disso, quando você usa a ação de ataque para agarrar uma criatura, o alvo recebe 3 de dano 
          penetrante se o seu teste de agarrar for bem-sucedido.<br></br><br></br>

      <strong>Armadura de Espinhos:</strong> Essa armadura é um tipo raro de armadura média, 
      criada apenas por anões. Ela consiste em um casaco de couro e perneiras cobertos de espinhos de
       metal. AC: 14 + modificador de Destreza (Max 2), Furtividade: Desvantagem, Peso: 45 lbs (20kg) e 
       Custo: 75 Peças de Ouro.<br></br><br></br>
.
      <strong>Vivacidade Imprudente:</strong> A partir do 6º nível, quando você usa Ataque Descuidado
       enquanto estiver em fúria, você também ganha pontos de vida temporários igual ao seu modificador 
       de Constituição (Mínimo de 1). Eles somem se qualquer um deles restar quando a Fúria terminar.<br></br><br></br>

      <strong>Investida Furiosa:</strong> No 10º nível, você pode tomar a ação Disparada como uma ação
      bônus enquanto estiver em fúria.<br></br><br></br>

      <strong>Retribuição Farpada:</strong> A partir do nível 14, quando uma criatura adjacente a você acerta-lo 
      com um ataque corpo a corpo, o atacante sofre 3 de dano perfurante se você estiver em fúria, não estiver 
      incapacitado e estiver vestindo a Armadura de Cravos.
          </p>]},
          "Caminho do Guardião Ancestral":{ text:[<p className="arquetipo">
            Alguns bárbaros saem de culturas que reverenciam seus antepassados. Essas tribos ensinam que os 
            guerreiros do passado permanecem no mundo como espíritos poderosos, que podem guiar e proteger a vida. 
            Quando um bárbaro que segue este caminho entra em 
            fúria, o bárbaro entra em contato com o mundo espiritual e convida esses espíritos guardiões para ajudar.<br></br><br></br>

            <strong>Protetor Ancestral:</strong>  Enquanto estiver em em Fúria, a primeira criatura que acertar com um ataque em seu
             turno se torna alvo dos espíritos guerreiros. Até o início do seu próximo turno, esse alvo tem desvantagem 
             em qualquer jogada de ataque que não seja contra você, e quando o alvo atingir uma criatura
              diferente de você com um ataque, essa criatura tem resistência ao dano causado pelo ataque. O efeito
               sobre o alvo acaba mais cedo se sua fúria terminar.<br></br><br></br>

              <strong>Escudo Espiritual:</strong>  Os guardiães espirituais que te protegem podem prover uma defesa 
              sobrenatural para aqueles que você defende. Se você estiver em fúria e outra criatura que 
              possa ver a até 9 metros receba dano, você pode usar sua reação para reduzir esse dano em 2d6. 
              Esse valor aumenta para 3d6 ao nível 10 e 4d6 ao 14.<br></br><br></br>

              <strong>Consultar os Espíritos:</strong>  Você ganha a habilidade de se consultar com seus espíritos ancestrais. 
              Uma vez por Descanso Longo, você pode usar Augúrio ou Clarividência, sem precisar de um espaço 
              de magia ou componentes materiais. Em vez de criar um sensor esférico, esse uso de clarividência
               invoca invisivelmente um de seus espíritos ancestrais para o local escolhido. Sabedoria é seu
                atributo chave de conjuração.<br></br><br></br>

              <strong>Ancestrais Vingativos:</strong>  Seus espíritos ancestrais aumentam seu poder o suficiente para conseguir 
              retaliar. Quando você usa seu Escudo Espiritual para reduzir o dano de um ataque, o atacante recebe 
              uma quantidade de dano de energia igual ao dano que seu escudo espiritual reduziu
          </p> ]},
          "Caminho do Arauto Ancestral":{ text:[<p className="arquetipo">
            Seguidores desse caminho aprendem a converter sua fúria em um véu de energia primordial, 
            tocando a natureza para destruir seus inimigos.<br></br><br></br>

            <strong>Fúria da Tempestade:</strong>  Quando em Fúria você emana uma aura de 3m. Escolha um terreno; 
            você recebe a habilidade relacionada a ele. Essa habilidade ativa quando entra em Fúria, e 
            pode ativá-la novamente a cada turno com uma ação bônus. Você pode trocar o terreno ao subir de 
            nível nessa classe.<br></br><br></br>

          <strong>Deserto:</strong> Outras criaturas na aura sofrem 2 de dano de fogo. Esse dano aumenta para 3 ao nível 5, 
          4 ao 10, 5 ao 15, e 6 ao nível 20.<br></br><br></br>

          <strong>Mar:</strong> Uma criatura na aura deve passar em resistência de DES, CD baseada em CON, ou sofrer
           1d6 elétrico, metade caso resista. Esse dano torna-se 2d6 ao nível 10, 3d6 ao 15, e 4d6 ao 20.<br></br><br></br>

          <strong>Tundra:</strong> Criaturas de sua escolha na aura recebem 2 PV temporários. Esse valor aumenta para
           3 ao nível 5, 4 ao 10, 5 ao 15, e 6 ao nível 20.<br></br><br></br>

          <storng>Alma da Tempestade:</storng> Você recebe a habilidade relacionada ao terreno que escolheu 
          ao nível 3. Essas habilidades funcionam fora de Fúria.<br></br><br></br>

          <strong>Deserto:</strong> Recebe Resistência a dano de Fogo, e não sofre efeito de calor extremo. Com 
          uma ação pode tocar um objeto inflamável solto, e fazê-lo pegar fogo.<br></br><br></br>

          <strong>Mar:</strong> Recebe Resistência a dano Elétrico, e pode respirar debaixo d'água. Também 
          recebe deslocamento de nado de 9m.<br></br><br></br>

          <strong>Tundra:</strong> Recebe Resistência a dano de Frio, e não sofre efeito de frio extremo.
           Também pode tocar até 1,5m³ de água sem nenhuma criatura dentro e congelá-la. Esse gelo derrete em 1 minuto.
          10 - Escudo da Tempestade: Quando em Fúria, aliados dentro de sua aura recebem a
           resistência à dano garantida por sua Alma da Tempestade.<br></br><br></br>

          <strong>Tempestade Furiosa:</strong> Você recebe a habilidade relacionada ao terreno que escolheu 
          ao nível 3. Testes de resistência são baseados em CON.<br></br><br></br>

          <strong>Deserto:</strong> Quando acertado por um ataque, com uma reação força resistência de DES. Oponente
           que falhe sofre ½ seu nível de bárbaro em dano de Fogo.<br></br><br></br>

          <strong>Mar:</strong> Quando acerta uma criatura em sua aura com um ataque, com uma reação força resistência 
          de FOR. Caso falhe oponente é Derrubado.<br></br><br></br>

          <strong>Tundra:</strong> Quando sua Aura da Tempestade está ativa, pode escolher uma criatura que pode 
          enxergar na aura. Alvo deve passar em resistência de FOR ou ter seu deslocamento reduzido a 
          0 até o começo de seu próximo turno.

          </p>]},
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
              Object.keys(classes[pergaminho].arquetipo).map((item, key) => (<p className="historia" key={key}><strong>{item}</strong></p>))}
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
              (classes[pergaminho].arquetipo)[subclasse].text[0]}</p>
            </div>
          </div>        
        </div>
    </body>
  );
}
