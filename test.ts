const monkey = async () => {
    console.log('hello');
};

const printIt = async () => {
    await monkey();
};

printIt();

let hello;
