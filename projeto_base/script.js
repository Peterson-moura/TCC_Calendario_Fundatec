//const { url } = require("inspector");

function fazPost(url, bory) {
  console.log("Body=", body);
}

function cadastraUsuario() {
  event.preventDefault;
  let url = "http://localhost:4000/calender";
  let curso = document.getElementById("curso").value;
  let turma = document.getElementById("turma").value;
  let disciplina = document.getElementById("disciplina").value
  let professor = document.getElementById("professor").value
  let data = document.getElementById("data").value

  console.log(curso);
  console.log(turma);

  body = {
    curso: curso,
    turma: turma,
    disciplina: disciplina,
    professor: professor,
    data:data
  };

  fazPost(url, body);
}

/*
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
*/
