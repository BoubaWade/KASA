// import TagName from "../components/TagName";
// import { STARS_ACTIVE, STARS_INACTIVE } from "../constants/starsConstants";


// export default function TagsAndStars({ dataFiltered }) {
  
//   const starsActive =STARS_INACTIVE.slice(0, STARS_ACTIVE.length-dataFiltered.rating);
//   const starsInactive =STARS_ACTIVE.slice(0, dataFiltered.rating);

//   return (
//     <>
//       <span className="location">{dataFiltered.location}</span>
//       <div className="tags-stars" >
//         <ul className="tags">
//           {dataFiltered.tags.map((tag) => (
//             <TagName key={tag} tag={tag} />
//           ))}
//         </ul>
//         <ul className="stars">
//           {starsInactive.map((star) => (
//             <img key={crypto.randomUUID()} src={star} alt=""/>
//           ))}
//           {starsActive.map((star)=> 
//             <img key={crypto.randomUUID()} src={star} alt=""/>
//             )}
//         </ul>
//       </div>
//     </>
//   );
// }
