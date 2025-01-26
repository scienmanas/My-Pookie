export function Input({
  isSubmitting,
  isRefreshing,
  fieldName,
  placeholder,
  name,
}: {
  isSubmitting: boolean;
  isRefreshing: boolean;
  fieldName: string;
  placeholder: string;
  name: string;
}) {
  return (
    <label htmlFor={name} className="relative w-[49.5%] sm:w-fit h-fit">
      <input
        minLength={2}
        disabled={isSubmitting || isRefreshing}
        required
        placeholder={placeholder}
        type="text"
        name={name}
        id={name}
        className="relative z-10 rounded-md px-2 py-1 border-2 border-neutral-300 w-full sm:w-60 h-10 bg-white text-sm sm:text-base outline-none hover:border-yellow-700  focus:border-yellow-700 duration-300 text-neutral-800 placeholder:text-neutral-400"
      />
      <div className="placeholder absolute z-20 top-0 left-0 translate-x-2 text-sm -translate-y-[9px] px-[3px] w-fit h-fit duration-100 bg-transparent bg-gradient-to-b from-[#eaeaea] to-white font-mono text-neutral-800">
        {fieldName}
      </div>
    </label>
  );
}
