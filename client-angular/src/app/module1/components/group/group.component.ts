import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThingComponent } from "../thing/thing.component";
import { CommonModule } from '@angular/common';
import { Group } from '../../../models/group.model';

@Component({
    selector: 'app-group',
    standalone: true,
    templateUrl: './group.component.html',
    styleUrl: './group.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ThingComponent
    ]
})
export class GroupComponent {
    @Input() group!: Group;
    notAllThingsAreOpen: boolean = false;

    ngOnInit() {
        if (this.group.things.length > 1)
            this.notAllThingsAreOpen = this.group.things.some(thing => thing.status !== 'open');
    }
}
