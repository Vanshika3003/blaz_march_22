# Assignments

# Date: 14-March-2022

1. Create a Windows Calculator in JavaScript with following functionalities
    - Look and Feel aka UI MUST like Calculator (Do not use the CSS or Google)
    - There MUST be following button with respective funcationality
        - +, -, *, /
        - %, mod, square, x^y (raised-to)

# Date: 15-March-2022

1. Create an Array of Products with following information for each Product
    {ProductId:'', ProductName:'', CategoryName: '', Manufacturer:'', Price:0000}
    - Make sure that, there are 5 Entries in array present by default
2. Define Following Two Arrays
    - var Categories = [PUT-YOUR-DATA]
    - var Manufacturers = [PUT-YOUR-DATA];
3. Create a HTML UI for Accepting ProductId, ProductName, Price from End-User using input:text elements
    - Generate select element for Category and Manufacturer based on arrays declared in Task 2  
4. Once End-User enters data for ProductId, ProductName, Price and select CategoryName and Manufacturer, on the 'Save' button, the data MUST be added in Products Array
5. Generate a HTML Table Dynamically based on Data from the Products Array
    - Generate thead dynamically based on all keys of Product
    - Generate tbody with all rows based on values for product in Products array         

# Date: 16-March-2022
Note: You have to solve these assignments using HTML UI 

1. Use the following string to perform Operations as specified below the string
    Indiana Jones is an American media franchise based on the adventures of Dr. Henry Walton "Indiana" Jones, Jr., a fictional professor of archaeology, that began in 1981 with the film Raiders of the Lost Ark. In 1984, a prequel, The Temple of Doom, was released, and in 1989, a sequel, The Last Crusade. A fourth film followed in 2008, titled The Kingdom of the Crystal Skull. A fifth film is in production and is provisionally scheduled to be released in 2023. The series was created by George Lucas and stars Harrison Ford as Indiana Jones.

    In 1992, the franchise expanded to a television series with The Young Indiana Jones Chronicles, portraying the character in his childhood and youth, and including adventures with his father. Marvel Comics began publishing The Further Adventures of Indiana Jones in 1983, and Dark Horse Comics gained the comic book rights to the character in 1991. Novelizations of the films have been published, as well as many novels with original adventures, including a series of German novels by Wolfgang Hohlbein, twelve novels set before the films published by Bantam Books, and a series set during the character's childhood inspired by the television show. Numerous Indiana Jones video games have been released since 1982.

    a. Find out total number of Characters.
    b. Find out total number of words.
    c. Find out total number of Statements.
    d. Convert the first letter of each word in Upper case.
    e. Reverse the Whole String.
    f. Reverse Each Word in string.
    g. In a Textbox enter a word and once a 'Find Frequency' button is clicked print how many number of times that word is present in string and also print all the positions where the word occurs
    h. Find out how many vowels are present in the string 
        - print position and numbers of times [a,e,i,o,u] are present in string
2. Use a HTML UI page from the project with name as datediff.html 
    - Please check following while calculating Difference
        - Leap Year
        - Month with 30 and 31 days
    - if difference in days is more than 365,366 the add 1 year in difference
    - if difference in days is more than 28 (Leap year), 30, 31 then add 1 Month   
    - if difference in months is more than 12 the add 1 year in difference 
    - if difference in hours is more than  24 then add 1 day
    - if difference in minutes is more than 60 then add 1 hour
    - if difference in seconds is more tha 60 the add 1 minute      

# Date 17-March-2022

1. Modify the Logic function from closefuncion.js to add perform CRUD Operations on Employee my modifying employees array with DeptName, Designation and Salary along with EmpNo and EmpName
2. The Logic function will have getEmployees(), addEMployee(), updateEmployee() and deleteEmployee() methods to perform read/write operations on employees array
3. Modify the UiGenerator ref function from uigenerator.js to generate HTML table dynamically based on employees passed to it.
4. The DeptName MUST selected from Departments array and Designation MUST be selected from designations array, these arrays will be passed to select() method of UIGenerator class to generate the select element.  

