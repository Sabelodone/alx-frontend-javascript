// task_10/js/main.ts

import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

const cTeacher: Teacher = { firstName: 'John', experienceTeachingC: 10 };

const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log('C++:', cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);
console.log('Java:', java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);
console.log('React:', react.getRequirements());
console.log(react.getAvailableTeacher());
