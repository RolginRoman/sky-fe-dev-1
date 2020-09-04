import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs";
import { startWith, tap, map } from "rxjs/operators";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  private tabs: QueryList<TabComponent>;

  public currentTabs$: Observable<QueryList<TabComponent>>;

  public activeTabIndex = 0;

  ngAfterContentInit() {
    this.currentTabs$ = this.tabs.changes.pipe(
      startWith(this.tabs),
      tap((tabs: QueryList<TabComponent>) => this.syncActiveIndex(tabs))
    );
  }

  public activateTab(index: number): void {
    this.activeTabIndex = index;
    this.selectTab();
  }

  private selectTab(): void {
    this.tabs.forEach((tab, index) => tab.selected = index === this.activeTabIndex);
  }

  private syncActiveIndex(tabs: QueryList<TabComponent>): void {
    if (this.activeTabIndex === tabs.length) {
      this.activeTabIndex = 0;
    }
    this.selectTab();
  }
}