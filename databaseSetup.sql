--Database Name car-codes

CREATE TABLE codes(
    id SERIAL PRIMARY KEY NOT NULL,
    code VARCHAR(50),
    result VARCHAR (300),
    description VARCHAR (600),
    severity VARCHAR (50)
);

INSERT INTO codes (code, result, description, severity)
VALUES ('P0135', 'Oxygen sensor malfunction', 'Keep driving. Car will continue to operate. However, oxygen sensor may not work at peak performance. If this diagnostic goes untreated, carbon buildup deposits will build up at a faster rate in the engine and catalytic converter.', 'Keep Driving!');

INSERT INTO codes (code, result, description, severity)
VALUES ('P0401', 'Exhaust Leak','Driving with an exhaust leak is potentially dangerous as the fumes contain carbon monoxide. You should be ok to drive, but make an appointment or consult with a mechanic.', 'Be aware. Needs to be inspected.');

INSERT INTO codes  (code, result, description, severity)
VALUES ('P0340', 'Cam shaft position censor circuit malfunction', 'Car may not start. If it does start, be aware that it may randomly stall or misfire. Please have a mechanic inspect the vehicle ASAP.', 'Stop driving!');
