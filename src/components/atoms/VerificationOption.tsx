interface Props {
  id: number;
  option: string;
}

export default function VerificationOption({ id, option }: Props) {
  return (
    <button
      onClick={() => console.log(id)}
      className="flex items-center gap-4 bg-orange-950/10 rounded-xl p-4 cursor-pointer"
    >
      <div className="w-4 h-4 bg-orange-950/20 rounded-full"></div>
      <p>{option}</p>
    </button>
  );
}
