const mongoose = require('mongoose');

const vendorMenuSchema = mongoose.Schema(
    {
        vendorId: {
            type: Number,
            default: 0,
            unique: true,
            require: true
        },
        menuItems: [
            {
                itemId: {
                    type:Number,
                    default:0,
                    require:true
                },
                itemImgUrl:{
                    type:String,
                    default:'',
                    require:true
                },
                itemName:{
                    type:String,
                    default:'tiffin',
                    require:true
                },
                itemUnitPrice:{
                    type:Number,
                    default:0.0,
                    require:true
                },
                itemAvailability:{
                    type:Boolean,
                    default:false
                }
            }
        ]
    }
)
mongoose.model("vendorMenu",vendorMenuSchema);