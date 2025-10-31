import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AlunoForm } from './aluno/aluno-form/aluno-form';
import { AlunoList } from './aluno/aluno-list/aluno-list';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlunoForm, AlunoList, CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private router: Router) { }
  irParaLista() {
    this.router.navigate(['/']);
  }
  irParaNovo() {
    this.router.navigate(['/novo']);
  }
}

