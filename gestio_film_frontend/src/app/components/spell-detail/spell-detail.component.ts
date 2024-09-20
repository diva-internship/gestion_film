import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Spell } from 'src/app/models/Spell';
import { SpellsService } from 'src/app/services/spells.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {
  protected spell: Partial<Spell> = {}
  protected errorMessage: string | null = null;

  constructor(
    private currentRoute: ActivatedRoute,
    private spellService: SpellsService
  ) { }

  ngOnInit(): void {
    this.spellService.cache.subscribe((res) => {
      this.spell = res;
    })
  }
}


