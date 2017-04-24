import { CsPage } from './app.po';

describe('cs App', () => {
  let page: CsPage;

  beforeEach(() => {
    page = new CsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
