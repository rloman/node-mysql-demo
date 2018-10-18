const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nodetestuser',
  password: 'nodetestpass2018Spectrum',
  database: 'nodetest'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


function insert() {
  const user = {
    name: 'Winnie',
    username: 'wpoe',
    email: 'w@example.com'
  };
  connection.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) throw err;

    console.log('Last insert ID:', result.insertId);
  });
}


function list() {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
  });
}

function findById(id) {
  connection.query('SELECT * FROM users where id=?',[id], (err, row) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    console.log(row);
  });
}




function update(id, email) {
  connection.query(
    'UPDATE users SET email = ? Where ID = ?',
    [email, id],
    (err, result) => {
      if (err) throw err;

      console.log(`Changed ${result.changedRows} row(s)`);
    }
  );
}

function delete(id) {
  connection.query(
    'DELETE FROM users WHERE id = ?', [id], (err, result) => {
      if (err) throw err;

      console.log(`Deleted ${result.affectedRows} row(s)`);
    }
  );
}


list();
insert();
list();
update(5, 'poedel@example.com');
list();

findById(id);
