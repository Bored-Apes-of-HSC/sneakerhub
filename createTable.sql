CREATE TABLE category (
    cid INT PRIMARY KEY,
    category VARCHAR(30),
    sub_category VARCHAR(30)
);


CREATE TABLE product (
    pid INT PRIMARY KEY,
    title VARCHAR(30),
    description VARCHAR(200),
    sale_price INT,
    price INT,
    quantity INT,
    image VARCHAR(30),
    category INT,
    FOREIGN KEY (category) REFERENCES category(cid)
);



CREATE TABLE user (
    uid INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cart (
    cpid INT PRIMARY KEY AUTO_INCREMENT,
    product INT,
    quantity INT,
    user INT,
    FOREIGN KEY (product) REFERENCES product(pid),
    FOREIGN KEY (user) REFERENCES user(user)
);

