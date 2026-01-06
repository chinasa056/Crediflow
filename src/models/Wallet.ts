// import mongoose, { Schema, Document } from 'mongoose';
// import { IWallet } from '../interfaces/IWallet';

// const WalletSchema = new Schema<IWallet>(
//   {
//     userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
//     balance: { type: Number, default: 0 },
//     currency: { type: String, default: 'NGN' },
//   },
//   { timestamps: true }
// );

// export default mongoose.model<IWallet & Document>('Wallet', WalletSchema);