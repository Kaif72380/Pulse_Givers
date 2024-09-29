
import multer from "multer"

const storage=multer.diskStorage(
    {

destination:'./public/campaign',
filename:(req,file,cb)=>
{
    cb(null,file.originalname)
}


    }
)
const upload_image=multer(

{
    storage:storage //left side wala predefined storage property hai
}

).single("photo")//input type= file name="pic" same input type name pass

export default upload_image