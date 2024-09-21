const db = require('../db');
const bcrypt = require('bcrypt');

class UserController {
    // Создание нового пользователя с шифрованием пароля
    async createUser(req, res) {
        const { name, surname, middlename, email, birth_date, password } = req.body;
        try {
            // Хэшируем пароль перед сохранением в базу данных
            const hashedPassword = await bcrypt.hash(password, 10); // 10 - количество раундов шифрования
            const newUser = await db.query(
                `INSERT INTO users (name, surname, middlename, email, birth_date, password) 
                 VALUES ($1, $2, $3, $4, $5, $6) 
                 RETURNING *`, 
                [name, surname, middlename, email, birth_date, hashedPassword]
            );
            res.json(newUser.rows[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Другие методы, такие как getUsers, getOneUser и т.д.
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const { id, name, surname, middlename, email, birth_date, password } = req.body;
        // Хэшируем новый пароль, если он предоставлен
        const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

        const user = await db.query(
            `UPDATE users 
             SET name = $1, surname = $2, middlename = $3, email = $4, birth_date = $5, password = COALESCE($6, password) 
             WHERE id = $7 
             RETURNING *`, 
            [name, surname, middlename, email, birth_date, hashedPassword, id]
        );
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new UserController();
