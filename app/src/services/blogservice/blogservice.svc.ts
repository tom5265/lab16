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
    sendPost(msg: any) {
        return this.http.json<any>({
            url: this.host + '/posts',
            method: 'POST',
            data: msg
        }).then((success) => {
            console.log(success)
        }, (err) => {
            console.log(err);
        })
    }
}

register.injectable('blogservice-svc', BlogService);
