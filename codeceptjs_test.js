
Feature('TestCaseTwo');

Scenario('TEST CASE 2: ', (I) => {
	I.amOnPage('https://codecept.io/')
	I.see('GitHub')
	I.click('GitHub')
	I.fillField('Search', '1.2.1 release')
    I.pressKey('Enter')
	I.waitForText('RoboFile.php')
	I.wait(5);
	I.click('RoboFile.php')
});


