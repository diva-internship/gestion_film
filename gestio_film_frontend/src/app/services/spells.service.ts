import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Spell } from '../models/Spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private apiUrl = 'https://hp-api.onrender.com/api/spells';
  public cache = new BehaviorSubject({})

  constructor(private http: HttpClient) { }

  //recuper tous liste de spells
  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.apiUrl);
  }


  getSpellbyName(name: string): Observable<Spell> {
    return this.http.get<Spell>(`${this.apiUrl}/${name}}`);
  }
}
