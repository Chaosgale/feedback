const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticsrouter = require('./diagnostics');

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('./diagnostics', diagnosticsrouter);

module.exports = router;
