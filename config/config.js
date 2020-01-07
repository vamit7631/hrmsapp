const config = {
    database: {
        url: 'mongodb://localhost:27017/hrms',
        //    url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    },
    secret: {
        jwtSecret: 'worldisfullofdevelopers',
    }
    //,
    // jwt: {
    //     jwtSecret: process.env.JWT_SECRET,
    //     jwtSession: {
    //         session: false,
    //     },
    //     timeout: 1 * 365 * 24 * 60, // in minutes (expires after 1 year)
    //     temporary_timeout: 5, // in minutes
    // }
};

module.exports = config;