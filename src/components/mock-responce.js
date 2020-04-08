// @flow

import person from '../person.json';

console.log(person);

const toJSon = JSON.stringify(person);
console.log(toJSon);

const mockResponce = JSON.parse(toJSon);

const data = mockResponce.description === 'Request Ok' ? mockResponce.data : null;

export const headerList = data ? data.metaData : null;
export const rowsList = data ? data.rows : null;
