const response = require('./../Libs/response');
const mongoose = require('mongoose');
const reformat = require('../Libs/reformat');
const userCartSchema = mongoose.model("userCart");
const orderSchema = mongoose.model("order");
const shortid = require('shortid');
const request = require('request');

let addCartItems = (req, res) => {
    let data = req.body;
    try {
        var userId = parseInt(data.userId);
    } catch (error) {

    }
    let cart = [];

    req.body.cartItems.forEach(element => {
        let items = [];
        element.items.forEach(item => {
            items.push({
                itemId: item.itemId,
                itemName: item.itemName,
                itemUnitPrice: item.itemUnitPrice,
                itemQty: item.itemQty
            });
        });
        cart.push({
            vendorId: element.vendorId,
            vendorName: element.vendorName,
            items: items

        })
    });

    userCartSchema.findOne({ userId: userId }, (err, result) => {
        if (err) {
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else {
            if (result == null) {
                let user = new userCartSchema({
                    userId: userId,
                    cartItems: cart
                });
                user.save((err, result) => {
                    if (result) {
                        res.send(result);
                    }
                    if (err) {
                        res.send(err);
                    }
                });
            }
            else {
                userCartSchema.findOneAndUpdate({ userId: userId }, { $set: { cartItems: cart } }, { new: true }, (err, result) => {
                    if (err) {
                        res.send(response.generate(true, "some error occured", 500, null));
                    }
                    else {
                        res.send(response.generate(false, "cart items fetched", 200, reformat.resCart(result)));
                    }
                })
            }
        }

    });
}

let getCart = (req, res) => {
    let userId;
    try {
        userId = parseInt(req.query.userId);
    } catch (error) {
        res.send(response.generate(true, "userId should be a number", 400, null));
    }
    userCartSchema.findOne({ userId: userId }, (err, result) => {
        if (err) {
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else {
            if (result == null) {
                res.send(response.generate(false, "no user with given id", 200, null));
            }
            else {
                res.send(response.generate(false, "cart fetch successful", 200, reformat.resCart(result)));
            }
        }

    })
}

let placeOrder = (req, res) => {
    let userId;
    try {
        userId = parseInt(req.body.userId);
    } catch (error) {
        res.send(response.generate(true, "userId should be a number", 200, null));
    }
    let cart = req.body.cart;
    console.log(cart);
    let money = 0.0;
    cart.forEach((element => {
        element.items.forEach(item => {
            console.log(item.itemUnitPrice + " " + item.itemQty);
            money = money + (parseFloat(item.itemUnitPrice) * parseInt(item.itemQty));
        });
    }));
    console.log(money);
    //code for updating the balance
    let balance;
    let walletRequest = 'https://easyfoodcdac.herokuapp.com/users/wallet?' + 'id=' + userId;
    request.get(walletRequest, (err, httpResponse, body) => {
        if (err) {
            console.log(err);
        }
        else {
            if (body) {
                console.log(body);
                let resp = JSON.parse(body);
                balance = resp.result.balance;
                console.log(balance);
                if (balance > money) {
                    request.post({ url: 'https://easyfoodcdac.herokuapp.com/users/wallet', form: { id: userId, balance: (balance - money) } }, (err, httpResponse, body) => {

                        if (err) {
                            console.log(err);

                        }
                        else {
                            if (body) {
                                let resp = JSON.parse(body);
                                if (resp.success == true) {
                                    let neworder = new orderSchema(
                                        {
                                            userId: userId,
                                            orderItems: cart,
                                            orderTotal: money
                                        }
                                    );
                                    neworder.save((err, result) => {
                                        if (err) {
                                            console.log(err);
                                            res.send(response.generate(true, "some error occured", 500, null))
                                        }
                                        else {
                                            res.send(response.generate(false, "order placed successfuly", 200, reformat.getOrders(result)));
                                            console.log(cart[0].vendorId);
                                            let emitString = "/vendor/"+cart[0].vendorId+"/orderupdate";
                                            //console.log(res.io);
                                            console.log(emitString);
                                            res.io.emit(emitString);
                                        }
                                    })
                                }

                            }
                        }


                    });
                }
                else{
                    res.send(response.generate(true,"Insufficient balance",200,null));
                }

            }
        }
    });

    // res.send(response.generate(true, "dummy", 200, null));
   

}

//api to get orders
let getOrders = (req,res)=>{
    let userId = req.query.userId;
    //let vendorId = req.body.vendorId;
    orderSchema.find({userId:userId},(err,result)=>{
        if(err){
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else{
            console.log(result);
            if(result==null){
                res.send(response.generate(true, "no user with given id", 404, null));
            }
            else{
                res.send(response.generate(false,"user orders fetched",200,reformat.getAllOrders(result)));
            }
        }
    });
}
let getOrderById = (req,res)=>{
    let oid;
    try {
        console.log(req.query.orderId)
        oid = parseInt(req.query.orderId);
        console.log(oid);
    } catch (error) {
        res.send(response.generate(true,"orderId should be a number",400,null));
    }
    orderSchema.findOne({orderId:oid},(err,result)=>{
        if(err){
            console.log(err);
            res.send(response.generate(true,"some error occured",500,null));
        }
        else{
            if(result==null){
                res.send(response.generate(true,"Invalid order Id",400,null));
            }
            else{
                res.send(response.generate(false,"fetched order details",200,reformat.getOrders(result)));
            }
        }
    });
}
module.exports = {
    addCartItems: addCartItems,
    getCart: getCart,
    placeOrder: placeOrder,
    getOrders:getOrders,
    getOrderById:getOrderById
}