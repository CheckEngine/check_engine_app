--Database Name car-codes

CREATE TABLE codes(
    id SERIAL PRIMARY KEY NOT NULL,
    code VARCHAR(10),
    result VARCHAR (300),
    description VARCHAR (300),
    severity VARCHAR (10)
);

INSERT INTO codes (code, result, description, severity)
VALUES ('P0135', 'Oxygen sensor heater circuit malfunction', 'oxygen sensor will not work at peak performance, and you might see a dip in fuel economy', 'Minor');

INSERT INTO codes (code, result, description, severity)
VALUES ('P0401', 'There is a problem in the Exhaust Gas Recirculation (EGR) system','In order to keep temperatures from rising too high, the EGR routes exhaust gas back into the cylinders to cool down combustion', 'Moderate');

INSERT INTO codes  (code, result, description, severity)
VALUES ('P0340', 'There is a problem in the camshaft position sensor circuit', 'The sensor measures how fast the camshaft rotates, it initiates the fuel injector spray', 'severe');
