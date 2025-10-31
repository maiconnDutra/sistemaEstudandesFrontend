import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/aluno';
import { AlunoService } from '../../service/aluno-service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aluno-list',
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './aluno-list.html',
  styleUrl: './aluno-list.scss'
})
export class AlunoList implements OnInit {
  alunos: Aluno[] = [];
  displayedColumns = ['id', 'nome', 'nota', 'acoes'];
  constructor(private service: AlunoService, private router: Router) { }
  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (dados) => (this.alunos = dados),
      error: () => alert('Erro ao carregar alunos.'),
    });
  }
  editar(aluno: Aluno) {
    alert(`Editar aluno ${aluno.nome} (simulação)`);
  }
  remover(aluno: Aluno) {
    alert(`Remover aluno ${aluno.nome} (simulação)`);
    // Aqui você chamaria service.remover(aluno.id)
  }

}
