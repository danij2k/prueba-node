const getDB = require('../../getDB');

const selectAllPostQuery = async (keyword = '') => {
    let connection;

    try {
        connection = await getDB();

        const [post] = await connection.query(
            `
                SELECT 
                title, text, barrio, photo, idUser
                FROM posts P
                WHERE P.text LIKE ?
                
                
            `,
            [`%${keyword}%`, ]
        );

        return post;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectAllPostQuery;