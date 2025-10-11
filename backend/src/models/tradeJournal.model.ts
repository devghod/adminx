import mongoose from 'mongoose';

const tradeJournalSchema = new mongoose.Schema({
  trade_type: {
    type: String,
  },
  status: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date_entry: {
    type: String,
  },
  
  // necessary fields
  date_created: {
    type: Date,
    required: true,
    default: Date.now
  },
  date_modified: {
    type: Date,
    required: true,
    default: Date.now
  },
  created_by: {
    type: String,
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

const TradeJournal = mongoose.model('TradeJournal', tradeJournalSchema);
export default TradeJournal;