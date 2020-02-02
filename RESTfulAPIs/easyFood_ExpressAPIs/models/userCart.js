const mongoose = require('mongoose');

const userCartSchema = mongoose.Schema(
    {
        userId: {
            type: Number,
            default: 0,
            unique: true,
            require: true
        },
        cartItems: [
            {
                vendorId: {
                    type: Number,
                    default: 0,
                    
                    require: true
                },
                vendorName: {
                    type: String,
                    default: '',
                    require: true
                },
                items: [
                    {
                        itemId: {
                            type: Number,
                            default: 0,
                            require: true
                        },
                        itemName: {
                            type: String,
                            default: 'tiffin',
                            require: true
                        },
                        itemUnitPrice: {
                            type: Number,
                            default: 0.0,
                            require: true
                        },
                        itemQty: {
                            type: Number,
                            default: 0,
                            require: true
                        }
                    }
                ]
            }
        ]
    }
);

mongoose.model("userCart",userCartSchema);
