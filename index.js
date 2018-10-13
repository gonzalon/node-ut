const math = require("./math")

const calculate = (req, res) => {

    const {a} = req.body;
    const {b} = req.body;

    math.sum(a, b).then( (r) => {

        math.log(r);

        math.substract(a, b).then( (rs) => {
            math.log(rs);

            const body = {sum: r, substract: rs};
            res.status(200).send(body);
        })
    });

};

const req = {body: {a: 10, b: 5}};
const res = {
    status: (v) => res,
    send: (b) => console.log(b)

}
calculate(req, res);

module.exports = calculate;