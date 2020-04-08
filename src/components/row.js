// @flow
import * as React from 'react';

import '../App.css';
import Button from './button';

type Props = {|
  row: Array<string>,
  onButtonClick: number => void,
  rowIndex: number,
  personIndex: Array<number>,
|};

export const Row = (props: Props) => {
  const { row, onButtonClick, rowIndex, personIndex } = props;
  return (
    <tr>
      {row.map((tag, index) => (
        <td key={tag} className={personIndex.includes(index) ? 'active center' : 'active'}>
          {tag}
        </td>
      ))}
      <div className="wrap">
        <Button type="button" bold blue onClick={() => onButtonClick(rowIndex)}>
          Delete
        </Button>
        <Button
          className="intent-left"
          type="button"
          bold
          gray
          onClick={() => onButtonClick(rowIndex)}
        >
          Edit
        </Button>
      </div>
    </tr>
  );
};
