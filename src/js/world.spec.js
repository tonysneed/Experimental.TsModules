describe('App.World', function() {
    
    // Setup
    beforeEach(function(){
        console.log('Setup');
    });
    
    // Teardown
    beforeEach(function(){
        console.log('Teardown');
    });
    
    describe('sayHello', function(){   
             
        it('returns greeting', function(){
            
            // Arrange
            var world = new App.World('World');
            
            // Act
            var result = world.sayHello();
            
            // Assert
            expect(result).toEqual('Hello World');
        });
    });    
});
