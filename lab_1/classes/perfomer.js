class Perfomer {
    constructor(perfName, position) {
        this.perfName = perfName;
        this.position = position;
    }
}

let Perfomers = [];
const addPerfomer = (perfName, position) => {
    return Perfomers.push( new Perfomer(perfName, position));
};

const patchPerfomer = (indexArr, perfName, position) => {
    Perfomers[indexArr].perfName = perfName;
    Perfomers[indexArr].position = position;
};

const deletePerfomer = (indexArr) => {
    if (indexArr === 0) {
        Perfomers.splice(indexArr, indexArr + 1);
    } else {
        Perfomers.splice(indexArr, indexArr);
    }
};

addPerfomer('Colian', 'Engineer');
addPerfomer('Nick', 'Tester');
addPerfomer('Jan', 'Teamlead');
patchPerfomer(1, 'Cool', 'FIN');
deletePerfomer(2);

console.log(Perfomers);

module.exports = Perfomer;