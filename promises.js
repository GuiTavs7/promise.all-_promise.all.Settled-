// 1) Criando as funções de Promises separadamente

const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "John" },
                { id: 2, name: "Jane" },
            ]);
        }, 2000);
    });
};

const loadRepositories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Erro ao carregar os repositórios!"))
        }, 3000);
    });
};

const loadEvents = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Event 1" },
                { id: 2, name: "Event 2" },
            ]);
        }, 2000);
    });
};

// 2) Criando função de exemplo do método Promise.all() 

const loadAll = async () => {

    try {

        const result = await Promise.all([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ]);

        console.log(result);

    } 
    
    catch (error) {
        console.log(error);
    }

};

loadAll(); 

// 3) Criando função de exemplo do método Promise.allSettled()

const loadAllSettled = async () => {

    try {

        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ]);

        console.log(result);

    }

    catch (error) {
        console.log(error);
    }
    
};

loadAllSettled();