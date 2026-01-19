interface Props {
  id: number;
  option: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

export default function VerificationOption({
  id,
  option,
  name,
  checked,
  onChange,
}: Props) {
  return (
    <label className="flex items-center gap-4 bg-orange-950/10 rounded-xl p-4 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-orange-600"
      />
      <p>{option}</p>
    </label>
  );
}
