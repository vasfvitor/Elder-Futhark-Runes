export interface Runa {
  id: number;
  cla: string;
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
  elemento:string;
}

export interface Carta {
  top: Runa["numero"];
  left: Runa["fonetico"];
  right: Runa["polaridade"];
  center: Runa["ideograma"];
}

const FEHU: Runa = {
  id: 1,
  cla: "Primeiro Ætt",
  nome: "FEHU",
  foco: "Assuntos materiais, prosperidade",
  significado: "O Gado",
  planeta: "Vênus e Lua",
  regentes: "Frey e Freyja",
  numero: 1,
  fonetico: "F",
  polaridade: "♀",
  ideograma: "ᚠ",
  ideografia:"Chifres do gado",
  elemento: "Terra"
};

const uruz: Runa = {
  id: 2,
  cla: "Primeiro Ætt",
  foco: "Força, vitalidade. Poder idômito, teste de resistência, renovação, adaptação. Energia de cura, telúrica, associado a terra. Energia verde-esmeralda. Força-vital",
  nome: "URUZ",
  significado: "Auroque - O Boi Selvagem",
  planeta: "Marte",
  numero: 2,
  ideograma: "ᚢ",
  fonetico: "U",
  polaridade: "♂",
  regentes: "Auðumbla (Audhumbla) e Thor",
  ideografia:"Chifres do auroque",
  elemento: "Terra"
};

const thurisaz: Runa = {
  id: 3,
  numero: 3,
  foco: "Força cósmica direcionada para defesa ou destruição. Vida e Morte. Energia primordial. Remover Barreiras",
  nome: "THURISAZ",
  significado: "O Gigante",
  planeta: "Marte",
  ideograma: "ᚦ",
  fonetico: "TH",
  polaridade: "♂",
  cla: "Primeiro Ætt",
  regentes: "Thor",
  ideografia:"Espinho da rosa / Martelo do Thor",
  elemento: "Terra"

};

export const runas: Runa[] = [FEHU, uruz, thurisaz];
