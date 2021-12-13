
INSERT INTO departments
    (dept_name)
VALUES
    ('Health Department'),
    ('Accounting'),
    ('Game Engineering');
INSERT INTO roles
    (title, salary, dept_id)
VALUES
    ('Doctor', 90000, 1),
    ('Nurse', 30000, 1),
    ('Accountant', 90000, 2),
    ('Reception', 40000, 2),
    ('Game Engineer', 90000, 3),
    ('Game Artist', 10000, 3);
INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Danny', 'Dan', 1, NULL),
    ('Johnny', 'Jon', 2, 1),
    ('Scotty', 'Scott', 3, NULL),
    ('Peter', 'Parker', 4, 3),
    ('Steve', 'Wonder', 5, NULL),
    ('Travis', 'Debt', 6, NULL);