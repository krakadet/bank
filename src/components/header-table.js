// @flow
import * as React from 'react';

import '../App.css';

type Props = {|
  +nameData: { name: string },
|};

function HeaderTable(props: Props) {
  const { nameData } = props;
  return <th className="lower-case">{nameData.name}</th>;
}

export default HeaderTable;
