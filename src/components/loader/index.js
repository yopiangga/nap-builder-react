import imgLoader from "../../assets/loader.svg";

export function LoaderComponent({ message }) {
  return (
    <div className="fixed w-full h-full bg-slate-900 bg-opacity-90 top-0 left-0 right-0 bottom-0 z-[999] flex flex-col justify-center items-center">
      <img src={imgLoader} />
      <h4 className="text-white font-bold text-xl">{message}</h4>
    </div>
  );
}
