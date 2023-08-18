import 'dotenv/config'
import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import resolvers from './resolvers.mjs'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import typeDefs from './schema.mjs'

const app = express()
const httpServer = http.createServer(app);
const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginDrainHttpServer({ httpServer })] })
await server.start();

app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);