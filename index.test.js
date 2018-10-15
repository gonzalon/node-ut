global.td = require("testdouble");
require("testdouble-jest")(td, jest)


const res = {
    status: (v) => res,
    send: (b) => console.log(b)

}

describe("test for index", () => {

    it("should calculate ok", ()=> {
        
        const math = td.replace("./math");
        td.when(math.sum(10, 5)).thenResolve(15);
        td.when(math.substract(10, 5)).thenResolve(5);

        var index = require("./index");

        const req = {body: { a: 10, b: 5}};

        index(req, res);

        console.log(td.explain(sum)); // call count 1
        console.log(td.explain(substract)); // call count 0 - Why?! 
    });
    
});
