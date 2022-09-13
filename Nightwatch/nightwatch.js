describe('Demo', function() {
    before(browser => browser.navigateTo('https://datadome.co/'));
  
    it('Demo test', function(browser) {
      browser
        .waitUntil(() => {}, 5000)
    });
  
    after(browser => browser.end());
  });
  