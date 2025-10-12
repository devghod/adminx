import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middlewares';
import { 
  getTradeJournals, 
  getTradeJournalById,
  getTradeJournalStats,
  getTradeStatsByDate,
  getTradeStatsPercentage,
  postTradeJournalsPaginate,
  createTradeJournal,
  deleteTradeJournal,
  updateTradeJournal,
} from '../controllers/tradeJournal.controller';

const router = Router();

router.get('/get-tradejournal/:id', authenticate, getTradeJournalById);
router.get('/get-tradejournals', authenticate, getTradeJournals);
router.get('/get-tradejournals-statistics', authenticate, getTradeJournalStats);
router.post('/get-tradejournals-stats-line-bydate', authenticate, getTradeStatsByDate);
router.post('/get-tradejournals-stats-pie-bydate', authenticate, getTradeStatsPercentage);
router.post('/post-tradejournals-paginate', authenticate, postTradeJournalsPaginate);
router.post('/create-tradejournal', authenticate, createTradeJournal);
router.put('/update-tradejournal/:id', authenticate, updateTradeJournal);
router.delete('/delete-tradejournal/:id', authenticate, deleteTradeJournal);

module.exports = router;