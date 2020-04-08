// @flow

import person from '../person.json';

const toJSon = JSON.stringify(person);
const mockResponce = JSON.parse(toJSon);
const data = mockResponce.description === 'Request Ok' ? mockResponce.data : null;

export const headerList = data ? data.metaData : null;
export const rowsList = data ? data.rows : null;
