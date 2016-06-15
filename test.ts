const monkey = async () => {
    console.log('hello');
};

const print = async () => {
    await monkey();
};

print();
