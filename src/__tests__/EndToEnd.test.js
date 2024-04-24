import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

//End-To-End test after selecting city change number of events
  describe('Search by City and Change Number of Events', () => {
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 350, // slow down by 350ms,
        timeout: 0 
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('#city-search input[type="text"]');
      await page.waitForSelector('#number-of-events input[type="text"]');
    });

    afterAll(async () => {
      await browser.close();
    });

    test('User can select a city from the suggestion list and change the number of events', async () => {
      await page.click('#city-search input[type="text"]');
      await page.waitForSelector('.suggestions');

      await page.click('.suggestions li:nth-child(2)');

      await page.waitForFunction(() => document.querySelector('#city-search input[type="text"]').value !== '');

      const inputValue = await page.$eval('#city-search input[type="text"]', input => input.value);
      expect(inputValue).toMatch('Berlin, Germany');

      const suggestionList = await page.$('.suggestions');
      expect(suggestionList).toBeNull();

      await page.click('#number-of-events input[type="text"]');
      await page.waitForSelector('#number-of-events input[type="text"]');

      await page.keyboard.press('Backspace');
      await page.keyboard.press('Backspace');
      await page.keyboard.type('2');

      await page.waitForFunction(() => document.querySelector('#number-of-events input[type="text"]').value === '2');

      const eventsInputValue = await page.$eval('#number-of-events input[type="text"]', input => input.value);
      expect(eventsInputValue).toBe('2');
    });
  });
});




