import { Client, Account, TablesDB } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('makerspace-epcc');

export const account = new Account(client); // object used to create accounts
export const tablesDB = new TablesDB(client); // object used to manipulate a database