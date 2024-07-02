import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Thing } from '../../../models/thing.model';

@Component({
  selector: 'app-thing',
  standalone: true,
  imports: [],
  templateUrl: './thing.component.html',
  styleUrl: './thing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThingComponent {
  @Input() thing!: Thing;
  @Input() isFirst!: boolean;
  @Input() notAllThingsAreOpen = false;
}
