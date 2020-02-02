
let getMenus = (result) => {

    let menus = [];
    for (let i = 0; i < result.menuItems.length; i++) {
        menus.push({
            itemId: parseInt(result.menuItems[i].itemId),
            itemImgUrl: result.menuItems[i].itemImgUrl,
            itemName: result.menuItems[i].itemName,
            itemUnitPrice: parseFloat(result.menuItems[i].itemUnitPrice),
            itemAvailability: Boolean(result.menuItems[i].itemAvailability)
        });
    }

    return menus;

}

let getMenu = (result) => {
    return ({
        itemId: parseInt(result.itemId),
        itemImgUrl: result.itemImgUrl,
        itemName: result.itemName,
        itemUnitPrice: parseFloat(result.itemUnitPrice),
        itemAvailability: Boolean(result.itemAvailability)
    });
}

let resCart = (result)=>{
    let cart = [];
    result.cartItems.forEach(element => {
        let items = [];
        element.items.forEach(item=>{
            items.push({
                itemId:item.itemId,
                itemName:item.itemName,
                itemUnitPrice:item.itemUnitPrice,
                itemQty:item.itemQty
            });
        });
        cart.push({
            vendorId:element.vendorId,
            vendorName:element.vendorName,
            items:items
        });
    });
    
    return(
        {
            userId:result.userId,
            cartItems:cart
        }
    );
}

let getOrders = (result)=>{
    let cart = [];
    result.orderItems.forEach(element => {
        let items = [];
        element.items.forEach(item=>{
            items.push({
                itemId:item.itemId,
                itemName:item.itemName,
                itemUnitPrice:item.itemUnitPrice,
                itemQty:item.itemQty
            });
        });
        cart.push({
            vendorId:element.vendorId,
            vendorName:element.vendorName,
            items:items
        });
    });
    
    return({
        userId:result.userId,
        orderId:result.orderId,
        orderItems:cart,
        orderTotal:result.orderTotal,
        orderReady:result.orderReady,
        orderDelivered:result.orderDelivered,
        orderRating:result.orderRating,
        orderedOn:new Date(result.createdAt)
    });
}

let getAllOrders = (result) =>{
    let orders = [];
    result.forEach(order=>{
        orders.push(getOrders(order));
    });
    return(orders);
}

let getAllCurrentOrders = (result) =>{
    let orders = [];
    result.forEach(order=>{
        console.log(order.orderDelivered);
        if(!order.orderDelivered){
            orders.push(getOrders(order));
        }
        else{
            console.log("in true");
        }
        
    });
    return(orders);
}

module.exports = {
    getMenus: getMenus,
    getMenu: getMenu,
    resCart:resCart,
    getOrders:getOrders,
    getAllOrders:getAllOrders,
    getAllCurrentOrders:getAllCurrentOrders
}