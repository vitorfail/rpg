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
  const [ proximo, setproximo] = useState(1)
  const [ subclasse, setsubclasse] = useState("")
  const [cor_cabelo, setcor_cabelo] =useState({r:0, g:0, b:0})
  const [cor_pele, setcor_pele] =useState({r:0, g:0, b:0})  
  function selecionar_classe(nome){
    setpergaminho(nome)
    setdescri(classes[nome].descri)
    setarque(classes[nome].arquetipo)
    setimagem(classes[nome].img)
    setsubclasse(Object.keys(classes[nome].arquetipo)[0])
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
    return { r, g, b };
  };
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

              <strong>Nível 3 - Totem Espíritual:</strong>  Escolha um espírito animal; você recebe a habilidade relacionada a ele. Seu totem 
              deve ser um animal relacionado aos listados aqui, mas 
              você pode escolher um mais apropriado a sua terra natal. Por exemplo, você poderia escolher um falcão 
              ou abutre ao invés da águia, uma pantera ou onça ao invés do tigre, e assim por diante.<br></br><br></br>

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
               <strong>Nivel 6 - Aspecto da Besta:</strong>  Você adquire um benefício místico baseado no totem escolhido. Você 
               pode optar pelo mesmo animal que selecionou no 3° nível ou um diferente. <br></br><br></br>
               • Águia: Você pode enxergar a uma milha (1,6 Km) sem dificuldade, sendo capaz de discernir 
               até os menores detalhes quando estiver olhando para algo a menos de 30 metros de você. 
               Além disso, penumbra não impõem desvantagem nos seus testes de Sabedoria (Percepção).<br></br><br></br>

              <strong>Lobo:</strong> Você pode rastrear outras criaturas quando estiver viajando a passo rápido e pode se 
              mover furtivamente quando estiver viajando a passo normal.<br></br><br></br>

            <strong>Urso:</strong>   Sua capacidade de carga (incluindo carga máxima e capacidade de erguer) é dobrada e você 
            tem vantagem em testes de Força realizados para empurrar, puxar, erguer ou quebrar objetos.<br></br><br></br>

            <strong>Cervo:</strong>  Seja montado ou a pé, seu ritmo de caminhada é dobrado. Até 10 companheiros em até 18 metros 
            de você também recebem esse benefício se você não estiver incapacitado.<br></br><br></br>

            <strong>Tigre:</strong> Recebe proficiência em duas perícias entre Acrobacia, Atletismo, Furtividade e Sobrevivência.<br></br><br></br>
               </p>]
          },
          "Caminho do Berseker":{ text:[<p className="arquetipo">
            Para alguns bárbaros a fúria é um meio para se alcançar um objetivo e o Caminho do Berserker
             é banhado em sangue e violência. Conforme entra em fúria, ele se joga sobre seus inimigos vibrando 
             no caos da batalha, sem se preocupar com sua segurança ou bem-estar, focando-se apenas na destruição
              de seus inimigos. <br></br><br></br>
          <strong>Nivel 3 - Frenesi:</strong> Sempre que entra em Fúria pode escolher entrar em Frenesi. Durante 
          um Frenesi você pode fazer um único ataque com arma, com uma Ação Bônus, em cada um de seus turnos 
          após esse. Quando o frenesi acabar você sofre um nível de exaustão.<br></br><br></br>

        <strong>Nivel 6 - Fúria sem Mente:</strong> Você não pode ser Encantado ou Assustado durante uma Fúria. Caso 
        esteja Encantado ou Assustado, ao entrar em Fúria o efeito é suspenso pela sua duração.<br></br><br></br>

        <strong>Nível 10 - Presença Intimidadora:</strong> Você pode rugir ameaçadoramente a uma criatura a até 9m. 
        O alvo deve passar em resistência de SAB (CD = 8 + bônus de proficiência + modificador de Carisma) ou 
        ficar Assustado por 1 turno. Em turnos seguintes você pode estender o efeito por mais um turno gastando
         uma ação. Esse efeito acaba caso alvo termine seu turno sem linha de visão ou a mais de 18m de você.
          Um alvo que passe no teste torna-se imune ao efeito por 24h.<br></br><br></br>

        <strong>Nível 14 - Retaliação:</strong> Sempre que sofrer dano de uma criatura adjacente ao 
        seu personagem, você pode usar sua Reação para realizar um ataque corpo-a-corpo com arma contra ela.
          </p>]},
          "Caminho do Battlerager":{ text:[<p className="">
            omente anões seguidores do deus da guerra e que trilham o Caminho da Fúria podem seguir 
            o caminho do Battlerager. Conhecidos como Kuldjargh (literalmente "o machado idiota" em Anão), 
            eles se especializaram no combate com uma volumosa armadura repleta de cravos pontiagudos, com a 
            qual eles se entregam a fúria do combate e lançam-se sobre seus adversários, transformando seus próprios 
            corpos em armas letais. <br></br><br></br>

        <strong>Nível 3 - Fúria com Armadura:</strong> A partir do 3º nível, você ganha à habilidade de usar a Armadura de
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
      <strong>Nível 6 - Vivacidade Imprudente:</strong> A partir do 6º nível, quando você usa Ataque Descuidado
       enquanto estiver em fúria, você também ganha pontos de vida temporários igual ao seu modificador 
       de Constituição (Mínimo de 1). Eles somem se qualquer um deles restar quando a Fúria terminar.<br></br><br></br>

      <strong>Nível 10 - Investida Furiosa:</strong> No 10º nível, você pode tomar a ação Disparada como uma ação
      bônus enquanto estiver em fúria.<br></br><br></br>

      <strong>Nivel 14 - Retribuição Farpada:</strong> A partir do nível 14, quando uma criatura adjacente a você acerta-lo 
      com um ataque corpo a corpo, o atacante sofre 3 de dano perfurante se você estiver em fúria, não estiver 
      incapacitado e estiver vestindo a Armadura de Cravos.
          </p>]},
          "Caminho do Guardião Ancestral":{ text:[<p className="arquetipo">
            Alguns bárbaros saem de culturas que reverenciam seus antepassados. Essas tribos ensinam que os 
            guerreiros do passado permanecem no mundo como espíritos poderosos, que podem guiar e proteger a vida. 
            Quando um bárbaro que segue este caminho entra em 
            fúria, o bárbaro entra em contato com o mundo espiritual e convida esses espíritos guardiões para ajudar.<br></br><br></br>

            <strong>Nivel 3 - Protetor Ancestral:</strong>  Enquanto estiver em em Fúria, a primeira criatura que acertar com um ataque em seu
             turno se torna alvo dos espíritos guerreiros. Até o início do seu próximo turno, esse alvo tem desvantagem 
             em qualquer jogada de ataque que não seja contra você, e quando o alvo atingir uma criatura
              diferente de você com um ataque, essa criatura tem resistência ao dano causado pelo ataque. O efeito
               sobre o alvo acaba mais cedo se sua fúria terminar.<br></br><br></br>

              <strong>Nivel 6 - Escudo Espiritual:</strong>  Os guardiães espirituais que te protegem podem prover uma defesa 
              sobrenatural para aqueles que você defende. Se você estiver em fúria e outra criatura que 
              possa ver a até 9 metros receba dano, você pode usar sua reação para reduzir esse dano em 2d6. 
              Esse valor aumenta para 3d6 ao nível 10 e 4d6 ao 14.<br></br><br></br>

              <strong>Nivel 10 - Consultar os Espíritos:</strong>  Você ganha a habilidade de se consultar com seus espíritos ancestrais. 
              Uma vez por Descanso Longo, você pode usar Augúrio ou Clarividência, sem precisar de um espaço 
              de magia ou componentes materiais. Em vez de criar um sensor esférico, esse uso de clarividência
               invoca invisivelmente um de seus espíritos ancestrais para o local escolhido. Sabedoria é seu
                atributo chave de conjuração.<br></br><br></br>

              <strong>Nivel 14 - Ancestrais Vingativos:</strong>  Seus espíritos ancestrais aumentam seu poder o suficiente para conseguir 
              retaliar. Quando você usa seu Escudo Espiritual para reduzir o dano de um ataque, o atacante recebe 
              uma quantidade de dano de energia igual ao dano que seu escudo espiritual reduziu
          </p> ]},
          "Caminho do Arauto Ancestral":{ text:[<p className="arquetipo">
            Seguidores desse caminho aprendem a converter sua fúria em um véu de energia primordial, 
            tocando a natureza para destruir seus inimigos.<br></br><br></br>

            <strong>Nivel 3 - Fúria da Tempestade:</strong>  Quando em Fúria você emana uma aura de 3m. Escolha um terreno; 
            você recebe a habilidade relacionada a ele. Essa habilidade ativa quando entra em Fúria, e 
            pode ativá-la novamente a cada turno com uma ação bônus. Você pode trocar o terreno ao subir de 
            nível nessa classe.<br></br><br></br>

          <strong>Deserto:</strong> Outras criaturas na aura sofrem 2 de dano de fogo. Esse dano aumenta para 3 ao nível 5, 
          4 ao 10, 5 ao 15, e 6 ao nível 20.<br></br><br></br>

          <strong>Mar:</strong> Uma criatura na aura deve passar em resistência de DES, CD baseada em CON, ou sofrer
           1d6 elétrico, metade caso resista. Esse dano torna-se 2d6 ao nível 10, 3d6 ao 15, e 4d6 ao 20.<br></br><br></br>

          <strong>Tundra:</strong> Criaturas de sua escolha na aura recebem 2 PV temporários. Esse valor aumenta para
           3 ao nível 5, 4 ao 10, 5 ao 15, e 6 ao nível 20.<br></br><br></br>

          <storng>Nivel 6 - Alma da Tempestade:</storng> Você recebe a habilidade relacionada ao terreno que escolheu 
          ao nível 3. Essas habilidades funcionam fora de Fúria.<br></br><br></br>

          <strong>Deserto:</strong> Recebe Resistência a dano de Fogo, e não sofre efeito de calor extremo. Com 
          uma ação pode tocar um objeto inflamável solto, e fazê-lo pegar fogo.<br></br><br></br>

          <strong>Mar:</strong> Recebe Resistência a dano Elétrico, e pode respirar debaixo d'água. Também 
          recebe deslocamento de nado de 9m.<br></br><br></br>

          <strong>Tundra:</strong> Recebe Resistência a dano de Frio, e não sofre efeito de frio extremo.
           Também pode tocar até 1,5m³ de água sem nenhuma criatura dentro e congelá-la. Esse gelo derrete em 1 minuto.
          10 - Escudo da Tempestade: Quando em Fúria, aliados dentro de sua aura recebem a
           resistência à dano garantida por sua Alma da Tempestade.<br></br><br></br>

          <strong>Nivel 14 - Tempestade Furiosa:</strong> Você recebe a habilidade relacionada ao terreno que escolheu 
          ao nível 3. Testes de resistência são baseados em CON.<br></br><br></br>

          <strong>Deserto:</strong> Quando acertado por um ataque, com uma reação força resistência de DES. Oponente
           que falhe sofre ½ seu nível de bárbaro em dano de Fogo.<br></br><br></br>

          <strong>Mar:</strong> Quando acerta uma criatura em sua aura com um ataque, com uma reação força resistência 
          de FOR. Caso falhe oponente é Derrubado.<br></br><br></br>

          <strong>Tundra:</strong> Quando sua Aura da Tempestade está ativa, pode escolher uma criatura que pode 
          enxergar na aura. Alvo deve passar em resistência de FOR ou ter seu deslocamento reduzido a 
          0 até o começo de seu próximo turno.

          </p>]},
          "Caminho do Zelote":{ text:[
            <p> Seguidores desse caminho seguem desígnios divinos que inspiram violência e zelo em combate.<br></br><br></br>

           <strong>Nivel 3 - Fúria Divina:</strong> Quando em Fúria, a primeira criatura que acerta com um ataque armado em seu turno
             sofre +1d6+1/2 seu nível de bárbaro. Esse dano é necrótico ou radiante, sua escolha ao receber essa 
             habilidade.<br></br><br></br>
            
            <strong>Nivel 3 - Guerreiro dos Deuses:</strong> Quando conjuram uma magia que lhe trás de volta à vida (mas não não-vida), o
             conjurador não precisa gastar componentes materiais.<br></br><br></br>

            <strong>Nivel 6 - Foco Zeloso:</strong> Quando em Fúria, caso falhe em um teste de resistência pode re-rolar o teste. 
            Essa habilidade só pode ser usada uma vez por Fúria. <br></br><br></br>
            
            <strong>Nivel 10 - Presença Zelosa:</strong> Uma vez por Descanso Longo, com uma ação bônus você garante a até 10 aliados
             a até 18m Vantagem em ataques e testes de resistência até o começo de seu próximo turno. Essa habilidade 
             é recuperada com um Descanso Longo.<br></br><br></br>
            
            <strong>Nivel 14 - Fúria Além da Vida:</strong> Quando estiver em Fúria, você não fica inconsciente em 0 ponto de vida. 
            Você ainda deve passar em testes de resistência de morte, e sofre efeitos normais por sofrer dano 
            nesse estado. Independente dos resultados, você não morre até que sua Fúria termine, e quando ela 
            termina você só morre caso ainda esteja em 0 pontos de vida.</p>
          ]},
          "Caminho da Besta":{ text:[
            <p className="arquetipo">
              Seguidores desse caminho extraem sua fúria de uma faísca bestial que queima dentro de
               suas almas. Esta fera uiva para ser liberada e irrompe em uma fúria agonizante.

              <strong>Nivel 3 - Forma da Fera:</strong> Quando em Fúria, manifesta uma das qualidades abaixo, que contam como armas simples:
                <br></br>
              - Mordida: Causa 1d8 perfurante. Uma vez por turno quando acerta mordida, cura Prof, 
              desde que com ½ PV ou menos.<br></br>
              - Garras: Causa 1d6 cortante. Uma vez por turno quando acerta garra, pode fazer outro ataque de 
              garra como parte da ação.<br></br>
              - Rabo: Causa 1d8 perfurante, e tem propriedade Alcance. Quando acertado por criatura visível a até 
              3m, com reação adiciona 1d8 à sua CA.<br></br><br></br>

              <strong>Nivel 6 - Alma Feral:</strong> Suas armas naturais de Forma de Fera contam como mágicas.
              Adicionalmente, recebe um dos seguintes benefícios, que podem ser trocados com Descanso Curto.<br></br>
              -Deslocamento de nado igual terrestre, e Anfíbio.
              -Deslocamento de escalada igual terrestre.
              -Quando salta rola Atletismo, e cobre Resultado x 0,3m a mais.<br></br><br></br>

              <strong>Nivel 10 - Fúria Infecciosa:</strong>  Prof vezes por dia, quando acerta alvo com arma natural, 
              deve passar em resistência de SAB (baseada em CON) ou sofrer um efeito abaixo:<br></br>
              -Usa reação para atacar alvo visível de sua escolha.<br></br>
              -Sofre 2d12 psíquico.<br></br><br></br>

              <strong>Nivel 14 - Chamado Da Caçada:</strong>  Prof vezes por Descanso Longo, quando entra em fúria até CON 
              aliados a até 9m podem causar +1d6 para dano de um ataque uma vez por turno cada. Você recebe 
              5PV temporário por aliado que beneficiou.
            </p>
          ]},
          "Caminho da Magia Selvagem":{ text:[<p className="arquetipo">
            Bárbaros que seguem esse caminho são um urro retumbante por liberdade, uma explosão de expressão 
            manifestando-se de maneiras imprevisíveis.<br></br><br></br>

            <strong>Nivel 3 - Percepção Mágica:</strong> Prof vezes por dia, com uma ação beneficia-se de efeito similar à Detectar Magia até 
            o fim de seu próximo turno.<br></br><br></br>

            <strong>Nivel 3 - Surto Selvagem:</strong>  Quando entra em fúria, role abaixo para determinar o efeito 
            mágico produzido. Todos são baseados em CON.<br></br><br></br>

            -1: Alvos à escolha a até 9m sofrem 1d12 necrótico (CON nega), e você
            ganha 1d12+Nível pontos de vida temporários.<br></br>
            -2: Se teleporta a até 9m em um lugar desocupado visível. Pela duração da 
            Fúria pode ativar novamente com ação bônus.<br></br>
            -3: Marca espaço adjacente a um alvo a até 9m. No final do seu turno, local 
            explode e criaturas adjacentes sofre 1d6 energia. Pela duração da Fúria pode ativar novamente com ação bônus.<br></br>
            -4: Alvo a até 9m sofre 1d6 radiante e fica cego até o começo de seu próximo 
            turno (CON nega). Pela duração da Fúria pode ativar novamente com ação bônus.<br></br>
            -5: Pela duração criatura que lhe acerta com ataque sofre 1d6 energia.<br></br>
            -6: Pela duração, você e aliados a até 3m recebem +1 CA.<br></br>
            -7: Pela duração, oponentes tratam espaço a até 4,5m de você como terreno difícil.<br></br>
            -8: Pela duração arma torna-se Leve, Arremesso 6/18, e causa dano de energia. Se a
            arma deixar sua mão, aparece novamente ao final do turno.<br></br><br></br>

            <strong>Nivel 6 - Magia de Reforço:</strong> Como ação, alvo tocado recebe um dos seguintes benefícios:
            -Recupera magia diária de nível 1d3. Só pode receber esse benefício uma vez por dia.
            -Por 10 minutos adiciona 1d3 para ataques e testes.<br></br><br></br>

            <strong>Nivel 10 - Retorno Instável:</strong> Quando em fúria, após sofrer dano ou falhar em teste de resistência, com 
            reação produz efeito de Surto Selvagem, que substitui seu atual.<br></br><br></br>

            <strong>Nível 14 - Fúria Caótica:</strong> Quando ativa Surto Selvagem, rola 2 dados e escolhe o efeito. Se rolar o
            mesmo número, rola novamente até conseguir outro.
          </p>]}
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
        "Alquimista":{ text:[<p className="arquetipo">
          Se você gosta da ideia de combinar poções mágicas com suas bugigangas, esta é a subclasse para você!
          Como um Alquimista, você é capaz de combinar reagentes e criar poções únicas!<br></br><br></br>
          <strong>Nível 3 – Proficiência e Elixir Experimental</strong> 
          Assim que escolhe esta subclasse no nível 3, você recebe proficiência em alquimia e aprende um elixir.
          Sua proficiência será ou em ferramentas de alquimista ou em alguma outra ferramenta de artesão.<br></br>
          Agora, o seu elixir é a parte mais interessante!<br></br>
          Pois você pode, sempre que termina um Descanso Longo, preparar um elixir novo!
          Este elixir pode ter vários efeitos, dentre eles: velocidade, aumento na CA e velocidade de vôo!<br></br><br></br>
          <strong>Nível 5 – Sábio da Alquimia</strong>
          E se você pudesse usar sua alquimia para melhorar suas magias?
          Como um Alquimista, a partir do nível 5 suas magias são potencializadas!
          Sempre que você conjurar magia usando suas ferramentas de alquimia, você ganha um bônus para a rolagem!
          Este bônus pode ser usado para uma magia de cura ou de dano elemental e é igual ao seu modificador de inteligência!
          Pois é, nada mal ter um modificador adicional de +3 ou até +4 já no nível 5 né?<br></br><br></br>
          <strong>Nível 9 – Reagentes restoradores</strong>
            Quando você atinge o nível 9, seu grupo agradece seus conhecimentos.

            Pois a partir de agora sua cura é melhorada ainda mais!

            Não apenas você concede pontos de vida temporário a seus aliados, como
            você pode conjurar restauração menor sem gastar espaços de magia.<br></br><br></br>
            <strong>Nível 15 – Mestre da Química:</strong> 
            Se até então você vinha se especializando em poções, no nível 15 você se torna um mestre nelas!

            Não apenas você ganha resistência a dano ácido e veneno, como você também é imune a envenenamento!

            E, além disso, a partir de agora você pode usar magias de cura sem gastar nada a não ser seus suprimentos de magia.
        </p>]},
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
                    <Image alt="icon" src={classes[item].img} width={80} height={80}layout="fixed" ></Image>
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
              Object.keys(classes[pergaminho].arquetipo).map((item, key) => (<p className="historia" key={key}><strong>{item}</strong></p>))}
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
                      <Image alt="icon" src={classes[pergaminho].img} width={80} height={80}layout="fixed" ></Image>
                      <p>{item}</p>
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
              <Image  src={imagem} width={100} height={100}/>
              <p>Descrição</p>
              <p>{subclasse ==""?"":
              (classes[pergaminho].arquetipo)[subclasse].text[0]}</p>
            </div>
          </div>
          <div id={proximo==3?"menu":""} className="custom">
            <div className="personagem">
                <div className="avatar">
                  <svg className="chapeu" viewBox='0 0 180 180'>
                      <path d='M132 44 L132 44 L115 20 L70 5 L59 6 L52 11 L45 15 L40 25 L 35 37 L 35 44 L28 48 L28 52 L31 58 L28 62 L30 68 L29 100 L31 121 L14 125 L4 130 L1 140 L15 168 L30 173 L59 165 L108 167 L153 163 L174 163 L179 155 L179 150 L168 125 L 153 115 L137 117 L104 84 L106 78 L100 72 L101 68 L93 64 L95 60 L83 44 L82 40 L89 32 L99 30 L118 43 L132 44' stroke='#27276e' fill='#283891'></path>
                      <path d='M31 121 L31 121 L33 130 L68 140 L99 141 L120 136 L134 131 L143 125 L137 117' strokeWidth='2'  fill='transparent'></path>
                      <path d='M59 165 L59 165 L82 155 L107 150 L123 150 L140 155 L153 163 L108 167 L59 165'></path>
                      <path d='M31 123 L31 123 L14 127 L6 132 L4 140 L17 166 L30 171 L57 163 L57 163 L80 153 L105 148 L123 148 L142 153 L155 161 L173 161 L177 153 L177 151 L166 127 L151 117 L139 119' strokeWidth='2' ></path>
                      <path d='M26 129 L26 129 L11 138 L13 148 L26 162 L37 162 L54 151 L62 144 L44 144 L34 139 L26 129' ></path>
                      <path d='M37 68 L37 68 L37 111 L38 124 L41 128 L69 136 L73 132 L45 86 L60 86 L37 68' ></path>
                      <path d='M37 48 L37 48 L30 49 L44 55 L51 50 L43 51 L37 48' ></path>
                      <path d='M70 7 L70 7 L55 12 L48 20 L44 29 L51 22 L53 30 L70 7'></path>
                      <path d='M154 125 L154 125 L132 137 L143 140 L130 143 L157 150 L167 155 L154 125'></path>
                      <path d='M103 92 L103 92 L92 95 L103 105 L97 108 L95 116 L116 119 L106 133 L127 130 L136 122 L103 92' ></path>
                      <path d='M82 76 L82 76 L90 74 L96 79 L89 76 L82 76'></path>
                      <path d='M83 71 L83 71 L85 68 L81 63 L93 70 L83 71'></path>
                      <path d='M68 50 L68 50 L78 54 L87 60 L87 62 L68 50'></path>
                      <path d='M86 27 L86 27 L100 23 L110 26 L118 32 L123 37 L104 28 L95 27 L86 27'></path>
                  </svg>
              
                  <div className="head">
                    <div className="hair"></div>
                    <div className="face">
                      <div className="eyebrow eyebrow-left"></div>
                      <div className="eyebrow eyebrow-right"></div>
                      <div className="eye eye-left"></div>
                      <div className="eye eye-right"></div>
                      <div className="eyelashes eyelashes-left"></div>
                      <div className="eyelashes eyelashes-right"></div>
                      <div className="nose"></div>
                      <div className="blood"></div>
                      <div className="barba">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" >
                          <g><path   d="M -0.5,-0.5 C 0.166667,-0.5 0.833333,-0.5 1.5,-0.5C 1.16667,0.5 0.5,1.16667 -0.5,1.5C -0.5,0.833333 -0.5,0.166667 -0.5,-0.5 Z"/></g>
                          <g><path   d="M 294.5,-0.5 C 295.167,-0.5 295.833,-0.5 296.5,-0.5C 296.5,0.166667 296.5,0.833333 296.5,1.5C 295.5,1.16667 294.833,0.5 294.5,-0.5 Z"/></g>
                          <g><path   d="M 296.5,5.5 C 296.5,14.5 296.5,23.5 296.5,32.5C 295.5,31.1667 294.5,31.1667 293.5,32.5C 294.055,24.1775 294.388,15.8442 294.5,7.5C 295.167,6.83333 295.833,6.16667 296.5,5.5 Z"/></g>
                          <g><path   d="M 294.5,7.5 C 294.388,15.8442 294.055,24.1775 293.5,32.5C 291.07,44.063 290.236,55.7297 291,67.5C 284.196,82.9126 279.196,98.9126 276,115.5C 272.408,122.354 268.075,128.687 263,134.5C 261.086,141.715 259.753,149.049 259,156.5C 254.817,164.353 249.484,171.353 243,177.5C 238.288,186.293 233.955,195.293 230,204.5C 224.277,209.611 218.11,214.111 211.5,218C 200.833,220.333 190.167,222.667 179.5,225C 172.924,225.645 166.424,225.145 160,223.5C 156.333,224.5 152.667,225.5 149,226.5C 145.473,225.602 141.973,224.602 138.5,223.5C 133.214,224.757 127.88,225.757 122.5,226.5C 111.183,224.27 99.8499,222.103 88.5,220C 80.196,216.034 72.696,210.867 66,204.5C 60.6955,189.214 52.3621,175.88 41,164.5C 40,162.5 39,160.5 38,158.5C 36.7727,151.468 35.4394,144.468 34,137.5C 29.3333,130.167 24.6667,122.833 20,115.5C 17.5287,107.281 15.5287,98.948 14,90.5C 11.5856,84.0112 8.91897,77.6779 6,71.5C 5.16554,59.1022 3.99887,46.7689 2.5,34.5C 1.74679,25.8544 1.41346,17.1877 1.5,8.5C 3.37099,8.85883 4.87099,9.85883 6,11.5C 9.63791,24.7551 14.6379,37.4218 21,49.5C 25.2866,54.5752 29.4533,59.7418 33.5,65C 37.4577,66.3788 41.2911,67.8788 45,69.5C 45.9081,74.1929 46.9081,78.8596 48,83.5C 51.9203,85.4567 55.2536,88.1234 58,91.5C 60.4089,98.894 62.9089,106.227 65.5,113.5C 66.2601,115.985 67.2601,115.985 68.5,113.5C 73.4051,111.701 78.4051,110.534 83.5,110C 89.0015,117.168 93.3349,125.002 96.5,133.5C 96.62,134.586 97.2867,135.253 98.5,135.5C 99.4164,135.457 100.083,135.124 100.5,134.5C 103.693,133.989 106.859,133.322 110,132.5C 112.922,132.548 115.422,133.548 117.5,135.5C 118.833,138.167 120.167,138.167 121.5,135.5C 129.691,127.488 138.857,120.822 149,115.5C 151.819,115.993 154.319,117.16 156.5,119C 163.231,123.696 169.565,128.863 175.5,134.5C 176.053,136.552 177.053,136.885 178.5,135.5C 181.108,133.404 184.108,132.07 187.5,131.5C 191.37,133.172 195.37,133.672 199.5,133C 200.333,132.167 201.167,131.333 202,130.5C 205.116,123.103 208.616,115.936 212.5,109C 214.167,108.333 215.833,108.333 217.5,109C 220.744,110.47 224.077,111.637 227.5,112.5C 229.128,113.853 230.462,113.519 231.5,111.5C 233.959,104.955 236.126,98.2885 238,91.5C 242.19,88.0664 246.19,84.3998 250,80.5C 250.333,76.8333 250.667,73.1667 251,69.5C 251.833,68.6667 252.667,67.8333 253.5,67C 256.936,66.308 260.27,65.308 263.5,64C 268.211,57.4108 273.045,50.9108 278,44.5C 282.391,33.3288 286.391,21.9955 290,10.5C 291.129,8.85883 292.629,7.85883 294.5,7.5 Z"/></g>
                          <g><path   d="M -0.5,7.5 C 0.166667,7.83333 0.833333,8.16667 1.5,8.5C 1.41346,17.1877 1.74679,25.8544 2.5,34.5C 1.5,33.1667 0.5,33.1667 -0.5,34.5C -0.5,25.5 -0.5,16.5 -0.5,7.5 Z"/></g>
                          <g><path   d="M 150.5,71.5 C 149.5,68.8333 148.5,68.8333 147.5,71.5C 143.69,72.9934 139.69,73.66 135.5,73.5C 125.959,72.9028 116.459,71.9028 107,70.5C 99.2695,71.1984 92.9362,74.5317 88,80.5C 86.3333,86.8333 84.6667,93.1667 83,99.5C 80.5142,102.828 77.3476,105.161 73.5,106.5C 72.5224,106.023 71.6891,105.357 71,104.5C 65.2546,67.8219 79.7546,42.9886 114.5,30C 121.699,27.8053 129.032,27.1386 136.5,28C 140.955,29.9789 145.455,31.8122 150,33.5C 155.714,30.6432 161.714,28.6432 168,27.5C 190.819,30.2354 208.819,40.9021 222,59.5C 228.701,74.2145 230.368,89.5479 227,105.5C 222.418,107.056 218.752,105.722 216,101.5C 213.894,94.5249 211.894,87.5249 210,80.5C 204.695,74.5151 198.029,71.5151 190,71.5C 180.837,72.5412 171.671,73.5412 162.5,74.5C 158.133,74.7061 154.133,73.7061 150.5,71.5 Z"/></g>
                          <g><path   d="M 150.5,71.5 C 149.5,71.5 148.5,71.5 147.5,71.5C 148.5,68.8333 149.5,68.8333 150.5,71.5 Z"/></g>
                          <g><path   d="M 231.5,111.5 C 230.462,113.519 229.128,113.853 227.5,112.5C 228.833,112.167 230.167,111.833 231.5,111.5 Z"/></g>
                          <g><path   d="M 65.5,113.5 C 66.5,113.5 67.5,113.5 68.5,113.5C 67.2601,115.985 66.2601,115.985 65.5,113.5 Z"/></g>
                          <g><path   d="M 96.5,133.5 C 97.7079,134.234 99.0413,134.567 100.5,134.5C 100.083,135.124 99.4164,135.457 98.5,135.5C 97.2867,135.253 96.62,134.586 96.5,133.5 Z"/></g>
                          <g><path   d="M 117.5,135.5 C 118.833,135.5 120.167,135.5 121.5,135.5C 120.167,138.167 118.833,138.167 117.5,135.5 Z"/></g>
                          <g><path   d="M 175.5,134.5 C 176.391,135.11 177.391,135.443 178.5,135.5C 177.053,136.885 176.053,136.552 175.5,134.5 Z"/></g>
                          <g><path   d="M -0.5,230.5 C 0.5,230.833 1.16667,231.5 1.5,232.5C 0.833333,232.5 0.166667,232.5 -0.5,232.5C -0.5,231.833 -0.5,231.167 -0.5,230.5 Z"/></g>
                          <g><path   d="M 296.5,230.5 C 296.5,231.167 296.5,231.833 296.5,232.5C 295.833,232.5 295.167,232.5 294.5,232.5C 294.833,231.5 295.5,230.833 296.5,230.5 Z"/></g>
                          </svg>
                      </div>
                      <div id="barba2" className="barba">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3590 2950" >
                          <g><path    d="M 265.5,109.5 C 266.847,108.829 268.014,108.829 269,109.5C 269.513,108.473 270.013,107.473 270.5,106.5C 272.792,104.733 275.458,103.733 278.5,103.5C 281.152,103.59 283.485,102.924 285.5,101.5C 305.715,97.8707 324.715,101.371 342.5,112C 360.991,124.483 378.324,138.483 394.5,154C 405.152,162.33 416.486,169.663 428.5,176C 438.485,179.854 448.818,181.354 459.5,180.5C 462.716,180.655 465.383,179.655 467.5,177.5C 474.013,170.779 476.18,162.779 474,153.5C 469.774,143.285 462.107,137.618 451,136.5C 446.304,136.047 443.471,138.047 442.5,142.5C 441.849,143.091 441.182,143.757 440.5,144.5C 439.304,144.154 439.304,143.654 440.5,143C 439.473,142.487 438.473,141.987 437.5,141.5C 435.644,134.71 437.978,129.877 444.5,127C 467.815,127.584 484.648,138.417 495,159.5C 499.127,176.422 494.294,190.256 480.5,201C 452.098,222.576 419.931,232.743 384,231.5C 363.008,231.402 342.175,229.569 321.5,226C 315.591,224.941 309.925,223.441 304.5,221.5C 302.485,220.076 300.152,219.41 297.5,219.5C 280.392,214.947 265.726,206.28 253.5,193.5C 244.486,203.189 233.819,210.689 221.5,216C 189.776,226.883 157.11,232.05 123.5,231.5C 113.83,231.074 104.163,230.574 94.5,230C 89.2422,229.386 84.2422,228.219 79.5,226.5C 77.4855,225.076 75.1522,224.41 72.5,224.5C 50.1654,218.302 31.3321,206.636 16,189.5C 8.17309,175.412 8.83976,161.745 18,148.5C 27.9672,136.101 40.8005,128.768 56.5,126.5C 64.9172,125.865 69.5838,129.698 70.5,138C 70.1993,141.097 69.1993,143.93 67.5,146.5C 65.9724,145.198 64.9724,143.531 64.5,141.5C 63.1209,137.715 60.2875,136.049 56,136.5C 37.0992,139.741 29.7658,150.741 34,169.5C 36.4432,175.606 40.9432,179.106 47.5,180C 62.9514,181.554 77.2848,178.221 90.5,170C 97.8333,164.667 105.167,159.333 112.5,154C 124.205,143.293 136.205,132.959 148.5,123C 157.5,116.831 166.834,111.164 176.5,106C 204.539,94.877 230.206,98.7103 253.5,117.5C 257.264,114.389 261.264,111.723 265.5,109.5 Z"/></g>
                          <g><path    d="M 285.5,101.5 C 283.485,102.924 281.152,103.59 278.5,103.5C 280.515,102.076 282.848,101.41 285.5,101.5 Z"/></g>
                          <g><path    d="M 270.5,106.5 C 270.013,107.473 269.513,108.473 269,109.5C 268.014,108.829 266.847,108.829 265.5,109.5C 266.659,107.75 268.326,106.75 270.5,106.5 Z"/></g>
                          <g><path    d="M 437.5,141.5 C 438.473,141.987 439.473,142.487 440.5,143C 439.304,143.654 439.304,144.154 440.5,144.5C 441.182,143.757 441.849,143.091 442.5,142.5C 443.263,145.141 443.43,147.808 443,150.5C 440.517,147.861 438.684,144.861 437.5,141.5 Z"/></g>
                          <g><path    d="M 64.5,141.5 C 64.9724,143.531 65.9724,145.198 67.5,146.5C 66.343,148.138 65.1764,149.804 64,151.5C 64.0455,148.2 64.2122,144.866 64.5,141.5 Z"/></g>
                          <g><path    d="M 467.5,177.5 C 465.383,179.655 462.716,180.655 459.5,180.5C 461.936,179.129 464.603,178.129 467.5,177.5 Z"/></g>
                          <g><path    d="M 297.5,219.5 C 300.152,219.41 302.485,220.076 304.5,221.5C 301.848,221.59 299.515,220.924 297.5,219.5 Z"/></g>
                          <g><path    d="M 72.5,224.5 C 75.1522,224.41 77.4855,225.076 79.5,226.5C 76.8478,226.59 74.5145,225.924 72.5,224.5 Z"/></g>
                          </svg>                    
                      </div>
                      <div id="barba3" className="barba">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3600 2700" >
                        </svg>
                      </div>
                    </div>
                    <div className="ear ear-left"></div>
                    <div className="ear ear-right"></div>
                  </div>
                  <div className="body">
                    <div className="neck"></div>
                    <div className="roupa">
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300 250" >
                        <g><path   fill="#755111" d="M 438.5,78.5 C 438.631,79.2389 438.464,79.9056 438,80.5C 436.667,78.5 435.333,76.5 434,74.5C 430.509,59.68 424.509,46.0133 416,33.5C 403.407,19.454 387.574,11.6206 368.5,10C 347.947,8.38067 327.613,9.71401 307.5,14C 290.862,18.9832 278.029,28.8166 269,43.5C 262.207,62.3325 255.874,81.3325 250,100.5C 243.778,114.945 238.112,129.611 233,144.5C 232.503,141.854 232.336,139.187 232.5,136.5C 233.852,108.091 240.685,81.0913 253,55.5C 261.729,39.5403 273.562,26.3736 288.5,16C 301.657,9.21042 315.657,5.54375 330.5,5C 355.323,1.88165 379.323,4.88165 402.5,14C 425.238,29.2926 437.238,50.7926 438.5,78.5 Z"/></g>
                        <g><path   fill="#69470c" d="M 438.5,78.5 C 442.402,100.746 449.402,122.08 459.5,142.5C 456.173,139.841 452.839,136.508 449.5,132.5C 444.658,119.15 438.491,106.483 431,94.5C 415.16,79.326 399.993,63.4927 385.5,47C 383.595,45.5787 381.595,44.412 379.5,43.5C 364.32,30.3674 347.653,28.2008 329.5,37C 322.273,41.1084 315.606,45.9417 309.5,51.5C 292.611,61.5533 278.778,74.8866 268,91.5C 257.821,116.521 247.654,141.521 237.5,166.5C 230.215,176.291 222.715,185.958 215,195.5C 205.065,208.584 200.732,223.251 202,239.5C 192.638,230.713 189.638,220.046 193,207.5C 194.536,200.227 196.869,193.227 200,186.5C 205.592,175.646 211.425,164.979 217.5,154.5C 217.502,160.284 217.668,166.284 218,172.5C 219.943,173.807 221.777,173.807 223.5,172.5C 225.746,170.351 227.246,167.684 228,164.5C 230.123,155.119 231.623,145.786 232.5,136.5C 232.336,139.187 232.503,141.854 233,144.5C 238.112,129.611 243.778,114.945 250,100.5C 255.874,81.3325 262.207,62.3325 269,43.5C 278.029,28.8166 290.862,18.9832 307.5,14C 327.613,9.71401 347.947,8.38067 368.5,10C 387.574,11.6206 403.407,19.454 416,33.5C 424.509,46.0133 430.509,59.68 434,74.5C 435.333,76.5 436.667,78.5 438,80.5C 438.464,79.9056 438.631,79.2389 438.5,78.5 Z"/></g>
                        <g><path   fill="#e2dc8a" d="M 344.5,35.5 C 353.619,35.4487 358.952,39.9487 360.5,49C 354.833,49.3333 349.167,49.6667 343.5,50C 341.649,50.8372 339.816,51.6705 338,52.5C 338.167,48.812 338.834,45.1453 340,41.5C 340.804,38.8541 342.304,36.8541 344.5,35.5 Z"/></g>
                        <g><path   fill="#58400a" d="M 379.5,43.5 C 381.595,44.412 383.595,45.5787 385.5,47C 399.993,63.4927 415.16,79.326 431,94.5C 438.491,106.483 444.658,119.15 449.5,132.5C 424.569,111.08 404.736,85.7463 390,56.5C 386.287,52.2923 382.787,47.959 379.5,43.5 Z"/></g>
                        <g><path   fill="#e4de8d" d="M 322.5,45.5 C 328.508,45.1709 333.175,47.5042 336.5,52.5C 330.905,55.9264 325.738,59.9264 321,64.5C 319.899,60.7307 319.066,56.8973 318.5,53C 318.927,49.9766 320.261,47.4766 322.5,45.5 Z"/></g>
                        <g><path   fill="#58400a" d="M 309.5,51.5 C 301.615,60.2626 294.449,69.5959 288,79.5C 277.333,99.5 266.667,119.5 256,139.5C 250.361,148.953 244.194,157.953 237.5,166.5C 247.654,141.521 257.821,116.521 268,91.5C 278.778,74.8866 292.611,61.5533 309.5,51.5 Z"/></g>
                        <g><path   fill="#3b2b07" d="M 381.5,295.5 C 374.842,294.329 369.842,296.663 366.5,302.5C 353.312,299.476 339.979,298.81 326.5,300.5C 325.504,300.586 324.671,300.252 324,299.5C 321.44,294.884 318.273,290.718 314.5,287C 304.714,279.275 293.714,273.941 281.5,271C 272.333,262.5 263.167,254 254,245.5C 247.664,237.502 242.33,228.836 238,219.5C 237.973,210.403 237.139,201.403 235.5,192.5C 242.897,183.388 250.064,174.055 257,164.5C 274.092,135.975 292.425,108.308 312,81.5C 320.343,70.4851 330.51,61.6517 342.5,55C 349.054,51.9279 354.554,53.0946 359,58.5C 367.009,72.5244 376.009,85.8577 386,98.5C 403.692,115.192 421.025,132.192 438,149.5C 446.584,160.324 453.917,171.991 460,184.5C 460.996,193.522 459.662,202.189 456,210.5C 449.755,222.664 442.755,234.331 435,245.5C 422.653,252.506 410.819,260.339 399.5,269C 391.558,276.781 385.558,285.614 381.5,295.5 Z"/></g>
                        <g><path   fill="#e8e291" d="M 305.5,62.5 C 310.52,62.1174 314.853,63.6174 318.5,67C 314.843,71.823 310.843,76.323 306.5,80.5C 303.336,77.6717 301.336,74.1717 300.5,70C 301.313,66.8579 302.98,64.3579 305.5,62.5 Z"/></g>
                        <g><path   fill="#d4ce77" d="M 368.5,46.5 C 379.859,45.6831 384.025,50.6831 381,61.5C 378.5,64 376,66.5 373.5,69C 377.802,68.6815 382.135,68.1815 386.5,67.5C 389.682,67.0459 392.182,68.0459 394,70.5C 395.153,78.851 392.32,85.5177 385.5,90.5C 377.06,80.5491 369.56,69.8824 363,58.5C 361.5,57 360,55.5 358.5,54C 363.777,54.4824 368.777,55.8157 373.5,58C 370.793,54.6345 367.46,51.9678 363.5,50C 365.233,48.8111 366.9,47.6444 368.5,46.5 Z"/></g>
                        <g><path   fill="#e8e294" d="M 293.5,80.5 C 297.702,80.3839 301.702,81.2173 305.5,83C 301.469,87.564 297.802,92.3973 294.5,97.5C 287.035,92.058 286.701,86.3914 293.5,80.5 Z"/></g>
                        <g><path   fill="#d4ce77" d="M 399.5,105.5 C 394.854,101.521 390.521,97.1877 386.5,92.5C 387.748,90.5414 389.415,89.0414 391.5,88C 395.167,87.3333 398.833,87.3333 402.5,88C 405.947,90.6362 406.447,93.8029 404,97.5C 402.223,100.059 400.723,102.726 399.5,105.5 Z"/></g>
                        <g><path   fill="#65450b" d="M 498.5,203.5 C 498.827,208.214 498.493,212.88 497.5,217.5C 495.668,218.248 494.001,219.248 492.5,220.5C 483.251,241.594 469.918,259.761 452.5,275C 440.449,283.354 428.115,291.188 415.5,298.5C 418.296,295.203 421.296,292.036 424.5,289C 424.167,288.833 423.833,288.667 423.5,288.5C 419.317,292.084 414.984,295.418 410.5,298.5C 410.458,297.521 410.458,296.521 410.5,295.5C 406.265,297.785 401.931,299.785 397.5,301.5C 402.5,294.167 407.5,286.833 412.5,279.5C 423.787,276.344 435.12,273.177 446.5,270C 463.172,261.32 475.006,248.154 482,230.5C 489.055,212.663 489.721,194.663 484,176.5C 473.045,152.589 461.545,128.922 449.5,105.5C 449.043,104.702 448.376,104.369 447.5,104.5C 446.328,99.1734 445.494,93.8401 445,88.5C 456.333,108.5 467.667,128.5 479,148.5C 488.922,165.666 495.422,183.999 498.5,203.5 Z"/></g>
                        <g><path   fill="#563f0a" d="M 447.5,104.5 C 448.376,104.369 449.043,104.702 449.5,105.5C 461.545,128.922 473.045,152.589 484,176.5C 489.721,194.663 489.055,212.663 482,230.5C 475.006,248.154 463.172,261.32 446.5,270C 435.12,273.177 423.787,276.344 412.5,279.5C 414.002,277.825 415.335,275.992 416.5,274C 426.567,271.587 436.567,268.92 446.5,266C 481.983,244.561 493.15,214.061 480,174.5C 472.68,161.866 465.347,149.199 458,136.5C 453.595,126.118 450.095,115.451 447.5,104.5 Z"/></g>
                        <g><path   fill="#e4de93" d="M 284.5,97.5 C 287.649,97.2114 290.649,97.7114 293.5,99C 288.125,107.585 282.625,116.085 277,124.5C 270.804,115.998 272.971,111.331 283.5,110.5C 278.05,105.576 278.383,101.242 284.5,97.5 Z"/></g>
                        <g><path   fill="#d7d17b" d="M 431.5,135.5 C 430.761,135.631 430.094,135.464 429.5,135C 419.605,124.937 409.605,115.104 399.5,105.5C 402.262,104.62 404.929,103.454 407.5,102C 419.941,102.444 422.941,108.277 416.5,119.5C 416.833,119.833 417.167,120.167 417.5,120.5C 423.503,115.998 428.669,116.665 433,122.5C 433.317,126.91 432.817,131.243 431.5,135.5 Z"/></g>
                        <g><path   fill="#e3dd93" d="M 268.5,126.5 C 270.924,126.192 273.257,126.526 275.5,127.5C 272.75,131.332 270.25,135.332 268,139.5C 263.244,134.845 263.41,130.512 268.5,126.5 Z"/></g>
                        <g><path   fill="#e7e190" d="M 431.5,135.5 C 436.413,130.311 441.247,130.311 446,135.5C 446.142,140.234 444.808,144.568 442,148.5C 438.263,144.273 434.763,139.94 431.5,135.5 Z"/></g>
                        <g><path   fill="#553e09" d="M 223.5,172.5 C 221.777,173.807 219.943,173.807 218,172.5C 217.668,166.284 217.502,160.284 217.5,154.5C 221.654,146.86 225.821,139.194 230,131.5C 229.735,138.825 229.068,146.158 228,153.5C 224.729,159.576 223.229,165.909 223.5,172.5 Z"/></g>
                        <g><path   fill="#e7e194" d="M 264.5,141.5 C 265.239,141.369 265.906,141.536 266.5,142C 264.368,145.764 261.868,149.264 259,152.5C 254.948,145.937 256.781,142.27 264.5,141.5 Z"/></g>
                        <g><path   fill="#ebe696" d="M 449.5,146.5 C 456.99,145.302 459.823,148.302 458,155.5C 456.729,158.433 455.062,161.099 453,163.5C 449.833,159 446.667,154.5 443.5,150C 445.432,148.541 447.432,147.375 449.5,146.5 Z"/></g>
                        <g><path   fill="#dcd58f" d="M 250.5,155.5 C 252.857,155.337 255.19,155.503 257.5,156C 254.642,159.358 251.975,162.858 249.5,166.5C 246.535,162.418 246.868,158.751 250.5,155.5 Z"/></g>
                        <g><path   fill="#ece796" d="M 462.5,178.5 C 459.107,174.733 456.44,170.4 454.5,165.5C 457.816,161.18 462.149,159.68 467.5,161C 469.95,168.043 468.284,173.876 462.5,178.5 Z"/></g>
                        <g><path   fill="#e5e093" d="M 242.5,167.5 C 244.604,167.201 246.604,167.534 248.5,168.5C 245.667,172.167 242.833,175.833 240,179.5C 238.888,175.019 239.721,171.019 242.5,167.5 Z"/></g>
                        <g><path   fill="#ece696" d="M 462.5,178.5 C 467.129,177.519 471.796,177.352 476.5,178C 478.988,180.627 479.155,183.46 477,186.5C 475.442,188.359 473.609,189.859 471.5,191C 482.269,190.642 484.269,194.642 477.5,203C 475.559,204.903 473.226,205.736 470.5,205.5C 468.635,196.24 465.968,187.24 462.5,178.5 Z"/></g>
                        <g><path   fill="#ded890" d="M 232.5,180.5 C 234.604,180.201 236.604,180.534 238.5,181.5C 235.833,184.5 233.167,187.5 230.5,190.5C 228.863,186.588 229.529,183.254 232.5,180.5 Z"/></g>
                        <g><path   fill="#e5e092" d="M 225.5,192.5 C 226.552,192.351 227.552,192.517 228.5,193C 226.451,195.593 224.285,198.093 222,200.5C 220.58,196.439 221.746,193.772 225.5,192.5 Z"/></g>
                        <g><path   fill="#563f09" d="M 260.5,258.5 C 251.95,254.12 245.117,247.787 240,239.5C 240.066,242.578 239.899,245.578 239.5,248.5C 234.607,242.374 231.607,235.374 230.5,227.5C 229.171,218.213 228.504,208.88 228.5,199.5C 229.74,195.084 231.24,194.75 233,198.5C 233.607,211.088 235.607,223.421 239,235.5C 239.333,234.5 239.667,233.5 240,232.5C 245.904,241.904 252.738,250.57 260.5,258.5 Z"/></g>
                        <g><path   fill="#553e09" d="M 466.5,203.5 C 464.276,215.349 459.276,225.849 451.5,235C 463.5,230.658 464.333,232.158 454,239.5C 453.399,237.641 452.566,237.308 451.5,238.5C 447.91,239.628 444.577,241.295 441.5,243.5C 441.167,243.167 440.833,242.833 440.5,242.5C 446.581,234.006 452.414,225.339 458,216.5C 461.181,210.473 463.514,204.14 465,197.5C 466.319,199.25 466.819,201.25 466.5,203.5 Z"/></g>
                        <g><path   fill="#3c2c07" d="M 228.5,199.5 C 228.504,208.88 229.171,218.213 230.5,227.5C 231.607,235.374 234.607,242.374 239.5,248.5C 239.899,245.578 240.066,242.578 240,239.5C 245.117,247.787 251.95,254.12 260.5,258.5C 263.384,261.308 266.384,264.141 269.5,267C 254.125,264.095 239.791,258.428 226.5,250C 213.962,238.387 211.795,225.22 220,210.5C 222.853,206.765 225.687,203.098 228.5,199.5 Z"/></g>
                        <g><path   fill="#e0da92" d="M 215.5,202.5 C 217.103,202.312 218.437,202.812 219.5,204C 218,206.167 216.5,208.333 215,210.5C 212.992,207.705 213.158,205.038 215.5,202.5 Z"/></g>
                        <g><path   fill="#3e2e07" d="M 466.5,203.5 C 473.991,222.855 468.658,237.688 450.5,248C 443.673,251.164 436.673,253.498 429.5,255C 437.796,250.696 445.13,245.196 451.5,238.5C 452.566,237.308 453.399,237.641 454,239.5C 464.333,232.158 463.5,230.658 451.5,235C 459.276,225.849 464.276,215.349 466.5,203.5 Z"/></g>
                        <g><path   fill="#e6e193" d="M 210.5,211.5 C 211.756,211.461 212.756,211.961 213.5,213C 211.35,216.615 209.683,220.449 208.5,224.5C 207.115,219.864 207.781,215.531 210.5,211.5 Z"/></g>
                        <g><path   fill="#e6e193" d="M 471.5,206.5 C 474.271,206.421 476.937,206.921 479.5,208C 481.648,210.075 481.982,212.408 480.5,215C 478.285,216.044 475.952,216.71 473.5,217C 481.475,222.208 480.808,225.708 471.5,227.5C 471.5,220.5 471.5,213.5 471.5,206.5 Z"/></g>
                        <g><path   fill="#6f868d" d="M 502.5,224.5 C 504.508,226.083 506.841,227.083 509.5,227.5C 506.833,227.5 504.167,227.5 501.5,227.5C 501.263,226.209 501.596,225.209 502.5,224.5 Z"/></g>
                        <g><path   fill="#e9e495" d="M 205.5,228.5 C 206.376,228.369 207.043,228.702 207.5,229.5C 206.756,232.443 206.256,235.443 206,238.5C 205.502,235.183 205.335,231.85 205.5,228.5 Z"/></g>
                        <g><path   fill="#583f0a" d="M 273.5,286.5 C 266.169,285.715 258.836,284.882 251.5,284C 245.805,282.427 240.138,281.094 234.5,280C 246.455,288.953 258.122,298.287 269.5,308C 273.007,310.254 276.673,312.254 280.5,314C 282.833,314.667 285.167,314.667 287.5,314C 284.371,312.601 281.371,310.935 278.5,309C 281.833,308.667 285.167,308.333 288.5,308C 281.737,306.303 275.403,303.636 269.5,300C 266.833,297 266.833,294 269.5,291C 272,290.5 274.5,290 277,289.5C 291.286,292.232 304.453,297.565 316.5,305.5C 316.167,306.167 315.833,306.833 315.5,307.5C 303.098,298.92 289.431,294.587 274.5,294.5C 276.878,296.878 279.545,298.878 282.5,300.5C 288.422,304.628 294.756,307.961 301.5,310.5C 300.5,310.5 299.5,310.5 298.5,310.5C 295.813,310.336 293.146,310.503 290.5,311C 295.276,313.979 300.276,316.479 305.5,318.5C 305.5,319.833 305.5,321.167 305.5,322.5C 289.146,320.437 273.813,315.271 259.5,307C 241.616,295.78 224.282,283.78 207.5,271C 200.958,266.552 193.958,263.552 186.5,262C 194.667,265.913 202.333,270.58 209.5,276C 202.758,272.806 195.758,269.806 188.5,267C 166.656,259.526 149.656,265.36 137.5,284.5C 143.32,267.849 154.987,258.349 172.5,256C 180.25,255.194 187.917,255.694 195.5,257.5C 199.173,257.572 201.84,256.072 203.5,253C 203.22,251.605 202.553,250.438 201.5,249.5C 194.962,245.942 187.962,244.608 180.5,245.5C 179.282,244.839 177.949,244.172 176.5,243.5C 181.662,242.229 181.662,241.562 176.5,241.5C 171.46,243.389 166.294,245.055 161,246.5C 160.333,245.833 160.333,245.167 161,244.5C 167.361,234.172 176.695,228.839 189,228.5C 192.578,236.622 198.244,242.955 206,247.5C 209.169,254.326 213.669,260.159 219.5,265C 236.168,275.609 254.168,282.776 273.5,286.5 Z"/></g>
                        <g><path   fill="#cac36d" d="M 214.5,252.5 C 211.74,249.747 210.407,246.247 210.5,242C 210.563,239.719 211.397,237.886 213,236.5C 217.124,241.442 217.624,246.775 214.5,252.5 Z"/></g>
                        <g><path   fill="#cac376" d="M 470.5,229.5 C 472.982,231.102 473.815,233.435 473,236.5C 470.833,239.5 468.667,242.5 466.5,245.5C 464.955,246.452 463.288,246.785 461.5,246.5C 462.641,243.167 464.474,240.167 467,237.5C 467.333,238.833 467.667,240.167 468,241.5C 469.028,237.527 469.861,233.527 470.5,229.5 Z"/></g>
                        <g><path   fill="#553f0a" d="M 498.5,203.5 C 501.145,222.742 495.978,239.742 483,254.5C 455.251,282.053 423.251,303.386 387,318.5C 386.235,318.43 385.735,318.097 385.5,317.5C 386.038,315.883 386.371,314.216 386.5,312.5C 388.481,314.734 390.815,314.9 393.5,313C 401.405,308.891 408.738,304.058 415.5,298.5C 428.115,291.188 440.449,283.354 452.5,275C 469.918,259.761 483.251,241.594 492.5,220.5C 494.001,219.248 495.668,218.248 497.5,217.5C 498.493,212.88 498.827,208.214 498.5,203.5 Z"/></g>
                        <g><path   fill="#59410a" d="M 511.5,241.5 C 510.116,242.801 508.616,242.801 507,241.5C 505.702,242.56 504.535,243.726 503.5,245C 503.833,245.5 504.167,246 504.5,246.5C 512.396,248.974 520.396,251.141 528.5,253C 535.968,254.475 541.802,258.309 546,264.5C 548.446,268.394 550.612,272.394 552.5,276.5C 533.98,257.583 512.313,253.083 487.5,263C 482.3,266.267 476.966,268.934 471.5,271C 484.922,259.818 494.922,246.151 501.5,230C 509.339,229.75 516.339,232.083 522.5,237C 518.145,238.415 514.479,239.915 511.5,241.5 Z"/></g>
                        <g><path   fill="#67470c" d="M 180.5,245.5 C 187.962,244.608 194.962,245.942 201.5,249.5C 202.553,250.438 203.22,251.605 203.5,253C 201.84,256.072 199.173,257.572 195.5,257.5C 187.917,255.694 180.25,255.194 172.5,256C 154.987,258.349 143.32,267.849 137.5,284.5C 137.369,285.376 137.702,286.043 138.5,286.5C 142.64,279.689 148.307,274.689 155.5,271.5C 139.284,290.716 124.617,311.049 111.5,332.5C 99.8669,347.075 88.7002,362.075 78,377.5C 77.31,378.738 76.81,378.738 76.5,377.5C 77.847,373.89 77.1804,373.557 74.5,376.5C 86.144,360.676 97.644,344.676 109,328.5C 112.081,322.669 115.415,317.002 119,311.5C 127.045,293.074 136.378,275.407 147,258.5C 156.229,249.365 167.395,245.032 180.5,245.5 Z"/></g>
                        <g><path   fill="#cac46e" d="M 458.5,246.5 C 460.802,251.464 459.302,254.797 454,256.5C 451.942,255.888 450.109,254.888 448.5,253.5C 451.9,251.144 455.233,248.811 458.5,246.5 Z"/></g>
                        <g><path   fill="#cac46e" d="M 443.5,254.5 C 444.5,254.5 445.5,254.5 446.5,254.5C 446.156,261.914 442.489,264.08 435.5,261C 434.643,260.311 433.977,259.478 433.5,258.5C 437.007,257.337 440.341,256.004 443.5,254.5 Z"/></g>
                        <g><path   fill="#c8c26d" d="M 214.5,252.5 C 216.78,250.013 219.447,249.347 222.5,250.5C 224.809,254.118 225.976,258.118 226,262.5C 227.334,258.896 229.834,257.729 233.5,259C 236.698,262.594 237.865,266.761 237,271.5C 228.781,267.39 221.448,262.057 215,255.5C 214.517,254.552 214.351,253.552 214.5,252.5 Z"/></g>
                        <g><path   fill="#ccc572" d="M 427.5,258.5 C 428.833,258.5 430.167,258.5 431.5,258.5C 432.578,264.37 430.245,267.703 424.5,268.5C 420.378,268.056 416.712,266.556 413.5,264C 418.159,261.842 422.825,260.009 427.5,258.5 Z"/></g>
                        <g><path   fill="#1c1503" d="M 305.5,318.5 C 306.461,320.265 306.795,322.265 306.5,324.5C 306.265,325.097 305.765,325.43 305,325.5C 293.341,324.727 282.174,321.894 271.5,317C 250.337,305.253 229.337,293.253 208.5,281C 201.405,277.119 194.071,273.785 186.5,271C 176.045,267.534 165.711,267.7 155.5,271.5C 148.307,274.689 142.64,279.689 138.5,286.5C 137.702,286.043 137.369,285.376 137.5,284.5C 149.656,265.36 166.656,259.526 188.5,267C 195.758,269.806 202.758,272.806 209.5,276C 202.333,270.58 194.667,265.913 186.5,262C 193.958,263.552 200.958,266.552 207.5,271C 224.282,283.78 241.616,295.78 259.5,307C 273.813,315.271 289.146,320.437 305.5,322.5C 305.5,321.167 305.5,319.833 305.5,318.5 Z"/></g>
                        <g><path   fill="#c9c36d" d="M 410.5,265.5 C 414.068,265.759 415.401,267.759 414.5,271.5C 410.219,272.136 406.219,273.636 402.5,276C 409.564,276.326 410.897,278.992 406.5,284C 401.595,285.471 396.595,286.137 391.5,286C 394.123,282.588 396.623,279.088 399,275.5C 402.812,272.031 406.645,268.698 410.5,265.5 Z"/></g>
                        <g><path   fill="#d4ce79" d="M 240.5,267.5 C 247.698,265.868 251.698,268.702 252.5,276C 247.626,275.41 242.959,273.91 238.5,271.5C 239.63,270.378 240.297,269.044 240.5,267.5 Z"/></g>
                        <g><path   fill="#ddd78a" d="M 257.5,270.5 C 259.527,270.338 261.527,270.505 263.5,271C 266.572,273.809 268.905,277.142 270.5,281C 264.748,280.314 259.081,278.981 253.5,277C 254.719,274.722 256.052,272.555 257.5,270.5 Z"/></g>
                        <g><path   fill="#e3de91" d="M 277.5,274.5 C 278.922,274.709 280.255,275.209 281.5,276C 283.5,278.667 285.5,281.333 287.5,284C 282.486,283.944 277.486,283.444 272.5,282.5C 272.667,278.821 274.334,276.154 277.5,274.5 Z"/></g>
                        <g><path   fill="#68470b" d="M 273.5,286.5 C 285.993,288.399 298.327,291.065 310.5,294.5C 310.833,294.333 311.167,294.167 311.5,294C 310.619,293.292 309.953,292.458 309.5,291.5C 310.833,291.833 312.167,292.167 313.5,292.5C 317.096,295.357 319.429,299.024 320.5,303.5C 319.395,304.6 318.062,305.267 316.5,305.5C 304.453,297.565 291.286,292.232 277,289.5C 274.5,290 272,290.5 269.5,291C 266.833,294 266.833,297 269.5,300C 275.403,303.636 281.737,306.303 288.5,308C 285.167,308.333 281.833,308.667 278.5,309C 281.371,310.935 284.371,312.601 287.5,314C 285.167,314.667 282.833,314.667 280.5,314C 276.673,312.254 273.007,310.254 269.5,308C 258.122,298.287 246.455,288.953 234.5,280C 240.138,281.094 245.805,282.427 251.5,284C 258.836,284.882 266.169,285.715 273.5,286.5 Z"/></g>
                        <g><path   fill="#e1dc91" d="M 313.5,292.5 C 312.167,292.167 310.833,291.833 309.5,291.5C 303.454,288.853 297.121,287.02 290.5,286C 289.562,281.285 291.562,279.618 296.5,281C 302.891,283.914 308.558,287.747 313.5,292.5 Z"/></g>
                        <g><path   fill="#cbc56e" d="M 387.5,304.5 C 386.833,302.5 386.167,300.5 385.5,298.5C 387.163,294.503 389.33,290.836 392,287.5C 396.41,288.553 398.41,291.22 398,295.5C 394.922,299.085 391.422,302.085 387.5,304.5 Z"/></g>
                        <g><path   fill="#1c1504" d="M 415.5,298.5 C 408.738,304.058 401.405,308.891 393.5,313C 390.815,314.9 388.481,314.734 386.5,312.5C 386.089,309.724 386.922,309.057 389,310.5C 396.814,307.487 403.981,303.487 410.5,298.5C 414.984,295.418 419.317,292.084 423.5,288.5C 423.833,288.667 424.167,288.833 424.5,289C 421.296,292.036 418.296,295.203 415.5,298.5 Z"/></g>
                        <g><path   fill="#1c1503" d="M 315.5,307.5 C 315.167,308.167 314.833,308.833 314.5,309.5C 304.865,305.686 295.198,301.853 285.5,298C 281.748,297.024 281.082,297.69 283.5,300C 283.272,300.399 282.938,300.565 282.5,300.5C 279.545,298.878 276.878,296.878 274.5,294.5C 289.431,294.587 303.098,298.92 315.5,307.5 Z"/></g>
                        <g><path   fill="#493d05" d="M 381.5,295.5 C 382.262,297.262 383.596,298.262 385.5,298.5C 386.167,300.5 386.833,302.5 387.5,304.5C 387.281,305.675 387.614,306.675 388.5,307.5C 391.701,305.738 394.701,303.738 397.5,301.5C 401.931,299.785 406.265,297.785 410.5,295.5C 410.458,296.521 410.458,297.521 410.5,298.5C 403.981,303.487 396.814,307.487 389,310.5C 386.922,309.057 386.089,309.724 386.5,312.5C 386.371,314.216 386.038,315.883 385.5,317.5C 384.463,318.93 383.796,320.597 383.5,322.5C 381.852,323.81 380.186,325.143 378.5,326.5C 379.562,329.103 379.728,331.77 379,334.5C 377.815,336.377 376.815,338.377 376,340.5C 373.5,341.667 371.667,343.5 370.5,346C 367.789,347.22 364.956,348.053 362,348.5C 356.99,348.128 354.49,345.461 354.5,340.5C 347.144,342.532 339.644,343.865 332,344.5C 326.665,344.2 321.499,343.2 316.5,341.5C 318.593,346.265 320.426,351.265 322,356.5C 322.667,360.5 322.667,364.5 322,368.5C 320.587,371.364 319.087,374.03 317.5,376.5C 313.486,376.666 309.486,376.499 305.5,376C 304.069,375.535 302.903,374.701 302,373.5C 301.74,371.382 300.74,369.716 299,368.5C 298.333,364.167 298.333,359.833 299,355.5C 300.878,350.903 303.378,346.736 306.5,343C 307.253,336.84 307.253,330.673 306.5,324.5C 306.795,322.265 306.461,320.265 305.5,318.5C 300.276,316.479 295.276,313.979 290.5,311C 293.146,310.503 295.813,310.336 298.5,310.5C 301.516,312.387 304.683,314.053 308,315.5C 311.065,315.07 312.898,313.404 313.5,310.5C 314.167,310.5 314.5,310.167 314.5,309.5C 314.833,308.833 315.167,308.167 315.5,307.5C 315.833,306.833 316.167,306.167 316.5,305.5C 318.062,305.267 319.395,304.6 320.5,303.5C 322.412,302.201 324.412,301.201 326.5,300.5C 339.979,298.81 353.312,299.476 366.5,302.5C 369.842,296.663 374.842,294.329 381.5,295.5 Z"/></g>
                        <g><path   fill="#3c2c07" d="M 314.5,309.5 C 314.5,310.167 314.167,310.5 313.5,310.5C 309.399,311.791 305.399,311.791 301.5,310.5C 294.756,307.961 288.422,304.628 282.5,300.5C 282.938,300.565 283.272,300.399 283.5,300C 281.082,297.69 281.748,297.024 285.5,298C 295.198,301.853 304.865,305.686 314.5,309.5 Z"/></g>
                        <g><path   fill="#f4e598" d="M 376.5,298.5 C 376.975,301.323 375.975,303.323 373.5,304.5C 372.287,304.253 371.62,303.586 371.5,302.5C 372.579,300.457 374.246,299.124 376.5,298.5 Z"/></g>
                        <g><path   fill="#c8b23e" d="M 376.5,298.5 C 381.917,298.971 384.25,301.971 383.5,307.5C 380.148,309.852 376.482,311.019 372.5,311C 373.737,310.768 374.737,310.268 375.5,309.5C 377.104,308.713 377.771,307.38 377.5,305.5C 374.753,305.813 372.086,305.48 369.5,304.5C 369.855,303.478 370.522,302.811 371.5,302.5C 371.62,303.586 372.287,304.253 373.5,304.5C 375.975,303.323 376.975,301.323 376.5,298.5 Z"/></g>
                        <g><path   fill="#c1aa2b" d="M 344.5,301.5 C 345.1,302.9 346.1,303.9 347.5,304.5C 338.632,304.374 330.298,306.374 322.5,310.5C 324.854,308.812 326.854,306.812 328.5,304.5C 333.451,302.227 338.784,301.227 344.5,301.5 Z"/></g>
                        <g><path   fill="#eedf93" d="M 344.5,301.5 C 349.23,301.283 353.897,301.617 358.5,302.5C 357.448,304.256 355.781,304.923 353.5,304.5C 351.5,304.5 349.5,304.5 347.5,304.5C 346.1,303.9 345.1,302.9 344.5,301.5 Z"/></g>
                        <g><path   fill="#e6d580" d="M 328.5,304.5 C 326.854,306.812 324.854,308.812 322.5,310.5C 320.291,312.535 318.291,314.868 316.5,317.5C 314.115,316.187 313.948,314.52 316,312.5C 319.058,307.914 323.225,305.247 328.5,304.5 Z"/></g>
                        <g><path   fill="#8f1a20" d="M 366.5,314.5 C 366.565,314.938 366.399,315.272 366,315.5C 363.521,313.083 360.521,312.083 357,312.5C 354.745,312.566 352.578,312.899 350.5,313.5C 349.5,313.5 348.5,313.5 347.5,313.5C 339.782,312.239 332.448,313.406 325.5,317C 323.473,318.396 323.14,320.062 324.5,322C 328.871,322.629 333.204,322.463 337.5,321.5C 336.539,325.508 335.206,329.175 333.5,332.5C 325.752,332.252 320.752,328.419 318.5,321C 319.236,318.861 320.236,316.861 321.5,315C 333.819,307.599 346.819,305.933 360.5,310C 363.106,310.792 365.106,312.292 366.5,314.5 Z"/></g>
                        <g><path   fill="#837218" d="M 358.5,302.5 C 360.767,303.423 363.1,304.256 365.5,305C 366.826,307.158 368.493,308.992 370.5,310.5C 372.071,309.691 373.738,309.357 375.5,309.5C 374.737,310.268 373.737,310.768 372.5,311C 376.482,311.019 380.148,309.852 383.5,307.5C 381.417,314.039 377.084,316.039 370.5,313.5C 366.036,308.103 360.369,305.103 353.5,304.5C 355.781,304.923 357.448,304.256 358.5,302.5 Z"/></g>
                        <g><path   fill="#1c1506" d="M 298.5,310.5 C 299.5,310.5 300.5,310.5 301.5,310.5C 305.399,311.791 309.399,311.791 313.5,310.5C 312.898,313.404 311.065,315.07 308,315.5C 304.683,314.053 301.516,312.387 298.5,310.5 Z"/></g>
                        <g><path   fill="#581f12" d="M 366.5,314.5 C 369.109,319.587 368.109,324.087 363.5,328C 354.724,330.944 345.724,332.777 336.5,333.5C 335.274,333.48 334.274,333.147 333.5,332.5C 335.206,329.175 336.539,325.508 337.5,321.5C 337.842,320.662 338.508,320.328 339.5,320.5C 344.511,320.666 349.511,320.499 354.5,320C 356.007,319.163 356.507,317.996 356,316.5C 354.281,315.131 352.448,314.131 350.5,313.5C 352.578,312.899 354.745,312.566 357,312.5C 360.521,312.083 363.521,313.083 366,315.5C 366.399,315.272 366.565,314.938 366.5,314.5 Z"/></g>
                        <g><path   fill="#ecd5e2" d="M 347.5,313.5 C 344.242,315.088 341.575,317.421 339.5,320.5C 338.508,320.328 337.842,320.662 337.5,321.5C 333.204,322.463 328.871,322.629 324.5,322C 323.14,320.062 323.473,318.396 325.5,317C 332.448,313.406 339.782,312.239 347.5,313.5 Z"/></g>
                        <g><path   fill="#f1bde7" d="M 347.5,313.5 C 348.5,313.5 349.5,313.5 350.5,313.5C 352.448,314.131 354.281,315.131 356,316.5C 356.507,317.996 356.007,319.163 354.5,320C 349.511,320.499 344.511,320.666 339.5,320.5C 341.575,317.421 344.242,315.088 347.5,313.5 Z"/></g>
                        <g><path   fill="#ab9621" d="M 380.5,316.5 C 381.239,316.369 381.906,316.536 382.5,317C 379.616,319.959 376.282,320.792 372.5,319.5C 375.447,318.92 378.114,317.92 380.5,316.5 Z"/></g>
                        <g><path   fill="#ad9722" d="M 309.5,324.5 C 310.777,325.694 311.444,327.36 311.5,329.5C 311.167,331.167 310.833,332.833 310.5,334.5C 309.513,331.232 309.18,327.898 309.5,324.5 Z"/></g>
                        <g><path   fill="#c7b34c" d="M 369.5,325.5 C 372.358,325.595 374.691,326.762 376.5,329C 374.793,329.195 373.126,329.195 371.5,329C 374.406,330.73 375.573,333.23 375,336.5C 372.906,333.124 370.072,330.624 366.5,329C 367.71,327.961 368.71,326.794 369.5,325.5 Z"/></g>
                        <g><path   fill="#b49e25" d="M 362.5,332.5 C 362.557,333.609 362.89,334.609 363.5,335.5C 358.814,336.037 354.147,336.704 349.5,337.5C 352.167,336.167 354.833,334.833 357.5,333.5C 359.117,332.962 360.784,332.629 362.5,332.5 Z"/></g>
                        <g><path   fill="#e9d885" d="M 362.5,332.5 C 369.121,333.077 371.121,336.41 368.5,342.5C 367.662,342.158 367.328,341.492 367.5,340.5C 367.269,337.937 365.935,336.27 363.5,335.5C 362.89,334.609 362.557,333.609 362.5,332.5 Z"/></g>
                        <g><path   fill="#776712" d="M 315.5,331.5 C 321.77,337.818 329.103,339.818 337.5,337.5C 344.373,337.114 351.039,335.781 357.5,333.5C 354.833,334.833 352.167,336.167 349.5,337.5C 342.814,338.868 335.981,340.202 329,341.5C 322.342,340.935 317.842,337.602 315.5,331.5 Z"/></g>
                        <g><path   fill="#573f09" d="M 111.5,332.5 C 102.691,348.112 93.8573,363.779 85,379.5C 72.0119,403.643 60.5119,428.476 50.5,454C 50.7355,454.873 51.0688,455.707 51.5,456.5C 42.2336,477.564 36.4002,499.564 34,522.5C 33.501,518.179 33.3343,513.846 33.5,509.5C 38.2289,462.314 52.5623,418.314 76.5,377.5C 76.81,378.738 77.31,378.738 78,377.5C 88.7002,362.075 99.8669,347.075 111.5,332.5 Z"/></g>
                        <g><path   fill="#dfcc6f" d="M 337.5,337.5 C 329.103,339.818 321.77,337.818 315.5,331.5C 314.2,328.976 314.2,326.309 315.5,323.5C 319.576,333.208 326.909,337.875 337.5,337.5 Z"/></g>
                        <g><path   fill="#bfa827" d="M 310.5,338.5 C 311.5,338.5 312.5,338.5 313.5,338.5C 313.5,339.833 313.5,341.167 313.5,342.5C 310.046,342.733 309.046,341.4 310.5,338.5 Z"/></g>
                        <g><path   fill="#786817" d="M 367.5,340.5 C 367.328,341.492 367.662,342.158 368.5,342.5C 366.071,345.026 363.071,345.859 359.5,345C 357.671,343.887 356.837,342.387 357,340.5C 359.041,339.577 361.208,339.244 363.5,339.5C 363.694,344.403 365.027,344.736 367.5,340.5 Z"/></g>
                        <g><path   fill="#756612" d="M 316.5,349.5 C 317.802,353.628 317.469,357.628 315.5,361.5C 315.5,362.167 315.167,362.5 314.5,362.5C 313.032,359.722 312.199,356.722 312,353.5C 311.667,355.167 311.333,356.833 311,358.5C 310.583,359.756 309.75,360.423 308.5,360.5C 307.766,359.292 307.433,357.959 307.5,356.5C 308.678,353.504 310.011,350.504 311.5,347.5C 312.243,348.908 313.077,350.241 314,351.5C 314.305,349.443 314.305,347.443 314,345.5C 315.095,346.693 315.928,348.027 316.5,349.5 Z"/></g>
                        <g><path   fill="#bca62a" d="M 316.5,349.5 C 318.868,351.956 319.868,354.956 319.5,358.5C 318.326,359.514 317.66,360.847 317.5,362.5C 317.167,362.5 316.833,362.5 316.5,362.5C 316.5,361.833 316.167,361.5 315.5,361.5C 317.469,357.628 317.802,353.628 316.5,349.5 Z"/></g>
                        <g><path   fill="#cab43e" d="M 307.5,356.5 C 307.433,357.959 307.766,359.292 308.5,360.5C 307.5,360.5 306.5,360.5 305.5,360.5C 303.876,360.36 302.71,361.027 302,362.5C 301.333,360.5 301.333,358.5 302,356.5C 302.741,355.359 303.575,355.359 304.5,356.5C 305.251,355.624 305.751,354.624 306,353.5C 306.232,354.737 306.732,355.737 307.5,356.5 Z"/></g>
                        <g><path   fill="#c2ac30" d="M 314.5,362.5 C 313.685,363.429 312.852,364.429 312,365.5C 311.517,364.552 311.351,363.552 311.5,362.5C 309.821,362.715 308.821,362.048 308.5,360.5C 309.75,360.423 310.583,359.756 311,358.5C 311.333,356.833 311.667,355.167 312,353.5C 312.199,356.722 313.032,359.722 314.5,362.5 Z"/></g>
                        <g><path   fill="#e4d68c" d="M 319.5,358.5 C 320.802,361.107 320.636,363.773 319,366.5C 318.59,365.099 318.09,363.766 317.5,362.5C 317.66,360.847 318.326,359.514 319.5,358.5 Z"/></g>
                        <g><path   fill="#f6e89e" d="M 305.5,360.5 C 306.5,360.5 307.5,360.5 308.5,360.5C 308.821,362.048 309.821,362.715 311.5,362.5C 311.351,363.552 311.517,364.552 312,365.5C 312.852,364.429 313.685,363.429 314.5,362.5C 315.167,362.5 315.5,362.167 315.5,361.5C 316.167,361.5 316.5,361.833 316.5,362.5C 315.699,364.042 315.366,365.708 315.5,367.5C 314.626,369.69 312.959,370.69 310.5,370.5C 310.895,367.477 309.895,366.477 307.5,367.5C 306.749,366.624 306.249,365.624 306,364.5C 305.617,365.056 305.117,365.389 304.5,365.5C 304.629,363.784 304.962,362.117 305.5,360.5 Z"/></g>
                        <g><path   fill="#c5ae34" d="M 315.5,367.5 C 315.326,369.861 314.993,372.194 314.5,374.5C 311.478,374.196 308.478,373.696 305.5,373C 303.163,370.806 302.83,368.306 304.5,365.5C 305.117,365.389 305.617,365.056 306,364.5C 306.249,365.624 306.749,366.624 307.5,367.5C 309.895,366.477 310.895,367.477 310.5,370.5C 312.959,370.69 314.626,369.69 315.5,367.5 Z"/></g>
                        <g><path   fill="#724f10" d="M 74.5,376.5 C 53.6418,412.243 39.4751,450.576 32,491.5C 28.0967,516.346 28.9301,541.013 34.5,565.5C 34.631,566.239 34.4643,566.906 34,567.5C 24.7989,546.36 21.7989,524.36 25,501.5C 26.3935,487.259 29.0602,473.259 33,459.5C 36.884,446.682 41.0506,434.015 45.5,421.5C 53.9233,405.642 63.59,390.642 74.5,376.5 Z"/></g>
                        <g><path   fill="#745011" d="M 634.5,579.5 C 638.113,562.934 641.28,546.268 644,529.5C 649.844,494.73 648.011,460.397 638.5,426.5C 638.351,425.448 638.517,424.448 639,423.5C 655.239,461.696 658.572,501.029 649,541.5C 645.869,556.028 641.203,570.028 635,583.5C 634.51,582.207 634.343,580.873 634.5,579.5 Z"/></g>
                        <g><path   fill="#68470b" d="M 45.5,421.5 C 41.0506,434.015 36.884,446.682 33,459.5C 29.0602,473.259 26.3935,487.259 25,501.5C 21.7989,524.36 24.7989,546.36 34,567.5C 34.4643,566.906 34.631,566.239 34.5,565.5C 38.0833,575.904 42.0833,586.237 46.5,596.5C 46.6309,597.376 46.2975,598.043 45.5,598.5C 33.2377,591.124 22.7377,581.79 14,570.5C 10.3257,563.608 7.15908,556.608 4.5,549.5C 3.3303,541.18 3.49697,532.847 5,524.5C 12.4303,487.661 25.9303,453.328 45.5,421.5 Z"/></g>
                        <g><path   fill="#67470c" d="M 664.5,493.5 C 661.298,532.216 649.798,568.216 630,601.5C 629.517,600.552 629.351,599.552 629.5,598.5C 631.035,592.021 632.702,585.687 634.5,579.5C 634.343,580.873 634.51,582.207 635,583.5C 641.203,570.028 645.869,556.028 649,541.5C 658.572,501.029 655.239,461.696 639,423.5C 638.517,424.448 638.351,425.448 638.5,426.5C 633.097,411.695 626.097,397.695 617.5,384.5C 617.279,381.903 616.779,381.903 616,384.5C 602.133,362.937 589.466,340.604 578,317.5C 573.058,309.265 567.892,301.265 562.5,293.5C 559.951,287.408 556.618,281.741 552.5,276.5C 550.612,272.394 548.446,268.394 546,264.5C 541.802,258.309 535.968,254.475 528.5,253C 520.396,251.141 512.396,248.974 504.5,246.5C 504.167,246 503.833,245.5 503.5,245C 504.535,243.726 505.702,242.56 507,241.5C 508.616,242.801 510.116,242.801 511.5,241.5C 528.487,237.548 541.654,242.882 551,257.5C 566.253,283.671 581.253,310.004 596,336.5C 617.204,374.574 636.537,413.574 654,453.5C 659.07,466.446 662.57,479.779 664.5,493.5 Z"/></g>
                        <g><path   fill="#574009" d="M 637.5,434.5 C 640.285,442.922 642.118,451.589 643,460.5C 646.01,495.369 643.01,529.703 634,563.5C 633.202,560.107 632.202,556.774 631,553.5C 623.74,535.956 610.907,529.123 592.5,533C 582.736,536.865 572.736,540.032 562.5,542.5C 548.7,538.901 534.7,536.068 520.5,534C 511.833,533.333 503.167,533.333 494.5,534C 478.845,535.332 463.179,536.499 447.5,537.5C 425.441,536.051 403.441,534.051 381.5,531.5C 368.636,529.43 355.636,527.43 342.5,525.5C 324.666,528.601 307,531.935 289.5,535.5C 268.261,538.655 246.927,540.988 225.5,542.5C 221.5,542.333 217.5,542.167 213.5,542C 198.172,538.668 182.838,535.334 167.5,532C 154.085,530.551 141.085,532.217 128.5,537C 122.112,540.861 115.446,544.194 108.5,547C 105.215,547.824 101.882,548.324 98.5,548.5C 88.1808,547.462 77.8474,547.295 67.5,548C 53.8734,553.294 45.7067,563.127 43,577.5C 37.9893,567.46 35.156,556.793 34.5,545.5C 34.4346,545.062 34.6012,544.728 35,544.5C 35.2189,545.938 35.7189,547.271 36.5,548.5C 40.7572,542.744 46.0906,538.244 52.5,535C 66.5548,534.929 80.5548,534.262 94.5,533C 105.414,529.713 115.081,524.38 123.5,517C 148.764,510.574 174.43,507.907 200.5,509C 214.565,511.341 228.565,514.008 242.5,517C 263.194,518.962 283.861,518.629 304.5,516C 333.735,511.219 363.068,507.219 392.5,504C 411.167,503.333 429.833,503.333 448.5,504C 457.836,506 467.169,508 476.5,510C 496.27,516.442 516.27,521.942 536.5,526.5C 536.393,528.903 537.393,530.736 539.5,532C 549.219,534.611 558.553,533.611 567.5,529C 576.963,520.624 587.963,517.29 600.5,519C 610.586,523.102 620.919,526.102 631.5,528C 635.212,523.542 637.379,518.376 638,512.5C 638.965,485.294 633.799,459.294 622.5,434.5C 627.42,434.151 632.42,434.151 637.5,434.5 Z"/></g>
                        <g><path   fill="#563f0a" d="M 664.5,493.5 C 665.871,498.272 666.704,503.272 667,508.5C 668.302,553.613 652.969,591.947 621,623.5C 623.335,614.994 626.169,606.66 629.5,598.5C 629.351,599.552 629.517,600.552 630,601.5C 649.798,568.216 661.298,532.216 664.5,493.5 Z"/></g>
                        <g><path   fill="#1d3e49" d="M 381.5,531.5 C 381.5,531.833 381.5,532.167 381.5,532.5C 364.948,529.712 348.282,528.878 331.5,530C 317.438,531.844 303.438,534.011 289.5,536.5C 289.5,536.167 289.5,535.833 289.5,535.5C 307,531.935 324.666,528.601 342.5,525.5C 355.636,527.43 368.636,529.43 381.5,531.5 Z"/></g>
                        <g><path   fill="#563f09" d="M 4.5,549.5 C 7.15908,556.608 10.3257,563.608 14,570.5C 22.7377,581.79 33.2377,591.124 45.5,598.5C 46.2975,598.043 46.6309,597.376 46.5,596.5C 49.557,602.679 52.7236,608.679 56,614.5C 25.4606,603.418 8.29398,581.751 4.5,549.5 Z"/></g>
                        </svg>
                    </div>
                    <div className="roupa">
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 1250" >
                        <g><path  fill="#5f641a" d="M 238.5,-0.5 C 240.167,-0.5 241.833,-0.5 243.5,-0.5C 243.5,-0.166667 243.5,0.166667 243.5,0.5C 240.833,0.833333 238.167,1.16667 235.5,1.5C 236.5,0.833333 237.5,0.166667 238.5,-0.5 Z"/></g>
                        <g><path  fill="#807b1e" d="M 235.5,1.5 C 233.485,2.92381 231.152,3.59047 228.5,3.5C 230.515,2.07619 232.848,1.40953 235.5,1.5 Z"/></g>
                        <g><path  fill="#b79f24" d="M 243.5,0.5 C 260.229,4.6826 276.895,9.1826 293.5,14C 308.145,15.1544 322.811,15.6544 337.5,15.5C 323.772,19.0589 309.938,22.7256 296,26.5C 293.815,26.0788 291.649,25.5788 289.5,25C 277.199,18.0158 264.532,11.8491 251.5,6.5C 248.368,4.95389 245.702,2.95389 243.5,0.5 Z"/></g>
                        <g><path   fill="#e2c42d" d="M 243.5,0.5 C 245.702,2.95389 248.368,4.95389 251.5,6.5C 261.113,13.9799 271.113,20.9799 281.5,27.5C 286.362,31.0934 291.362,34.4267 296.5,37.5C 279.01,39.1415 261.676,41.8081 244.5,45.5C 242.97,45.6399 241.97,46.3065 241.5,47.5C 226.666,38.2484 211.666,29.2484 196.5,20.5C 194.236,18.6863 191.903,16.853 189.5,15C 190.056,14.6174 190.389,14.1174 190.5,13.5C 203.071,9.85704 215.738,6.5237 228.5,3.5C 231.152,3.59047 233.485,2.92381 235.5,1.5C 238.167,1.16667 240.833,0.833333 243.5,0.5 Z"/></g>
                        <g><path  fill="#bca325" d="M 459.5,8.5 C 457.151,10.341 454.485,11.6743 451.5,12.5C 441.607,17.1868 431.44,21.1868 421,24.5C 415.237,26.4772 409.404,28.1439 403.5,29.5C 386.157,25.5842 369.157,20.9175 352.5,15.5C 371.815,16.8174 391.149,17.3174 410.5,17C 426.834,14.0996 443.167,11.2663 459.5,8.5 Z"/></g>
                        <g><path  fill="#e1c42d" d="M 459.5,8.5 C 473.203,11.5142 486.536,15.5142 499.5,20.5C 486.299,25.0144 473.133,29.6811 460,34.5C 450.785,31.262 441.618,27.9287 432.5,24.5C 433.167,23.8333 433.833,23.1667 434.5,22.5C 440.915,20.2691 446.582,16.9357 451.5,12.5C 454.485,11.6743 457.151,10.341 459.5,8.5 Z"/></g>
                        <g><path   fill="#caae28" d="M 251.5,6.5 C 264.532,11.8491 277.199,18.0158 289.5,25C 291.649,25.5788 293.815,26.0788 296,26.5C 309.938,22.7256 323.772,19.0589 337.5,15.5C 342.5,15.5 347.5,15.5 352.5,15.5C 369.157,20.9175 386.157,25.5842 403.5,29.5C 409.404,28.1439 415.237,26.4772 421,24.5C 431.44,21.1868 441.607,17.1868 451.5,12.5C 446.582,16.9357 440.915,20.2691 434.5,22.5C 423.975,25.5644 413.641,29.2311 403.5,33.5C 390.477,29.6192 377.31,26.2859 364,23.5C 349.282,25.9736 334.449,27.1403 319.5,27C 311.5,29.1667 303.5,31.3333 295.5,33.5C 290.817,31.4906 286.15,29.4906 281.5,27.5C 271.113,20.9799 261.113,13.9799 251.5,6.5 Z"/></g>
                        <g><path   fill="#ebcc2f" d="M 499.5,20.5 C 504.784,21.5946 509.784,23.2613 514.5,25.5C 513.694,26.7281 512.694,27.7281 511.5,28.5C 493,38.0852 474.333,47.0852 455.5,55.5C 455.611,54.8826 455.944,54.3826 456.5,54C 436.977,48.9958 417.311,44.8292 397.5,41.5C 401.437,40.8504 405.27,39.5171 409,37.5C 416.488,32.5069 424.321,28.1735 432.5,24.5C 441.618,27.9287 450.785,31.262 460,34.5C 473.133,29.6811 486.299,25.0144 499.5,20.5 Z"/></g>
                        <g><path   fill="#d5b82a" d="M 434.5,22.5 C 433.833,23.1667 433.167,23.8333 432.5,24.5C 424.321,28.1735 416.488,32.5069 409,37.5C 405.27,39.5171 401.437,40.8504 397.5,41.5C 383.172,42.2217 368.839,42.8883 354.5,43.5C 339.11,42.8252 323.776,41.4919 308.5,39.5C 304.705,38.3833 300.705,37.7167 296.5,37.5C 291.362,34.4267 286.362,31.0934 281.5,27.5C 286.15,29.4906 290.817,31.4906 295.5,33.5C 303.5,31.3333 311.5,29.1667 319.5,27C 334.449,27.1403 349.282,25.9736 364,23.5C 377.31,26.2859 390.477,29.6192 403.5,33.5C 413.641,29.2311 423.975,25.5644 434.5,22.5 Z"/></g>
                        <g><path   fill="#fee935" d="M 296.5,37.5 C 300.705,37.7167 304.705,38.3833 308.5,39.5C 307.761,39.369 307.094,39.5357 306.5,40C 319.735,47.0784 333.735,51.7451 348.5,54C 361.167,59 373.833,64 386.5,69C 392.049,70.6767 397.715,71.5101 403.5,71.5C 397.944,74.3917 391.944,76.0584 385.5,76.5C 383.236,77.2186 380.903,77.552 378.5,77.5C 367.97,73.0719 357.304,68.9052 346.5,65C 336.202,63.1478 325.868,61.4811 315.5,60C 309.248,57.1383 302.915,54.4716 296.5,52C 284.768,52.4246 273.101,53.5913 261.5,55.5C 254.833,52.8333 248.167,50.1667 241.5,47.5C 241.97,46.3065 242.97,45.6399 244.5,45.5C 261.676,41.8081 279.01,39.1415 296.5,37.5 Z"/></g>
                        <g><path   fill="#fef037" d="M 308.5,39.5 C 323.776,41.4919 339.11,42.8252 354.5,43.5C 368.839,42.8883 383.172,42.2217 397.5,41.5C 417.311,44.8292 436.977,48.9958 456.5,54C 455.944,54.3826 455.611,54.8826 455.5,55.5C 438.315,61.4516 420.981,66.785 403.5,71.5C 397.715,71.5101 392.049,70.6767 386.5,69C 373.833,64 361.167,59 348.5,54C 333.735,51.7451 319.735,47.0784 306.5,40C 307.094,39.5357 307.761,39.369 308.5,39.5 Z"/></g>
                        <g><path   fill="#b8a024" d="M 190.5,13.5 C 190.389,14.1174 190.056,14.6174 189.5,15C 191.903,16.853 194.236,18.6863 196.5,20.5C 196.062,20.4346 195.728,20.6012 195.5,21C 209.633,34.8769 224.299,48.0435 239.5,60.5C 237.744,61.5521 237.077,63.2188 237.5,65.5C 226.655,116.06 216.321,166.726 206.5,217.5C 204.333,181.157 202,144.824 199.5,108.5C 198.856,98.3371 198.189,88.1704 197.5,78C 197.475,75.0706 196.809,72.5706 195.5,70.5C 193.813,52.7074 191.146,35.0407 187.5,17.5C 187.11,15.0182 188.11,13.6848 190.5,13.5 Z"/></g>
                        <g><path   fill="#a79021" d="M 196.5,20.5 C 211.666,29.2484 226.666,38.2484 241.5,47.5C 248.167,50.1667 254.833,52.8333 261.5,55.5C 270.833,59.8333 280.167,64.1667 289.5,68.5C 277.301,67.4965 265.135,66.1631 253,64.5C 251.93,64.528 251.097,64.8614 250.5,65.5C 249.833,65.1667 249.167,64.8333 248.5,64.5C 245.622,62.8946 242.622,61.5612 239.5,60.5C 224.299,48.0435 209.633,34.8769 195.5,21C 195.728,20.6012 196.062,20.4346 196.5,20.5 Z"/></g>
                        <g><path   fill="#fee233" d="M 378.5,77.5 C 366.108,80.6341 353.441,82.4674 340.5,83C 323.336,78.6267 306.336,73.7934 289.5,68.5C 280.167,64.1667 270.833,59.8333 261.5,55.5C 273.101,53.5913 284.768,52.4246 296.5,52C 302.915,54.4716 309.248,57.1383 315.5,60C 325.868,61.4811 336.202,63.1478 346.5,65C 357.304,68.9052 367.97,73.0719 378.5,77.5 Z"/></g>
                        <g><path  fill="#c9af28" d="M 514.5,25.5 C 515.097,25.7352 515.43,26.2352 515.5,27C 509.441,45.3372 504.108,63.8372 499.5,82.5C 489.267,131.328 479.267,180.328 469.5,229.5C 464.766,176.212 460.766,122.879 457.5,69.5C 457.5,68.8333 457.167,68.5 456.5,68.5C 475.275,55.6013 493.942,42.4346 512.5,29C 512.272,28.6012 511.938,28.4346 511.5,28.5C 512.694,27.7281 513.694,26.7281 514.5,25.5 Z"/></g>
                        <g><path   fill="#ddbf2b" d="M 239.5,60.5 C 242.622,61.5612 245.622,62.8946 248.5,64.5C 265.287,89.3687 282.12,114.369 299,139.5C 300.429,146.719 300.929,154.053 300.5,161.5C 300.5,163.167 300.5,164.833 300.5,166.5C 281.04,132.928 261.54,99.2617 242,65.5C 241,64.1667 240,62.8333 239,61.5C 238.502,64.4816 238.335,67.4816 238.5,70.5C 237.549,69.0813 237.216,67.4147 237.5,65.5C 237.077,63.2188 237.744,61.5521 239.5,60.5 Z"/></g>
                        <g><path   fill="#ad9522" d="M 511.5,28.5 C 511.938,28.4346 512.272,28.6012 512.5,29C 493.942,42.4346 475.275,55.6013 456.5,68.5C 433.021,76.4374 409.688,84.7707 386.5,93.5C 381.894,94.7545 377.228,95.7545 372.5,96.5C 376.859,89.8157 381.193,83.149 385.5,76.5C 391.944,76.0584 397.944,74.3917 403.5,71.5C 420.981,66.785 438.315,61.4516 455.5,55.5C 474.333,47.0852 493,38.0852 511.5,28.5 Z"/></g>
                        <g><path   fill="#e8c92e" d="M 456.5,68.5 C 457.167,68.5 457.5,68.8333 457.5,69.5C 457.672,70.4916 457.338,71.1583 456.5,71.5C 456.631,70.7611 456.464,70.0944 456,69.5C 428.431,100.312 401.098,131.312 374,162.5C 373.184,163.823 372.017,164.489 370.5,164.5C 375.99,140.873 381.323,117.206 386.5,93.5C 409.688,84.7707 433.021,76.4374 456.5,68.5 Z"/></g>
                        <g><path   fill="#a08a1f" d="M 250.5,65.5 C 251.097,64.8614 251.93,64.528 253,64.5C 265.135,66.1631 277.301,67.4965 289.5,68.5C 306.336,73.7934 323.336,78.6267 340.5,83C 353.441,82.4674 366.108,80.6341 378.5,77.5C 380.903,77.552 383.236,77.2186 385.5,76.5C 381.193,83.149 376.859,89.8157 372.5,96.5C 369.198,97.2937 365.865,97.9604 362.5,98.5C 354.927,100.153 347.26,101.153 339.5,101.5C 324.116,96.9282 308.783,91.9282 293.5,86.5C 279.354,79.2612 265.021,72.2612 250.5,65.5 Z"/></g>
                        <g><path   fill="#d9bc2b" d="M 457.5,69.5 C 460.766,122.879 464.766,176.212 469.5,229.5C 456.425,267.225 443.259,304.892 430,342.5C 429.5,348.825 429.334,355.158 429.5,361.5C 429.259,326.006 429.259,290.34 429.5,254.5C 430.828,246.432 430.828,238.265 429.5,230C 433.877,209.113 437.877,188.113 441.5,167C 441.472,165.93 441.139,165.097 440.5,164.5C 442.279,160.723 443.446,156.723 444,152.5C 448.493,125.539 452.659,98.5386 456.5,71.5C 457.338,71.1583 457.672,70.4916 457.5,69.5 Z"/></g>
                        <g><path  fill="#d2b72a" d="M 195.5,70.5 C 196.809,72.5706 197.475,75.0706 197.5,78C 198.189,88.1704 198.856,98.3371 199.5,108.5C 198.836,110.978 198.503,113.645 198.5,116.5C 200.397,151.169 201.897,185.835 203,220.5C 194.872,258.139 186.872,295.805 179,333.5C 177.188,346.166 176.688,358.833 177.5,371.5C 173.391,378.073 169.058,384.406 164.5,390.5C 166.507,381.473 168.673,372.473 171,363.5C 173.725,337.14 176.559,310.807 179.5,284.5C 180.117,284.389 180.617,284.056 181,283.5C 185.333,262.833 189.667,242.167 194,221.5C 193.405,194.503 192.572,167.503 191.5,140.5C 192.612,117.154 193.945,93.8203 195.5,70.5 Z"/></g>
                        <g><path   fill="#caaf28" d="M 293.5,86.5 C 308.783,91.9282 324.116,96.9282 339.5,101.5C 327.202,114.298 314.702,126.965 302,139.5C 301.667,125.5 301.333,111.5 301,97.5C 298.49,93.8045 295.99,90.1379 293.5,86.5 Z"/></g>
                        <g><path   fill="#f7d631" d="M 300.5,166.5 C 306.167,177.167 311.833,187.833 317.5,198.5C 305.79,198.264 294.124,197.43 282.5,196C 278.005,183.183 273.505,170.35 269,157.5C 259.266,147.271 249.766,136.937 240.5,126.5C 239.667,107.843 239,89.1761 238.5,70.5C 238.335,67.4816 238.502,64.4816 239,61.5C 240,62.8333 241,64.1667 242,65.5C 261.54,99.2617 281.04,132.928 300.5,166.5 Z"/></g>
                        <g><path   fill="#d7bb2b" d="M 386.5,93.5 C 381.323,117.206 375.99,140.873 370.5,164.5C 358.597,185.304 346.43,205.97 334,226.5C 333.617,225.944 333.117,225.611 332.5,225.5C 328.003,216.307 323.003,207.307 317.5,198.5C 311.833,187.833 306.167,177.167 300.5,166.5C 300.5,164.833 300.5,163.167 300.5,161.5C 303.507,159.491 306.507,157.491 309.5,155.5C 319.095,157.94 328.595,160.606 338,163.5C 347.647,142.392 355.814,120.726 362.5,98.5C 365.865,97.9604 369.198,97.2937 372.5,96.5C 377.228,95.7545 381.894,94.7545 386.5,93.5 Z"/></g>
                        <g><path   fill="#d3b72a" d="M 248.5,64.5 C 249.167,64.8333 249.833,65.1667 250.5,65.5C 265.021,72.2612 279.354,79.2612 293.5,86.5C 295.99,90.1379 298.49,93.8045 301,97.5C 301.333,111.5 301.667,125.5 302,139.5C 314.702,126.965 327.202,114.298 339.5,101.5C 347.26,101.153 354.927,100.153 362.5,98.5C 355.814,120.726 347.647,142.392 338,163.5C 328.595,160.606 319.095,157.94 309.5,155.5C 306.507,157.491 303.507,159.491 300.5,161.5C 300.929,154.053 300.429,146.719 299,139.5C 282.12,114.369 265.287,89.3687 248.5,64.5 Z"/></g>
                        <g><path  fill="#dcbf2c" d="M 199.5,108.5 C 202,144.824 204.333,181.157 206.5,217.5C 208.123,226.949 210.123,236.282 212.5,245.5C 209.226,279.877 206.226,314.377 203.5,349C 205.163,365.118 206.33,381.284 207,397.5C 184,431.5 161,465.5 138,499.5C 137.241,501.063 136.074,502.063 134.5,502.5C 144.211,464.982 154.211,427.648 164.5,390.5C 169.058,384.406 173.391,378.073 177.5,371.5C 176.688,358.833 177.188,346.166 179,333.5C 186.872,295.805 194.872,258.139 203,220.5C 201.897,185.835 200.397,151.169 198.5,116.5C 198.503,113.645 198.836,110.978 199.5,108.5 Z"/></g>
                        <g><path   fill="#fbd932" d="M 240.5,126.5 C 249.766,136.937 259.266,147.271 269,157.5C 273.505,170.35 278.005,183.183 282.5,196C 294.124,197.43 305.79,198.264 317.5,198.5C 323.003,207.307 328.003,216.307 332.5,225.5C 339.209,257.044 345.542,288.711 351.5,320.5C 351.457,321.416 351.124,322.083 350.5,322.5C 322.908,289.065 295.074,255.731 267,222.5C 258.15,198.954 249.483,175.288 241,151.5C 240.5,143.173 240.334,134.84 240.5,126.5 Z"/></g>
                        <g><path  fill="#baa426" d="M 191.5,140.5 C 192.572,167.503 193.405,194.503 194,221.5C 189.667,242.167 185.333,262.833 181,283.5C 180.617,284.056 180.117,284.389 179.5,284.5C 184.501,236.438 188.501,188.438 191.5,140.5 Z"/></g>
                        <g><path  fill="#f4d431" d="M 499.5,82.5 C 497.098,125.835 494.598,169.168 492,212.5C 490.6,267.171 489.1,321.837 487.5,376.5C 496.7,446.901 506.367,517.235 516.5,587.5C 488.361,536.562 460.195,485.562 432,434.5C 431.825,429.981 431.325,425.647 430.5,421.5C 429.834,401.507 429.5,381.507 429.5,361.5C 429.334,355.158 429.5,348.825 430,342.5C 443.259,304.892 456.425,267.225 469.5,229.5C 479.267,180.328 489.267,131.328 499.5,82.5 Z"/></g>
                        <g><path   fill="#d0b529" d="M 440.5,164.5 C 441.139,165.097 441.472,165.93 441.5,167C 437.877,188.113 433.877,209.113 429.5,230C 430.828,238.265 430.828,246.432 429.5,254.5C 429.666,246.826 429.5,239.159 429,231.5C 403.91,261.386 379.076,291.386 354.5,321.5C 370.803,291.563 387.637,261.897 405,232.5C 416.593,209.646 428.426,186.979 440.5,164.5 Z"/></g>
                        <g><path   fill="#edce2f" d="M 456.5,71.5 C 452.659,98.5386 448.493,125.539 444,152.5C 443.446,156.723 442.279,160.723 440.5,164.5C 428.426,186.979 416.593,209.646 405,232.5C 387.637,261.897 370.803,291.563 354.5,321.5C 353.599,322.29 352.932,323.29 352.5,324.5C 351.5,324.167 350.833,323.5 350.5,322.5C 351.124,322.083 351.457,321.416 351.5,320.5C 345.542,288.711 339.209,257.044 332.5,225.5C 333.117,225.611 333.617,225.944 334,226.5C 346.43,205.97 358.597,185.304 370.5,164.5C 372.017,164.489 373.184,163.823 374,162.5C 401.098,131.312 428.431,100.312 456,69.5C 456.464,70.0944 456.631,70.7611 456.5,71.5 Z"/></g>
                        <g><path   fill="#c5ac27" d="M 429.5,254.5 C 429.259,290.34 429.259,326.006 429.5,361.5C 429.5,381.507 429.834,401.507 430.5,421.5C 431.355,463.163 432.188,504.83 433,546.5C 437.42,582.193 441.92,617.86 446.5,653.5C 446.702,655.989 446.202,658.323 445,660.5C 420.979,697.218 397.479,734.218 374.5,771.5C 373.501,695.335 373.167,619.002 373.5,542.5C 370.14,542.384 366.807,542.051 363.5,541.5C 363.5,540.5 363.5,539.5 363.5,538.5C 366.56,497.494 369.56,456.327 372.5,415C 365.788,384.857 359.121,354.69 352.5,324.5C 352.932,323.29 353.599,322.29 354.5,321.5C 379.076,291.386 403.91,261.386 429,231.5C 429.5,239.159 429.666,246.826 429.5,254.5 Z"/></g>
                        <g><path   fill="#cfb429" d="M 237.5,65.5 C 237.216,67.4147 237.549,69.0813 238.5,70.5C 239,89.1761 239.667,107.843 240.5,126.5C 240.334,134.84 240.5,143.173 241,151.5C 249.483,175.288 258.15,198.954 267,222.5C 295.074,255.731 322.908,289.065 350.5,322.5C 350.833,323.5 351.5,324.167 352.5,324.5C 359.121,354.69 365.788,384.857 372.5,415C 369.56,456.327 366.56,497.494 363.5,538.5C 354.127,506.325 344.46,474.325 334.5,442.5C 335.411,431.19 336.078,419.857 336.5,408.5C 332.519,407.979 328.519,407.646 324.5,407.5C 308.956,383.428 293.123,359.428 277,335.5C 276.5,344.494 276.334,353.494 276.5,362.5C 275.171,352.765 275.171,342.931 276.5,333C 265.312,296.758 254.812,260.258 245,223.5C 239.894,261.265 235.061,298.931 230.5,336.5C 230.329,331.804 229.829,327.137 229,322.5C 222.916,296.911 217.416,271.245 212.5,245.5C 210.123,236.282 208.123,226.949 206.5,217.5C 216.321,166.726 226.655,116.06 237.5,65.5 Z"/></g>
                        <g><path  fill="#e2c52d" d="M 212.5,245.5 C 217.416,271.245 222.916,296.911 229,322.5C 229.829,327.137 230.329,331.804 230.5,336.5C 221.983,396.653 213.317,456.653 204.5,516.5C 200.742,521.435 196.742,526.268 192.5,531C 174.095,547.95 155.595,564.783 137,581.5C 121,618.167 105,654.833 89,691.5C 85.8505,702.099 83.0172,712.766 80.5,723.5C 73.8605,719.846 67.1938,716.179 60.5,712.5C 59.7025,712.043 59.3691,711.376 59.5,710.5C 78.8337,660.004 98.667,609.671 119,559.5C 124.019,540.422 129.185,521.422 134.5,502.5C 136.074,502.063 137.241,501.063 138,499.5C 161,465.5 184,431.5 207,397.5C 206.33,381.284 205.163,365.118 203.5,349C 206.226,314.377 209.226,279.877 212.5,245.5 Z"/></g>
                        <g><path   fill="#bfa626" d="M 276.5,362.5 C 276.5,380.167 276.5,397.833 276.5,415.5C 274.463,455.165 272.463,494.831 270.5,534.5C 267.167,534.5 263.833,534.5 260.5,534.5C 251.418,605.493 242.418,676.493 233.5,747.5C 232.922,750.28 232.255,752.947 231.5,755.5C 212.785,715.695 194.452,675.695 176.5,635.5C 183.885,603.744 191.719,572.077 200,540.5C 202.143,532.6 203.643,524.6 204.5,516.5C 213.317,456.653 221.983,396.653 230.5,336.5C 235.061,298.931 239.894,261.265 245,223.5C 254.812,260.258 265.312,296.758 276.5,333C 275.171,342.931 275.171,352.765 276.5,362.5 Z"/></g>
                        <g><path   fill="#dfc12c" d="M 324.5,407.5 C 320.003,406.945 315.836,407.611 312,409.5C 310.277,441.512 308.444,473.512 306.5,505.5C 296.738,474.37 287.238,443.036 278,411.5C 277.79,413.058 277.29,414.391 276.5,415.5C 276.5,397.833 276.5,380.167 276.5,362.5C 276.334,353.494 276.5,344.494 277,335.5C 293.123,359.428 308.956,383.428 324.5,407.5 Z"/></g>
                        <g><path   fill="#e9cb30" d="M 306.5,505.5 C 301.2,593.837 295.866,682.171 290.5,770.5C 276.855,768.038 263.188,765.704 249.5,763.5C 249.5,762.5 249.5,761.5 249.5,760.5C 259.889,685.669 268.889,610.669 276.5,535.5C 274.379,535.675 272.379,535.341 270.5,534.5C 272.463,494.831 274.463,455.165 276.5,415.5C 277.29,414.391 277.79,413.058 278,411.5C 287.238,443.036 296.738,474.37 306.5,505.5 Z"/></g>
                        <g><path   fill="#f1d230" d="M 430.5,421.5 C 431.325,425.647 431.825,429.981 432,434.5C 460.195,485.562 488.361,536.562 516.5,587.5C 531.167,644.167 545.834,700.834 560.5,757.5C 539.873,763.819 519.206,770.152 498.5,776.5C 480.861,735.563 463.527,694.563 446.5,653.5C 441.92,617.86 437.42,582.193 433,546.5C 432.188,504.83 431.355,463.163 430.5,421.5 Z"/></g>
                        <g><path   fill="#fef9f8" d="M 324.5,407.5 C 328.519,407.646 332.519,407.979 336.5,408.5C 336.078,419.857 335.411,431.19 334.5,442.5C 331.875,484.836 329.208,527.17 326.5,569.5C 322.043,635.808 318.043,702.141 314.5,768.5C 311.884,801.332 309.551,834.332 307.5,867.5C 299.799,867.163 292.133,866.497 284.5,865.5C 286.79,833.854 288.79,802.187 290.5,770.5C 295.866,682.171 301.2,593.837 306.5,505.5C 308.444,473.512 310.277,441.512 312,409.5C 315.836,407.611 320.003,406.945 324.5,407.5 Z"/></g>
                        <g><path   fill="#e2c32d" d="M 334.5,442.5 C 344.46,474.325 354.127,506.325 363.5,538.5C 363.5,539.5 363.5,540.5 363.5,541.5C 361.167,541.5 358.833,541.5 356.5,541.5C 355.653,570.158 355.319,598.824 355.5,627.5C 345.851,607.525 336.685,587.191 328,566.5C 327.768,567.737 327.268,568.737 326.5,569.5C 329.208,527.17 331.875,484.836 334.5,442.5 Z"/></g>
                        <g><path   fill="#e6c82e" d="M 204.5,516.5 C 203.643,524.6 202.143,532.6 200,540.5C 191.719,572.077 183.885,603.744 176.5,635.5C 154.749,669.995 133.749,704.995 113.5,740.5C 102.296,735.312 91.2958,729.645 80.5,723.5C 83.0172,712.766 85.8505,702.099 89,691.5C 105,654.833 121,618.167 137,581.5C 155.595,564.783 174.095,547.95 192.5,531C 196.742,526.268 200.742,521.435 204.5,516.5 Z"/></g>
                        <g><path   fill="#fefaf8" d="M 270.5,534.5 C 272.379,535.341 274.379,535.675 276.5,535.5C 268.889,610.669 259.889,685.669 249.5,760.5C 247.756,768.971 246.423,777.638 245.5,786.5C 243.392,796.147 241.392,805.814 239.5,815.5C 232.775,825.265 226.275,835.265 220,845.5C 214.578,842.539 209.078,839.706 203.5,837C 204.094,836.536 204.761,836.369 205.5,836.5C 208.482,836.963 211.482,837.296 214.5,837.5C 216.003,826.141 217.67,814.808 219.5,803.5C 220.497,803.53 221.164,803.03 221.5,802C 224.196,795.578 226.696,789.078 229,782.5C 230.378,770.724 232.878,759.224 236.5,748C 235.552,747.517 234.552,747.351 233.5,747.5C 242.418,676.493 251.418,605.493 260.5,534.5C 263.833,534.5 267.167,534.5 270.5,534.5 Z"/></g>
                        <g><path   fill="#fefbf9" d="M 363.5,541.5 C 366.807,542.051 370.14,542.384 373.5,542.5C 373.167,619.002 373.501,695.335 374.5,771.5C 374.5,772.167 374.5,772.833 374.5,773.5C 373.794,777.885 375.127,781.385 378.5,784C 394.5,796 410.5,808 426.5,820C 441.833,829 457.167,838 472.5,847C 482.009,847.824 491.343,847.658 500.5,846.5C 529.855,845.746 559.188,844.746 588.5,843.5C 590.629,849.015 592.296,854.681 593.5,860.5C 560.83,861.078 528.163,861.744 495.5,862.5C 480.831,863.116 466.164,863.782 451.5,864.5C 432.83,864.667 414.164,864.5 395.5,864C 397.728,860.612 399.728,857.112 401.5,853.5C 418.82,852.474 436.153,851.641 453.5,851C 441.759,843.601 429.759,836.601 417.5,830C 405.05,821.218 392.883,812.051 381,802.5C 380.5,813.828 380.333,825.162 380.5,836.5C 372.5,818.088 364.5,799.088 356.5,779.5C 356.829,765.656 356.496,751.99 355.5,738.5C 355.5,701.5 355.5,664.5 355.5,627.5C 355.319,598.824 355.653,570.158 356.5,541.5C 358.833,541.5 361.167,541.5 363.5,541.5 Z"/></g>
                        <g><path   fill="#eccd31" d="M 355.5,627.5 C 355.5,664.5 355.5,701.5 355.5,738.5C 355.5,749.833 355.5,761.167 355.5,772.5C 341.833,772.5 328.167,772.5 314.5,772.5C 314.5,771.167 314.5,769.833 314.5,768.5C 318.043,702.141 322.043,635.808 326.5,569.5C 327.268,568.737 327.768,567.737 328,566.5C 336.685,587.191 345.851,607.525 355.5,627.5 Z"/></g>
                        <g><path   fill="#d6b92a" d="M 446.5,653.5 C 463.527,694.563 480.861,735.563 498.5,776.5C 457.184,774.871 415.85,773.871 374.5,773.5C 374.5,772.833 374.5,772.167 374.5,771.5C 397.479,734.218 420.979,697.218 445,660.5C 446.202,658.323 446.702,655.989 446.5,653.5 Z"/></g>
                        <g><path   fill="#d5b82a" d="M 176.5,635.5 C 194.452,675.695 212.785,715.695 231.5,755.5C 231.5,756.833 231.5,758.167 231.5,759.5C 192.516,753.391 153.516,747.391 114.5,741.5C 114.5,740.833 114.167,740.5 113.5,740.5C 133.749,704.995 154.749,669.995 176.5,635.5 Z"/></g>
                        <g><path   fill="#d0b429" d="M 59.5,710.5 C 59.3691,711.376 59.7025,712.043 60.5,712.5C 67.1938,716.179 73.8605,719.846 80.5,723.5C 91.2958,729.645 102.296,735.312 113.5,740.5C 114.167,740.5 114.5,740.833 114.5,741.5C 113.206,743.048 112.539,745.048 112.5,747.5C 110.68,768.139 109.346,788.806 108.5,809.5C 87.3859,804.878 66.3859,799.878 45.5,794.5C 49.8333,767.167 54.1667,739.833 58.5,712.5C 58.3284,711.508 58.6618,710.842 59.5,710.5 Z"/></g>
                        <g><path  fill="#caaf28" d="M 58.5,712.5 C 54.1667,739.833 49.8333,767.167 45.5,794.5C 38.1667,792.833 30.8333,791.167 23.5,789.5C 34.9302,763.646 46.5969,737.979 58.5,712.5 Z"/></g>
                        <g><path   fill="#bea426" d="M 114.5,741.5 C 153.516,747.391 192.516,753.391 231.5,759.5C 231.148,762.428 230.482,765.262 229.5,768C 210.833,777.667 192.167,787.333 173.5,797C 159.455,802.346 145.455,807.679 131.5,813C 123.633,813.285 115.967,812.119 108.5,809.5C 109.346,788.806 110.68,768.139 112.5,747.5C 112.539,745.048 113.206,743.048 114.5,741.5 Z"/></g>
                        <g><path  fill="#dbbe2c" d="M 560.5,757.5 C 570.029,786.089 579.363,814.755 588.5,843.5C 559.188,844.746 529.855,845.746 500.5,846.5C 498.833,846.5 497.167,846.5 495.5,846.5C 496.43,823.163 497.43,799.83 498.5,776.5C 519.206,770.152 539.873,763.819 560.5,757.5 Z"/></g>
                        <g><path   fill="#fef3f2" d="M 233.5,747.5 C 234.552,747.351 235.552,747.517 236.5,748C 232.878,759.224 230.378,770.724 229,782.5C 226.696,789.078 224.196,795.578 221.5,802C 221.164,803.03 220.497,803.53 219.5,803.5C 221.16,798.223 221.493,792.89 220.5,787.5C 208.833,793.667 197.167,799.833 185.5,806C 172.265,810.63 159.265,815.63 146.5,821C 166.374,825.867 186.04,831.034 205.5,836.5C 204.761,836.369 204.094,836.536 203.5,837C 209.078,839.706 214.578,842.539 220,845.5C 226.275,835.265 232.775,825.265 239.5,815.5C 237.712,830.609 235.212,845.609 232,860.5C 190.464,847.491 148.63,835.491 106.5,824.5C 76.5472,817.511 46.5472,810.844 16.5,804.5C 18.5968,799.311 20.9302,794.311 23.5,789.5C 30.8333,791.167 38.1667,792.833 45.5,794.5C 66.3859,799.878 87.3859,804.878 108.5,809.5C 115.967,812.119 123.633,813.285 131.5,813C 145.455,807.679 159.455,802.346 173.5,797C 192.167,787.333 210.833,777.667 229.5,768C 230.482,765.262 231.148,762.428 231.5,759.5C 231.5,758.167 231.5,756.833 231.5,755.5C 232.255,752.947 232.922,750.28 233.5,747.5 Z"/></g>
                        <g><path   fill="#d5b82b" d="M 355.5,738.5 C 356.496,751.99 356.829,765.656 356.5,779.5C 356.5,783.833 356.5,788.167 356.5,792.5C 356.663,794.857 356.497,797.19 356,799.5C 334.979,831.552 314.479,863.885 294.5,896.5C 292.665,895.878 291.498,894.544 291,892.5C 276.056,856.958 260.889,821.625 245.5,786.5C 246.423,777.638 247.756,768.971 249.5,760.5C 249.5,761.5 249.5,762.5 249.5,763.5C 263.188,765.704 276.855,768.038 290.5,770.5C 288.79,802.187 286.79,833.854 284.5,865.5C 292.133,866.497 299.799,867.163 307.5,867.5C 309.551,834.332 311.884,801.332 314.5,768.5C 314.5,769.833 314.5,771.167 314.5,772.5C 328.167,772.5 341.833,772.5 355.5,772.5C 355.5,761.167 355.5,749.833 355.5,738.5 Z"/></g>
                        <g><path   fill="#bda426" d="M 374.5,773.5 C 415.85,773.871 457.184,774.871 498.5,776.5C 497.43,799.83 496.43,823.163 495.5,846.5C 497.167,846.5 498.833,846.5 500.5,846.5C 491.343,847.658 482.009,847.824 472.5,847C 457.167,838 441.833,829 426.5,820C 410.5,808 394.5,796 378.5,784C 375.127,781.385 373.794,777.885 374.5,773.5 Z"/></g>
                        <g><path   fill="#fef6f4" d="M 356.5,779.5 C 364.5,799.088 372.5,818.088 380.5,836.5C 381.49,842.31 381.823,848.31 381.5,854.5C 388.167,854.167 394.833,853.833 401.5,853.5C 399.728,857.112 397.728,860.612 395.5,864C 414.164,864.5 432.83,864.667 451.5,864.5C 423.379,867.875 395.046,870.542 366.5,872.5C 364.5,872.5 362.5,872.5 360.5,872.5C 360.813,868.958 360.479,865.625 359.5,862.5C 359.159,838.982 358.159,815.649 356.5,792.5C 356.5,788.167 356.5,783.833 356.5,779.5 Z"/></g>
                        <g><path   fill="#bea42a" d="M 219.5,803.5 C 217.67,814.808 216.003,826.141 214.5,837.5C 211.482,837.296 208.482,836.963 205.5,836.5C 186.04,831.034 166.374,825.867 146.5,821C 159.265,815.63 172.265,810.63 185.5,806C 197.167,799.833 208.833,793.667 220.5,787.5C 221.493,792.89 221.16,798.223 219.5,803.5 Z"/></g>
                        <g><path  fill="#bba325" d="M 245.5,786.5 C 260.889,821.625 276.056,856.958 291,892.5C 291.498,894.544 292.665,895.878 294.5,896.5C 296.5,896.5 298.5,896.5 300.5,896.5C 297.36,897.641 294.027,897.808 290.5,897C 284.482,895.495 278.482,893.995 272.5,892.5C 270.562,890.837 268.228,890.171 265.5,890.5C 210.346,877.294 155.346,863.961 100.5,850.5C 102.167,850.5 103.833,850.5 105.5,850.5C 106.083,841.845 106.416,833.178 106.5,824.5C 148.63,835.491 190.464,847.491 232,860.5C 235.212,845.609 237.712,830.609 239.5,815.5C 241.392,805.814 243.392,796.147 245.5,786.5 Z"/></g>
                        <g><path  fill="#bda426" d="M 356.5,792.5 C 358.159,815.649 359.159,838.982 359.5,862.5C 359.5,866.167 359.5,869.833 359.5,873.5C 362.059,873.802 364.393,873.468 366.5,872.5C 395.046,870.542 423.379,867.875 451.5,864.5C 466.164,863.782 480.831,863.116 495.5,862.5C 493.743,871.259 492.743,880.259 492.5,889.5C 428.512,892.153 364.512,894.486 300.5,896.5C 298.5,896.5 296.5,896.5 294.5,896.5C 314.479,863.885 334.979,831.552 356,799.5C 356.497,797.19 356.663,794.857 356.5,792.5 Z"/></g>
                        <g><path   fill="#bea528" d="M 401.5,853.5 C 394.833,853.833 388.167,854.167 381.5,854.5C 381.823,848.31 381.49,842.31 380.5,836.5C 380.333,825.162 380.5,813.828 381,802.5C 392.883,812.051 405.05,821.218 417.5,830C 429.759,836.601 441.759,843.601 453.5,851C 436.153,851.641 418.82,852.474 401.5,853.5 Z"/></g>
                        <g><path  fill="#cfb329" d="M 16.5,804.5 C 46.5472,810.844 76.5472,817.511 106.5,824.5C 106.416,833.178 106.083,841.845 105.5,850.5C 103.833,850.5 102.167,850.5 100.5,850.5C 66.8156,848.422 33.149,846.088 -0.5,843.5C -0.5,842.5 -0.5,841.5 -0.5,840.5C 5.13252,828.565 10.7992,816.565 16.5,804.5 Z"/></g>
                        <g><path  fill="#d9bc2c" d="M 593.5,860.5 C 597.966,873.898 602.633,887.231 607.5,900.5C 607.5,901.833 607.5,903.167 607.5,904.5C 604.833,904.5 602.167,904.5 599.5,904.5C 563.988,899.267 528.321,894.267 492.5,889.5C 492.743,880.259 493.743,871.259 495.5,862.5C 528.163,861.744 560.83,861.078 593.5,860.5 Z"/></g>
                        <g><path   fill="#d6c171" d="M 359.5,862.5 C 360.479,865.625 360.813,868.958 360.5,872.5C 362.5,872.5 364.5,872.5 366.5,872.5C 364.393,873.468 362.059,873.802 359.5,873.5C 359.5,869.833 359.5,866.167 359.5,862.5 Z"/></g>
                        <g><path  fill="#706a19" d="M 265.5,890.5 C 268.228,890.171 270.562,890.837 272.5,892.5C 269.933,892.279 267.599,891.612 265.5,890.5 Z"/></g>
                        </svg>
                        
                    </div>
                    <div className="arm arm-left"></div>
                    <div className="arm arm-right"></div>
                    <div className="leg leg-left"></div>
                    <div className="leg leg-right"></div>
                    <div className="foot foot-left"></div>
                    <div className="foot foot-right"></div>
                  </div>
              </div>
              </div>
            <div className="opcoes">
              <p className="titulo">Opções</p>
              <div className="cor">
                <div className="colum">
                  <p>Pele</p>
                  <input type="color" onChange={(e) => setcor_pele(hexToRgb(e.target.value))}></input>
                </div>
                <div className="colum">
                  <p>Cabelo</p>
                  <input type="color" onChange={(e) => setcor_cabelo(hexToRgb(e.target.value))}></input>
                </div>
              </div>
            </div>
          </div>        
        </div>
    </body>
  );
}
