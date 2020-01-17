# easyFood Database Schema

> Total DBs:2
##### Total Tables:8

## MySQL
  * admins  `adminId,adminEmail,adminPass,adminFullName,adminPhone,adminOrg,adminOrgId`
  * users   `userId,userEmail,userPass,userFullName,userPhone,userOrg,userOrgId`
  * vendors   `vendorId,vendorEmail,vendorPass,vendorFullName,vendorPhone,vendorOrg,vendorOrgId`
  * users_wallet   `userId,userBalannce`
  * vendors_ratings   `vendorId,vendorFullName,vendorRating`
  
## MongoDB
  * menu_items
  * cart_items
  * orders
