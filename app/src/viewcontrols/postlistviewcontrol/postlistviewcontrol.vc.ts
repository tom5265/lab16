import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PostListViewControlViewControl extends BaseViewControl {
    templateString: string = require('./postlistviewcontrol.vc.html');

    context: any = {};
}

register.viewControl('postlistviewcontrol-vc', PostListViewControlViewControl);
