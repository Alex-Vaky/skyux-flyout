import {
  element,
  browser,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Flyout', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should handle absolutely positioned items inside the flyout', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-absolute-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should handle absolutely positioned items inside the flyout (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-absolute-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterators are enabled', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#open-flyout-with-iterators')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-iterators-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterators are enabled (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#open-flyout-with-iterators')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-iterators-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterators are disabled', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#open-flyout-with-iterators-disabled')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-no-iterators-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterator are disabled (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#open-flyout-with-iterators-disabled')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-no-iterators-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when flyout is fullscreen (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#open-flyout-fullscreen')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-fullscreen'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when the flyout contains responsive content (flyout: xs)',
    (done) => {
      SkyHostBrowser.get('visual/flyout');
      SkyHostBrowser.setWindowBreakpoint('lg');
      element(by.css('#open-responsive-flyout-xs')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'flyout-responsive-xs'
      });
      element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
    });

  it('should match previous screenshot when the flyout contains responsive content (flyout: sm)',
    (done) => {
      SkyHostBrowser.get('visual/flyout');
      SkyHostBrowser.setWindowBreakpoint('lg');
      element(by.css('#open-responsive-flyout-sm')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'flyout-responsive-sm'
      });
      element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
    });

  it('should match previous screenshot when the flyout contains responsive content (flyout: md)',
    (done) => {
      SkyHostBrowser.get('visual/flyout');
      SkyHostBrowser.setWindowBreakpoint('lg');
      element(by.css('#open-responsive-flyout-md')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'flyout-responsive-md'
      });
      element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
    });

  it('should match previous screenshot when the flyout contains responsive content (flyout: lg)',
    (done) => {
      SkyHostBrowser.get('visual/flyout');
      SkyHostBrowser.setWindowDimensions(1250, 800);
      element(by.css('#open-responsive-flyout-lg')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'flyout-responsive-lg'
      });
      element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
    });

  it('should match previous screenshot when the flyout contains responsive content (screen: xs)',
    (done) => {
      SkyHostBrowser.get('visual/flyout');
      SkyHostBrowser.setWindowBreakpoint('xs');
      element(by.css('#open-responsive-flyout-lg')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'flyout-responsive-lg-screen-xs'
      });
      element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
    });
});
