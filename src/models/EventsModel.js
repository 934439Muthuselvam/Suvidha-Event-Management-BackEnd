import mongoose from 'mongoose';
import { conn } from '../config/db/db.js';

const Eventsschema = mongoose.Schema({
  Images: Array,
  Title: String,
  Poster_Type: String,
  Event_Category_Type:String,
  country:String,
  state:String,
  city:String,
  pinCode:Number,
  address:String,
  startDate:Date,
  endDate:Date,
  startTime:String,
  endTime:String,
  eligibility_type:String,





  Peyment : String,
  Guest_Count : String,
  Entry_Fees : String,
  Fees_Adults : String,
  Event_Start_Time:String,
  Fees_Kids : String,
  Fees_Under5 : String,
  Participant_Type : String,
  Games : Array,
  Event_Location : String,
  Description : String,
  Disclaimer : String,
  Entry_Fees : String
}, { timestamps: true })

const Events = conn.model('events', Eventsschema);
export { Events };
