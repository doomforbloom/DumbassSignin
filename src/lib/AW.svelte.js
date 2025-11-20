import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('makerspace-epcc');

export const account = new Account(client);