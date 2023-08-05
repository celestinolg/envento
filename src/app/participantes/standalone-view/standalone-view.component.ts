import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Participante } from 'src/app/models/participante';

@Component({
  selector: 'app-standalone-view',
  templateUrl: './standalone-view.component.html',
  styleUrls: ['./standalone-view.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandaloneViewComponent {
    @Input() titulo: string | undefined;
    @Input() participantes: Participante[] | undefined;
}
