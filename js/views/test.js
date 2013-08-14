define(["knockout"], function(ko){    
    
    var test = {
        
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
            
            // Setup KO Model
            var TodoModel = function(t, c) {
                this.title = ko.observable(t);
                this.content = ko.observable(c);
                return this;
            };
            
            // Apply bindings and instantiate model
            ko.applyBindings(new TodoModel("My Title", "Some content goes here..."));
            
        }
        
    };
    
    return test;
    
});