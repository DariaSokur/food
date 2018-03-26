class OrdersController {
    list(req, res) {
        console.log('got request for list of orders');
        res.json([]);
    };
    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one order with id ' + id);
        res.json({
            id
        });
    };
    add(req, res) {
        const data = req.body;
        data.id = Date.now();
        console.log('got request for adding new order', data);
        res.json(data);
    };
    update(req, res) {
        const data = req.body;
        console.log('got request for updating order', data);
        res.json(data);
    };
    delete(req, res) {
        const id = Number(req.params.id);
        res.json({id});
        console.log('got request for deletion order with id ' + id);
    }
}
module.exports = new OrdersController;