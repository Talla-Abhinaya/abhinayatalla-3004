class StudentAnalyzer {
  constructor(students) {
    // Using Map to store student data for efficient lookups
    this.studentMap = new Map(
      students.map(student => [student.name, student.scores])
    );
  }

  calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
  }

  getPassingStudents(threshold = 60) {
    const passingStudents = [];

    // Iterating through Map entries
    for (const [name, scores] of this.studentMap) {
      if (this.calculateAverage(scores) >= threshold) {
        passingStudents.push(name);
      }
    }

    return passingStudents;
  }
}

// Execution
const students = [
  { name: "Amit", scores: [60, 70, 80] },
  { name: "Neha", scores: [40, 50, 55] }
];

const analyzer = new StudentAnalyzer(students);
console.log(analyzer.getPassingStudents()); // Output: ["Amit"]
