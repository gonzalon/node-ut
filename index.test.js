global.td = require("testdouble");
require("testdouble-jest")(td, jest)


const res = {
    status: (v) => res,
    send: (b) => console.log(b)

}

describe("test for index", () => {

    it("should calculate ok", ()=> {
        const sum = td.func("sum");
        td.when(sum(10, 5)).thenResolve(15);

        const substract = td.func("substract");
        td.when(substract(10, 5)).thenResolve(5);

        const log = td.func("log");
        // td.when(log(td.matchers.anything())).then
        const mockMath = {
            sum,
            substract,
            log
        };

        td.replace("./math", mockMath);

        var index = require("./index");

        const req = {body: { a: 10, b: 5}};

        index(req, res);

        console.log(td.explain(sum));
        console.log(td.explain(substract));
        console.log(td.explain(log));

        
    });
});
