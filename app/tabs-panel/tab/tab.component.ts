import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { TabContentComponent } from "./tab-content/tab-content.component";
import { TabTitleComponent } from "./tab-title/tab-title.component";
import { TabViewService } from "./tab-view.service";

@Component({
  selector: 'tab',
  templateUrl: 'tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TabViewService,
  ]
})
export class TabComponent {

  @ViewChild('title', { read: TemplateRef, static: true })
  public title: TemplateRef<TabTitleComponent>;

  @ViewChild('content', { read: TemplateRef, static: true })
  public content: TemplateRef<TabContentComponent>;

  constructor(private tabViewService: TabViewService) {}

  @Input()
  public set selected(value: boolean) {
    if (value) {
      this.tabViewService.activate();
    } else {
      this.tabViewService.deactivate();
    }
  }
}
