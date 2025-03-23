export function TextComponent({ title, description, reference }) {
  return (
    <div className="">
      <h4>
        <span className="text-slate-900 font-bold">{title}</span>
      </h4>
      <p className="mt-2 text-justify">{description}</p>
      <p className="mt-2 text-justify italic text-sm">
        <span className="text-slate-900 font-medium">Reference : </span>
        {reference}
      </p>
    </div>
  );
}
