import express from 'express'
import { MongoClient } from 'mongodb'
import ViteExpress from 'vite-express'

const CONNECTION_STRING = 'mongodb+srv://emma489:ujz0Vc6PI94aCvre@mernstackblogposts.h4wk7.mongodb.net/?retryWrites=true&w=majority&appName=MERNStackBlogposts'

const client = new MongoClient(CONNECTION_STRING);
const database = client.db('Blogposts');

const server = express();

server.get('/api/posts', async (_, response) => {

    const posts = database.collection('Posts');
    const postData = await posts.find().toArray();

    const filteredPostData = postData.map( post => {
        return {
            title: post.title,
            author: post.author,
            content: post.content,
            tags: post.tags,
            date: post.date
        }
    });

    response.json(filteredPostData);
});

server.get('/api/posts/:id:', async (_, response) => {

    const posts = database.collection('Posts');
    const postData = await posts.find().toArray();

    const filteredPostData = postData.map( post => {
        return {
            id: post._id
        }
    });

    response.json(filteredPostData);
});

ViteExpress.listen(server, 3000, () => console.log("Server is running at http://localhost:3000"));