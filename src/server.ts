import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express, { Application } from "express";
import resolvers from "./resolvers";
import { readFileSync } from "fs";
import path from "path";
import bodyParser from "body-parser";

// import graphql schema
const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "utf-8");

async function main() {
  try {
    // port
    const PORT = process.env.PORT || 5000;

    // create express app
    const app = express() as Application;

    app.use(bodyParser.json());

    // create apollo server
    const server = new ApolloServer({ resolvers, typeDefs });
    await server.start();

    app.use("/graphql", expressMiddleware(server));
    // listen server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    throw err;
  }
}

main().then();
