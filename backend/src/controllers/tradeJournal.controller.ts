import { Request, Response } from 'express';
import { Logging } from '../helpers/Log.helper';
import TradeJournalModel from '../models/tradeJournal.model';


const getTradeJournals = async (req: Request, res: Response) => {
  try {
    const journals = await TradeJournalModel
      .find({ 
        deleted: false, 
      });

    res
      .status(200)
      .json({ 
        data: journals, 
        total: journals.length,
        success: true, 
        message: 'TRADE JOURNALS' 
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false, 
        message: `Error ${error}` 
      });
  };
};

const getTradeJournalById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const journal = await TradeJournalModel
      .findOne({ _id: id });

    res
      .status(200)
      .json({ 
        data: journal, 
        success: true, 
        message: 'TRADE JOURNAL' 
      });
  } catch (error) {
    res
      .status(500)
      .json({ 
        success: false, 
        message: `Error ${error}` 
      });
  };
};

const getTradeJournalStats = async (req: Request, res: Response) => {
  try {
    const debts = await TradeJournalModel.aggregate([
      {
        $match: { deleted: false }
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);
    
    const result = debts.reduce((acc: any, curr: any) => {
      acc[curr._id === 'Paid' ? 'paid' : curr._id === 'Unpaid' ? 'unpaid' : 'total'] = curr.count;
      return acc;
    }, { total: 0, paid: 0, unpaid: 0 });
    

    const data = {
      total: result.total + result.paid + result.unpaid,
      paid: result.paid,
      unpaid: result.unpaid
    };

    res
      .status(200)
      .json({ 
        data: data, 
        success: true, 
        message: 'DEBTS Statistics' 
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false, 
        message: `Error ${error}` 
      });
  };
};

const postTradeJournalsPaginate = async (req: Request, res: Response) => {
  try {
    const { size, page, filters } = req.body;
    const { fields, search: searchWord } = filters;
    const match: any = {};

    let setPage = page ?? 1;

    const filtersFields = fields ? fields.map((filter: any) => { 
      return { 
        [filter]: { $regex: searchWord, $options: 'i' }
      }
    }) : {};

    match.$and = [{ deleted_at: null }];

    // Return to first page if search exist
    if (searchWord) setPage = 1;
    if (searchWord) match.$and.push({ $or: filtersFields });

    const trade_journals = await TradeJournalModel.aggregate([
        { $match: match },
        { $sort: { date_created: -1 } }
      ])
      .skip((setPage - 1) * size)
      .limit(size)
      .exec();

    const total_trade_journals = await TradeJournalModel.countDocuments({ 
        deleted_at: { $eq: null },
      });

    res
      .status(200)
      .json({ 
        success: true,
        message: "Trade Journal List Paginated",
        data: trade_journals,
        size: size,
        page: setPage,
        total: total_trade_journals,
      });
  
  } catch (error) {
    res
      .status(500)
      .json({
        success: false, 
        message: `Error: ${error}` 
      });
  }
};

const createTradeJournal = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const newTradeJournal = new TradeJournalModel({ ...body });
    const created = await newTradeJournal.save();

    if (created) Logging(created, req, 'create', 'tradeJournal');
    
    res
      .status(201)
      .json({ 
        data: created, 
        success: true, 
        message: 'CREATED' 
      });
  } catch (error) {
    res
      .status(500)
      .json({ 
        success: false, 
        message: `Error ${error}` 
      });
  };
};

const deleteTradeJournal = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleted = await TradeJournalModel.findOneAndDelete({ _id: id });
    
    if (!deleted) {
      res
      .status(404)
      .json({ 
        success: true, 
        message: 'Not data' 
      });
    };

    res
      .status(200)
      .json({ 
        success: true, 
        message: 'DELETED' 
      });
  } catch (error) {
    res
      .status(500)
      .json({ 
        success: false, 
        message: `Error ${error}` 
      });
  };
};

const updateTradeJournal = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const updated = await TradeJournalModel
      .findOneAndUpdate(
        { _id: id }, 
        { ...body }, 
        { new: true, useFindAndModify: false }
      );
    
    if (!updated) {
      res
        .status(404)
        .json({ 
          success: false, 
          message: 'No data' 
        });
    };

    if (updated) Logging(updated, req, 'update', 'tradeJournal');
    
    res
      .status(200)
      .json({ 
        data: updated, 
        success: true, 
        message: 'UPDATED' 
      });
  } catch (error) {
    res
      .status(500)
      .json({ 
        success: false, 
        message: `Error ${error}` 
      });
  };
};

const updateTradeJournalStatus = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let statusChange = "";

    const temp = await TradeJournalModel
      .findOne({ _id: id })
      .select({ status: 1 });

    if (!temp) {
      res
        .status(404)
        .json({ 
          success: false, 
          message: 'Not found' 
        });
    };

    if (temp.status.toLowerCase() === "paid") {
      statusChange = "Unpaid";
    } else {
      statusChange = "Paid";
    };

    const update = await TradeJournalModel
      .findOneAndUpdate(
        { _id: id }, 
        { status: statusChange }, 
        { new: true, useFindAndModify: false }
      );
    
    res
      .status(200)
      .json({ 
        data: update, 
        success: true, 
        message: 'STATUS UPDATED' 
      });
  } catch (error) {
    res
      .status(500)
      .json({ 
        success: false, 
        message: `Error ${error}` 
      });
  };
};

export { 
  getTradeJournals, 
  getTradeJournalById,
  getTradeJournalStats,
  postTradeJournalsPaginate,
  createTradeJournal,
  deleteTradeJournal,
  updateTradeJournal,
  updateTradeJournalStatus,
};