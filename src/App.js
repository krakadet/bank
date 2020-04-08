// @flow
import React, { useMemo, useState } from 'react';
import Row from './components/row';
import { headerList, rowsList } from './components/mock-responce';
import { personConst } from './constance/person-const';
import Modal from './components/modal/modal';
import { converter } from './components/localize';

import './App.css';

function App() {
  const [list, setList] = useState(rowsList);
  const [isShowing, setIsShowing] = useState(false);
  const [currentRowId, setCurrentRowId] = useState('');
  const [listEditTemp, setListEditTemp] = useState([]);

  const handleDeleteClick = (indexRow: number) => {
    const filterList = list.filter((item, index) => index !== indexRow);
    setList(filterList);
  };

  const handleEditClick = (indexRow: number) => {
    setIsShowing(true);
    setCurrentRowId(indexRow);
    const chooseRow = list[indexRow];
    setListEditTemp(chooseRow);
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

  const handleAddRow = () => {
    if (headerList.length > 0) {
      const rowLength = headerList.length;
      const emptyRow = Array(rowLength).fill('');
      const row = list.concat([emptyRow]);
      setList(row);
    }
  };

  const handleChange = (value: string, indexVal: number) => {
    const tempChange = listEditTemp.map((val, index) => (indexVal === index ? value : val));
    setListEditTemp(tempChange);
  };

  const handleSubmitRow = () => {
    const changeRows = list.map((item, index) => (index === currentRowId ? listEditTemp : item));
    setList(changeRows);
    setIsShowing(false);
  };

  return (
    <div>
      <main className="app-header">
        <table className="table">
          <thead>
            <tr className="center">
              {headerList.map(nameData => (
                <th key={nameData.name}>{converter[nameData.name]}</th>
              ))}
            </tr>
          </thead>

          <tfoot>
            <tr>
              <td colSpan={list && list[0] ? list[0].length : 0} />
              <td>
                <button className="button is-info" type="button" onClick={handleAddRow}>
                  Добавить строку
                </button>
              </td>
            </tr>
          </tfoot>

          <tbody>
            {list.map((row, index) => (
              <Row
                key={index}
                personIndex={personIndex}
                row={row}
                rowIndex={index}
                onClickDelete={indexRow => handleDeleteClick(indexRow)}
                onClickEdit={indexRow => handleEditClick(indexRow)}
              />
            ))}
          </tbody>
        </table>
        <Modal onClose={() => setIsShowing(!isShowing)} isShowing={isShowing}>
          <form>
            <div className="wrap">
              {listEditTemp.map((tag, index) => (
                <div key={index} className="field intent-bottom">
                  <label className="small-size" htmlFor={headerList[index].name}>
                    {converter[headerList[index].name]}
                  </label>
                  <div className="control">
                    <input
                      id={headerList[index].name}
                      type="text"
                      name={headerList[index].name}
                      className={
                        personIndex.includes(index) ? 'active center input' : 'active input'
                      }
                      value={tag || ''}
                      onChange={event => {
                        handleChange(event.target.value, index);
                      }}
                      autoFocus
                    />
                  </div>
                </div>
              ))}
            </div>
          </form>
          <button className="button is-success" type="button" onClick={handleSubmitRow}>
            Применить
          </button>
        </Modal>
      </main>
    </div>
  );
}

export default App;
