import classNames from 'classnames';

type Props = {
  headers: { key: string; label: string; width?: number }[];
  data: any[];
  onClick?: (item: any, index: number) => void;
};

export function Table({ headers, data, onClick }: Props) {
  return (
    <table className="w-full">
      <thead className="border-b-2 border-gray-300">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="text-left p-4 font-semibold text-gray-600"
              style={{ width: header.width || 'auto' }}
            >
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, itemIndex) => (
          <tr
            key={itemIndex}
            onClick={() => onClick(item, itemIndex)}
            className={classNames('border-b border-gray-100 hover:bg-gray-50', {
              'cursor-pointer active:bg-gray-100': !!onClick,
            })}
          >
            {headers.map((header, headerIndex) => (
              <td
                key={headerIndex}
                className="text-left py-2 px-4 text-gray-700 font-light text-sm"
              >
                {item[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
