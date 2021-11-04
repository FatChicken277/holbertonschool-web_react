import { boolean } from 'yargs';

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to works';
  }
}

function createEmployee(salary: string | number): Director | Teacher {
  if (typeof salary == 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: any) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

executeWork(createEmployee(200));

executeWork(createEmployee(1000));
