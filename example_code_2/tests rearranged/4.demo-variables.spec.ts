import { test } from '@playwright/test';

test('demo generic type variables', async () => {
    let msg: string = "hello world";
    console.log(msg);

    let counter: number = 10;
    console.log(counter);

    let isMale: boolean = true;
    console.log(isMale);

    const welcomeMsg: string = "Merry Christmas";
    console.log(welcomeMsg);
});

test('demo variable declaration', async () => {
    let msg: string = "hello world";
    console.log(msg);

    msg = "hello boy";
    console.log(msg);

    const welcomeMsg: string = "Hello !";
    console.log(welcomeMsg);
});

test('demo variable array', async () => {
    let fruits: string[] = ['banana', 'orange', 'apple'];
    console.log(fruits);
    console.log(fruits[0]);
    console.log(fruits[2]);

    let grade: number[] = [50, 60, 80, 100];

    let myMsg:any = 'banana';
    myMsg = 10;
    console.log(myMsg);

    let anydemo: any[] = [1, 'sdfsdf', false];

});



