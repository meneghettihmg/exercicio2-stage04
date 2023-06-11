/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: 'Alex',
    n1: 8,
    n2: 6
  },
  {
    name: 'Sandra',
    n1: 7,
    n2: 5
  },
  {
    name: 'Valéria',
    n1: 8,
    n2: 9
  },
  {
    name: 'Eloir',
    n1: 5,
    n2: 4
  }
]

function printStundentsAverage(student) {
  if ((student.n1 + student.n2) / 2 >= 7) {
    alert(`A média do aluno ${student.name} foi: ${
      (student.n1 + student.n2) / 2
    }
    Parabéns ${student.name}, você foi aprovado no concurso! `)
  } else {
    alert(`A média do aluno ${student.name} foi: ${
      (student.n1 + student.n2) / 2
    }
    Não foi dessa vez ${student.name}, tente novamente!`)
  }
}

for (let student of students) {
  printStundentsAverage(student)
}
