define(["knockout"], function(ko){    
    
    var test = {
        
        dependencies: {
            testmodel: 'models/test'
        },
        
        events: {
            // None right now...
        },
    
        routes: {
            '' : 'renderTest'
        },
    
        // Loads up this modules main view
        renderTest: function () {
            
            // Render template
            Colt.render(this);
            
            
            
            // Apply bindings and instantiate model
            ko.applyBindings(new testmodel("My Title", "Some content goes here..."));
            
        }
        
    };
    
    return test;
    
});