import { Component, computed, input } from '@angular/core';
import { TITLE_COMPONENT, TitleInterface } from '../../entities/title.entity';
@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  providers: [{ provide: TITLE_COMPONENT, useExisting: SectionComponent }],
})
export class SectionComponent implements TitleInterface {
  sectionInfo = input<{ title: string; content: string }>();
  title = computed(() => this.sectionInfo()?.title ?? '');
}
