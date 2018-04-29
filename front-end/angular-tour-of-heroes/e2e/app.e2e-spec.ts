import { AngularTourOfHeroes5Page } from './app.po';

describe('angular-tour-of-heroes5 App', () => {
  let page: AngularTourOfHeroes5Page;

  beforeEach(() => {
    page = new AngularTourOfHeroes5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
