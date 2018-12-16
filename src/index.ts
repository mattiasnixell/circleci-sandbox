import { sayHello } from './say-hello';

const sayHelloTo = process.env.SAY_HELLO_TO || '';

sayHello(sayHelloTo);
