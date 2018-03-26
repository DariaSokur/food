class CommonOrderController {
    get(req, res) {
        console.log('got request for common order');
        res.json([]);
    };
    add(req, res) {
        const data = req.body;
        data.id = Date.now();
        console.log('got request for adding new common order', data);
        res.json(data);
    };
    update(req, res) {
        const data = req.body;
        console.log('got request for updating common order', data);
        res.json(data);
    };
}
module.exports = new CommonOrderController;
