// @flow
import * as React from 'react';

import '../App.css';

type Props = {|
  +row: Array<string>,
  +onClickDelete: number => void,
  +onClickEdit: number => void,
  +rowIndex?: number,
  +personIndex: Array<number>,
|};

function Row(props: Props) {
  const { row, onClickDelete, onClickEdit, rowIndex, personIndex } = props;
  return (
    <tr>
      {row.map((tag, index) => (
        <td key={index} className={personIndex.includes(index) ? 'active center' : 'active'}>
          {tag}
        </td>
      ))}

      <div className="wrap column">
        <div
          className="small-size cursor"
          role="button"
          tabIndex={0}
          onClick={() => onClickDelete(rowIndex)}
        >
          Удалить
        </div>
        <div
          role="button"
          tabIndex={0}
          className="small-size cursor"
          onClick={() => onClickEdit(rowIndex)}
        >
          Редактировать
        </div>
      </div>
    </tr>
  );
}

export default Row;
