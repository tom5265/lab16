import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogService from '../../services/blogservice/blogservice.svc';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepostviewcontrol.vc.html');
    
    constructor(private blogSvc: BlogService) {
        super();
    }

    context: any = {};
    
       navigatedTo(params: any): void {
       this.blogSvc.getSinglePost(params.id).then((post) => {
           this.context.post = post;
       });
       }
   }




register.viewControl('singlepostviewcontrol-vc', SinglePostViewControl, [BlogService]);
