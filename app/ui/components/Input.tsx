export function Input({
  required,
  isSubmitting,
  isRefreshing,
  fieldName,
  placeholder,
  name,
  width,
  height,
}: {
  required: boolean;
  isSubmitting: boolean;
  isRefreshing: boolean;
  fieldName: string;
  placeholder: string;
  name: string;
  width: string;
  height: string;
}) {
  return (
    <label htmlFor={name} className="relative">
      <input
        disabled={isSubmitting || isRefreshing}
        required={required}
        placeholder={placeholder}
        type="text"
        name={name}
        id={name}
        style={{
          width: width,
          height: height,
        }}
        className="relative z-10 rounded-md px-2 py-1 border-2 border-neutral-300 bg-white text-sm sm:text-base outline-none hover:border-yellow-700  focus:border-yellow-700 duration-300 text-neutral-800 placeholder:text-neutral-400"
      />
      <div className="placeholder absolute z-20 -top-2 left-2 text-sm  px-[3px] w-fit h-fit duration-100 bg-transparent bg-gradient-to-b from-white to-white font-mono text-neutral-800">
        {fieldName}
      </div>
    </label>
  );
}
