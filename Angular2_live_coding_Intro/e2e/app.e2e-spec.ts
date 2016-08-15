import { Angular2LiveCodingIntroPage } from './app.po';

describe('angular2-live-coding-intro App', function() {
  let page: Angular2LiveCodingIntroPage;

  beforeEach(() => {
    page = new Angular2LiveCodingIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
