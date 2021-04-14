class Project {
    constructor(projName, owner) {
        this.projName = projName;
        this.owner = owner;
    }
}

let Projects = [];
const addProject = (projName, owner) => {
    return Projects.push(new Project(projName, owner));
};

const patchProject = (indexArr, projName, owner) => {
    Projects[indexArr].projName = projName;
    Projects[indexArr].owner = owner; 
};

const deleteProject = (indexArr) => {
    if (indexArr === 0) {
        Projects.splice(indexArr, indexArr + 1);
    } else {
        Projects.splice(indexArr, indexArr);
    } 
};

addProject('IT', 'Dan');
addProject('Dungeon', 'Pja');
addProject('Bull', 'HUGO');
patchProject(1, 'Cool', 'Dog');
deleteProject(2);

console.log(Projects);

module.exports = Project;