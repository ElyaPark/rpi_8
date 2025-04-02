import { Review } from "../../types/review";
import ReviewsItem from "../reviews-item/reviews-item";


type ReviewsListtProps = {
    reviewsList : Review[];
};
function ReviewsList({reviewsList} : ReviewsListtProps ){
    return(
        <ul className="reviews__list">
            {Array.from(reviewsList, (item) =>
        <ReviewsItem key={item.id} id={item.id} comment={item.comment} date={item.date} rating={item.rating} 
                            name={item.user.name} avatarUrl={item.user.avatarUrl} isPro={item.user.isPro}/>)}
      </ul>
    );
}


export  {ReviewsList};