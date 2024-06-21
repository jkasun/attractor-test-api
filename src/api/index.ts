import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import weather from './wather';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/weather', weather);

export default router;
