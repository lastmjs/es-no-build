const monkey = async () => {
    console.log('hello');
};

const printIt = async () => {
    await monkey();
};

printIt();

let hello: monkey;

hello.banana = 5;

interface monkey {
    readonly banana: boolean;
}
