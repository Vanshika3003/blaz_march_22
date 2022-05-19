class MySqlDb {
    connect(){
        console.log('Connect to MySQL DB');
    }
}

class PostgreSQLDb {
    connect(){
        console.log('Connect to PostgreSQL DB');
    }
}

class DbFactory {
    constructor(){
        this.db = undefined;
    }

    getDbInstance(dbName){
        if(dbName === 'MySql') return this.db = new MySqlDb();
        if(dbName === 'PostgreSQL') return this.db = new PostgreSQLDb();
        return this.db;
    }
}

class Client {
    constructor(){
        this.dbo = undefined;

        this.factory = new DbFactory(); 
    }

    connectToDb(){
        this.dbo  = this.factory.getDbInstance('PostgreSQL');
        this.dbo.connect();
    }
}

let c = new Client();
  c.connectToDb();


