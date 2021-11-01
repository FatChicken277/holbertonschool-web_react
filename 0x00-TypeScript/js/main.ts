interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Student1',
  lastName: 'Lastname1',
  age: 12,
  location: 'localhost',
};

const student2: Student = {
  firstName: 'Student2',
  lastName: 'Lastname2',
  age: 13,
  location: 'localhost',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
  const newRow: HTMLTableRowElement = tBody.insertRow();

  const firstNameCell: HTMLTableCellElement = newRow.insertCell();
  const locationCell: HTMLTableCellElement = newRow.insertCell();

  firstNameCell.appendChild(document.createTextNode(student.firstName));
  locationCell.appendChild(document.createTextNode(student.location));
});

document.body.appendChild(table);