# Date: 21-March-2022

- Modify the assignment on 17-March-2022 by using the LocalStorage
    - Added/Updated data in LocalStorage  must be shown in HTML table which is generated dynamically 

# Date: 22-March-2022

https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

1. Create an IndexedDB Store that will be used to store information of the Products as follows
    - ProductRowId, ProductId, ProductName, CategoryName, Manufacturer, Description, Price
2. There MUST be UI (You decide) for following
    - Accept ProductInformation from End-User
        - PreoductRowId must be Auto-generated
        - ProductId MUST be unique {unique:true}
    - Provide Product Search Facility based on following Criteria
        - By ProductId
            - Return Single Record
        - By ProductName          
            - There could be mulltiple values for ProductName e.g. Laptop
            - This will return collection
        - By Category
            -  Return Collection
        - By Manufacturer
            - Return Collection
3. Implement HTML 5 validations
4. Once a record is added It must be shown in table 
5. (Optional) Try to implement pagination for table to show data from IndexedDb
    - e.g. if 50 records in indexedDb the per table page show 5 records so 10 table tables                      

# Date: 28-March-2022

1. Create a Shopping Cart Application which has UI as per described below (MUST)
    - The Page MUST have 2 Div Tags Side-by-Side
    - The Left-Side div will show list of the Items with its Unit Price
    - The Right-Side div will allow user to drag the item from left-side list and drop in right-side div
    - Once the Item is droped, the textbox will appear where end-use MUST enter quantity of dropped item to be purchased (Dynamically generate input:text element), once the quantity is entered in text element and tab is pressed, the total price for selected item must be calculated and  the bottom of the div has to show total price of all items
2. (Optional) Next to the text element also show a Button with X on it, so that the end-user can deleted the dropped item.
HINT: https://www.dotnetcurry.com/aspnet-mvc/1039/drag-drop-html5-aspnet-mvc-jquery

3. (Mandatory)
    - Modify Assignment of 22-March-2022 (IndexedDB) with following
        - EmpNo < 0, the TextBox border will be read else for valid value its MUST be green
        - EmpName length ==0  the TextBox border will be read else for valid value its MUST be green
        - Address length ==0  the TextBox border will be read else for valid value its MUST be green 
        - Salary < 0, the TextBox border will be read else for valid value its MUST be green
        - The 'Save' button will be enabled when all TextBoxes has valid entry

# Date 29-March-2022

1. Create a table with 5 Columns as EmpNo, EmpName, DeptName, Salary, Designation. Add Rows for Employees in it fror Department NAmes like IT, HRD, SALES, ADMIN, ACCOUNTS (10 20 Rows in table)
2. When a Mouse Cursor is Moved from the table row its must change the appearance of Table row as follows
    - Font Size: 30px, Background colorL: Yellow, Color: Red, Font-Family:cursive
3. Make sure that each row based on DeptName has different background color
    - IT: Red
    - HRD: Blue
    - SALES: Chocklet
    - ACCOUNTS: Cyan
    - ADMIN: Magenta     

# Date: 30-March-2022

1. Define an Array of Employees with 50 records with information in each record is as follows
    - EmpNo, EmpName, DeptName, Designation, Salary
2. Generate a HTML Table Dynamically based on the Employees array
3. Below the table create a Dropdown with values as 
    5,10,15,20,25,30,35,40,45,50
    - These are page sizes
4. When Table is dynamically generated show 10 rows and the Dropdown MUST have selected values as 10
5. Dynamically generate pagination links based on current size of Table rows as
    - previous 1 2 3 4 5 Next          
    - If number of rows selected are 5 then pagination will have 10
        - previous 1 2 3 4 5 6 7 8 9 10 Next
6. When a Specific Page is selected the page number MUSt be in active state (class 'active')
7. If the first page is selected then 'previous' MUST be disabled
8. If the last page is selected then the 'next' MUST be disabled

