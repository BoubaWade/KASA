export default function TitleLogement({dataFiltered}) {
  return (
    <div className="title-container">
          <h1>{dataFiltered.title}</h1>
          <span className="location">{dataFiltered.location}</span>
        </div>
  );
}
