const { User } = require('../models');

const userData = [
    {
        username: "Eric_Cartman",
        email: "eric_cartman@gmail.com",
        password: "password1"
    },
    {
        username: "Kenny_McCormick",
        email: "kenny_mccormick@gmail.com",
        password: "password2"
    },
    {
        username: "Stan_Marsh",
        email: "stan_marsh@gmail.com",
        password: "password3"
    },
    {
        username: "Kyle_Broflovski",
        email: "kyle_broflovski@gmail.com",
        password: "password4"
    },
    {
        username: "Leopold_Stotch",
        email: "leopold_stotch@gmail.com",
        password: "password5"
    },
    {
        username: "chef",
        email: "chef@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
