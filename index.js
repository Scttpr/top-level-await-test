const asyncFunc = async () => {
    return true;
}

const isTrue = await asyncFunc();

console.log(isTrue);
