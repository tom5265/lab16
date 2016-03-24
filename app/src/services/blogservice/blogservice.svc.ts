import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogServiceService extends BaseService {

}

register.injectable('blogservice-svc', BlogServiceService);
