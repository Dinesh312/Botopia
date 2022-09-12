casper.test.begin('Casperjs web page automation', function suite(test) {
    casper.start("http://datadome.co/", function() {
        console.log("Displaying");
    });
    casper.then(function() {
        test.assertTitle(this.getTitle(), "Title is displayed correctly");
    });
    //Test execution
    casper.run(function() {
        this.log('Test finishing', 'info');
        test.done();
    });
});