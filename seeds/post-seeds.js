const { Post } = require('../models');

const postData = [
    {
        title: "World of Warcraft is LIVE!",
        post_content: "Guys there is a sweet new game coming out that we should all get on and play!",
        user_id: 3
    },
    {
        title: "School is getting new computers!",
        post_content: "School is upgrading the computers in the libary. I bet we can get some gaming in!",
        user_id: 1
    },
    {
        title: "Trapper Keeper 3000",
        post_content: "Just picked up the Trapper Keeper 3000. This thing is amazing. I can take notes and track my daily activites. It also has a calculator and a built in Ipad!",
        user_id: 2

    },
    {
        title: "Social Media App",
        post_content: "Just made an account on Facebook. Scott keeps poking me tho! Come join!",
        user_id: 5
    },
    {
        title: "Tech Central",
        post_content: "New website is up and running! Come make an account and lets talk TECH!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;