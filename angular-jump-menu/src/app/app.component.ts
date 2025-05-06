import { Component, signal } from '@angular/core';
import { SectionComponent } from '../shared/components/section/section.component';
import {
  RegisterSectionDirective,
  Section,
} from '../shared/directives/register-section.directive';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SectionComponent, RegisterSectionDirective, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _sectionsMap = new Map<string, Section>();
  public sections = signal<Section[]>([]);

  public sectionsMock = Array.from({ length: 30 }, (_, index) => ({
    id: `section-${index + 1}`,
    title: `Seção ${index + 1}`,
    content: Array.from({ length: 3 }, () => this.generateLoremIpsum()).join(
      ' '
    ),
  }));

  generateLoremIpsum() {
    const lorem = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      'Deserunt mollit anim id est laborum.',
    ];
    return lorem[Math.floor(Math.random() * lorem.length)];
  }

  registerSection(section: Section) {
    if (!section.id) return;

    this._sectionsMap.set(section.id, section);
    this.sections.update((sections) => [...sections, section]);
  }
}
