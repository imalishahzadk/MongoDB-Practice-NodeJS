const mongoose= require("mongoose")
// import mongoose from "mongoose"
mongoose.connect("mongodb://localhos:27017/AliHamzaDatabase")
.then(()=>{
    console.log("Connection Established...")
})
.catch((err)=>{
    console.log(err)
})
const mydatabase= mongoose.Schema({
    regNo:Number,
    name:String,
    cityName:String
})
const list= new mongoose.model("personal_collection",mydatabase)

const createDocument= async()=>{
   try{ const s1= new list({regNo: 15,Name: "Ali Hamza",cityName:"Okara"},{regNo: 13,Name: "Hammad Latif",cityName:"Faisalbad"},{regNo: 80,Name: "Shahzad",cityName:"Okara"},{regNo: 4,Name: "Rehman",cityName:"Karachi"},{regNo: 32,Name: "Nasir",cityName:"DG Khan"}

    })
    const s2= new list({regNo: 13,Name: "Hammad Latif",cityName:"Faisalbad"

    })
    const s3= new list({regNo: 80,Name: "Shahzad",cityName:"Okara"

    })
    const s4= new list({regNo: 4,Name: "Rehman",cityName:"Karachi"

    })
    const s5= new list({regNo: 32,Name: "Nasir",cityName:"DG Khan"

    })
    const res= await list.insertMany([s1,s2,s3,s4,s5])
}
catch(err) {
    console.log(err)
}
}
createDocument()
db.my_collecetion.aggregate([
    { $lookup:
        {
           from: "academics_collection",
           localField: "regNo",
           foreignField: "regno",
           as: "registrationNo"
        }
    }
]).pretty();
User.aggregate([{
    $lookup: {
     from: 'my_collection',
     let: {ID: '$ID'},
     pipeline: [{$match: {
      $expr: {
       $eq: [
        '$regNo', '$$ID'
       ],
       $gt: [
        '$quantity', 5
       ]
      }}}]
      as: 'OrdersData'
    }}]);
{regno:32,degreeEnrolled:"IR",enrollmentYear:2021},{regno:4,degreeEnrolled:"Socio",enrollmentYear:2020},{regno:80,degreeEnrolled:"Maths",enrollmentYear:2015},{regno:13,degreeEnrolled:"Physics",enrollmentYear:2018},{regno:15,degreeEnrolled:"IT",enrollmentYear:2019}
{scheduleID:13,departureTime:"4PM",location:"transportOffice",vehicleType:"couch"},{scheduleID:12,departureTime:"4PM",location:"transportOffice",vehicleType:"Bus"},{scheduleID:02,departureTime:"6PM",location:"transportOffice",vehicleType:"carry"}
{complaintID:12,complaint:"neeed a bus in the Texila route"},{complaintID:12,complaint:"application too slow"},{complaintID:12,complaint:"start a bus from Masjid Point"}
{ReqID:15,requisition:"need a bus for a tour to murree",timing:"5AM",Date:"05/12/2022"},{ReqID:12,requisition:"need a bus for a tour to nathia galli",timing:"7AM",Date:"05/11/2022"},{ReqID:13,requisition:"need a bus for a tour to Kallam",timing:"5AM",Date:"05/12/2021"}
db.my_collecetion.updateMany({CityName:"Karachi"},{$set:{CityName:"Islamabad"}})

db.my_collection.updateMany({$or:[{city:"Karachi"},{city:"Okara"}]},{$set:{city:"Rawalpindi/Islamabad"}})