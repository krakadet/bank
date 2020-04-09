// @flow
import * as React from 'react';
import {converter} from "../constance/localize";

type Props = {|
  +personList: Array<string>,
  +headerList: Array<{ name: string }>,
|};

function PersonBlock(props: Props) {
  const { personList, headerList } = props;
  return (
    <>
      {personList.map((item, index) => {
        return (
          <div key={index + item}>
            <p>{converter[headerList[index].name]}: {item}</p>
          </div>
        );
      })}
    </>
  );
}

export default PersonBlock;
