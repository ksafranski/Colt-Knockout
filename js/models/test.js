define(["knockout"], function (ko) {

    // Setup KO Model
    testmodel = function(t, c) {
        this.title = ko.observable(t);
        this.content = ko.observable(c);
    };
    
    return testmodel;
   
});