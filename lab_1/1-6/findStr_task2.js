// 2 task
module.exports =  (str1, strObj) => {
    strObj = strObj.split(' ');
    str1 = str1.split(' ');
    //console.log(str1)
    for (let i = 0; i <= str1.length; i++) {
        if (str1[i] == strObj[i] ) {
            console.log(`Task 2\nSuccess :) "${str1}" has been found!`);
            
        } else {
            console.log('Fail :(');
        }
        return strObj;
    }
    
};
