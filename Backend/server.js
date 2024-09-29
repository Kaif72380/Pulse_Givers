import express from "express";
import routes from "./Routes/common_routes.js";
import cors from 'cors'
import connect_Db from "./DataBase/DB.js";
import adminRoutes from "./Routes/admin_routes.js";

const app = express()

app.get("/",(req,res)=>{
    res.send(`Server is ready`)
})
// app.get("/tw",(req,res)=>{
//     res.send(`Twitter is ready`)
// })
// app.get("/wa",(req,res)=>{
//     res.send(`whatsapp is ready`)
// })

// app.get("/jokes",(req,res)=>{

//     const jokes=[
//         {
//             id:1,
//             title:"A joke",
//             content:"This is a joke"
//         },
//         {
//             id:2,
//             title:"A joke",
//             content:"This is a joke"
//         },
//         {
//             id:3,
//             title:"A joke",
//             content:"This is a joke"
//         },
//         {
//             id:4,
//             title:"A joke",
//             content:"This is a joke"
//         },
//         {
//             id:5,
//             title:"A joke",
//             content:"This is a joke"
//         }
//     ]
//  res.send(jokes)
// })
connect_Db()
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})


app.use(cors())
app.use(express.json())

app.use("/donorApi",routes)
app.use("/admin",adminRoutes)
