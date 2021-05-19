//3 task
const factorial_func = (num) => {
    if (num == 1 || num == 0) {
        return 1;
    } else {
        return num * factorial_func(num - 1);
    }
};

module.exports = factorial_func ;