const getUsers = () => {
    return [
        {
            id: 1,
            name: "John",
            email: "john@example.com"
        },
        {
            id: 2,
            name: "David",
            email: "david@example.com"
        }
    ];
};

const createUser = (user) => {
    return user;
};

module.exports = {
    getUsers,
    createUser
};

