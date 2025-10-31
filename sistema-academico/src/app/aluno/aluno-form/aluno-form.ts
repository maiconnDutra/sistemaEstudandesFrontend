import { Component, inject } from '@angular/core';
import { AlunoService } from '../../service/aluno-service';
import { Aluno } from '../../model/aluno';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aluno-form',
  imports: [CommonModule, FormsModule,ReactiveFormsModule,MatCardModule,MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.scss'
})
export class AlunoForm {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: AlunoService, private router: Router) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      nota: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }
  salvar() {
    if (this.form.valid) {
      this.service.adicionar(this.form.value).subscribe({
        next: () => this.router.navigate(['/']),
        error: () => alert('Erro ao salvar aluno.'),
      });
    }
  }


}
