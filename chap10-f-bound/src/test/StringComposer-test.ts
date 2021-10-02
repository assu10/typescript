import {StringComposer} from "../classes/StringComposer";

const value = new StringComposer('hello')
                .add(' ') // hello
                .add('world')   // hello world
                .multiply(3)    // hello worldhello worldhello world
                .value();
console.log(value);