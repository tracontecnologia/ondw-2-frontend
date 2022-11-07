import classNames from 'classnames';

export enum AlertEnum {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

type Props = {
  type: AlertEnum;
  children: React.ReactNode;
};

export function Alert({ type = AlertEnum.INFO, children }: Props) {
  return (
    <div
      className={classNames(
        'w-full p-4 text-sm rounded-md bg-white my-2',
        { 'bg-feedback-info text-black': type === AlertEnum.INFO },
        { 'bg-feedback-warning text-white': type === AlertEnum.WARNING },
        { 'bg-feedback-error text-white': type === AlertEnum.ERROR },
        { 'bg-feedback-success text-white': type === AlertEnum.SUCCESS }
      )}
    >
      {children}
    </div>
  );
}
