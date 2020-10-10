const mysql = require('mysql');
require('dotenv').config();;

const env = process.env;

var connection = mysql.createConnection({
  host     : env.host,
  user     : env.user,
  password : env.password,
  database : env.database
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('Database ' + connection.state);
});

class DbService {
    static getInstance() {
        return new DbService;
    }

    async getAll(){
        const query = "SELECT * FROM tasks";

        let results = new Promise((resolve, reject) =>{
            connection.query(query, (err, res)=>{
                if(err) reject(err);
                resolve(res);
            });
        });
        return results;
    }
}
module.exports = DbService;