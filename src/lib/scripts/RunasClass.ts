export class Runa {
  id: number;
  atributos: {
    positivo: string;
    negativo: string;
  };
  info: {
    cla: string;
    nome: string;
    numero: number;
    principio: string;
    planetas: string;
    divindades: string;
    polaridade: "♂" | "♀" | "";
    elementos: string;
    cores: string[];
  };
  significado: {
    ideografico: string;
    esoterico: string;
  };
  escrita: {
    fonetico: string;
    ideograma: string;
    unicode: string;
  };

  constructor(data: Partial<Runa> = {}) {
    this.id = data.id || 0;
    this.atributos = data.atributos || { positivo: "", negativo: "" };
    this.info = data.info || {
      cla: "",
      nome: "",
      numero: 0,
      principio: "",
      planetas: "",
      divindades: "",
      polaridade: "",
      elementos: "",
      cores: [],
    };
    this.significado = data.significado || {
      ideografico: "",
      esoterico: "",
    };
    this.escrita = data.escrita || {
      fonetico: "",
      ideograma: "",
      unicode: "",
    };
  }
}
