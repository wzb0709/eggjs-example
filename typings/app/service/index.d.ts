// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProduct from '../../../app/service/product';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    product: ExportProduct;
    test: ExportTest;
  }
}
