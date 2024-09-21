const db = require('../db');

class AnthropometryController {
    // Добавление новых данных антропометрии для пользователя
    async createAnthropometry(req, res) {
        const { user_id, height, weight, waist_circumference, hip_circumference } = req.body;
        try {
            const newEntry = await db.query(
                `INSERT INTO anthropometry_bioimpedance 
                (user_id, height, weight, waist_circumference, hip_circumference) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *`,
                [user_id, height, weight, waist_circumference, hip_circumference]
            );
            res.json(newEntry.rows[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Получение всех записей антропометрии для всех пользователей
    async getAllAnthropometry(req, res) {
        try {
            const entries = await db.query(`SELECT * FROM anthropometry_bioimpedance`);
            res.json(entries.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Получение данных антропометрии для конкретного пользователя по user_id
    async getUserAnthropometry(req, res) {
        const user_id = req.params.user_id;
        try {
            const userEntries = await db.query(`SELECT * FROM anthropometry_bioimpedance WHERE user_id = $1`, [user_id]);
            res.json(userEntries.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Обновление данных антропометрии по id записи
    async updateAnthropometry(req, res) {
        const { id, height, weight, waist_circumference, hip_circumference } = req.body;
        try {
            const updatedEntry = await db.query(
                `UPDATE anthropometry_bioimpedance 
                SET height = $1, weight = $2, waist_circumference = $3, hip_circumference = $4 
                WHERE id = $5 
                RETURNING *`,
                [height, weight, waist_circumference, hip_circumference, id]
            );
            res.json(updatedEntry.rows[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Удаление записи антропометрии по id
    async deleteAnthropometry(req, res) {
        const id = req.params.id;
        try {
            const deletedEntry = await db.query(`DELETE FROM anthropometry_bioimpedance WHERE id = $1 RETURNING *`, [id]);
            res.json(deletedEntry.rows[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new AnthropometryController();
