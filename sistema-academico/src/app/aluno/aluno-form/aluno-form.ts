import { Component } from '@angular/core';
import { AlunoService } from '../../service/aluno-service';
import { Aluno } from '../../model/aluno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.scss'
})
export class AlunoForm {
  nome: string = '';
  nota: number = 0;

  constructor(private alunoService: AlunoService, private router: Router) { }
  
  adicionar() {
    const novoAluno = new Aluno(this.nome, this.nota);
    this.alunoService.adicionar(novoAluno);
    this.nome = '';
    this.nota = 0;
    this.router.navigate(['/']);
  }

}
