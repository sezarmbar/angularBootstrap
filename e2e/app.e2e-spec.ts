import { A2bootstrapPage } from './app.po';

describe('a2bootstrap App', function() {
  let page: A2bootstrapPage;

  beforeEach(() => {
    page = new A2bootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
