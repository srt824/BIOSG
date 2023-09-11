

export let dbUsuarios = [
    {
        id: 1,
        user: "Juan Manuel", 
        pass: "123456",
        admin: true,
    },
];

JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dbUsuarios));