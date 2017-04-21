import { GCTPage } from './app.po';

describe('gct App', () => {
  let page: GCTPage;

  beforeEach(() => {
    page = new GCTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
