// doctorRoute.js

const express = require('express');
const router = express.Router();
const db = require('../db');  // Database connection file

// Route to get doctor information based on user ID
router.get('/:id', async (req, res) => {
    const doctorId = req.params.id;

    try {
        const [doctorRows] = await db.query(
            'SELECT * FROM Doctors WHERE id = ?',
            [doctorId]
        );

        if (doctorRows.length > 0) {
            res.json(doctorRows[0]);  // Send doctor info as JSON
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (error) {
        console.error("Error fetching doctor data:", error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
