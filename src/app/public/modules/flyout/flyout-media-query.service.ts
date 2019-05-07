import {
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import {
  Subscription
} from 'rxjs/Subscription';

import {
  SkyMediaBreakpoints
} from '@skyux/core';

import {
  SkyMediaQueryListener
} from '@skyux/core/modules/media-query/media-query-listener';

import {
  SkyFlyoutAdapterService
} from './flyout-adapter.service';

@Injectable()
export class SkyFlyoutMediaQueryService {

  public get current(): SkyMediaBreakpoints {
    return this._current;
  }

  private currentSubject = new BehaviorSubject<SkyMediaBreakpoints>(this.current);

  private _current = SkyMediaBreakpoints.xs;

  constructor(
    private adapterService: SkyFlyoutAdapterService
  ) {
    this.currentSubject.next(this._current);
  }

  public subscribe(listener: SkyMediaQueryListener): Subscription {
    return this.currentSubject.subscribe({
      next: (breakpoints: SkyMediaBreakpoints) => {
        listener(breakpoints);
      }
    });
  }

  public setBreakPoint(width: number) {

    if (width <= 767) {
      this._current = SkyMediaBreakpoints.xs;
      this.adapterService.setFlexClass(SkyMediaBreakpoints.xs);
    } else if (width >= 768 && width <= 991) {
      this._current = SkyMediaBreakpoints.sm;
      this.adapterService.setFlexClass(SkyMediaBreakpoints.sm);
    } else if (width >= 992 && width <= 1199) {
      this._current = SkyMediaBreakpoints.md;
      this.adapterService.setFlexClass(SkyMediaBreakpoints.md);
    } else {
      this._current = SkyMediaBreakpoints.lg;
      this.adapterService.setFlexClass(SkyMediaBreakpoints.lg);
    }

    this.currentSubject.next(this._current);
  }

  public destroy(): void {
    this.currentSubject.complete();
  }
}
