import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, Input, ContentChild, ChangeDetectorRef } from "@angular/core";
import { TabContentComponent } from "./tab-content/tab-content.component";
import { TabTitleComponent } from "./tab-title/tab-title.component";

@Component({
  selector: 'tab',
  templateUrl: 'tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {

  @ViewChild('title', { read: TemplateRef, static: true })
  public title: TemplateRef<TabTitleComponent>;

  @ViewChild('content', { read: TemplateRef, static: true })
  public content: TemplateRef<TabContentComponent>;

  @ContentChild(TabContentComponent, { static: true })
  private contentInstance: TabContentComponent;

  @Input()
  public set selected(value: boolean) {
    this.contentInstance.selected = value;
  }
}
