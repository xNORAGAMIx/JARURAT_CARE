import serviceModel from "../models/serviceModel.js";

export const registerService = async (req, res) => {
    const { name, price } = req.body;

    try {
        /**Validation of fields */
        if (!name || !price) {
            return res.json({
                Register: false,
                message: "All fields are required!"
            })
        }
        /**Check if service already exists */
        const existingService = await serviceModel.findOne({ name: name });
        if (existingService) {
            return res.json({
                Register: false,
                message: "Service already exists!"
            });
        }

        /**Create service */
        const service = await serviceModel.create({
            name,
            price
        });

        return res.status(201).json({
            Register: true,
            message: "Successfully registered!",
            serviceData: service,
        });
    } catch (error) {
        return res.status(500).json({
            Register: false,
            Error: error
        });
    }
}

export const getAllServices = async (req, res) => {
    try {
        const services = await serviceModel.find({});
        return res.status(200).json({
            Fetch: true,
            services: services,
        })
    } catch (error) {
        return res.status(500).json({
            Fetch: false,
            Error: error
        });
    }
}

export const updateService = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        if(Object.keys(updateData).length === 0) {
            return res.status(400).json({
                Update: false,
                message: "Update string cannot be empty!"
            })
        }

        const updateService = await serviceModel.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updateService) {
            return res.status(404).json({
                Update: false,
                message: 'Service not found'
            });
        }

        res.status(200).json({
            Update: true,
            message: "Updated service",
            updatedService: updateService
        })
    } catch (error) {
        return res.status(500).json({
            Update: false,
            Error: error
        });
    }
}

export const deleteService = async (req,res) => {
    const {id} = req.params;

    try{
        const deleteService = await serviceModel.findByIdAndDelete(id);

        /**Service not found */
        if(!deleteService) {
            return res.status(404).json({ 
                Delete: false, 
                message: 'Service not found' });
        }

        return res.status(200).json({ 
            Delete: true, 
            message: 'Service deleted successfully' });
    } catch (error) {
        return res.status(500).json({
            Delete: false,
            Error: error
        });
    }
}