'use client';
import Image from "next/image";
import "./page.css"
import Barba from "./barba.png"
import Barba2 from "./barba2.png"
import Barba3 from "./barba3.png"
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
  const [ barba, setbarba] = useState("")
  const [cor_cabelo, setcor_cabelo] =useState([0,0,0])
  const [cor_pele, setcor_pele] =useState([0,0,0])  
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
    return [ r, g, b ];
  };
  function mudar_pele(e){
    var pele = hexToRgb(e)
    setcor_pele(pele)
    document.documentElement.style.setProperty('--pele-r',pele[0])
    document.documentElement.style.setProperty('--pele-g',pele[1])
    document.documentElement.style.setProperty('--pele--b',pele[2])
  }
  function mudar_cabelo(e){
    var cabelo = hexToRgb(e)
    setcor_pele(cabelo)
    document.documentElement.style.setProperty('--cabelo-r',cabelo[0])
    document.documentElement.style.setProperty('--cabelo-g',cabelo[1])
    document.documentElement.style.setProperty('--cabelo-b',cabelo[2])
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

          <strong>Nivel 6 - Alma da Tempestade:</strong> Você recebe a habilidade relacionada ao terreno que escolheu 
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
                    <div classNAme="nose"></div>
                    <div id={barba=="barba1"?"mostrar":""} className="barba">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" >
                        <g><path style={{"opacity":0.304}}  d="M -0.5,-0.5 C 0.166667,-0.5 0.833333,-0.5 1.5,-0.5C 1.16667,0.5 0.5,1.16667 -0.5,1.5C -0.5,0.833333 -0.5,0.166667 -0.5,-0.5 Z"/></g>
                        <g><path style={{"opacity":0.294}}  d="M 294.5,-0.5 C 295.167,-0.5 295.833,-0.5 296.5,-0.5C 296.5,0.166667 296.5,0.833333 296.5,1.5C 295.5,1.16667 294.833,0.5 294.5,-0.5 Z"/></g>
                        <g><path style={{"opacity":0.214}}  d="M 296.5,5.5 C 296.5,14.5 296.5,23.5 296.5,32.5C 295.5,31.1667 294.5,31.1667 293.5,32.5C 294.055,24.1775 294.388,15.8442 294.5,7.5C 295.167,6.83333 295.833,6.16667 296.5,5.5 Z"/></g>
                        <g><path style={{"opacity":0.979}}  d="M 294.5,7.5 C 294.388,15.8442 294.055,24.1775 293.5,32.5C 291.07,44.063 290.236,55.7297 291,67.5C 284.196,82.9126 279.196,98.9126 276,115.5C 272.408,122.354 268.075,128.687 263,134.5C 261.086,141.715 259.753,149.049 259,156.5C 254.817,164.353 249.484,171.353 243,177.5C 238.288,186.293 233.955,195.293 230,204.5C 224.277,209.611 218.11,214.111 211.5,218C 200.833,220.333 190.167,222.667 179.5,225C 172.924,225.645 166.424,225.145 160,223.5C 156.333,224.5 152.667,225.5 149,226.5C 145.473,225.602 141.973,224.602 138.5,223.5C 133.214,224.757 127.88,225.757 122.5,226.5C 111.183,224.27 99.8499,222.103 88.5,220C 80.196,216.034 72.696,210.867 66,204.5C 60.6955,189.214 52.3621,175.88 41,164.5C 40,162.5 39,160.5 38,158.5C 36.7727,151.468 35.4394,144.468 34,137.5C 29.3333,130.167 24.6667,122.833 20,115.5C 17.5287,107.281 15.5287,98.948 14,90.5C 11.5856,84.0112 8.91897,77.6779 6,71.5C 5.16554,59.1022 3.99887,46.7689 2.5,34.5C 1.74679,25.8544 1.41346,17.1877 1.5,8.5C 3.37099,8.85883 4.87099,9.85883 6,11.5C 9.63791,24.7551 14.6379,37.4218 21,49.5C 25.2866,54.5752 29.4533,59.7418 33.5,65C 37.4577,66.3788 41.2911,67.8788 45,69.5C 45.9081,74.1929 46.9081,78.8596 48,83.5C 51.9203,85.4567 55.2536,88.1234 58,91.5C 60.4089,98.894 62.9089,106.227 65.5,113.5C 66.2601,115.985 67.2601,115.985 68.5,113.5C 73.4051,111.701 78.4051,110.534 83.5,110C 89.0015,117.168 93.3349,125.002 96.5,133.5C 96.62,134.586 97.2867,135.253 98.5,135.5C 99.4164,135.457 100.083,135.124 100.5,134.5C 103.693,133.989 106.859,133.322 110,132.5C 112.922,132.548 115.422,133.548 117.5,135.5C 118.833,138.167 120.167,138.167 121.5,135.5C 129.691,127.488 138.857,120.822 149,115.5C 151.819,115.993 154.319,117.16 156.5,119C 163.231,123.696 169.565,128.863 175.5,134.5C 176.053,136.552 177.053,136.885 178.5,135.5C 181.108,133.404 184.108,132.07 187.5,131.5C 191.37,133.172 195.37,133.672 199.5,133C 200.333,132.167 201.167,131.333 202,130.5C 205.116,123.103 208.616,115.936 212.5,109C 214.167,108.333 215.833,108.333 217.5,109C 220.744,110.47 224.077,111.637 227.5,112.5C 229.128,113.853 230.462,113.519 231.5,111.5C 233.959,104.955 236.126,98.2885 238,91.5C 242.19,88.0664 246.19,84.3998 250,80.5C 250.333,76.8333 250.667,73.1667 251,69.5C 251.833,68.6667 252.667,67.8333 253.5,67C 256.936,66.308 260.27,65.308 263.5,64C 268.211,57.4108 273.045,50.9108 278,44.5C 282.391,33.3288 286.391,21.9955 290,10.5C 291.129,8.85883 292.629,7.85883 294.5,7.5 Z"/></g>
                        <g><path style={{"opacity":0.224}}  d="M -0.5,7.5 C 0.166667,7.83333 0.833333,8.16667 1.5,8.5C 1.41346,17.1877 1.74679,25.8544 2.5,34.5C 1.5,33.1667 0.5,33.1667 -0.5,34.5C -0.5,25.5 -0.5,16.5 -0.5,7.5 Z"/></g>
                        <g><path style={{"opacity":0.967}}  d="M 150.5,71.5 C 149.5,68.8333 148.5,68.8333 147.5,71.5C 143.69,72.9934 139.69,73.66 135.5,73.5C 125.959,72.9028 116.459,71.9028 107,70.5C 99.2695,71.1984 92.9362,74.5317 88,80.5C 86.3333,86.8333 84.6667,93.1667 83,99.5C 80.5142,102.828 77.3476,105.161 73.5,106.5C 72.5224,106.023 71.6891,105.357 71,104.5C 65.2546,67.8219 79.7546,42.9886 114.5,30C 121.699,27.8053 129.032,27.1386 136.5,28C 140.955,29.9789 145.455,31.8122 150,33.5C 155.714,30.6432 161.714,28.6432 168,27.5C 190.819,30.2354 208.819,40.9021 222,59.5C 228.701,74.2145 230.368,89.5479 227,105.5C 222.418,107.056 218.752,105.722 216,101.5C 213.894,94.5249 211.894,87.5249 210,80.5C 204.695,74.5151 198.029,71.5151 190,71.5C 180.837,72.5412 171.671,73.5412 162.5,74.5C 158.133,74.7061 154.133,73.7061 150.5,71.5 Z"/></g>
                        <g><path style={{"opacity":0.088}}  d="M 150.5,71.5 C 149.5,71.5 148.5,71.5 147.5,71.5C 148.5,68.8333 149.5,68.8333 150.5,71.5 Z"/></g>
                        <g><path style={{"opacity":0.624}}  d="M 231.5,111.5 C 230.462,113.519 229.128,113.853 227.5,112.5C 228.833,112.167 230.167,111.833 231.5,111.5 Z"/></g>
                        <g><path style={{"opacity":0.91}}  d="M 65.5,113.5 C 66.5,113.5 67.5,113.5 68.5,113.5C 67.2601,115.985 66.2601,115.985 65.5,113.5 Z"/></g>
                        <g><path style={{"opacity":0.102}}  d="M 96.5,133.5 C 97.7079,134.234 99.0413,134.567 100.5,134.5C 100.083,135.124 99.4164,135.457 98.5,135.5C 97.2867,135.253 96.62,134.586 96.5,133.5 Z"/></g>
                        <g><path style={{"opacity":0.094}}  d="M 117.5,135.5 C 118.833,135.5 120.167,135.5 121.5,135.5C 120.167,138.167 118.833,138.167 117.5,135.5 Z"/></g>
                        <g><path style={{"opacity":0.408}}  d="M 175.5,134.5 C 176.391,135.11 177.391,135.443 178.5,135.5C 177.053,136.885 176.053,136.552 175.5,134.5 Z"/></g>
                        <g><path style={{"opacity":0.08}}  d="M -0.5,230.5 C 0.5,230.833 1.16667,231.5 1.5,232.5C 0.833333,232.5 0.166667,232.5 -0.5,232.5C -0.5,231.833 -0.5,231.167 -0.5,230.5 Z"/></g>
                        <g><path style={{"opacity":0.08}}  d="M 296.5,230.5 C 296.5,231.167 296.5,231.833 296.5,232.5C 295.833,232.5 295.167,232.5 294.5,232.5C 294.833,231.5 295.5,230.833 296.5,230.5 Z"/></g>
                        </svg>
                    </div>
                    <div id={barba=="barba2"?"mostrar":""} className="barba">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 450" >
                        <g><path style={{"opacity":1}}  d="M 265.5,109.5 C 266.847,108.829 268.014,108.829 269,109.5C 269.513,108.473 270.013,107.473 270.5,106.5C 272.792,104.733 275.458,103.733 278.5,103.5C 281.152,103.59 283.485,102.924 285.5,101.5C 305.715,97.8707 324.715,101.371 342.5,112C 360.991,124.483 378.324,138.483 394.5,154C 405.152,162.33 416.486,169.663 428.5,176C 438.485,179.854 448.818,181.354 459.5,180.5C 462.716,180.655 465.383,179.655 467.5,177.5C 474.013,170.779 476.18,162.779 474,153.5C 469.774,143.285 462.107,137.618 451,136.5C 446.304,136.047 443.471,138.047 442.5,142.5C 441.849,143.091 441.182,143.757 440.5,144.5C 439.304,144.154 439.304,143.654 440.5,143C 439.473,142.487 438.473,141.987 437.5,141.5C 435.644,134.71 437.978,129.877 444.5,127C 467.815,127.584 484.648,138.417 495,159.5C 499.127,176.422 494.294,190.256 480.5,201C 452.098,222.576 419.931,232.743 384,231.5C 363.008,231.402 342.175,229.569 321.5,226C 315.591,224.941 309.925,223.441 304.5,221.5C 302.485,220.076 300.152,219.41 297.5,219.5C 280.392,214.947 265.726,206.28 253.5,193.5C 244.486,203.189 233.819,210.689 221.5,216C 189.776,226.883 157.11,232.05 123.5,231.5C 113.83,231.074 104.163,230.574 94.5,230C 89.2422,229.386 84.2422,228.219 79.5,226.5C 77.4855,225.076 75.1522,224.41 72.5,224.5C 50.1654,218.302 31.3321,206.636 16,189.5C 8.17309,175.412 8.83976,161.745 18,148.5C 27.9672,136.101 40.8005,128.768 56.5,126.5C 64.9172,125.865 69.5838,129.698 70.5,138C 70.1993,141.097 69.1993,143.93 67.5,146.5C 65.9724,145.198 64.9724,143.531 64.5,141.5C 63.1209,137.715 60.2875,136.049 56,136.5C 37.0992,139.741 29.7658,150.741 34,169.5C 36.4432,175.606 40.9432,179.106 47.5,180C 62.9514,181.554 77.2848,178.221 90.5,170C 97.8333,164.667 105.167,159.333 112.5,154C 124.205,143.293 136.205,132.959 148.5,123C 157.5,116.831 166.834,111.164 176.5,106C 204.539,94.877 230.206,98.7103 253.5,117.5C 257.264,114.389 261.264,111.723 265.5,109.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 285.5,101.5 C 283.485,102.924 281.152,103.59 278.5,103.5C 280.515,102.076 282.848,101.41 285.5,101.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 270.5,106.5 C 270.013,107.473 269.513,108.473 269,109.5C 268.014,108.829 266.847,108.829 265.5,109.5C 266.659,107.75 268.326,106.75 270.5,106.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 437.5,141.5 C 438.473,141.987 439.473,142.487 440.5,143C 439.304,143.654 439.304,144.154 440.5,144.5C 441.182,143.757 441.849,143.091 442.5,142.5C 443.263,145.141 443.43,147.808 443,150.5C 440.517,147.861 438.684,144.861 437.5,141.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 64.5,141.5 C 64.9724,143.531 65.9724,145.198 67.5,146.5C 66.343,148.138 65.1764,149.804 64,151.5C 64.0455,148.2 64.2122,144.866 64.5,141.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 467.5,177.5 C 465.383,179.655 462.716,180.655 459.5,180.5C 461.936,179.129 464.603,178.129 467.5,177.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 297.5,219.5 C 300.152,219.41 302.485,220.076 304.5,221.5C 301.848,221.59 299.515,220.924 297.5,219.5 Z"/></g>
                        <g><path style={{"opacity":1}}  d="M 72.5,224.5 C 75.1522,224.41 77.4855,225.076 79.5,226.5C 76.8478,226.59 74.5145,225.924 72.5,224.5 Z"/></g>
                        </svg>                    
                    </div>
                    <div id={barba=="barba3"?"mostrar":""} className="barba">
                      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4512 4912">
                      <g><path d="M58 4215 c-59 -33 -58 -21 -48 -611 9 -544 18 -732 46 -924 50 -348
                      155 -596 328 -779 113 -118 471 -372 755 -535 423 -243 807 -393 1156 -452
                      122 -21 386 -23 500 -5 518 83 1139 377 1734 821 156 116 208 164 283 264 181
                      240 268 550 298 1061 16 268 13 1058 -4 1098 -21 50 -52 72 -102 72 -36 0 -49
                      -6 -76 -32 l-32 -32 -7 -190 c-13 -322 -49 -550 -124 -778 -148 -448 -417
                      -732 -831 -876 -208 -73 -404 -101 -708 -101 l-228 -1 -19 73 c-94 370 -469
                      504 -703 251 -73 -79 -123 -179 -150 -301 l-6 -28 -173 0 c-559 0 -917 113
                      -1196 377 -121 114 -205 231 -286 398 -131 269 -205 587 -235 1003 -6 84 -15
                      164 -20 177 -19 50 -103 78 -152 50z"/>
                      <path d="M2307 3750 c-382 -132 -1013 -507 -1210 -720 -79 -85 -107 -139 -107
                      -204 0 -66 25 -113 78 -147 114 -72 215 -45 530 145 382 230 518 281 787 297
                      192 11 157 11 345 0 273 -16 411 -69 795 -301 252 -153 356 -192 453 -170 91
                      20 152 92 152 177 -1 113 -135 259 -410 445 -292 198 -660 391 -910 477 -84
                      29 -102 32 -165 27 -90 -8 -87 -8 -175 -1 -66 5 -85 2 -163 -25z"/></g>
                      </svg>

                    </div>
                  </div>
                  <div className="ear ear-left"></div>
                  <div className="ear ear-right"></div>
                </div>
                <div className="body">
                  <div className="neck"></div>
                  <div className="roupa">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 1250" >
                      <g><path style={{"opacity":0.765}} fill="#5f641a" d="M 238.5,-0.5 C 240.167,-0.5 241.833,-0.5 243.5,-0.5C 243.5,-0.166667 243.5,0.166667 243.5,0.5C 240.833,0.833333 238.167,1.16667 235.5,1.5C 236.5,0.833333 237.5,0.166667 238.5,-0.5 Z"/></g>
                      <g><path style={{"opacity":0.953}} fill="#807b1e" d="M 235.5,1.5 C 233.485,2.92381 231.152,3.59047 228.5,3.5C 230.515,2.07619 232.848,1.40953 235.5,1.5 Z"/></g>
                      <g><path style={{"opacity":0.984}} fill="#b79f24" d="M 243.5,0.5 C 260.229,4.6826 276.895,9.1826 293.5,14C 308.145,15.1544 322.811,15.6544 337.5,15.5C 323.772,19.0589 309.938,22.7256 296,26.5C 293.815,26.0788 291.649,25.5788 289.5,25C 277.199,18.0158 264.532,11.8491 251.5,6.5C 248.368,4.95389 245.702,2.95389 243.5,0.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#e2c42d" d="M 243.5,0.5 C 245.702,2.95389 248.368,4.95389 251.5,6.5C 261.113,13.9799 271.113,20.9799 281.5,27.5C 286.362,31.0934 291.362,34.4267 296.5,37.5C 279.01,39.1415 261.676,41.8081 244.5,45.5C 242.97,45.6399 241.97,46.3065 241.5,47.5C 226.666,38.2484 211.666,29.2484 196.5,20.5C 194.236,18.6863 191.903,16.853 189.5,15C 190.056,14.6174 190.389,14.1174 190.5,13.5C 203.071,9.85704 215.738,6.5237 228.5,3.5C 231.152,3.59047 233.485,2.92381 235.5,1.5C 238.167,1.16667 240.833,0.833333 243.5,0.5 Z"/></g>
                      <g><path style={{"opacity":0.988}} fill="#bca325" d="M 459.5,8.5 C 457.151,10.341 454.485,11.6743 451.5,12.5C 441.607,17.1868 431.44,21.1868 421,24.5C 415.237,26.4772 409.404,28.1439 403.5,29.5C 386.157,25.5842 369.157,20.9175 352.5,15.5C 371.815,16.8174 391.149,17.3174 410.5,17C 426.834,14.0996 443.167,11.2663 459.5,8.5 Z"/></g>
                      <g><path style={{"opacity":0.993}} fill="#e1c42d" d="M 459.5,8.5 C 473.203,11.5142 486.536,15.5142 499.5,20.5C 486.299,25.0144 473.133,29.6811 460,34.5C 450.785,31.262 441.618,27.9287 432.5,24.5C 433.167,23.8333 433.833,23.1667 434.5,22.5C 440.915,20.2691 446.582,16.9357 451.5,12.5C 454.485,11.6743 457.151,10.341 459.5,8.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#caae28" d="M 251.5,6.5 C 264.532,11.8491 277.199,18.0158 289.5,25C 291.649,25.5788 293.815,26.0788 296,26.5C 309.938,22.7256 323.772,19.0589 337.5,15.5C 342.5,15.5 347.5,15.5 352.5,15.5C 369.157,20.9175 386.157,25.5842 403.5,29.5C 409.404,28.1439 415.237,26.4772 421,24.5C 431.44,21.1868 441.607,17.1868 451.5,12.5C 446.582,16.9357 440.915,20.2691 434.5,22.5C 423.975,25.5644 413.641,29.2311 403.5,33.5C 390.477,29.6192 377.31,26.2859 364,23.5C 349.282,25.9736 334.449,27.1403 319.5,27C 311.5,29.1667 303.5,31.3333 295.5,33.5C 290.817,31.4906 286.15,29.4906 281.5,27.5C 271.113,20.9799 261.113,13.9799 251.5,6.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#ebcc2f" d="M 499.5,20.5 C 504.784,21.5946 509.784,23.2613 514.5,25.5C 513.694,26.7281 512.694,27.7281 511.5,28.5C 493,38.0852 474.333,47.0852 455.5,55.5C 455.611,54.8826 455.944,54.3826 456.5,54C 436.977,48.9958 417.311,44.8292 397.5,41.5C 401.437,40.8504 405.27,39.5171 409,37.5C 416.488,32.5069 424.321,28.1735 432.5,24.5C 441.618,27.9287 450.785,31.262 460,34.5C 473.133,29.6811 486.299,25.0144 499.5,20.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d5b82a" d="M 434.5,22.5 C 433.833,23.1667 433.167,23.8333 432.5,24.5C 424.321,28.1735 416.488,32.5069 409,37.5C 405.27,39.5171 401.437,40.8504 397.5,41.5C 383.172,42.2217 368.839,42.8883 354.5,43.5C 339.11,42.8252 323.776,41.4919 308.5,39.5C 304.705,38.3833 300.705,37.7167 296.5,37.5C 291.362,34.4267 286.362,31.0934 281.5,27.5C 286.15,29.4906 290.817,31.4906 295.5,33.5C 303.5,31.3333 311.5,29.1667 319.5,27C 334.449,27.1403 349.282,25.9736 364,23.5C 377.31,26.2859 390.477,29.6192 403.5,33.5C 413.641,29.2311 423.975,25.5644 434.5,22.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fee935" d="M 296.5,37.5 C 300.705,37.7167 304.705,38.3833 308.5,39.5C 307.761,39.369 307.094,39.5357 306.5,40C 319.735,47.0784 333.735,51.7451 348.5,54C 361.167,59 373.833,64 386.5,69C 392.049,70.6767 397.715,71.5101 403.5,71.5C 397.944,74.3917 391.944,76.0584 385.5,76.5C 383.236,77.2186 380.903,77.552 378.5,77.5C 367.97,73.0719 357.304,68.9052 346.5,65C 336.202,63.1478 325.868,61.4811 315.5,60C 309.248,57.1383 302.915,54.4716 296.5,52C 284.768,52.4246 273.101,53.5913 261.5,55.5C 254.833,52.8333 248.167,50.1667 241.5,47.5C 241.97,46.3065 242.97,45.6399 244.5,45.5C 261.676,41.8081 279.01,39.1415 296.5,37.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fef037" d="M 308.5,39.5 C 323.776,41.4919 339.11,42.8252 354.5,43.5C 368.839,42.8883 383.172,42.2217 397.5,41.5C 417.311,44.8292 436.977,48.9958 456.5,54C 455.944,54.3826 455.611,54.8826 455.5,55.5C 438.315,61.4516 420.981,66.785 403.5,71.5C 397.715,71.5101 392.049,70.6767 386.5,69C 373.833,64 361.167,59 348.5,54C 333.735,51.7451 319.735,47.0784 306.5,40C 307.094,39.5357 307.761,39.369 308.5,39.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#b8a024" d="M 190.5,13.5 C 190.389,14.1174 190.056,14.6174 189.5,15C 191.903,16.853 194.236,18.6863 196.5,20.5C 196.062,20.4346 195.728,20.6012 195.5,21C 209.633,34.8769 224.299,48.0435 239.5,60.5C 237.744,61.5521 237.077,63.2188 237.5,65.5C 226.655,116.06 216.321,166.726 206.5,217.5C 204.333,181.157 202,144.824 199.5,108.5C 198.856,98.3371 198.189,88.1704 197.5,78C 197.475,75.0706 196.809,72.5706 195.5,70.5C 193.813,52.7074 191.146,35.0407 187.5,17.5C 187.11,15.0182 188.11,13.6848 190.5,13.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#a79021" d="M 196.5,20.5 C 211.666,29.2484 226.666,38.2484 241.5,47.5C 248.167,50.1667 254.833,52.8333 261.5,55.5C 270.833,59.8333 280.167,64.1667 289.5,68.5C 277.301,67.4965 265.135,66.1631 253,64.5C 251.93,64.528 251.097,64.8614 250.5,65.5C 249.833,65.1667 249.167,64.8333 248.5,64.5C 245.622,62.8946 242.622,61.5612 239.5,60.5C 224.299,48.0435 209.633,34.8769 195.5,21C 195.728,20.6012 196.062,20.4346 196.5,20.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fee233" d="M 378.5,77.5 C 366.108,80.6341 353.441,82.4674 340.5,83C 323.336,78.6267 306.336,73.7934 289.5,68.5C 280.167,64.1667 270.833,59.8333 261.5,55.5C 273.101,53.5913 284.768,52.4246 296.5,52C 302.915,54.4716 309.248,57.1383 315.5,60C 325.868,61.4811 336.202,63.1478 346.5,65C 357.304,68.9052 367.97,73.0719 378.5,77.5 Z"/></g>
                      <g><path style={{"opacity":0.997}} fill="#c9af28" d="M 514.5,25.5 C 515.097,25.7352 515.43,26.2352 515.5,27C 509.441,45.3372 504.108,63.8372 499.5,82.5C 489.267,131.328 479.267,180.328 469.5,229.5C 464.766,176.212 460.766,122.879 457.5,69.5C 457.5,68.8333 457.167,68.5 456.5,68.5C 475.275,55.6013 493.942,42.4346 512.5,29C 512.272,28.6012 511.938,28.4346 511.5,28.5C 512.694,27.7281 513.694,26.7281 514.5,25.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#ddbf2b" d="M 239.5,60.5 C 242.622,61.5612 245.622,62.8946 248.5,64.5C 265.287,89.3687 282.12,114.369 299,139.5C 300.429,146.719 300.929,154.053 300.5,161.5C 300.5,163.167 300.5,164.833 300.5,166.5C 281.04,132.928 261.54,99.2617 242,65.5C 241,64.1667 240,62.8333 239,61.5C 238.502,64.4816 238.335,67.4816 238.5,70.5C 237.549,69.0813 237.216,67.4147 237.5,65.5C 237.077,63.2188 237.744,61.5521 239.5,60.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#ad9522" d="M 511.5,28.5 C 511.938,28.4346 512.272,28.6012 512.5,29C 493.942,42.4346 475.275,55.6013 456.5,68.5C 433.021,76.4374 409.688,84.7707 386.5,93.5C 381.894,94.7545 377.228,95.7545 372.5,96.5C 376.859,89.8157 381.193,83.149 385.5,76.5C 391.944,76.0584 397.944,74.3917 403.5,71.5C 420.981,66.785 438.315,61.4516 455.5,55.5C 474.333,47.0852 493,38.0852 511.5,28.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#e8c92e" d="M 456.5,68.5 C 457.167,68.5 457.5,68.8333 457.5,69.5C 457.672,70.4916 457.338,71.1583 456.5,71.5C 456.631,70.7611 456.464,70.0944 456,69.5C 428.431,100.312 401.098,131.312 374,162.5C 373.184,163.823 372.017,164.489 370.5,164.5C 375.99,140.873 381.323,117.206 386.5,93.5C 409.688,84.7707 433.021,76.4374 456.5,68.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#a08a1f" d="M 250.5,65.5 C 251.097,64.8614 251.93,64.528 253,64.5C 265.135,66.1631 277.301,67.4965 289.5,68.5C 306.336,73.7934 323.336,78.6267 340.5,83C 353.441,82.4674 366.108,80.6341 378.5,77.5C 380.903,77.552 383.236,77.2186 385.5,76.5C 381.193,83.149 376.859,89.8157 372.5,96.5C 369.198,97.2937 365.865,97.9604 362.5,98.5C 354.927,100.153 347.26,101.153 339.5,101.5C 324.116,96.9282 308.783,91.9282 293.5,86.5C 279.354,79.2612 265.021,72.2612 250.5,65.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d9bc2b" d="M 457.5,69.5 C 460.766,122.879 464.766,176.212 469.5,229.5C 456.425,267.225 443.259,304.892 430,342.5C 429.5,348.825 429.334,355.158 429.5,361.5C 429.259,326.006 429.259,290.34 429.5,254.5C 430.828,246.432 430.828,238.265 429.5,230C 433.877,209.113 437.877,188.113 441.5,167C 441.472,165.93 441.139,165.097 440.5,164.5C 442.279,160.723 443.446,156.723 444,152.5C 448.493,125.539 452.659,98.5386 456.5,71.5C 457.338,71.1583 457.672,70.4916 457.5,69.5 Z"/></g>
                      <g><path style={{"opacity":0.997}} fill="#d2b72a" d="M 195.5,70.5 C 196.809,72.5706 197.475,75.0706 197.5,78C 198.189,88.1704 198.856,98.3371 199.5,108.5C 198.836,110.978 198.503,113.645 198.5,116.5C 200.397,151.169 201.897,185.835 203,220.5C 194.872,258.139 186.872,295.805 179,333.5C 177.188,346.166 176.688,358.833 177.5,371.5C 173.391,378.073 169.058,384.406 164.5,390.5C 166.507,381.473 168.673,372.473 171,363.5C 173.725,337.14 176.559,310.807 179.5,284.5C 180.117,284.389 180.617,284.056 181,283.5C 185.333,262.833 189.667,242.167 194,221.5C 193.405,194.503 192.572,167.503 191.5,140.5C 192.612,117.154 193.945,93.8203 195.5,70.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#caaf28" d="M 293.5,86.5 C 308.783,91.9282 324.116,96.9282 339.5,101.5C 327.202,114.298 314.702,126.965 302,139.5C 301.667,125.5 301.333,111.5 301,97.5C 298.49,93.8045 295.99,90.1379 293.5,86.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#f7d631" d="M 300.5,166.5 C 306.167,177.167 311.833,187.833 317.5,198.5C 305.79,198.264 294.124,197.43 282.5,196C 278.005,183.183 273.505,170.35 269,157.5C 259.266,147.271 249.766,136.937 240.5,126.5C 239.667,107.843 239,89.1761 238.5,70.5C 238.335,67.4816 238.502,64.4816 239,61.5C 240,62.8333 241,64.1667 242,65.5C 261.54,99.2617 281.04,132.928 300.5,166.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d7bb2b" d="M 386.5,93.5 C 381.323,117.206 375.99,140.873 370.5,164.5C 358.597,185.304 346.43,205.97 334,226.5C 333.617,225.944 333.117,225.611 332.5,225.5C 328.003,216.307 323.003,207.307 317.5,198.5C 311.833,187.833 306.167,177.167 300.5,166.5C 300.5,164.833 300.5,163.167 300.5,161.5C 303.507,159.491 306.507,157.491 309.5,155.5C 319.095,157.94 328.595,160.606 338,163.5C 347.647,142.392 355.814,120.726 362.5,98.5C 365.865,97.9604 369.198,97.2937 372.5,96.5C 377.228,95.7545 381.894,94.7545 386.5,93.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d3b72a" d="M 248.5,64.5 C 249.167,64.8333 249.833,65.1667 250.5,65.5C 265.021,72.2612 279.354,79.2612 293.5,86.5C 295.99,90.1379 298.49,93.8045 301,97.5C 301.333,111.5 301.667,125.5 302,139.5C 314.702,126.965 327.202,114.298 339.5,101.5C 347.26,101.153 354.927,100.153 362.5,98.5C 355.814,120.726 347.647,142.392 338,163.5C 328.595,160.606 319.095,157.94 309.5,155.5C 306.507,157.491 303.507,159.491 300.5,161.5C 300.929,154.053 300.429,146.719 299,139.5C 282.12,114.369 265.287,89.3687 248.5,64.5 Z"/></g>
                      <g><path style={{"opacity":0.999}} fill="#dcbf2c" d="M 199.5,108.5 C 202,144.824 204.333,181.157 206.5,217.5C 208.123,226.949 210.123,236.282 212.5,245.5C 209.226,279.877 206.226,314.377 203.5,349C 205.163,365.118 206.33,381.284 207,397.5C 184,431.5 161,465.5 138,499.5C 137.241,501.063 136.074,502.063 134.5,502.5C 144.211,464.982 154.211,427.648 164.5,390.5C 169.058,384.406 173.391,378.073 177.5,371.5C 176.688,358.833 177.188,346.166 179,333.5C 186.872,295.805 194.872,258.139 203,220.5C 201.897,185.835 200.397,151.169 198.5,116.5C 198.503,113.645 198.836,110.978 199.5,108.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fbd932" d="M 240.5,126.5 C 249.766,136.937 259.266,147.271 269,157.5C 273.505,170.35 278.005,183.183 282.5,196C 294.124,197.43 305.79,198.264 317.5,198.5C 323.003,207.307 328.003,216.307 332.5,225.5C 339.209,257.044 345.542,288.711 351.5,320.5C 351.457,321.416 351.124,322.083 350.5,322.5C 322.908,289.065 295.074,255.731 267,222.5C 258.15,198.954 249.483,175.288 241,151.5C 240.5,143.173 240.334,134.84 240.5,126.5 Z"/></g>
                      <g><path style={{"opacity":0.996}} fill="#baa426" d="M 191.5,140.5 C 192.572,167.503 193.405,194.503 194,221.5C 189.667,242.167 185.333,262.833 181,283.5C 180.617,284.056 180.117,284.389 179.5,284.5C 184.501,236.438 188.501,188.438 191.5,140.5 Z"/></g>
                      <g><path style={{"opacity":0.997}} fill="#f4d431" d="M 499.5,82.5 C 497.098,125.835 494.598,169.168 492,212.5C 490.6,267.171 489.1,321.837 487.5,376.5C 496.7,446.901 506.367,517.235 516.5,587.5C 488.361,536.562 460.195,485.562 432,434.5C 431.825,429.981 431.325,425.647 430.5,421.5C 429.834,401.507 429.5,381.507 429.5,361.5C 429.334,355.158 429.5,348.825 430,342.5C 443.259,304.892 456.425,267.225 469.5,229.5C 479.267,180.328 489.267,131.328 499.5,82.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d0b529" d="M 440.5,164.5 C 441.139,165.097 441.472,165.93 441.5,167C 437.877,188.113 433.877,209.113 429.5,230C 430.828,238.265 430.828,246.432 429.5,254.5C 429.666,246.826 429.5,239.159 429,231.5C 403.91,261.386 379.076,291.386 354.5,321.5C 370.803,291.563 387.637,261.897 405,232.5C 416.593,209.646 428.426,186.979 440.5,164.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#edce2f" d="M 456.5,71.5 C 452.659,98.5386 448.493,125.539 444,152.5C 443.446,156.723 442.279,160.723 440.5,164.5C 428.426,186.979 416.593,209.646 405,232.5C 387.637,261.897 370.803,291.563 354.5,321.5C 353.599,322.29 352.932,323.29 352.5,324.5C 351.5,324.167 350.833,323.5 350.5,322.5C 351.124,322.083 351.457,321.416 351.5,320.5C 345.542,288.711 339.209,257.044 332.5,225.5C 333.117,225.611 333.617,225.944 334,226.5C 346.43,205.97 358.597,185.304 370.5,164.5C 372.017,164.489 373.184,163.823 374,162.5C 401.098,131.312 428.431,100.312 456,69.5C 456.464,70.0944 456.631,70.7611 456.5,71.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#c5ac27" d="M 429.5,254.5 C 429.259,290.34 429.259,326.006 429.5,361.5C 429.5,381.507 429.834,401.507 430.5,421.5C 431.355,463.163 432.188,504.83 433,546.5C 437.42,582.193 441.92,617.86 446.5,653.5C 446.702,655.989 446.202,658.323 445,660.5C 420.979,697.218 397.479,734.218 374.5,771.5C 373.501,695.335 373.167,619.002 373.5,542.5C 370.14,542.384 366.807,542.051 363.5,541.5C 363.5,540.5 363.5,539.5 363.5,538.5C 366.56,497.494 369.56,456.327 372.5,415C 365.788,384.857 359.121,354.69 352.5,324.5C 352.932,323.29 353.599,322.29 354.5,321.5C 379.076,291.386 403.91,261.386 429,231.5C 429.5,239.159 429.666,246.826 429.5,254.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#cfb429" d="M 237.5,65.5 C 237.216,67.4147 237.549,69.0813 238.5,70.5C 239,89.1761 239.667,107.843 240.5,126.5C 240.334,134.84 240.5,143.173 241,151.5C 249.483,175.288 258.15,198.954 267,222.5C 295.074,255.731 322.908,289.065 350.5,322.5C 350.833,323.5 351.5,324.167 352.5,324.5C 359.121,354.69 365.788,384.857 372.5,415C 369.56,456.327 366.56,497.494 363.5,538.5C 354.127,506.325 344.46,474.325 334.5,442.5C 335.411,431.19 336.078,419.857 336.5,408.5C 332.519,407.979 328.519,407.646 324.5,407.5C 308.956,383.428 293.123,359.428 277,335.5C 276.5,344.494 276.334,353.494 276.5,362.5C 275.171,352.765 275.171,342.931 276.5,333C 265.312,296.758 254.812,260.258 245,223.5C 239.894,261.265 235.061,298.931 230.5,336.5C 230.329,331.804 229.829,327.137 229,322.5C 222.916,296.911 217.416,271.245 212.5,245.5C 210.123,236.282 208.123,226.949 206.5,217.5C 216.321,166.726 226.655,116.06 237.5,65.5 Z"/></g>
                      <g><path style={{"opacity":0.998}} fill="#e2c52d" d="M 212.5,245.5 C 217.416,271.245 222.916,296.911 229,322.5C 229.829,327.137 230.329,331.804 230.5,336.5C 221.983,396.653 213.317,456.653 204.5,516.5C 200.742,521.435 196.742,526.268 192.5,531C 174.095,547.95 155.595,564.783 137,581.5C 121,618.167 105,654.833 89,691.5C 85.8505,702.099 83.0172,712.766 80.5,723.5C 73.8605,719.846 67.1938,716.179 60.5,712.5C 59.7025,712.043 59.3691,711.376 59.5,710.5C 78.8337,660.004 98.667,609.671 119,559.5C 124.019,540.422 129.185,521.422 134.5,502.5C 136.074,502.063 137.241,501.063 138,499.5C 161,465.5 184,431.5 207,397.5C 206.33,381.284 205.163,365.118 203.5,349C 206.226,314.377 209.226,279.877 212.5,245.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#bfa626" d="M 276.5,362.5 C 276.5,380.167 276.5,397.833 276.5,415.5C 274.463,455.165 272.463,494.831 270.5,534.5C 267.167,534.5 263.833,534.5 260.5,534.5C 251.418,605.493 242.418,676.493 233.5,747.5C 232.922,750.28 232.255,752.947 231.5,755.5C 212.785,715.695 194.452,675.695 176.5,635.5C 183.885,603.744 191.719,572.077 200,540.5C 202.143,532.6 203.643,524.6 204.5,516.5C 213.317,456.653 221.983,396.653 230.5,336.5C 235.061,298.931 239.894,261.265 245,223.5C 254.812,260.258 265.312,296.758 276.5,333C 275.171,342.931 275.171,352.765 276.5,362.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#dfc12c" d="M 324.5,407.5 C 320.003,406.945 315.836,407.611 312,409.5C 310.277,441.512 308.444,473.512 306.5,505.5C 296.738,474.37 287.238,443.036 278,411.5C 277.79,413.058 277.29,414.391 276.5,415.5C 276.5,397.833 276.5,380.167 276.5,362.5C 276.334,353.494 276.5,344.494 277,335.5C 293.123,359.428 308.956,383.428 324.5,407.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#e9cb30" d="M 306.5,505.5 C 301.2,593.837 295.866,682.171 290.5,770.5C 276.855,768.038 263.188,765.704 249.5,763.5C 249.5,762.5 249.5,761.5 249.5,760.5C 259.889,685.669 268.889,610.669 276.5,535.5C 274.379,535.675 272.379,535.341 270.5,534.5C 272.463,494.831 274.463,455.165 276.5,415.5C 277.29,414.391 277.79,413.058 278,411.5C 287.238,443.036 296.738,474.37 306.5,505.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#f1d230" d="M 430.5,421.5 C 431.325,425.647 431.825,429.981 432,434.5C 460.195,485.562 488.361,536.562 516.5,587.5C 531.167,644.167 545.834,700.834 560.5,757.5C 539.873,763.819 519.206,770.152 498.5,776.5C 480.861,735.563 463.527,694.563 446.5,653.5C 441.92,617.86 437.42,582.193 433,546.5C 432.188,504.83 431.355,463.163 430.5,421.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fef9f8" d="M 324.5,407.5 C 328.519,407.646 332.519,407.979 336.5,408.5C 336.078,419.857 335.411,431.19 334.5,442.5C 331.875,484.836 329.208,527.17 326.5,569.5C 322.043,635.808 318.043,702.141 314.5,768.5C 311.884,801.332 309.551,834.332 307.5,867.5C 299.799,867.163 292.133,866.497 284.5,865.5C 286.79,833.854 288.79,802.187 290.5,770.5C 295.866,682.171 301.2,593.837 306.5,505.5C 308.444,473.512 310.277,441.512 312,409.5C 315.836,407.611 320.003,406.945 324.5,407.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#e2c32d" d="M 334.5,442.5 C 344.46,474.325 354.127,506.325 363.5,538.5C 363.5,539.5 363.5,540.5 363.5,541.5C 361.167,541.5 358.833,541.5 356.5,541.5C 355.653,570.158 355.319,598.824 355.5,627.5C 345.851,607.525 336.685,587.191 328,566.5C 327.768,567.737 327.268,568.737 326.5,569.5C 329.208,527.17 331.875,484.836 334.5,442.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#e6c82e" d="M 204.5,516.5 C 203.643,524.6 202.143,532.6 200,540.5C 191.719,572.077 183.885,603.744 176.5,635.5C 154.749,669.995 133.749,704.995 113.5,740.5C 102.296,735.312 91.2958,729.645 80.5,723.5C 83.0172,712.766 85.8505,702.099 89,691.5C 105,654.833 121,618.167 137,581.5C 155.595,564.783 174.095,547.95 192.5,531C 196.742,526.268 200.742,521.435 204.5,516.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fefaf8" d="M 270.5,534.5 C 272.379,535.341 274.379,535.675 276.5,535.5C 268.889,610.669 259.889,685.669 249.5,760.5C 247.756,768.971 246.423,777.638 245.5,786.5C 243.392,796.147 241.392,805.814 239.5,815.5C 232.775,825.265 226.275,835.265 220,845.5C 214.578,842.539 209.078,839.706 203.5,837C 204.094,836.536 204.761,836.369 205.5,836.5C 208.482,836.963 211.482,837.296 214.5,837.5C 216.003,826.141 217.67,814.808 219.5,803.5C 220.497,803.53 221.164,803.03 221.5,802C 224.196,795.578 226.696,789.078 229,782.5C 230.378,770.724 232.878,759.224 236.5,748C 235.552,747.517 234.552,747.351 233.5,747.5C 242.418,676.493 251.418,605.493 260.5,534.5C 263.833,534.5 267.167,534.5 270.5,534.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fefbf9" d="M 363.5,541.5 C 366.807,542.051 370.14,542.384 373.5,542.5C 373.167,619.002 373.501,695.335 374.5,771.5C 374.5,772.167 374.5,772.833 374.5,773.5C 373.794,777.885 375.127,781.385 378.5,784C 394.5,796 410.5,808 426.5,820C 441.833,829 457.167,838 472.5,847C 482.009,847.824 491.343,847.658 500.5,846.5C 529.855,845.746 559.188,844.746 588.5,843.5C 590.629,849.015 592.296,854.681 593.5,860.5C 560.83,861.078 528.163,861.744 495.5,862.5C 480.831,863.116 466.164,863.782 451.5,864.5C 432.83,864.667 414.164,864.5 395.5,864C 397.728,860.612 399.728,857.112 401.5,853.5C 418.82,852.474 436.153,851.641 453.5,851C 441.759,843.601 429.759,836.601 417.5,830C 405.05,821.218 392.883,812.051 381,802.5C 380.5,813.828 380.333,825.162 380.5,836.5C 372.5,818.088 364.5,799.088 356.5,779.5C 356.829,765.656 356.496,751.99 355.5,738.5C 355.5,701.5 355.5,664.5 355.5,627.5C 355.319,598.824 355.653,570.158 356.5,541.5C 358.833,541.5 361.167,541.5 363.5,541.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#eccd31" d="M 355.5,627.5 C 355.5,664.5 355.5,701.5 355.5,738.5C 355.5,749.833 355.5,761.167 355.5,772.5C 341.833,772.5 328.167,772.5 314.5,772.5C 314.5,771.167 314.5,769.833 314.5,768.5C 318.043,702.141 322.043,635.808 326.5,569.5C 327.268,568.737 327.768,567.737 328,566.5C 336.685,587.191 345.851,607.525 355.5,627.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d6b92a" d="M 446.5,653.5 C 463.527,694.563 480.861,735.563 498.5,776.5C 457.184,774.871 415.85,773.871 374.5,773.5C 374.5,772.833 374.5,772.167 374.5,771.5C 397.479,734.218 420.979,697.218 445,660.5C 446.202,658.323 446.702,655.989 446.5,653.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d5b82a" d="M 176.5,635.5 C 194.452,675.695 212.785,715.695 231.5,755.5C 231.5,756.833 231.5,758.167 231.5,759.5C 192.516,753.391 153.516,747.391 114.5,741.5C 114.5,740.833 114.167,740.5 113.5,740.5C 133.749,704.995 154.749,669.995 176.5,635.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d0b429" d="M 59.5,710.5 C 59.3691,711.376 59.7025,712.043 60.5,712.5C 67.1938,716.179 73.8605,719.846 80.5,723.5C 91.2958,729.645 102.296,735.312 113.5,740.5C 114.167,740.5 114.5,740.833 114.5,741.5C 113.206,743.048 112.539,745.048 112.5,747.5C 110.68,768.139 109.346,788.806 108.5,809.5C 87.3859,804.878 66.3859,799.878 45.5,794.5C 49.8333,767.167 54.1667,739.833 58.5,712.5C 58.3284,711.508 58.6618,710.842 59.5,710.5 Z"/></g>
                      <g><path style={{"opacity":0.994}} fill="#caaf28" d="M 58.5,712.5 C 54.1667,739.833 49.8333,767.167 45.5,794.5C 38.1667,792.833 30.8333,791.167 23.5,789.5C 34.9302,763.646 46.5969,737.979 58.5,712.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#bea426" d="M 114.5,741.5 C 153.516,747.391 192.516,753.391 231.5,759.5C 231.148,762.428 230.482,765.262 229.5,768C 210.833,777.667 192.167,787.333 173.5,797C 159.455,802.346 145.455,807.679 131.5,813C 123.633,813.285 115.967,812.119 108.5,809.5C 109.346,788.806 110.68,768.139 112.5,747.5C 112.539,745.048 113.206,743.048 114.5,741.5 Z"/></g>
                      <g><path style={{"opacity":0.989}} fill="#dbbe2c" d="M 560.5,757.5 C 570.029,786.089 579.363,814.755 588.5,843.5C 559.188,844.746 529.855,845.746 500.5,846.5C 498.833,846.5 497.167,846.5 495.5,846.5C 496.43,823.163 497.43,799.83 498.5,776.5C 519.206,770.152 539.873,763.819 560.5,757.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fef3f2" d="M 233.5,747.5 C 234.552,747.351 235.552,747.517 236.5,748C 232.878,759.224 230.378,770.724 229,782.5C 226.696,789.078 224.196,795.578 221.5,802C 221.164,803.03 220.497,803.53 219.5,803.5C 221.16,798.223 221.493,792.89 220.5,787.5C 208.833,793.667 197.167,799.833 185.5,806C 172.265,810.63 159.265,815.63 146.5,821C 166.374,825.867 186.04,831.034 205.5,836.5C 204.761,836.369 204.094,836.536 203.5,837C 209.078,839.706 214.578,842.539 220,845.5C 226.275,835.265 232.775,825.265 239.5,815.5C 237.712,830.609 235.212,845.609 232,860.5C 190.464,847.491 148.63,835.491 106.5,824.5C 76.5472,817.511 46.5472,810.844 16.5,804.5C 18.5968,799.311 20.9302,794.311 23.5,789.5C 30.8333,791.167 38.1667,792.833 45.5,794.5C 66.3859,799.878 87.3859,804.878 108.5,809.5C 115.967,812.119 123.633,813.285 131.5,813C 145.455,807.679 159.455,802.346 173.5,797C 192.167,787.333 210.833,777.667 229.5,768C 230.482,765.262 231.148,762.428 231.5,759.5C 231.5,758.167 231.5,756.833 231.5,755.5C 232.255,752.947 232.922,750.28 233.5,747.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d5b82b" d="M 355.5,738.5 C 356.496,751.99 356.829,765.656 356.5,779.5C 356.5,783.833 356.5,788.167 356.5,792.5C 356.663,794.857 356.497,797.19 356,799.5C 334.979,831.552 314.479,863.885 294.5,896.5C 292.665,895.878 291.498,894.544 291,892.5C 276.056,856.958 260.889,821.625 245.5,786.5C 246.423,777.638 247.756,768.971 249.5,760.5C 249.5,761.5 249.5,762.5 249.5,763.5C 263.188,765.704 276.855,768.038 290.5,770.5C 288.79,802.187 286.79,833.854 284.5,865.5C 292.133,866.497 299.799,867.163 307.5,867.5C 309.551,834.332 311.884,801.332 314.5,768.5C 314.5,769.833 314.5,771.167 314.5,772.5C 328.167,772.5 341.833,772.5 355.5,772.5C 355.5,761.167 355.5,749.833 355.5,738.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#bda426" d="M 374.5,773.5 C 415.85,773.871 457.184,774.871 498.5,776.5C 497.43,799.83 496.43,823.163 495.5,846.5C 497.167,846.5 498.833,846.5 500.5,846.5C 491.343,847.658 482.009,847.824 472.5,847C 457.167,838 441.833,829 426.5,820C 410.5,808 394.5,796 378.5,784C 375.127,781.385 373.794,777.885 374.5,773.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#fef6f4" d="M 356.5,779.5 C 364.5,799.088 372.5,818.088 380.5,836.5C 381.49,842.31 381.823,848.31 381.5,854.5C 388.167,854.167 394.833,853.833 401.5,853.5C 399.728,857.112 397.728,860.612 395.5,864C 414.164,864.5 432.83,864.667 451.5,864.5C 423.379,867.875 395.046,870.542 366.5,872.5C 364.5,872.5 362.5,872.5 360.5,872.5C 360.813,868.958 360.479,865.625 359.5,862.5C 359.159,838.982 358.159,815.649 356.5,792.5C 356.5,788.167 356.5,783.833 356.5,779.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#bea42a" d="M 219.5,803.5 C 217.67,814.808 216.003,826.141 214.5,837.5C 211.482,837.296 208.482,836.963 205.5,836.5C 186.04,831.034 166.374,825.867 146.5,821C 159.265,815.63 172.265,810.63 185.5,806C 197.167,799.833 208.833,793.667 220.5,787.5C 221.493,792.89 221.16,798.223 219.5,803.5 Z"/></g>
                      <g><path style={{"opacity":0.999}} fill="#bba325" d="M 245.5,786.5 C 260.889,821.625 276.056,856.958 291,892.5C 291.498,894.544 292.665,895.878 294.5,896.5C 296.5,896.5 298.5,896.5 300.5,896.5C 297.36,897.641 294.027,897.808 290.5,897C 284.482,895.495 278.482,893.995 272.5,892.5C 270.562,890.837 268.228,890.171 265.5,890.5C 210.346,877.294 155.346,863.961 100.5,850.5C 102.167,850.5 103.833,850.5 105.5,850.5C 106.083,841.845 106.416,833.178 106.5,824.5C 148.63,835.491 190.464,847.491 232,860.5C 235.212,845.609 237.712,830.609 239.5,815.5C 241.392,805.814 243.392,796.147 245.5,786.5 Z"/></g>
                      <g><path style={{"opacity":0.99}} fill="#bda426" d="M 356.5,792.5 C 358.159,815.649 359.159,838.982 359.5,862.5C 359.5,866.167 359.5,869.833 359.5,873.5C 362.059,873.802 364.393,873.468 366.5,872.5C 395.046,870.542 423.379,867.875 451.5,864.5C 466.164,863.782 480.831,863.116 495.5,862.5C 493.743,871.259 492.743,880.259 492.5,889.5C 428.512,892.153 364.512,894.486 300.5,896.5C 298.5,896.5 296.5,896.5 294.5,896.5C 314.479,863.885 334.979,831.552 356,799.5C 356.497,797.19 356.663,794.857 356.5,792.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#bea528" d="M 401.5,853.5 C 394.833,853.833 388.167,854.167 381.5,854.5C 381.823,848.31 381.49,842.31 380.5,836.5C 380.333,825.162 380.5,813.828 381,802.5C 392.883,812.051 405.05,821.218 417.5,830C 429.759,836.601 441.759,843.601 453.5,851C 436.153,851.641 418.82,852.474 401.5,853.5 Z"/></g>
                      <g><path style={{"opacity":0.99}} fill="#cfb329" d="M 16.5,804.5 C 46.5472,810.844 76.5472,817.511 106.5,824.5C 106.416,833.178 106.083,841.845 105.5,850.5C 103.833,850.5 102.167,850.5 100.5,850.5C 66.8156,848.422 33.149,846.088 -0.5,843.5C -0.5,842.5 -0.5,841.5 -0.5,840.5C 5.13252,828.565 10.7992,816.565 16.5,804.5 Z"/></g>
                      <g><path style={{"opacity":0.983}} fill="#d9bc2c" d="M 593.5,860.5 C 597.966,873.898 602.633,887.231 607.5,900.5C 607.5,901.833 607.5,903.167 607.5,904.5C 604.833,904.5 602.167,904.5 599.5,904.5C 563.988,899.267 528.321,894.267 492.5,889.5C 492.743,880.259 493.743,871.259 495.5,862.5C 528.163,861.744 560.83,861.078 593.5,860.5 Z"/></g>
                      <g><path style={{"opacity":1}} fill="#d6c171" d="M 359.5,862.5 C 360.479,865.625 360.813,868.958 360.5,872.5C 362.5,872.5 364.5,872.5 366.5,872.5C 364.393,873.468 362.059,873.802 359.5,873.5C 359.5,869.833 359.5,866.167 359.5,862.5 Z"/></g>
                      <g><path style={{"opacity":0.802}} fill="#706a19" d="M 265.5,890.5 C 268.228,890.171 270.562,890.837 272.5,892.5C 269.933,892.279 267.599,891.612 265.5,890.5 Z"/></g>
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
                  <input type="color" onChange={(e) => mudar_pele(e.target.value)}></input>
                </div>
                <div className="colum">
                  <p>Cabelo</p>
                  <input type="color" onChange={(e) => mudar_cabelo(e.target.value)}></input>
                </div>
              </div>
                  <p>Barbas</p>
                  <div className="cor">
                    <Image onClick={() => setbarba("barba1")} width={20} height={20} src={Barba} ></Image>
                    <Image onClick={() => setbarba("barba2")} width={20} height={20} src={Barba2} ></Image>
                    <Image onClick={() => setbarba("barba3")} width={20} height={20} src={Barba3} ></Image>
                </div>
            </div>
          </div>        
        </div>
    </body>
  );
}
