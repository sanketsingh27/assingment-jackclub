import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  accountId: {
    type: String,
    required: true,
    unique: true,
  },

  amount: {
    type: Number,
  },
});

const Account = mongoose.model("Account", accountSchema);

export default Account;
