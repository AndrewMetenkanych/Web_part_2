class Perfomer {
    constructor(perfName, position) {
        this.perfName = perfName;
        this.position = position;
    }
}
class Project {
    constructor(projName, owner, performer) {
        this.projName = projName;
        this.owner = owner;
        this.performer = performer;
    }
}

let Projects = [];
const addProject = (projName, owner, performer) => {
    return Projects.push(new Project(projName, owner, performer));
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

const findPerfProj = (name) => {
    const res = Projects.filter(el => el.performer.perfName === name);
    console.log(res);
};


let perf = new Perfomer('Colian', 'Engineer');

addProject('IT', 'Dan', perf);
addProject('Dungeon', 'Pja', perf);
addProject('Bull', 'HUGO', perf);

patchProject(1, 'Cool', 'Dog');

deleteProject(2);

findPerfProj('Colian')


module.exports = Project;