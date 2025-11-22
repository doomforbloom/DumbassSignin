import { Client, Account, TablesDB } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('makerspace-epcc')
    .setDevKey('a468aaf0102d3298c401e2d664f725a818b6515381404760a0bd8a5bff9628ec2e4bd0da2f862077d9f4730c7cbbcf2bbc115f9cccdf2a1d7112a95cdf7397c0d7be8a24f0ae1d0da22c76e1b60972efd6d8dc353fb43134af2e63d81c95a5fe3f51bd2bd6c529e921e04e8986ec58498e5d745b6b2a083e75c94455e6592ec4');

export const account = new Account(client); // object used to create accounts
export const tablesDB = new TablesDB(client); // object used to manipulate a database