import { inject, Injectable } from '@angular/core';
import { Aluno } from '../model/aluno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root', // Singleton!
})

export class AlunoService {
  private http = inject(HttpClient);
  private readonly API = 'https://localhost:7240/api/Aluno'


  // Método para listar todos os alunos
  listar(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.API);
  }

  // Método para adicionar um aluno
  adicionar(aluno: Omit<Aluno, 'id'>): Observable<Aluno> {
    return this.http.post<Aluno>(this.API, aluno);
  }
}