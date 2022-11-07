type Props = {
  name?: string;
  errors?: any;
};

export function InputErrorMessage({ name, errors }: Props) {
  if (!name || !errors) return null;

  let error: any = errors || {};
  name.split('.').forEach((propName) => {
    error = error?.[propName];
  });
  const errorMessage = error?.message || '';

  return (
    <>
      {errorMessage && (
        <span className="text-red-600 text-sm mb-4">{errorMessage}</span>
      )}
    </>
  );
}
