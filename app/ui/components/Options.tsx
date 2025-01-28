export function Options({
  required,
  isSubmitting,
  isRefreshing,
  fieldName,
  name,
  options,
}: {
  required: boolean;
  isSubmitting: boolean;
  isRefreshing: boolean;
  fieldName: string;
  name: string;
  options: {
    id: string;
    name: string;
  }[];
}) {
  return (
    <label htmlFor={name} className="relative w-fit h-fit">
      <select
        required={required}
        disabled={isSubmitting || isRefreshing}
        id={name}
        name={name}
        className="text-sm sm:text-base rounded-lg px-4 py-2 bg-white border-2 border-neutral-300 hover:border-black transition-colors duration-300 cursor-pointer  "
        style={{
          width: "200px",
          height: "40px",
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="text-sm placeholder absolute z-20 -top-2 left-1 -translate-y-1/2 px-2 bg-white text-black font-medium font-mono">
        {fieldName}
      </div>
    </label>
  );
}
