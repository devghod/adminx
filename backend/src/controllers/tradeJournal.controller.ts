import { Request, Response } from 'express';
import { Logging } from '../helpers/Log.helper';
import mongoose from "mongoose";
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
    const journal = await TradeJournalModel.aggregate([
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
    
    const result = journal.reduce((acc: any, curr: any) => {
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

// Statistics
const getTradeStatsByDate = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { start_date, end_date, user_id } = body;

    const dataLine = await TradeJournalModel.aggregate([
      {
        $match: { 
          deleted_at: null, 
          user_id: new mongoose.Types.ObjectId(user_id),
          date_entry: {
            $gte: start_date,
            $lte: end_date,
          },
        }
      },
      {
        $group: {
          _id: "$date_entry",
          win: {
            $sum: { $cond: [{ $eq: ["$status", "win"] }, 1, 0] },
          },
          lose: {
            $sum: { $cond: [{ $eq: ["$status", "lose"] }, 1, 0] },
          },
          draw: {
            $sum: { $cond: [{ $eq: ["$status", "draw"] }, 1, 0] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          win: 1,
          lose: 1,
          draw: 1,
        },
      },
      { $sort: { date: 1 } },
    ]);

    const dataPie = await TradeJournalModel.aggregate([
      {
        $match: { 
          deleted_at: null, 
          user_id: new mongoose.Types.ObjectId(user_id),
          date_entry: {
            $gte: start_date,
            $lte: end_date,
          },
        },
      },
      {
        $group: {
          _id: null,
          win: { $sum: { $cond: [{ $eq: ["$status", "win"] }, 1, 0] } },
          lose: { $sum: { $cond: [{ $eq: ["$status", "lose"] }, 1, 0] } },
          draw: { $sum: { $cond: [{ $eq: ["$status", "draw"] }, 1, 0] } },
        },
      },
      {
        $project: {
          _id: 0,
          data: [
            { name: "Win", value: "$win" },
            { name: "Loss", value: "$lose" },
            { name: "Draw", value: "$draw" },
          ],
        },
      },
    ]);

    const result = dataPie.length > 0 ? dataPie[0].data : [];

    const profitLoss = await TradeJournalModel.aggregate([
      {
        $match: { 
          deleted_at: null, 
          user_id: new mongoose.Types.ObjectId(user_id),
          date_entry: {
            $gte: start_date,
            $lte: end_date,
          },
        },
      },
      {
        $group: {
          _id: null,
          profit: { $sum: { $cond: [{ $eq: ["$status", "win"] }, "$amount", 0] } },
          loss: { $sum: { $cond: [{ $eq: ["$status", "lose"] }, "$amount", 0] } },
        },
      },
      {
        $project: {
          _id: 0,
          profit: 1,
          loss: 1,
        },
      },
    ]);

    const profitLossData = profitLoss[0] || { profit: 0, loss: 0 };

    const journals = {
      lineData: dataLine,
      pieData: result,
      profitLossData: profitLossData,
    };

    res
      .status(200)
      .json({ 
        data: journals, 
        success: true, 
        message: 'Trade Stats by date' 
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

const getTradeStatsByDateLine = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { start_date, end_date, user_id } = body;

    const journals = await TradeJournalModel.aggregate([
      {
        $match: { 
          deleted_at: null, 
          user_id: new mongoose.Types.ObjectId(user_id),
          date_entry: {
            $gte: start_date,
            $lte: end_date,
          },
        }
      },
      {
        $group: {
          _id: "$date_entry",
          win: {
            $sum: { $cond: [{ $eq: ["$status", "win"] }, 1, 0] },
          },
          lose: {
            $sum: { $cond: [{ $eq: ["$status", "lose"] }, 1, 0] },
          },
          draw: {
            $sum: { $cond: [{ $eq: ["$status", "draw"] }, 1, 0] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          win: 1,
          lose: 1,
          draw: 1,
        },
      },
      { $sort: { date: 1 } },
    ]);

    res
      .status(200)
      .json({ 
        data: journals, 
        success: true, 
        message: 'Trade Journal Line Stats' 
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

const getTradeStatsByDatePie = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { start_date, end_date, user_id } = body;

    const journals = await TradeJournalModel.aggregate([
      {
        $match: { 
          deleted_at: null, 
          user_id: new mongoose.Types.ObjectId(user_id),
          date_entry: {
            $gte: start_date,
            $lte: end_date,
          },
        },
      },
      {
        $group: {
          _id: null,
          win: { $sum: { $cond: [{ $eq: ["$status", "win"] }, 1, 0] } },
          lose: { $sum: { $cond: [{ $eq: ["$status", "lose"] }, 1, 0] } },
          draw: { $sum: { $cond: [{ $eq: ["$status", "draw"] }, 1, 0] } },
        },
      },
      {
        $project: {
          _id: 0,
          data: [
            { name: "Win", value: "$win" },
            { name: "Loss", value: "$lose" },
            { name: "Draw", value: "$draw" },
          ],
        },
      },
    ]);

    const result = journals.length > 0 ? journals[0].data : [];

    res
      .status(200)
      .json({ 
        data: result, 
        success: true, 
        message: 'Trade Journal Pie Stats' 
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

const getTradeAmountProfitAndLossByDate = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { start_date, end_date, user_id } = body;

    const journals = await TradeJournalModel.aggregate([
      {
        $match: { 
          deleted_at: null, 
          user_id: new mongoose.Types.ObjectId(user_id),
          date_entry: {
            $gte: start_date,
            $lte: end_date,
          },
        },
      },
      {
        $group: {
          _id: null,
          profit: { $sum: { $cond: [{ $eq: ["$status", "win"] }, 1, 0] } },
          loss: { $sum: { $cond: [{ $eq: ["$status", "lose"] }, 1, 0] } },
        },
      },
      {
        $project: {
          _id: 0,
          profit: 1,
          loss: 1,
        },
      },
    ]);

    const result = journals[0] || { profit: 0, loss: 0 };

    res
      .status(200)
      .json({ 
        data: result, 
        success: true, 
        message: 'Trade Profit & Loss Amount by date' 
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
  getTradeStatsByDate,
  getTradeStatsByDateLine,
  getTradeStatsByDatePie,
  getTradeAmountProfitAndLossByDate,
  postTradeJournalsPaginate,
  createTradeJournal,
  deleteTradeJournal,
  updateTradeJournal,
  updateTradeJournalStatus,
};