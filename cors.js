import cors from 'cors';

const whitelist = [process.env.WHITELIST_DOMAIN || 'http://localhost:3000'];

const setCors = (app) => {
    app.use(
        cors({
            origin(origin, callback) {
                // allow requests with no origin
                if (!origin) return callback(null, true);
                if (whitelist.indexOf(origin) === -1) {
                    return callback(new Error('CORS Policy failed'), false);
                }
                return callback(null, true);
            },
        })
    );
};

export default setCors;
