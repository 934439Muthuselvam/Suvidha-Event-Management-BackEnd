import mongoose from 'mongoose';
import { conn } from '../config/db/db.js';

const Eventsschema = mongoose.Schema({
  Images: Array,
  Title: String,
  Poster_Type: String,
  Event_Category_Type:String,
  country: {type: String,default: 'USA'},
  state:String,
  city:String,
  pinCode:Number,
  address:String,
  startDate:String,
  endDate:String,
  startTime:String,
  endTime:String,
  eligibility_type:String,
  registerLastDate:String,
  event_mode_type:String,

 
  

  



  Peyment : String,
  Guest_Count : String,
  Fees_Audience : String,
  Fees_Participants : String,
  Entry_Fees : String,
  Fees_Stall: String,
  Participant_Type : String,
  Games : Array,
  Description : String,
  Disclaimer : String,
  
}, { timestamps: true })

const Events = conn.model('events', Eventsschema);
export { Events };
