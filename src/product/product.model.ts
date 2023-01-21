import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true  },
  description: String,
  price: Number,
});

export class Product {
  constructor(
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
