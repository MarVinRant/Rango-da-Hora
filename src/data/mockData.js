// Importações diretas das imagens (O Vite cuida de otimizar isso no build)
import imgBifeCavalo from '../assets/bife-a-cavalo.jpeg';
import imgBifeAcebolado from '../assets/bife-acebolado.jpeg';
import imgBistecaCouve from '../assets/bisteca-couve.jpeg';
import imgCalabresaFritas from '../assets/calabresa-fritas.jpeg';
import imgFileFrango from '../assets/file-frango-empanado-fritas.jpeg';
import imgFrangoFritas from '../assets/frango-fritas.jpeg';
import imgMacarraoCalabresa from '../assets/macarao-calabresa.jpeg';
import imgMacarraoFrango from '../assets/macarrao-frango-fritas.jpeg';
import imgChurrascoCompleto from '../assets/churrasco-completo.jpeg';
import imgMarmitaChurrasco from '../assets/marmita-churrasco.jpeg';
import imgMarmitaMaionese from '../assets/marmita-churras-e-maionese.jpeg';

export const MENU_CATEGORIES = [
  {
    title: "Especiais da Churrascaria",
    items: [
      {
        id: 1,
        name: "Churrasco Completo",
        desc: "A verdadeira experiência da brasa. Carnes selecionadas, arroz, farofa e acompanhamentos.",
        price: 45.00,
        img: imgChurrascoCompleto 
      },
      {
        id: 2,
        name: "Marmita de Churrasco",
        desc: "Sabor de churrasco de domingo na sua marmita de todo dia.",
        price: 35.00,
        img: imgMarmitaChurrasco 
      },
      {
        id: 3,
        name: "Churrasco e Maionese",
        desc: "A combinação perfeita: carne na brasa com nossa deliciosa maionese caseira.",
        price: 38.00,
        img: imgMarmitaMaionese 
      }
    ]
  },
  {
    title: "Marmitas Tradicionais",
    items: [
      {
        id: 4,
        name: "Bife a Cavalo",
        desc: "Bife suculento coberto com ovo frito, acompanhado de arroz, feijão e fritas.",
        price: 32.00,
        img: imgBifeCavalo 
      },
      {
        id: 5,
        name: "Bife Acebolado",
        desc: "Aquele bife acebolado clássico com tempero de mãe.",
        price: 30.00,
        img: imgBifeAcebolado 
      },
      {
        id: 6,
        name: "Bisteca com Couve",
        desc: "Bisteca suína douradinha com couve refogada.",
        price: 28.00,
        img: imgBistecaCouve 
      },
      {
        id: 7,
        name: "Filé de Frango Empanado",
        desc: "Filé de frango crocante com batata frita e guarnições.",
        price: 29.00,
        img: imgFileFrango 
      },
      {
        id: 8,
        name: "Frango com Fritas",
        desc: "Pedaços de frango deliciosos com nossa batata frita sequinha.",
        price: 27.00,
        img: imgFrangoFritas 
      },
      {
        id: 9,
        name: "Calabresa com Fritas",
        desc: "Porção caprichada de calabresa acebolada com batatas.",
        price: 26.00,
        img: imgCalabresaFritas 
      }
    ]
  },
  {
    title: "Massas",
    items: [
      {
        id: 10,
        name: "Macarrão com Calabresa",
        desc: "Massa no ponto certo com molho e calabresa fatiada.",
        price: 25.00,
        img: imgMacarraoCalabresa 
      },
      {
        id: 11,
        name: "Macarrão, Frango e Fritas",
        desc: "A refeição completa para quem quer energia.",
        price: 28.00,
        img: imgMacarraoFrango 
      }
    ]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Carlos S.",
    text: "A melhor carne do Grajaú! O tempero é sensacional e a entrega é super rápida."
  },
  {
    id: 2,
    name: "Mariana L.",
    text: "O novo espaço self-service ficou incrível. Excelente para vir com a família de domingo."
  },
  {
    id: 3,
    name: "Fernando T.",
    text: "Preço justo e muita qualidade. As marmitas de churrasco salvam meu almoço no home office!"
  }
];