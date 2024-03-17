// task_0/js/main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 23,
    location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

// Render table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
