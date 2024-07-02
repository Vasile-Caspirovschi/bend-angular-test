import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { AreaComponent } from "../area/area.component";
import { Observable } from 'rxjs';
import { Area } from '../../../models/area.model';
import { Thing } from '../../../models/thing.model';

@Component({
  selector: 'app-area-list',
  standalone: true,
  templateUrl: './area-list.component.html',
  styleUrl: './area-list.component.css',
  imports: [CommonModule, AreaComponent]
})
export class AreaListComponent {
  areas$!: Observable<Area[]>;
  things$!: Observable<Thing[]>;

  constructor(private dataService: DataService) {
    this.areas$ = this.dataService.getAreas();
    this.things$ = this.dataService.getThings();
  }
}
