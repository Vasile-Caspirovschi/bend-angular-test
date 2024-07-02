import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GroupComponent } from "../group/group.component";
import { CommonModule } from '@angular/common';
import { Area } from '../../../models/area.model';
import { Thing } from '../../../models/thing.model';
import { Group } from '../../../models/group.model';

@Component({
  selector: 'app-area',
  standalone: true,
  templateUrl: './area.component.html',
  styleUrl: './area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    GroupComponent
  ]
})
export class AreaComponent {
  @Input() area!: Area;
  @Input() things!: Thing[];

  // ngOnInit() {
  //   this.groups = this.groupThings();
  // }

  groupThings(): Group[] {
    const groups: Group[] = [];
    this.things.forEach(thing => {
      let group = groups.find(g => g.groupId === (thing.joinedWith
        ? thing.joinedWith : thing.id));
      if (!group) {
        group = {
          groupId: thing.joinedWith ? thing.joinedWith : thing.id,
          things: [thing]
        };
        groups.push(group);
      }
      else {
        !thing.joinedWith ? group.things.unshift(thing) : group.things.push(thing);
      }
    });
    return groups;
  }

  // Sort the groups by the following criteria:
  // Sort the groups by the lowest sky of the first thing in the group if the group has more than one thing.
  sortGroups(): Group[] {
    const groups = this.groupThings();
    return groups.sort((a, b) => {
      const minSkuA = a.things[0].sku;
      const minSkuB = b.things[0].sku;

      if (a.things.length > 1) {
        return minSkuA - minSkuB;
      }

      return b.things.length - a.things.length;
    });
  }
}
