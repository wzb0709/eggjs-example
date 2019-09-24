// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProduct from '../../../app/service/product';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    product: ExportProduct;
    test: ExportTest;
    user: ExportUser;
  }
}
