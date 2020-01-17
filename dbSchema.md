# easyFood Database Schema

> Total DBs:2

##### Total Tables:8

## MySQL Tables

- admins `adminId,adminEmail,adminPass,adminFullName,adminPhone,adminOrg,adminOrgId`
- users `userId,userEmail,userPass,userFullName,userPhone,userOrg,userOrgId`
- vendors `vendorId,vendorEmail,vendorPass,vendorFullName,vendorPhone,vendorOrg,vendorOrgId`
- users_wallet `userId,userBalannce`
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
               {itemId:2,itemImgUrl:"http://easyFood.com/static/itemImages/samosa.jpg",itemName"Samosa",itemUnitPrice:60,itemAvailability:true}]
 }
```

- cart_items `To Store Cart Items of Each Users based on userID`

```
userId(001){
    cartItems: []
 }
```

- orders `To Store Order History of Each Users`

```

```
