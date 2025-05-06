import {
  AfterViewInit,
  Directive,
  Host,
  Inject,
  inject,
  input,
  OnDestroy,
  output,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { TITLE_COMPONENT, TitleInterface } from '../entities/title.entity';

export type Section = {
  id: string;
  title: string;
  component: Type<any>;
  visible: boolean;
  priority: number;
};

@Directive({
  selector: '[registerSection]',
  standalone: true,
})
export class RegisterSectionDirective implements AfterViewInit, OnDestroy {
  private _vcRef = inject(ViewContainerRef);

  sectionId = input<string>('');
  sectionTitle? = input<string>('');
  sectionPriority = input<number>(0);

  sectionRegistered = output<Section>();
  sectionRemoved = output<string>();

  constructor(
    @Host() @Inject(TITLE_COMPONENT) private _hostComponent: TitleInterface
  ) {}

  ngAfterViewInit() {
    const component = this._vcRef.element.nativeElement;
    const title = this.sectionTitle?.length
      ? this.sectionTitle
      : this._hostComponent?.title();

    this._vcRef.element.nativeElement.setAttribute('id', this.sectionId());

    this.sectionRegistered.emit({
      id: this.sectionId(),
      title: title as string,
      component,
      visible: true,
      priority: this.sectionPriority() || 0,
    });
  }

  ngOnDestroy(): void {
    if (this.sectionId) {
      this.sectionRemoved.emit(this.sectionId());
    }
  }
}
