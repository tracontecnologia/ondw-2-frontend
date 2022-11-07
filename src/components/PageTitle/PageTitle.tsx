type Props = {
  title: string;
  buttons?: React.ReactNode[];
};

export function PageTitle({ title, buttons }: Props) {
  return (
    <div className="w-full min-h-[80px] flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
      {!!buttons && (
        <div className="flex items-center gap-2">
          {buttons}
        </div>
      )}
    </div>
  );
}
