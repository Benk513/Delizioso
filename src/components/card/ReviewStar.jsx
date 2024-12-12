import { StarIcon } from "lucide-react";

const ReviewStar = ({rating}) => {
  return (
    <div className="flex items-center gap-1 justify-center">
    {
        Array(5).fill(0).map((_, i) => {
            return (
                <div key={i} className="">
             
                <StarIcon className={`${rating>=i+1 ? "text-yellow-500":"text-yellow-900/30"}`}/>
                
                </div>
                );
                })


    }</div>
  )
}

export default ReviewStar