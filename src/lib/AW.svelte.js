import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('makerspace-epcc');

const account = new Account(client);

export async function createAccount(id, email, pwd, name) {
    const result = await account.create
        ({
            userId: id,
            email: email,
            password: pwd,
            name: name
        });

    console.log(result);
}