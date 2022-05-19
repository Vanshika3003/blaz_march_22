# JavaScript Design Patterns
1. Module Pattern
    - Foundation of writing re-usable code
    - Recommended, when teh JS code is to be distributed across various projects
    - Provide variable and function scope so that the caller of the modules will not be able to access method, variable directly  
2. Using the Constructor Pattern
    - Accepted more with ES 6
    - Uses 'Object.create()' method
        - Clone the existing instance w/o calling the constructor of the class
        - Fast way of creating instance    
3. Singleton pattern
    - Always create only one object of the class
    - Used in case where the instance creation cost is more
    - Used when an object with its data is shared across all modules of the application 
        - e.g. Log Entries
4. Factory Pattern
    - It is a method that decides which object to be instantiated based on filter condition
    - Suitable to dynamically instantiate object from multiple available classes  to be instantiated                 