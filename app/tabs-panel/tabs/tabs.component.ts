import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, OnInit, QueryList } from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { startWith, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  private tabs: QueryList<TabComponent>;

  public currentTabs$: Observable<TabComponent[]>

  public activeTabIndex = 0;

  ngAfterContentInit() {
    this.currentTabs$ = this.tabs.changes.pipe(startWith(this.tabs.toArray()), tap((tabs: TabComponent[]) => this.syncActiveIndex(tabs)));
  }

  public activateTab(index: number): void {
    this.activeTabIndex = index;
    this.selectTab();
  }

  private selectTab(): void {
    this.tabs.forEach((tab, index) => tab.selected = index === this.activeTabIndex);;
  }

  private syncActiveIndex(tabs: unknown[]): void {
    if (this.activeTabIndex === tabs.length) {
      this.activeTabIndex = 0;
    }
    this.selectTab();
  }
}