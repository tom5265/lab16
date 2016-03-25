import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogService from '../../services/blogservice/blogservice.svc';
import PostListViewControl from '../postlistviewcontrol/postlistviewcontrol.vc';

export default class ComposePostViewControl extends BaseViewControl {
    templateString: string = require('./composepostviewcontrol.vc.html');

constructor(private blogSvc: BlogService) {
        super();
       let message = {title: '', author: '', content: ''};
       message.title = this.context.title;
       message.author = this.context.author;
       message.content = this.context.content;
       
    }

    context: any = {
        title: '',
        author: '',
        content: ''
    };
    
   send() {
       let message = {title: this.context.title, author: this.context.author, content: this.context.content};
       this.blogSvc.sendPost(message);
       this.navigator.navigate(PostListViewControl);
       
   }
   
}

register.viewControl('composepostviewcontrol-vc', ComposePostViewControl, [BlogService]);