(Self-Study for Bootstrap)
    - Use the 'model' class to show a model dialog
        - model-dialog, model-header, model-title, model-body
    - (optional) When a Row is selected from Employees table, the Employee information MUST be shown in Model dialog so that the end-user can update it

# Date: 31-March-2022

1. Create an Array of Employees as    - EmpNo, EmpName, DeptName, Designation, Salary
2. Find out How many employees are there in Each Department
3. Fund out How many Managers, Clerks, Operators are in the array


# Date: 01-April-2022

1. Create a UI for Accepting the Products Record from EndUser so that it can be stored into the Map() known as ProductMap. The Product information will be accepted as ProductId, ProductName, CategoryName, Manufacturer, Price
2. Make the ProductId as a Key of the Map() which is storing Product record. This Must be Auto-Generated.
3. Make sure that, you generate separate Map objects from ProductMap to store data category wise known as CategoryMap (Key will be CategoryName) and Manufaturer wise known as  ManufacturereMap() Key will be Manufacturer , so tht they will be useful to show Product data by Category  as well as by Manufacturer on Demand.  

# Date: 04-April-2022

1. Use the es6apps/oops/overloading.js to implement overloading in class

2. Use the application.js from es6apps/oops/ folder to complete the application as per explained in EmployeeLoc and UserInterface class and show the Functional Application in .html page
    - Note: You can use Array, Map, IndexedDB for Storing and Reading data
    - (Optional): The EmployeeLogic class has various Search methods, try to use function overloading for them.

# Date: 05-April-2022

1. Design a REST API for Performing CRUS Operations on it using 'fetch' object
    - Either create a REST API or Use Open Free API for this lab
    - Experience Promise and fetch object
2. Create a ProductInfo object with the Following Properties
    - ProductId
    - ProductName
    - CategoryName
    - Description
    - Manufacturer
    - Price
3. Create Client1 class, that want to update the Product information, so for the Client1 create a Proxy object, that will make sure that Client1 following below rules before creating new Product                  
    - ProductId, Must start from CLT1--[JS Random-Number]
    - CategoryName will always be Either Electrical or Electronics

4. Create Client2 class, that want to update the Product information, so for the Client2 create a Proxy object, that will make sure that Client2 following below rules before creating new Product                  
    - ProductId, Must start from CLT2--Prd-[JS Random-Number]
    - CategoryName will always be from  Electrical, Electronics, Civil, Mechanical, Chemical
    - Manufacturer will be always from HP, Bajaj, TATA, LnT, etc.       

# Date: 06-April-2022

1. Consider that you are going to design S/W application for a Medical Store where the Information stored is like
    - Medicines
        - Stock Information
    - Customers
        - Customers those purchase Medicines
    - Doctors
        - They are register doctors who asks to purchase medicines by issuing prescription  
    - Prescription
        -  Issued by doctor to a Customer
    - Bill
        - Per Medicine Bill issued to customer
    - DailyReceived
        - Daily money received against bill issued to customer
    - OrderedMedicines
        - medicines those are ordered
    - ReceivedMedicines
        - Medicines those are received against the order            

# Date 07-April-2022

1. Perform Following Query Operations on Tables Created on Date:06-April-2022
    - Insert 15 Records in Each of the Table
    - Print Customers by Doctor Name
    - Print Count of Customer by Each Doctor Name
    - Print Prescription Details by Each Customer
    - Print Prescription Details by Each Doctor Name
    - Print List of Medicines Per Customer Name
    - Print Receivables between 2 Dates
    - Print List of Medicines Ordered between 2 Dates
    - Print Count of Order placed for each medicine between 2 Dates
2. Create a Stored Procedure to Generate  Detailed bill for a Customer 
    - This will use Customer Table, Preseciption Table, Bill and Item_Wise_Bill Table       

