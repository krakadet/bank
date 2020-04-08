// @flow
import React, { useMemo, useState } from 'react';
import HeaderTable from './components/header-table';
import { Row } from './components/row';
import { headerList, rowsList } from './components/mock-responce';
import { personConst } from './constance/person-const';

import './App.css';
import Button from './components/button';

function App() {
  const [list, setList] = useState(rowsList);

  const handleDeleteClick = (indexRow: number) => {
    const filterList = list.filter((item, index) => index !== indexRow);
    setList(filterList);
  };
  const handleAddRow = () => {
    if (list.length > 0) {
      const rowLength = list[0].length;
      const emptyRow = Array(rowLength).fill('');
      const row = list.concat([emptyRow]);
      setList(row);
    }
  };

  const personIndex = useMemo(() => {
    let indexArr = [];
    headerList.forEach((nameData, index) => {
      if (personConst.includes(nameData.name)) {
        indexArr = indexArr.concat([index]);
      }
    });
    return indexArr;
  }, []);

  return (
    <div>
      <main className="app-header">
        <table className="table">
          <thead>
            <tr className="center">
              {headerList.map(nameData => (
                <HeaderTable key={nameData.name} nameData={nameData} />
              ))}
            </tr>
          </thead>

          <tbody>
            {list.map((row, index) => (
              <Row
                key={row}
                personIndex={personIndex}
                row={row}
                rowIndex={index}
                onButtonClick={indexRow => handleDeleteClick(indexRow)}
              />
            ))}
            <Button type="button" gray onClick={handleAddRow}>
              Add row
            </Button>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
