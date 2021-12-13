const db = require('../db/connection');

const deptArr = [];
const roleArr = [];
const employeeArr = [];

const deptArrFill = () => {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            deptArr.push({name:rows[i].name, value:rows[i].id});
        }
    });
    return deptArr;
};

const roleArrFill = () => {
    db.query(`SELECT DISTINCT * FROM roles LEFT JOIN departments ON roles.dept_id = departments.id`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            roleArr.push({name:rows[i].title, value:rows[i].id});
        }
    });
    return roleArr;
};
const managerArrFill = () => {
    const managerArr = ['None'];
    db.query(`SELECT * FROM employees WHERE manager_id IS NULL`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            managerArr.push({name:rows[i].first_name + ' ' + rows[i].last_name, value:rows[i].id})
        }
    });
    return managerArr;
};

const employeeArrFill = () => {
    db.query(`SELECT * FROM employees ORDER BY last_name`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            employeeArr.push({name:rows[i].first_name + ' ' + rows[i].last_name, value:rows[i].id});
        }
    });
    return employeeArr;
};


module.exports = {deptArrFill, roleArrFill, managerArrFill, employeeArrFill};