# Date: 11-April-2022
1. Create Database and Tables of exercise dates Date: 06-April-2022 in MySQL and also repeate the same queries dates  Date 07-April-2022
2. Create a Procedure that will Generate an A Bill with all Medicines sold to the customer against the Prescription  


# Date: 12-April-2022 (Solution expected on 13-April-2022)

1. Create a REST API using Node.js Http  Module for CRUD Operations on Array
2. HTTP GET/POST/PUT/DELETE
3. Make sure that the Client Accept this API using either XmlHttpRequest object or fetch object
4. Make sure that the AUTHORIZATION Header is passed to REST API which will contains UserName and Password
    - on REST API side, create an Array called as Users like  follows 
        - const Users = [
            {UserName: '', Password:''}
        ];
    - Make sure that the Request header pass the Users information to REST API and if the UserName and Password match found then only Perform GET/POST/PUT/DELETE operations
    - Else response 401 Error To Client
    - The Client MUSt be HTML Page
        - Use Previously Created JS using ES 6, HTML with Bootstrap, UI generator for showing Employee information in Table 
  
# Date: 13-April-2022
1. Create a Web Server that will return html pages to the request base on 'http.url' property. Make sure that the Web Server will not Hard-Code page names while reading them using the 'fs' module. (Create a Route Table using ES6 Map()). The File will be read and will be responded to client.
2. Create a Directory with files and Sub-Directories in it, using the 'fs' module read each file from parent directory and sub directories.     (Today)  
3. (SELF-Research): Create a Node.js application that reads Excel and CSV files.

# Date: 14-April-2022

1. Complete REST with Put and Delete methods
2. From the HTML Clients Perform CRUD operations with REST APIs
3. Create a get method in API that will search Employee Data based on following criteria
    - EmpName='Mahesh' || DeptName = 'IT' (OR Condition)
        - Return all EmpName as 'Mahesh' along with all Employees from IT DeptName
    - EmpName='Mahesh' && DeptName = 'IT' (OR Condition)
        - Return All employees with name as 'Mahesh' from IT DeptName only
    - Create UI for sending Search Criteria to REST API and displaying result returned from REST API to HTML

# Date: 18-April-2022

1. Using ORM Complete CRUD Operations on EMployees, Users tables
2. Create a API that will have get method to return Data based on following criteria from the database 
     - EmpName='Mahesh' || DeptName = 'IT' (OR Condition)
        - Return all EmpName as 'Mahesh' along with all Employees from IT DeptName
    - EmpName='Mahesh' && DeptName = 'IT' (OR Condition)
        - Return All employees with name as 'Mahesh' from IT DeptName only
3. Create an API that will have POST method to post 'Single Department' and 'Multiple Employees' for that department using single POST request
4. Consume these APIs by creating HTML page and AJAX call to API from HTML Pages          

# Date: 19-April-2022
1. Modify the HTML Pages and rest calls from HTML pages created in assignment 4 on date 18-April-2022 as follows
    - Create a RegisterUser Page to create new user
    - Create a login page for authenticating user
    - The Departments CRUD and Employees CRUD REST APIs will be accessible only when the user is logged in successfully
2. To be submitted on 29-April-2022 ***** Implement this as PROJECT
    - Create a Roles and UsersInRole Table in Database
    - Roles Table will have following columns
        - RoleName (P.K.)
        - Permissions varchar(100)
            - Possible values in this will be e.g. Create, Read, Update, Delete (Comma Separated Values)
    - UsersInRole Table will have following columns
        - UserName (F.K. Ref Users Table)
        - RoleName (F.K. Ref Roles Table)
        - Note: Once the User is assigned Role, it cannot be changed
    - Create a Default User known as 'appadmin' with default password (as per your value for pwd)
    - Create a defile role known as 'admin', the 'appadmin' user will be assigned the 'admin' role by default
    - Create RoleAPI using express
        - New Roles can be created only by 'admin' role
    - User can register themselves but role can be assigned to user only by administrator and then only user will be able to access the REST APIs and hence the application            

