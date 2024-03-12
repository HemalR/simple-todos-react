import { Optional } from "meteor/jam:easy-schema";
import { Mongo } from 'meteor/mongo';

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

const schema = {
  _id: Optional(String),
  title: String,
  url: String,
  createdAt: Date,
};

export const LinksCollection = new Mongo.Collection<Link>('links');

LinksCollection.attachSchema(schema);

