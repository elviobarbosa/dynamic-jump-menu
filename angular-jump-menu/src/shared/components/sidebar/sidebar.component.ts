import { Component, computed, input } from '@angular/core';
import { Section } from '../../directives/register-section.directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sectionValues = input<Section[]>([]);
  sections = computed(() => this.sectionValues());

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
