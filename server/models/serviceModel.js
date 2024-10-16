import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Service name is required'],
        unique: [true, 'Service name must be unique']
    },
    price: {
        type: Number,
        required: [true, 'Service price must be provided']
    }
}, {timestamps: true})

export default mongoose.model('Service', serviceSchema);