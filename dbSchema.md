# easyFood Database Schema

> Total DBs:2

##### Total Tables:8

## MySQL Tables

- admins `adminId,adminEmail,adminPass,adminFullName,adminPhone,adminOrg,adminOrgId`
- users `userId,userEmail,userPass,userFullName,userPhone,userOrg,userOrgId`
- vendors `vendorId,vendorEmail,vendorPass,vendorFullName,vendorPhone,vendorOrg,vendorOrgId`
- users_wallet `userId,userBalance`
- vendors_ratings `vendorId,vendorFullName,vendorRating`

## MongoDB Tables

- menu_items `To Store Menu Items of Each Vendors based on vendorId`

```
vendorId(001){
    menuItems:[{itemId:1,itemImgUrl:"http://easyFood.com/static/itemImages/poha.jpg",itemName"Poha",itemUnitPrice:20,itemAvailability:true},
               {itemId:2,itemImgUrl:"http://easyFood.com/static/itemImages/idli.jpg",itemName"Idli",itemUnitPrice:30,itemAvailability:true},
               {itemId:2,itemImgUrl:"http://easyFood.com/static/itemImages/dosa.jpg",itemName"MasalaDosa",itemUnitPrice:50,itemAvailability:true}]
 }
 vendorId(002){
    menuItems:[{itemId:1,itemImgUrl:"http://easyFood.com/static/itemImages/chai.jpg",itemName"Chai",itemUnitPrice:20,itemAvailability:true},
               {itemId:2,itemImgUrl:"http://easyFood.com/static/itemImages/coffee.jpg",itemName"Coffee",itemUnitPrice:30,itemAvailability:true},
               {itemId:2,itemImgUrl:"http://easyFood.com/static/itemImages/samosa.jpg",itemName"Samosa",itemUnitPrice:20,itemAvailability:true}]
 }
```

- cart_items `To Store Cart Items of Each Users based on userID`

```
userId(001){
    cartItems: [{vendorId:001,
                vendorName:AbcVend,
                Items:[{itemId:1,itemName"Poha",itemUnitPrice:20,itemQty:2},
                        {itemId:2,itemName"Idli",itemUnitPrice:30,itemQty:1}]
                },
                {vendorId:002,
                vendorName:BcdVend,
                Items:[{itemId:1,itemName"Chai",itemUnitPrice:20,itemQty:2},
                        {itemId:3,itemName"Samosa",itemUnitPrice:20,itemQty:3}]
                }]
 }
 userId(002){
    cartItems: [{vendorId:001,
                vendorName:AbcVend,
                Items:[{itemId:1,itemName"Poha",itemUnitPrice:20,itemQty:2},
                        {itemId:2,itemName"Idli",itemUnitPrice:30,itemQty:1}]
                },
                {vendorId:002,
                vendorName:BcdVend,
                Items:[{itemId:1,itemName"Chai",itemUnitPrice:20,itemQty:2},
                        {itemId:3,itemName"Samosa",itemUnitPrice:20,itemQty:3}]
                }]
 }
```

- orders `To Store Order History of Each Users based on userID`

```
userId(001){
    orderId:001,
    orderItems: [{vendorId:001,
                vendorName:AbcVend,
                Items:[{itemId:1,itemName"Poha",itemUnitPrice:20,itemQty:2},
                        {itemId:2,itemName"Idli",itemUnitPrice:30,itemQty:1}]
                },
                {vendorId:002,
                vendorName:BcdVend,
                Items:[{itemId:1,itemName"Chai",itemUnitPrice:20,itemQty:2},
                        {itemId:3,itemName"Samosa",itemUnitPrice:20,itemQty:3}]
                }],
    orderTotal:170,
    orderReady:false,
    orderDelivered:false
    orderRating:0
 },
 userId(002){
    orderId:001,
    orderItems: [{vendorId:001,
                vendorName:AbcVend,
                Items:[{itemId:1,itemName"Poha",itemUnitPrice:20,itemQty:2},
                        {itemId:2,itemName"Idli",itemUnitPrice:30,itemQty:1}]
                },
                {vendorId:002,
                vendorName:BcdVend,
                Items:[{itemId:1,itemName"Chai",itemUnitPrice:20,itemQty:2},
                        {itemId:3,itemName"Samosa",itemUnitPrice:20,itemQty:3}]
                }],
    orderTotal:170,
    orderReady:true,
    orderDelivered:true
    orderRating:4
 }
```
