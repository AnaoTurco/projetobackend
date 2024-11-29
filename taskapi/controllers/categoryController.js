const Category = require('../models/categoryModel');

const createCategory = async (req, res) => {
    const { name, user } = req.body;

    try {
        const newCategory = new Category({ name, user });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateCategory = async (req, res) => {
    const { categoryId } = req.params;
    const updateData = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updateData, { new: true });
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteCategory = async (req, res) => {
    const { categoryId } = req.params;

    try {
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({ message: 'Categoria excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createCategory, getCategories, updateCategory, deleteCategory };
