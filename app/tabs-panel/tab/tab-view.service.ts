import { Injectable } from '@angular/core';
import { BehaviorSubject, animationFrameScheduler } from 'rxjs';
import { distinctUntilChanged, observeOn } from 'rxjs/operators';

@Injectable()
export class TabViewService {

  private isActivated = new BehaviorSubject<boolean>(false);

  // As this approach usually used with animations we can schedule tab activation to RAF
  public isActivated$ = this.isActivated.pipe(distinctUntilChanged(), observeOn(animationFrameScheduler));

  public activate(): void {
    if (!this.isActivated.getValue()) {
      this.isActivated.next(true);
    }
  }

  public deactivate(): void {
    if (this.isActivated.getValue()) {
      this.isActivated.next(false);
    }
  }
}
