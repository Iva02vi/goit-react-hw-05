const ActorCard = ({ data }) => {
  if (!data.profile_path) {
    return null;
  }

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
        alt={data.name}
      />
      <p>
        {data.name}
        <br />
        as <br />
        {data.character}
      </p>
    </>
  );
};

export default ActorCard;
