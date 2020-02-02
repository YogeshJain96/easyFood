const response = require('./../Libs/response');
const mongoose = require('mongoose');
const reformat = require('../Libs/reformat');
const orderSchema = mongoose.model("order");
const request = require('request');

//latest orders for admin
let getOrders = (req, res) => {

    orderSchema.find({}).sort({ createdAt: -1 }).limit(10).exec((err, docs) => {
        if (err) {
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else {
            if (docs.length > 0) {
                res.send(response.generate(false, "user orders fetched", 200, reformat.getAllOrders(docs)));
            }
            else {
                res.send(response.generate(false, "no orders yet", 200, null));
            }
        }
    })
}

let getTodayOrders = (req, res) => {

    let tresponse = {};
    let curr_date = new Date();
    orderSchema.countDocuments({ createdAt: { $gte: new Date(curr_date.getUTCFullYear(), curr_date.getUTCMonth(), curr_date.getUTCDate(), 0, 0, 0, 0) } }, (err, result) => {
        if (err) {
            console.log(err);
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else {
            tresponse.orders = result;
            orderSchema.aggregate([
                {
                    $match: { createdAt: { $gte: new Date(curr_date.getUTCFullYear(), curr_date.getUTCMonth(), curr_date.getUTCDate(), 0, 0, 0, 0) } }
                },
                {
                    $group: { _id: null, total: { $sum: "$orderTotal" } }
                }
            ], (err, result) => {
                if (err) {
                    console.log(err);
                    res.send(response.generate(true, "some error occured", 500, null));
                }
                else {
                    console.log(tresponse.orders);
                    console.log(result);
                    tresponse.total = result[0].total;
                    res.send(response.generate(false, "details fetched", 200, tresponse));
                }
            });
        }

    });


}

let getOrdersByRange = (req, res) => {

    let todate = new Date(req.query.to);
    todate.setUTCHours(23);
    todate.setUTCMinutes(59);
    todate.setUTCSeconds(59);
    todate.setUTCMilliseconds(999);
    orderSchema.find({ createdAt: { $gte: new Date(req.query.from), $lte: todate } }, (err, result) => {
        if (err) {
            console.log(err);
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else {
            console.log(result);
            res.send(response.generate(false, "orders fetched", 200, reformat.getAllOrders(result)));
        }
    });
}

let updateOrderRating = (req, res) => {
    let orderId;
    try {
        orderId = parseInt(req.body.orderId);
    } catch (error) {
        res.send(response.generate(true, "some error occured", 500, null));
    }
    orderSchema.findOne({ orderId: orderId }, (err, result) => {
        if (err) {
            console.log(err);
            res.send(response.generate(true, "some error occured", 500, null));
        }
        else {
            if (result == null) {
                res.send(response.generate(false, "no order with given id", 200, null));
            }
            else {
                result.orderRating = req.body.rating;
                result.save((err, result) => {
                    if (err) {
                        console.log(err);
                        res.send(response.generate(true, "some error occured", 500, null));
                    }
                    else {
                        let vendorRatingurl = 'https://easyfoodcdac.herokuapp.com/vendors/rating';
                        let vid = result.orderItems[0].vendorId;
                        orderSchema.aggregate([
                            {
                                $match: { 'orderItems.vendorId':vid }
                            },
                            {
                                $group: { _id: null, rating: { $avg: "$orderRating" } }
                            }
                        ],(err,result)=>{
                            if(err){
                                console.log(err);
                            }
                            else{
                                console.log(result);
                                console.log(Math.round(result[0].rating));
                                let rating = Math.round(result[0].rating);
                                request.post({ url: vendorRatingurl, form: { vendorId: vid,rating:rating } }, function (err, httpResponse, body) { 
                                    if(err){
                                        console.log(err);
                                    } 
                                    else{
                                        console.log(body);
                                        res.send(response.generate(false, "order updated successful", 200, null));
                                    }
                                });
                            }
                        });
                       
                    }
                });

            }
        }
    });
}
module.exports = {
    getOrders: getOrders,
    getTodayOrders: getTodayOrders,
    getOrdersByRange: getOrdersByRange,
    updateOrderRating:updateOrderRating
}