import { AiFillHeart } from "react-icons/ai";

function Image({ data }) {
  return (
    <a href={data.urls.regular}>
      <div className="card bg-base-300 shadow-lg w-60 pb-7 hover:scale-105 transition duration-300 text-center">
        <img
          className="h-44 w-full object-cover rounded-lg shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
        />
        <p className="pt-3">
          <span className="font-bold">Name:</span> {data.user.name}
        </p>
      </div>
    </a>
  );
}

export default Image;
