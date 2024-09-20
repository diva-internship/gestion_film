import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Spell } from 'src/app/models/Spell';
import { SpellsService } from 'src/app/services/spells.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
  protected spells: Spell[] = [];

  constructor(private spellService: SpellsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadSpells();

  }
  loadSpells(): void {
    this.spellService.getSpells().subscribe((data: Spell[]) => {
      this.spells = data;
      console.log(this.spells);

    });
  }
  onSelect(spell: Spell) {
    this.spellService.cache.next(spell)
    this.router.navigate([`/spells/${spell.name}`])
  }
}