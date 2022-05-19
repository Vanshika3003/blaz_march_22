class Employee {
    constructor(eno,ename){
        this.EmpNo = eno;
        this.EmpName = ename;
        console.log('Constructor Called');
    }
    display(){
        console.log('====================================');
        console.log(`EmoNo = ${this.EmpNo} and EmpName = ${this.EmpName}`);
        console.log('====================================');
    }
}

let e1 = new Employee(101,'Mahesh');
e1.display();
let e2 = new Employee(102,'Neeta');
e2.display();
// Using the Object.create(), a constructor pattern

let e3 = Object.create(e1);
e3.display();
e3.EmpNo = 103;
e3.EmpName = 'Leena';
e3.display();