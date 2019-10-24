
Feature('TestCaseOne');

Scenario('TEST CASE 1: ', (I) => {
	 I.amOnPage('https://codecept.io/helpers/WebDriverIO')
		I.waitForText('dontSee')
		I.see('dontSee')
		I.click('dontSee')
		
		if (I.see('text is not present')) {
			I.say('PASS');
		} else {
			I.say('FAIL');
		}
});


