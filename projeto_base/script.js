function enviar() {
  let curso = document.getElementById("curso").value;
  let turma = document.getElementById("turma").value;
  let disciplina = document.getElementById("disciplina").value;
  let professor = document.getElementById("professor").value;
  let data = document.getElementById("data").value;
  alert(
    "Curso: " +
      curso +
      "\nTurma: " +
      turma +
      "\nDisciplina: " +
      disciplina +
      "\nProfessor(a): " +
      professor +
      "\nData: " +
      data
  );
}