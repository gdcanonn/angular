import { SigcsFrontendPage } from './app.po';

describe('sigcs-frontend App', () => {
  let page: SigcsFrontendPage;

  beforeEach(() => {
    page = new SigcsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
