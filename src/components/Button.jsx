export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="mx-auto px-8 rounded-md py-4 border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200 "
    >
      <p>{text}</p>
    </button>
  );
}
