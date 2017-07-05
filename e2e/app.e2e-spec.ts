import { Angular4MetronomePage } from './app.po';

describe('angular4-metronome App', () => {
  let page: Angular4MetronomePage;

  beforeEach(() => {
    page = new Angular4MetronomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
