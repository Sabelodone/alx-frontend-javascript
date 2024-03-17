/* eslint-disable */
// Function to update student grades by city
function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students based on the given city
    const studentsInCity = students.filter((student) => student.location === city);
    
    // Map through students in the city
    return studentsInCity.map((student) => {
      // Filter new grades based on the student id
      const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);
      
      // If the student has a new grade available
      if (filteredGrades.length > 0) {
        return {
          ...student,
          grade: filteredGrades[0].grade, // Update the grade
        };
      }
      // If no new grade is available for the student
      return {
        ...student,
        grade: 'N/A', // Set grade as N/A
      };
    });
}

// Export the function
export default updateStudentGradeByCity;
