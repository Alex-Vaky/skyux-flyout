import {
  Component, OnInit
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  SkyModalService
} from '@skyux/modals';

import {
  SkyToastService,
  SkyToastType
} from '@skyux/toast';

import {
  SkyFlyoutModalDemoComponent
} from './flyout-modal.component';

import {
  FlyoutDemoContext
} from './flyout-demo-context';

import {
  SkyMediaQueryService,
  SkyMediaBreakpoints
} from '@skyux/core';

let nextId = 0;

@Component({
  selector: 'sky-test-cmp-flyout',
  templateUrl: './flyout-demo.component.html',
  providers: [
    SkyMediaQueryService
  ]
})
export class FlyoutDemoComponent implements OnInit {

  public infiniteScrollData: any[] = [];

  public enableInfiniteScroll = true;

  constructor(
    public context: FlyoutDemoContext,
    private mediaQueryService: SkyMediaQueryService,
    private modalService: SkyModalService,
    private toastService: SkyToastService,
    private router: Router
  ) {
    this.mediaQueryService.subscribe((value) => {
      if (value > SkyMediaBreakpoints.md) {
        console.warn('Should this be xs or sm?');
      }
    });
  }

  public ngOnInit(): void {
    this.addData();
  }

  public openModal(): void {
    this.modalService.open(SkyFlyoutModalDemoComponent);
  }

  public openMessage(): void {
    this.toastService.openMessage(
      `This is a sample toast message.`,
      {
        type: SkyToastType.Info
      }
    );
  }

  public goToPage(): void {
    this.router.navigate(['/']);
  }

  private addData(): void {
    this.mockRemote().then((result: any) => {
      this.infiniteScrollData = this.infiniteScrollData.concat(result.data);
      this.enableInfiniteScroll = result.enableInfiniteScroll;
    });
  }

  private mockRemote(): Promise<any> {
    const data: any[] = [];

    for (let i = 0; i < 8; i++) {
      data.push({
        name: `Item #${++nextId}`
      });
    }

    // Simulate async request.
    return new Promise((resolve: any) => {
      setTimeout(() => {
        resolve({
          data,
          hasMore: (nextId < 50)
        });
      }, 1000);
    });
  }

}
