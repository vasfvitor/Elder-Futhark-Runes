export interface Card {
  id: number;
  aett: number;
  numero: number;
  nome: string;
  fonetico: string;
  polaridade: "♂" | "♀" | "";
  ideograma: string;
  fonte: string;
}

const FEHU_CARD: Card = {
  id: 1,
  aett: 1,
  numero: 11,
  nome: "FEHU",
  fonetico: "F",
  polaridade: "♀",
  ideograma: "ᚠ",
  fonte: "f",
};

const URUZ_CARD: Card = {
  id: 2,
  aett: 1,
  numero: 12,
  nome: "URUZ",
  fonetico: "U",
  polaridade: "♂",
  ideograma: "ᚢ",
  fonte: "u",
};

const THURISAZ_CARD: Card = {
  id: 3,
  aett: 1,
  numero: 13,
  nome: "THURISAZ",
  ideograma: "ᚦ",
  fonetico: "Th",
  polaridade: "♂",
  fonte: "",
};

const ANSUZ_CARD: Card = {
  id: 4,
  aett: 1,
  numero: 14,
  nome: "ANSUZ",
  ideograma: "ᚨ",
  fonetico: "A",
  polaridade: "♂",
  fonte: "a",
};

const RAIDHO_CARD: Card = {
  id: 5,
  aett: 1,
  numero: 14,
  nome: "ANSUZ",
  ideograma: "ᚨ",
  fonetico: "A",
  polaridade: "♂",
  fonte: "a",
};


export const Cards: Card[] = [FEHU_CARD, URUZ_CARD, THURISAZ_CARD, ANSUZ_CARD, RAIDHO_CARD];

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
