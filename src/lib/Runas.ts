export const Aett = {
  intro:
    "O sistema mais conhecido, estudado e utilizado é o Futhark Antigo, constituído por 24 runas. Cada uma dessas runas tem sua própria simbologia. Essas simbologias estão interligadas, porém, em diferentes níveis de interpretação (horizontal, vertical, numérico e mitológico). Seu código numérico é binário, representando o número do Ætt e a numeração da runa na sequência do Futhark; a contagem é feita da esquerda para a direita. Cada Ætt é regido por um casal de divindades e leva seu nome.",

  primeiro:
    "O primeiro Ætt, regido por Frey e Freyja (deuses da fertilidade), governa os aspectos materiais e define as qualidades que o iniciado deve adquirir, como energia, tenacidade, ação, comunicação e inspiração, força de vontade, conhecimento, generosidade e companheirismo.",

  segundo:
    "O segundo Ætt, regido por Heimdall e Mordgud (deuses guardiães), governa os aspectos emocionais e é subdividido em duas metades: a primeira descreve a superação de obstáculos objetivos e a colheita dos resultados, enquanto que a segunda define os conflitos subjetivos e os caminhos para o sucesso.",

  terceiro:
    "O terceiro Ætt, regido por Tyr e Ziza (divindades arcáicas), rege os aspectos mentais e espirituais e mostra os níveis nos quais o iniciado deve trabalhar para tornar-se auto-suficiente e alcançar a iluminação.",
};

export interface Runic {
  id: number;
  aett: number;
  foco: string;
  nome: string;
  significado: string;
  planeta: string;
  regentes: string;
  numero: number;
  fonetico: string;
  polaridade: string;
  ideograma: string;
  ideografia: string;
  elemento: string;
}

export interface Card {
  id: number;
  aett: number;
  nome: string;
  numero: number;
  fonetico: string;
  polaridade: string;
  ideograma: string;
}

const FEHU_CARD: Card = {
  id: 1,
  aett: 1,
  nome: "FEHU",
  numero: 11,
  fonetico: "F",
  polaridade: "♀",
  ideograma: "ᚠ",
};

const URUZ_CARD: Card = {
  id: 2,
  aett: 1,
  nome: "URUZ",
  numero: 12,
  fonetico: "U",
  polaridade: "♂",
  ideograma: "ᚢ",
};

const FEHU: Runic = {
  id: 1,
  aett: 1,
  nome: "FEHU",
  foco: "Assuntos materiais, prosperidade",
  significado: "O Gado",
  planeta: "Vênus e Lua",
  regentes: "Frey e Freyja",
  numero: 11,
  fonetico: "F",
  polaridade: "♀",
  ideograma: "ᚠ",
  ideografia: "Chifres do gado",
  elemento: "Terra",
};

const uruz: Runic = {
  id: 2,
  aett: 1,
  foco: "Força, vitalidade. Poder idômito, teste de resistência, renovação, adaptação. Energia de cura, telúrica, associado a terra. Energia verde-esmeralda. Força-vital",
  nome: "URUZ",
  significado: "Auroque - O Boi Selvagem",
  planeta: "Marte",
  numero: 12,
  ideograma: "ᚢ",
  fonetico: "U",
  polaridade: "♂",
  regentes: "Auðumbla (Audhumbla) e Thor",
  ideografia: "Chifres do auroque",
  elemento: "Terra",
};

const thurisaz: Runic = {
  id: 3,
  numero: 13,
  foco: "Força cósmica direcionada para defesa ou destruição. Vida e Morte. Energia primordial. Remover Barreiras",
  nome: "THURISAZ",
  significado: "O Gigante",
  planeta: "Marte",
  ideograma: "ᚦ",
  fonetico: "TH",
  polaridade: "♂",
  aett: 1,
  regentes: "Thor",
  ideografia: "Espinho da rosa / Martelo do Thor",
  elemento: "Terra",
};

export const Runics: Runic[] = [FEHU, uruz, thurisaz];

import { Runa } from "./R";

const runa1 = new Runa({
  id: 1,
  atributos: { positivo: "Positive", negativo: "Negative" },
  info: {
    cla: "Primeiro Ætt",
    nome: "FEHU",
    numero: 1,
    principio: "Poder móvel, realização e distribuição",
    planetas: "Some Planets",
    divindades: "Some Deities",
    polaridade: "♂",
    elementos: "Some Element",
    cores: ["Color 1", "Color 2"],
  },
  significado: {
    ideografico: "Os chifres do gado.",
    esoterico: "Some Esoteric Meaning",
  },
  escrita: {
    fonetico: "F",
    ideograma: "Some Ideogram",
    unicode: "Some Unicode",
  },
});
