# Codecept
NodeJS, codeceptjs (global install), webdriverio(global install+local install), selenium-standalone 

TEST CASE 1: 
Step 1. URL açılır. ( https://codecept.io/ ) ()
Step 2. Menüden, Helpers/WebDriverIO  tıklanır (Resim 1).
Step 3. Sol navigasyondan “dontSee” ekranı açılır (Resim 2).
Step 4. Parameters section altında, “text is not present” texti olduğu doğrulanır (Resim 3). Varsa PASS, Yoksa FAIL döner.

Step 2. için linke giderek Helpers menüsü kaldırılmış olduğunu gördüm. Çözüm olarak istenilen yere link vererek ulaştım. [ I.amOnPage('https://codecept.io/helpers/WebDriverIO')]

TEST CASE 2: 
Step 1. URL açılır. ( https://codecept.io/ )
Step 2. GitHub linkine tıklanır (Resim 4).
Step 3. Search alanına “1.2.1 release” yazılır ve search edilir (Resim 5).
Step 4. Arama sonuçlarından, ikinci sırada olana ait link açılır. Başarılı ise PASS, Yoksa FAIL döner.

Step 4. için arama sonuçları günümüzde değiştiği için ikinci sıraya ait link de değişmiştir ekran görüntüsüyle bir olmayacaktır. [I.click('RoboFile.php')]

codeceptjs run –steps

--------------

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


---------------


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

