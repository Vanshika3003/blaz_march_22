let Singleton=(function(){
    let instance;

    function createInstance(){
        // the function that creates an instance of the JS Object class
        let object = new Object('I am instantiated');
        return object; 
    }
    return {
        /// a method that will check is the MOdule is already instantiated
        /// if yes then the same instance  will be returned 
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };

})();

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();

console.log('====================================');
console.log(`Are they Same ${s1 === s2}`);
console.log('====================================');