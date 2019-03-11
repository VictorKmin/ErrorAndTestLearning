#### To create DataBase run script
```sql
CREATE SCHEMA IF NOT EXISTS nodeapi;
USE nodeapi;

create table if not exists user
(
  id         int auto_increment
    primary key,
  name       varchar(45) null,
  email      varchar(45) null,
  password   varchar(45) null,
  created_at timestamp   null
);

create table if not exists house
(
  id         int auto_increment
    primary key,
  user_id    int         null,
  room_count int         null,
  squeare    double      null,
  price      int         null,
  city       varchar(25) null,
  created_at timestamp   null,
  constraint house_user_id_fk
    foreign key (user_id) references user (id)
);

create procedure nodeapi.GetUsers()
BEGIN
  SELECT * FROM user;
END;

CREATE PROCEDURE RegisterUser(IN $email VARCHAR(45), IN $pass VARCHAR(45), IN $name VARCHAR(45), IN $date TIMESTAMP)
BEGIN
  IF NOT EXISTS(SELECT *
                FROM user
                WHERE email = $email
                  AND password = $pass
                LIMIT 1)
  THEN
    INSERT INTO user(id, name, email, password, created_at)
    VALUES (DEFAULT, $name, $email, $pass, $date);
    SELECT * FROM user WHERE email = $email;
  END IF;
END;

```

#### Environment setting
All environment present in .sample-env file.
To replace variables from .sample-env to . env use
```npm
npm run env
```

### Test
To run test use
```npm
npm test
```

#### Start
To start application run. Default port is 3000
```npm
npm start
```