# Date : 20-April-2022  (by 06:00 pm today)
1. While Generating the token provide a payload to client as
    - UserName 
    - Access Rights
        - Read
        - Read,Create,Update
        - Read,Create,Update,Delete or use *
    - Make sure that that based on the Access rights the REST API Http Methods (GET/POST/PUT/DELETE) are accessible to the client    
    - Use Users Table
    - The Access Rights Collection can be created in the application for each user
        - Note at-least use 5 different  

# Date: 21-April-2022

1. Use the following links
    - https://www.dotnetcurry.com/nodejs/1242/promises-nodejs-using-q-goodbye-callbacks
    - https://www.dotnetcurry.com/nodejs/1225/call-external-service-using-nodejs
    - to create an application that will using 'q' to enclose 'http.request()' object inside the deferrer to manage GET and POST operations
    - Create a HTML page (Client using AJAX) to call the HTTP module (Gateway) which further call the Express REST APIs (Back-End Service) 
2. Self-Study
    - Implement a Express REST API that Uploads the File from the Client    

# Date:22-April-2022

1. Create a Calculator Component using React.js (No Google)
    - This MUST be Scientific Calculator
2. Create a Component that will generate CheckBoxList based on Course Array Passed to it
    - Array [{CourseName:'',Fees:}] 
    - When a CheckBox is checked the, for all 'checked' checkboxes the Total Fees MUST be shown at the bottom

# Date:25-April-2022

1. Create a DataGridComponent using HTML Table with the following considerations
    - The Data will be passed to this component will be a collection type, the component will accept data in 'DataSource' property
    - HTML Table headers will be generated based in Keys inside collection
    - HTML Table body with rows will be generated based on data in the collection
    - The component will accept the 'CanEdit' property of the type boolean. If this value is true, each row will show edit button, when this button is clicked, the Row will be editable (explore contentEditable property of td). The End-User can edit the row and changes MUST be reflected into the collection received from parent
    - The compose will accept 'CanDelete' property of the type boolean, if this property is true, then, each row will show delete button, when this is clicked the row will be deleted from the collection received from the parent
    - Each column header has to show Arrow buttons, (use button class from bootstrap for UP and DOWN), when Upward arrow is clicked the data in the table MUST be sorted in ascending order w.r.t. that columns and when the downward arrow button is clicked the data in the table MUST be sorted in descending order w.r.t. that column
    - (Optional for Today, but mandatory by friday)
        - Implement Table Pagination by having 'IsPaginationEnabled' property value from the parent, of this is true then accept the 'pageSize' and below the table generate pagination (Bootstrap), based on No. of records in collection and page size generate page numbers and paginate accordingly        

# Date: 26-April-2022 (1 to 5 MUSt be done today)

1. Create an Employee Data Entry Form which will accept following information
    - EmpNo, EmpName, Designation, DeptName, Salary, TechnicalExpertise
2. Make sure that the Designations are like 'Director', 'CTO', 'Accountant', 'Project Manager', 'Manager', 'Lead', 'Engineer', 'Developer', 'Tester', 'Cashier'
3. Make sure that DeptName are like 'Dev', 'Test', 'Accounts', 'HR', 'System'
3. Technical Experties will be, 'Management', 'Teacher', 'C++', 'C#', 'JAVA', 'Python', 'JavaScript', 'React', 'Angular', 'jQuery', 'Node.js', 'Express', 'nUnit', 'jUnit', etc.
4. The Forms MUST reuse dropdowns for Designation, DeptName and  TechnicalExpertise. MAke sure that one-or-more technical expertise can be selected. DeptName and Designation can be only one
5. Use the Following Validation Rules
    - EmpNo, MUST be +ve Integer and MUST not be more than 8 digits
    - EmpName, Must start from Uppercase character, there MUST not be any special character, Only 2 BlankSpaces are allowed as 'FirstName MiddleName LastName' in EmpName but they cannot be consecutive blank spaces   
