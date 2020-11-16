USE employee

INSERT INTO department (id, name)
VALUES
(1, "Sales"),
(2,"Engineering"),
(3,"Finance"),
(4,"Legal");


INSERT INTO role (id, title, salary, department_id)
VALUES
(1, "Entrepeneur", 50000, 1),
(2, "Sales Manager", 30000, 1),
(3, "Head Engineer", 35000, 2),
(4, "Developer", 45000, 2),
(5, "Accountant", 30000, 3),
(6, "Lawyer", 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Sorret", "Elhas", 5, null),
("Stan", "Wawrinka", 3, 1),
("Rafa", "Nadal", 5, 1),
("Kei", "Nishikori", 2, 1),
("Novak", "Djokovic", 6, 1),
("Pete", "Sampras", 1, 1),
("Nick", "Kyrgios", 4, 1);

