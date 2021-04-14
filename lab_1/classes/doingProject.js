
class doingProject {
    constructor(doProjName) {
      this.doProjName = doProjName;
    }
}
let DoingProjects = [];
const addProject = (doProjName) => {
    return DoingProjects.push(new doingProject(doProjName));
};

const patchProject = (indexArr, doProjName) => {
    DoingProjects[indexArr].doProjName = doProjName;
};

const deleteProject = (indexArr) => {
    if (indexArr === 0) {
        DoingProjects.splice(indexArr, indexArr + 1);
    } else {
        DoingProjects.splice(indexArr, indexArr);
    } 
};

addProject('IT');
addProject('Lol');
addProject('Bull');
patchProject(1, 'Cool');
deleteProject(2);

console.log(DoingProjects);

module.exports = doingProject;