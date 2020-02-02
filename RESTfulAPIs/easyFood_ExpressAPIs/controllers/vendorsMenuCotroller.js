const response = require('./../Libs/response');
const mongoose = require('mongoose');
const reformat = require('../Libs/reformat');
const venderMenuSchema = mongoose.model("vendorMenu");
const orderSchema = mongoose.model("order");




let addMenuItems = (req, res) => {
    console.log(req.body);
    let items = []
    req.body.menuItems.forEach(element => {
        items.push({
            itemId: parseInt(element.itemId),
            itemImgUrl: element.itemImgUrl,
            itemName: element.itemName,
            itemUnitPrice: parseFloat(element.itemUnitPrice),
            itemAvailability: Boolean(element.itemAvailability)


        });
    });
    console.log(items);
    venderMenuSchema.findOne({ vendorId: parseInt(req.body.vendorId) }, (err, result) => {
        //console.log("inside find one");
        if (err) {
            console.log("Error" + err);
        }
        if (result == null) {
            console.log("in vendor new");
            let vendor = new venderMenuSchema({
                vendorId: parseInt(req.body.vendorId),
                menuItems: items
            });
            vendor.save((err, obj) => {
                if (obj) {

                    res.send(response.generate(false, "menu items updated", 200, reformat.getMenus(obj)));
                }

            });

        }
        else {
            console.log("inside push");
            // for (titem of items) {
            //     let isValid = true;
            //     for (item of result.menuItems) {
            //         if (item.itemId == titem.itemId) {
            //             isValid = false;
            //         }
            //     }
            //     if (isValid) {
            //         result.menuItems.push(titem);
            //     }
            // }
            
            result.menuItems = items;
            console.log(result.menuItems);
            result.save( (err, tresult) => {
                if (err) {
                    console.log(err);

                    res.send(response.generate(true, "some error occured", 500, null));
                }
                else {


                    if (tresult != null) {
                        res.send(response.generate(false, "menu items updated", 200, reformat.getMenus(tresult)));
                        console.log(tresult);
                    }
                }
            });
        }
        

    });


    //res.send(req.body);
}

let getMenuItems = (req, res) => {


    console.log("in get menus");
    let tid;

    console.log(req.query.id);
    tid = parseInt(req.query.id);
    if (isNaN(tid)) {
        res.send(response.generate(true, "Id should be a number", 422, null));
    }
    else {
        venderMenuSchema.findOne({ vendorId: tid }, (err, result) => {
            if (err) {
                res.send(response.generate(true, "some error occured", 500, null));
            }
            else {
                if (result == null) {
                    res.send(response.generate(false, "No vendor with given id", 200, null));
                }
                else {
                    res.send(response.generate(false, "menu fetch successful", 200, reformat.getMenus(result)));
                }
            }
        });
    }

}

let updateMenuItem = (req, res) => {
    console.log("In update menu item");
    let tvid = parseInt(req.body.vendorId);
    let tmid = parseInt(req.body.item.itemId);
    console.log(tmid);
    if (isNaN(tvid) || isNaN(tmid)) {
        res.send(response.generate(true, "Id should be a number", 422, null));
    }
    else {
        venderMenuSchema.findOne({ vendorId: tvid }, (err, result) => {

            if (err) {
                console.log(err);
                res.send(response.generate(true, "some error occured", 500, null));
            }
            else {
                if (result == null) {
                    res.send(response.generate(false, "No vendor with given id", 200, null));
                }
                else {
                    let found = false;
                    let foundIndex = 0;
                    for (let i = 0; i < result.menuItems.length; i++) {
                        if (result.menuItems[i].itemId == tmid) {
                            foundIndex = i;
                            if (typeof (req.body.item.itemImgUrl) !== "undefined") {
                                console.log("in item url" + typeof (req.body.item.itemImgUrl))
                                result.menuItems[i].itemImgUrl = req.body.item.itemImgUrl;
                            }
                            if (typeof (req.body.item.itemName) !== "undefined") {
                                console.log("in item name")
                                result.menuItems[i].itemName = req.body.item.itemName;
                            }
                            if (typeof (req.body.item.itemUnitPrice) !== "undefined") {
                                console.log("in item unit price")
                                result.menuItems[i].itemUnitPrice = req.body.item.itemUnitPrice;
                            }
                            if (typeof (req.body.item.itemAvailability) !== "undefined") {
                                console.log("in item availability")
                                result.menuItems[i].itemAvailability = req.body.item.itemAvailability;
                            }
                            found = true;
                            break;
                        }

                    }
                    if (!found) {
                        res.send(response.generate(false, "No item with given item id", 200, null));
                    }
                    else {
                        result.save((err, result) => {
                            if (err) {
                                res.send(response.generate(true, "some error occured", 500, null));
                            }
                            else {
                                if (result != null) {
                                    res.send(response.generate(false, "menu update successful", 200, reformat.getMenu(result.menuItems[foundIndex])));
                                }
                            }
                        });
                    }


                }
            }
        });
    }


}

let orderSatusUpdate = (req,res)=>{
    let oId;
    try {
        oId = parseInt(req.body.orderId);
        console.log(oId);
    } catch (error) {
        console.log(error);
        res.send(response.generate(true,"orderid is a number",400,null));
    }
    orderSchema.findOne({orderId:oId},(err,result)=>{
        if(err){
            res.send(response.generate(true,"some error occured",500,null));
        }
        else{
            
            if(result==null){
                res.send(response.generate(true,"invalid orderId",400,null));
            }
            else{
                if (typeof (req.body.orderReady) !== "undefined") {
                    result.orderReady = req.body.orderReady;
                }
                if(typeof (req.body.orderDelivered) !== "undefined"){
                    result.orderDelivered = req.body.orderDelivered;
                }
                result.save((err,result)=>{
                    if(err){
                        res.send(response.generate(true,"some error occured",500,null));
                    }
                    else{
                        res.send(response.generate(false,"order updated",200,reformat.getOrders(result)));
                        //should emit event
                        let emitString = "/users/"+result.userId+"/updatestatus";
                        res.io.emit(emitString,JSON.stringify(result));
                    }
                })
            }
        }
    });
}

let getOrders = (req,res)=>{

    let vid;
    try {
        vid = req.query.vendorId;
    } catch (error) {
        res.send(response.generate(true,"vendorId should be a number",400,null));
    }
    orderSchema.find({'orderItems.vendorId':vid},(err,result)=>{
        if(err){
            console.log(err);
            res.send(response.generate(true,"some error occured",500,null));
        }
        else{
            console.log(result);
            res.send(response.generate(false,"orders fetch successful",200,reformat.getAllOrders(result)));
        }
    })
}

let getCurrentOrders = (req,res)=>{

    let vid;
    try {
        vid = req.query.vendorId;
    } catch (error) {
        res.send(response.generate(true,"vendorId should be a number",400,null));
    }
    
    orderSchema.find({orderDelivered:false,'orderItems.vendorId':vid},(err,result)=>{
        if(err){
            console.log(err);
            res.send(response.generate(true,"some error occured",500,null));
        }
        else{
            //console.log(result);
            res.send(response.generate(false,"orders fetch successful",200,reformat.getAllOrders(result)));
        }
    })
}
module.exports = {
    addMenuItems: addMenuItems,
    getMenuItems: getMenuItems,
    updateMenuItem: updateMenuItem,
    orderSatusUpdate:orderSatusUpdate,
    getOrders:getOrders,
    getCurrentOrders:getCurrentOrders
}