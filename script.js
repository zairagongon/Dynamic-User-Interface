let students = [
    {id: 0, name: 'Mariel De Silva', program: 'Bachelor of Science in Nursing'},
    {id: 1, name: 'Manuel Gomez', program: 'Bachelor of Science in Architecture'},
    {id: 2, name: 'Francis Kenneth Caisip', program: 'Bachelor of Science in Engineering'},
    {id: 3, name: 'Jay Anthony Nunez', program: 'Bachelor of Science in Information Technology'},
    {id: 4, name: 'Zaira Gongon', program: 'Bachelor of Science in Aviation'}
];

const createStudent = (name, program) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = 'Delete';

    article.append(h2);
    article.append(p);
    article.append(button);

    article.classList.add('list-item');

    return article;
}

const studentList = students.map((s) => {
    return createStudent(s.name, s.program);
});

const listContainer = document.querySelector("#listContainer");
studentList.forEach((s) => {
    listContainer.append(s);
})




