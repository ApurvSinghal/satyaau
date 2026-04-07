type BaseField = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

type InputField = BaseField & {
  type?: "text" | "email" | "number";
};

type SelectField = BaseField & {
  type: "select";
  options: string[];
};

type FormField = InputField | SelectField;

type FormCardProps = {
  action: string;
  title: string;
  description: string;
  submitLabel: string;
  fields: FormField[];
};

export function FormCard({
  action,
  title,
  description,
  submitLabel,
  fields,
}: FormCardProps) {
  return (
    <form action={action} method="POST" className="surface-card space-y-5 p-6 md:p-8">
      <div className="space-y-2">
        <h3 className="font-[var(--font-barlow)] text-3xl font-bold uppercase">{title}</h3>
        <p className="text-sm text-[#5f665f]">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2 text-sm font-semibold text-[#273029]">
            {field.label}
            {field.type === "select" ? (
              <select
                name={field.name}
                required={field.required ?? true}
                defaultValue=""
                className="rounded-xl border border-[#d8ddd7] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#4ea973]"
              >
                <option value="" disabled>
                  Choose one
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type ?? "text"}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required ?? true}
                className="rounded-xl border border-[#d8ddd7] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#4ea973]"
              />
            )}
          </label>
        ))}
      </div>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <p className="text-xs text-[#5f665f]">
        Limited consultation slots open weekly. Submit now to reserve your spot.
      </p>
      <button type="submit" className="cta-primary w-full md:w-auto">
        {submitLabel}
      </button>
    </form>
  );
}
