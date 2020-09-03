import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef, Input, ChangeDetectorRef } from "@angular/core";
import { TabContentLazyDirective } from "./tab-content-lazy.directive";

@Component({
  selector: 'tab-content',
  template: `
  <ng-container *ngTemplateOutlet="selected && (contentTemplate ? contentTemplate : defaultContentTemplate)"></ng-container>
  <ng-template #defaultContentTemplate><ng-content></ng-content></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent {
  @ContentChild(TabContentLazyDirective, { read: TemplateRef, static: true })
  public contentTemplate: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) { }

  private _selected: boolean;

  public get selected(): boolean {
    return this._selected;
  }

  @Input()
  public set selected(value: boolean) {
    this._selected = value;
    this.cdr.markForCheck();
  }
}