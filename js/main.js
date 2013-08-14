require.config({
    baseUrl: "js/",
    paths: {
        colt:  "libs/colt.0.7.2",
        knockout: "libs/knockout.2.3.0.min"
    }
});

define(["colt", "knockout"], function (Colt, ko) {

    // Define all of the modules as array
    Colt.modules = [
        "views/test"
    ];

    // Initialize application
    Colt.init();

});
