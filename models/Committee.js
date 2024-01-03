import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommitteeSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

export const CommitteeModel = mongoose.model("committees", CommitteeSchema)