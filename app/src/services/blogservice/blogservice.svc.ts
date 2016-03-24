import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {
    getPosts(): async.IAjaxThenable<Array<models.IPost>> {
       return this.http.json<any>({
        url: this.host + '/posts',
        method: 'GET'
    }).then((data) => {
        return data.response;
    });
    }
    getSinglePost(param: any): async.IAjaxThenable<Array<models.IPost>> {
        return this.http.json<any>({
            url: this.host + '/posts/' + param,
            method: 'GET'
        }).then((data) => {
            return data.response;
        })
    }
}

register.injectable('blogservice-svc', BlogService);
