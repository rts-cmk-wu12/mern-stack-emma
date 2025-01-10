import express from 'express'
import { MongoClient } from 'mongodb'
import ViteExpress from 'vite-express'

const PORT = 3000;

const MONGO_USER = 'emma489';
const MONGO_PASSWORD = 'ujz0Vc6PI94aCvre';
const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@mernstackblogposts.h4wk7.mongodb.net/?retryWrites=true&w=majority&appName=MERNStackBlogposts`;

const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db('Blogposts');
const server = express();

server.use(express.json());

server.get('/api/posts/latest', async (_, response) => {

    const LIMIT = 10;
    const postData = await database.collection('Posts').find().sort({_id: -1}).limit(LIMIT).toArray();

    const filteredPostData = postData.map( post => {
        return {
            id: post._id,
            title: post.title,
            author: post.author,
            content: post.content,
            tags: post.tags,
            date: post.date
        }
    });

    response.json(filteredPostData);
});

server.get('/post/:id', async (request, response) => {

    const query = { _id: request.params.id };
    const options = {
        projection: {
            title: 1,
            author: 1,
            content: 1,
            tags: 1,
            date: 1
        }
    }
    console.log( await database.collection('Posts').findOne(query, options) );  
    response.send( await database.collection('Posts').findOne(query, options) );
});

server.post('/api/posts', async (request, response) => {
    
    const data = request.body;
    database.collection('Posts').insertOne(data);
});

ViteExpress.listen(server, PORT, () => console.log(`Server is running at http://localhost:${PORT}`));