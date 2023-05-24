import sayHello from "../utlis/helloworld.mjs";
import assert from 'assert';

it("Test Hello World", ()=>{

    const hello = sayHello();

    assert.equal(hello,"hello");
});