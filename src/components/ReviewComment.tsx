import { Review } from '../types/review';

type ReviewCommentProps = {
  review: Review;
};

export function ReviewComment({review}: ReviewCommentProps): JSX.Element {
  const { author, rating, date, text } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={author.avatar} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">
          {author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date.toISOString().split('T')[0]}>April 2019</time>
      </div>
    </li>
  );
}
