import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogService from '../../services/blogservice/blogservice.svc';


export default class PostListViewControl extends BaseViewControl {
    templateString: string = require('./postlistviewcontrol.vc.html');
    
    constructor(private blogSvc: BlogService) {
        super();
    }

    context: any = {
        
    };
    
    navigatedTo(): void {
       this.blogSvc.getPosts().then((posts) => {
           this.context.posts = posts.reverse();
           console.log(posts);
       });
   }
}

register.viewControl('postlistviewcontrol-vc', PostListViewControl, [BlogService]);
