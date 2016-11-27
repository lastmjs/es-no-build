import {TestImport} from './test-import';

TestImport.test();

const monkey = async () => {
    console.log('hello');
};

const printIt = async () => {
    await monkey();
};

printIt();

let hello: monkey = {
    banana: 5
};

interface monkey {
    readonly banana: boolean;
}

hello.banana;
