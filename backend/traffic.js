import express from 'express';
const router = express.Router();

// Traffic routes will be defined here.
router.get('/', (req, res) => {
    res.send('Traffic updates will be here');
});

// Export the router
export default router;