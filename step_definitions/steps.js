const { I } = inject();

const ClockUnit = require('../utils/ClockUnit');

const SELECTORS = {
  SEARCH_FIELD: {name: 'q'},
  FOUND_IMAGE: {css : ".rg_i"},
  SEARCH_RESULT: {css : "#res .g"},
};

Given('an open browser with google.com', async() => {
  await I.amOnPage('/ncr');
});

When(/^I click '([^']+)' link$/, async (link) => {
  await I.waitForText(link, ClockUnit.DEFAULT_TIMEOUT);
  await I.click(link);
});

When(/^a keyword '([^']+)' is entered into input field$/, async (keyword) => {
  await I.fillField(SELECTORS.SEARCH_FIELD, keyword);
  await I.pressKey("Enter");
});

Then('at least one matching image is shown', async () => {
  await I.waitForElement(SELECTORS.FOUND_IMAGE, ClockUnit.DEFAULT_TIMEOUT);
});

Then('at least one matching result is shown', async () => {
  await I.waitForElement(SELECTORS.SEARCH_RESULT, ClockUnit.DEFAULT_TIMEOUT);
});

Then(/^the first result should contain '([^']+)'$/, async (linkAdress) => {
  await I.see(linkAdress, SELECTORS.SEARCH_RESULT);
});
