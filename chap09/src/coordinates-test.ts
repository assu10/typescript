// ./model/coordinates 는 파일명이 아니라 디렉터리명이다.
// 해당 디렉터리에 index.ts 파일이 있으면 타입스크립트 컴파일러는 './model/coordinates/index/ts' 로 해석한다.
import {ICoordinates, makeRandomICoordinates} from "./model/coordinates";

const coordinates: ICoordinates = makeRandomICoordinates();
console.log(coordinates);   // { latitude: -70.33719, longitude: 138.98725 }