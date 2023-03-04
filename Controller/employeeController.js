const {
    getEmployees: get
} = require("../Services/employee");

async function getEmployees(req, res)
{
    try {
        const employee = await get();

        res.send(employee);
    } catch (exception){
        res.status(500).send("INTERNAL ERROR SERVER");
    }
}

module.exports = {
    getEmployees
}