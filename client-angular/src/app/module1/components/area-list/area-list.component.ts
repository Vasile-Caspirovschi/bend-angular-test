import { Component } from '@angular/core';
import { Area } from '../../../models/area.model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { AreaComponent } from "../area/area.component";
import { Thing } from '../../../models/thing.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-area-list',
  standalone: true,
  templateUrl: './area-list.component.html',
  styleUrl: './area-list.component.css',
  imports: [CommonModule, AreaComponent]
})
export class AreaListComponent {
  areas: Area[] = [];
  things: Thing[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.dataService.getAreas().subscribe(areas => { this.areas = areas })
    );
    this.subscriptions.add(
      this.dataService.getThings().subscribe(things => { this.things = things })
    );
  }

  getAreaThings(area: Area): Thing[] {
    return this.things.filter(thing => thing.areaId === area.areaId);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
