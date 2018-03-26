class MenuController {
    list(req, res) {
        console.log('got request for list of menu items');
        res.json([]);
    };
    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one menu item with id ' + id);
        res.json({
            id
        });
    };
    add(req, res) {
        const data = req.body;
        data.id = Date.now();
        console.log('got request for adding new menu item', data);
        res.json(data);
    };
    update(req, res) {
        const data = req.body;
        console.log('got request for updating menu item', data);
        res.json(data);
    };
    delete(req, res) {
        const id = Number(req.params.id);
        res.json({id});
        console.log('got request for deletion menu item with id ' + id);
    }
}
module.exports = new MenuController;