export function TextArea({
  required,
  isSubmitting,
  isRefreshing,
  placeholder,
  name,
  maxWidth,
  height,
}: {
  required: boolean;
  isSubmitting: boolean;
  isRefreshing: boolean;
  placeholder: string;
  name: string;
  maxWidth: string;
  height: string;
}) {
  return (
    <label htmlFor={name} className="relative">
      <textarea
        disabled={isSubmitting || isRefreshing}
        required={required}
        placeholder={placeholder}
        name={name}
        id={name}
        style={{
          height: height,
          width: "100%",
          maxWidth: maxWidth,
        }}
        className="relative z-10 rounded-md px-2 py-1 border-2 border-neutral-300 bg-white text-sm sm:text-base outline-none hover:border-yellow-700 focus:border-yellow-700 duration-300 text-neutral-800 placeholder:text-neutral-400 resize-none"
      />
    </label>
  );
}
