import { CiHeart } from "react-icons/ci";

const VideoComp = (props) => {
  return (
    <div className="w-full flex flex-col rounded-xl bg-white shadow-lg">
      <img
        src={props.data.imageUrl}
        alt={props.data.title}
        className="rounded-xl"
      />
      <div className="flex justify-between p-4">
        <div className="flex flex-col gap-1 ">
          <p className="font-semibold text-zinc-900">{props.data.title}</p>
          <p className="font-light text-sm">{props.data.author}</p>
        </div>
        <button className="group">
          <CiHeart className="h-6 w-6 group-hover:fill-[#50B478] group-active:fill-[#50B478] group-focus:fill-[#50B478]" />
        </button>
      </div>
    </div>
  );
};

export default VideoComp;
