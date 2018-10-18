CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  username varchar(50),
  email varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO users (id, name, username, email) VALUES
(1, 'Jasmine', 'jasloo', 'jasmine@example.com'),
(2, 'Jay', 'jaydie', 'jay@example.com'),
(3, 'Jim', 'jman', 'jman@example.com'),
(4, 'John', 'jdoe', 'doe@example.com'),
(5, 'Lesley', 'lles', 'lles@example.com');
