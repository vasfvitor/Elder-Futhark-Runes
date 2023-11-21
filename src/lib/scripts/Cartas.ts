export interface Card {
  id: number;
  aett: number;
  numero: number;
  nome: string;
  fonetico: string;
  polaridade: "♂" | "♀" | "";
  ideograma: string;
}

export const RUNAS: Array<Card> = [
  {
    id: 1,
    aett: 1,
    numero: 11,
    nome: "FEHU",
    fonetico: "F",
    polaridade: "♀",
    ideograma: "ᚠ",
  },
  {
    id: 2,
    aett: 1,
    numero: 12,
    nome: "URUZ",
    fonetico: "U",
    polaridade: "♂",
    ideograma: "ᚢ",

  },
  {
    id: 3,
    aett: 1,
    numero: 13,
    nome: "THURISAZ",
    fonetico: "Th",
    polaridade: "♂",
    ideograma: "ᚦ",
  },
  {
    id: 4,
    aett: 1,
    numero: 14,
    nome: "ANSUZ",
    fonetico: "A",
    polaridade: "♂",
    ideograma: "ᚨ",
  },
  {
    id: 5,
    aett: 1,
    numero: 15,
    nome: "RAIDHO",
    fonetico: "R",
    polaridade: "♂",
    ideograma: "ᚱ",

  },
  {
    id: 6,
    aett: 1,
    numero: 16,
    nome: "KENAZ",
    fonetico: "K",
    polaridade: "♀",
    ideograma: "ᚲ",
  },
  {
    id: 7,
    aett: 1,
    numero: 17,
    nome: "GEBO",
    fonetico: "G",
    polaridade: "♀",
    ideograma: "ᚷ",
  },
  {
    id: 8,
    aett: 1,
    numero: 18,
    nome: "WUNJO",
    fonetico: "W",
    polaridade: "♀",
    ideograma: "ᚹ",

  },
  {
    id: 9,
    aett: 2,
    numero: 21,
    nome: "HAGALAZ",
    fonetico: "H",
    polaridade: "",
    ideograma: "ᚻ",

  },
  {
    id: 10,
    aett: 2,
    numero: 22,
    nome: "NAUTHIZ",
    fonetico: "N",
    polaridade: "♂",
    ideograma: "ᚾ",

  },
  {
    id: 11,
    aett: 2,
    numero: 23,
    nome: "ISAZ",
    fonetico: "I",
    polaridade: "♀",
    ideograma: "ᛁ",

  },
  {
    id: 12,
    aett: 2,
    numero: 24,
    nome: "JERA",
    fonetico: "J",
    polaridade: "♀",
    ideograma: "ᛃ",

  },
  {
    id: 13,
    aett: 2,
    numero: 25,
    nome: "EIHWAZ",
    fonetico: "Ei",
    polaridade: "♂",
    ideograma: "ᛇ",
  },
  {
    id: 14,
    aett: 2,
    numero: 26,
    nome: "PERTHO",
    fonetico: "P",
    polaridade: "♀",
    ideograma: "ᛈ",
  },
  {
    id: 15,
    aett: 2,
    numero: 27,
    nome: "ALGIZ",
    fonetico: "Z",
    polaridade: "♂",
    ideograma: "ᛉ",
  },
  {
    id: 16,
    aett: 3,
    numero: 31,
    nome: "SOWILO",
    fonetico: "S",
    polaridade: "♂",
    ideograma: "ᛊ",

  },
  {
    id: 17,
    aett: 3,
    numero: 32,
    nome: "TIWAZ",
    fonetico: "T",
    polaridade: "♂",
    ideograma: "ᛏ",
  },
  {
    id: 18,
    aett: 3,
    numero: 33,
    nome: "BERKANA",
    fonetico: "B",
    polaridade: "♀",
    ideograma: "ᛒ",
  },
  {
    id: 19,
    aett: 3,
    numero: 34,
    nome: "EHWAZ",
    fonetico: "E",
    polaridade: "♂",
    ideograma: "ᛖ",

  },
  {
    id: 20,
    aett: 3,
    numero: 35,
    nome: "MANNAZ",
    fonetico: "M",
    polaridade: "",
    ideograma: "ᛗ",

  },
  {
    id: 21,
    aett: 3,
    numero: 36,
    nome: "LAGUZ",
    fonetico: "L",
    polaridade: "♀",
    ideograma: "ᛚ",

  },
  {
    id: 22,
    aett: 3,
    numero: 37,
    nome: "INGWAZ",
    fonetico: "ŋ",
    polaridade: "♂",
    ideograma: "ᛜ",

  },
  {
    id: 23,
    aett: 3,
    numero: 38,
    nome: "DAGAZ",
    fonetico: "D",
    polaridade: "",
    ideograma: "ᛞ",
  },
  {
    id: 24,
    aett: 3,
    numero: 39,
    nome: "OTHALA",
    fonetico: "O",
    polaridade: "",
    ideograma: "ᛟ",
  },
];


`
CORES: Dourado, vermelho-vivo
CORES: Verde, vermelho, marrom
COR: Vermelho-vivo (cor de sangue).`;

const Colors = {
  dourado: "#FFD700", // Dourado (Gold)
  "vermelho-vivo": "#FF0000", // Vermelho-vivo (Vivid Red)
  verde: "#008000", // Verde (Green)
  vermelho: "#FF0000", // Vermelho (Red)
  marrom: "#964B00", // Marrom (Brown)
};
