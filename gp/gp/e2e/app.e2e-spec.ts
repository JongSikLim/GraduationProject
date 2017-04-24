import { GpPage } from './app.po';

describe('gp App', () => {
  let page: GpPage;

  beforeEach(() => {
    page = new GpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
