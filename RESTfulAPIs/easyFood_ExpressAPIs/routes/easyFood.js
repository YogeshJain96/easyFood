let vendorsControler = require('../controllers/vendorsMenuCotroller');
let userCartController = require('../controllers/userCartController');
let orderController = require('../controllers/ordersController');
let setRoute = (app)=>{
    app.post("/vendors/addMenus",vendorsControler.addMenuItems);
    app.get("/vendors/getMenus",vendorsControler.getMenuItems);
    app.post("/vendors/updateMenu",vendorsControler.updateMenuItem);
    app.post("/users/updateCart",userCartController.addCartItems);
    app.get("/users/getCart",userCartController.getCart);
    app.post("/users/placeOrder",userCartController.placeOrder);
    app.get("/users/order",userCartController.getOrders);
    app.get("/admin/orders",orderController.getOrders);
    app.get("/admin/today",orderController.getTodayOrders);
    app.get("/admin/byrange",orderController.getOrdersByRange);
    app.post("/vendor/updateorder",vendorsControler.orderSatusUpdate);
    app.get("/vendor/orders",vendorsControler.getOrders);
    app.get("/vendor/currentorders",vendorsControler.getCurrentOrders);
    app.post("/user/orderrating",orderController.updateOrderRating);
    app.get("/user/orderbyid",userCartController.getOrderById);
}

module.exports = {
    setRoute:setRoute
}