6. Create a 'ValidationSummaryComponent' thsi will show all error messages on the top of the form. Make sure that when a data is valid, only that error message will be removed from validation summary component      

# Date: 28-April-2022

1. Create Department and Employee Component for CRUD using REST API
2. Call the Secure REST API by Accessing the REST API that is secured with Tokens
    - Create Component for creating User and Login 
    - Receive the Token and then use token to Authorize the user to call REST API
3. Create a Component that will perform the Server-Side Search (like google search) to fetch matching Departments, Employees, Employee by DeptName, Employee By Designation, etc.    


# Date: 29-April-2022

1. (Today)Create a Custom Hook of name useRemoteOperation(), that will accept following Parameters
    - useRemoteOperation(url, type, data, options);
        - The 'url' is remote REST API
        - The 'type' is GET,POST,PUT,DELETE
        - The 'data' is data to be posted (POST) or edited (PUT)
        - The 'options' is a JSON object that will contain HTTP Headers e.g. as follows
            - 'Content-Type': 'application/json'
            - 'AUTHORIZATION' : 'Bearer TOKEN-VALUE'
    - This hook should perform all REST CRUD Operations
2. Modify the components created for REST API CRUD Operations on date 28-April-2022 for Handling Errors using Error Boundary
3. Upload an Image from React App to Node.js REST API and show uploaded Image
    - https://www.devcurry.com/2020/03/mern-stack-javascript-web-application.html

# Date: 02-May-2022
1. Modify the Routing App by adding deletecomponent to show record to be deleted. Modify the ListDepartmentsComponent  by showing delete button for each row. (You can use the 'DataGridComponent' for showing the List)
    - Make sure that, Locations are fetched from the Department table and shown in the Create and Edit Components
    - MAke sure that the List will always show Departments data in the sorted order by DeptNo
2. Modify the Application to show links for Single-Page-Application  as like
    - Department            Employee
    - When the Department Link is clicked , show Layout for Department Single Page Application
    - When the Employee Link is clicked , show Layout for Employee Single Page Application       

# Date: 03-May-2022
1. Modify the Redux App, where when the row is selected from the ListDepartmentsCompoennt, it MUST be dhown in AddDepartmentComponent using 
    - New Action: SelectDept
    - Additional Reducer
    - The Selector to read data from the store

# Date: 05-May-2022
1. Using the Redux-Saga, create CRUD Operations to the REST API
    - Make sure that, the use logs-in before performing CRUD Operations
    - Store the use login Status in the Redux-Store, so that before sending the REST CALL for CRUD the login status will be checked  
    - Make sure that the data is validated before posting it to the REST API
    - Update and Delete MUST be done by searching the record from Redux Store
        - Store will be updated for each Update and delete
        - (Optional): Try Updating/Deleting multiple records from Store and then send them to REST API  
2. Use Redux with react-routing-dom     

# Date: 06-May-2022

1. Use Next.js to create a Single Page for App CRUD operations on departments by calling the REST API
    - Show me how will you integrated bootstrap with next.js

# Date:09-May-2022
1. Write a test on DepartmentComponent to make sure that, when Save button is clicked, a new Department record is added into the table
2. Write a test on DepartmentComponent to make sure that when the invalid DeptNo, DeptName, Capacity are entered validation messaged are displayed    

# 10-May2022

1. Test the REST AP call from Ract Application to Node.js
2. Test the Data Access Layer of Sequelize using Mocha and Chai for CRUD Operations.
3. Test the Node.js REST API for (optional)
    - GET/POST/PU/DELETE calls
        - Make sure that methods are executing validations

# Date: 12-May-2022

1. Create an Express REST API that will accept the file from React Application and updload it into the S3 Bucket on AWS
    - Host the Node.js Express app as Microservice and make sure that the React app connects to Node.js+Express app running in Docker also
    - Please Refer: https://www.devcurry.com/2020/03/mern-stack-javascript-web-application.html