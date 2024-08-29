import {useNavigate} from "react-router-dom";

const BackButton = (props) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${props.clss} text-xl font-semibold flex w-50 sm:w-52 sm:text-2xl md:w-64 md:text-3xl`}
    >
      <a className="hover:cursor-pointer" onClick={() => navigate(-1)}>
        <svg
          className={props.clssArrw}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </a>
      <p className="">{props.text} </p>
    </div>
  );
};

export default BackButton;
