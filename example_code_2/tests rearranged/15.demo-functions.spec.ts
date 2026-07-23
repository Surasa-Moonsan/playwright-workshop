import { test } from '@playwright/test';

test('basic hello world function', async () => {
    helloWorld('John');
});

test('function with return value', async () => {
    const result = multiplyByTwo(4);
    console.log(result);
});

function helloWorld(username: string) {
    console.log('Hello world ' + username);
}

function multiplyByTwo(input: number) {
    return input * 2;
}