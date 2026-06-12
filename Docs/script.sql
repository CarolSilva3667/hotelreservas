CREATE DATABASE Villa;

USE Villa;

CREATE TABLE quartos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(50),
    tipo VARCHAR(50)
);

CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hospede VARCHAR(100),
    data_entrada DATE,
    data_saida DATE,
    quarto_id INT,
    FOREIGN KEY (quarto_id) REFERENCES quartos (id)
);