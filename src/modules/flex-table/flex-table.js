// @flow
import * as React from 'react';
import NavBar from '../../components/nav-bar/nav-bar';
import PersonBlock from '../../components/person-block';
import { headerList, rowsList } from '../../constance/mock-responce';

import './flex-table.css';

function FlexTable() {
  return (
    <div>
      <NavBar />

      <div className="flex-container">
        {rowsList.map((row, index) => (
          <div key={index} className="flex-item">
            <PersonBlock personList={row} headerList={headerList} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlexTable;
