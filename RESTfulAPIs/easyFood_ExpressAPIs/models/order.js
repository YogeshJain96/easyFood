const mongoose = require('mongoose');
const shortid = require('shortid');
const orderSchema = mongoose.Schema({

    userId: {
        type: Number,
        default: 0,
        require: true
    },
    orderId: {
        type: Number,
        default: function(){
            return parseInt(Math.random().toString().substr(2, 5));
        },
        require: true,
        unique: true
    },
    orderItems: [
        {
            vendorId: {
                type: Number,
                default: 0,
                require: true
            },
            vendorName: {
                type: String,
                default: "",
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
    ],
    orderTotal: {
        type: Number,
        default: 0,
        require: true
    },
    orderReady: {
        type: Boolean,
        default: false,
        require: true
    },
    orderDelivered: {
        type: Boolean,
        default: false,
        require: true
    },
    orderRating: {
        type: Number,
        default: 0,
        require: true
    }

},{timestamps: true});

mongoose.model("order", orderSchema);