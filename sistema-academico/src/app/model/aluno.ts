export class Aluno {
    constructor(
        public nome: string,
        public nota: number,
        public id?: number
        
    ) { }

    estaAprovado(): boolean {
        return this.nota >= 7;
    }
}