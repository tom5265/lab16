import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ComposePostViewControlViewControl extends BaseViewControl {
    templateString: string = require('./composepostviewcontrol.vc.html');

    context: any = {};
}

register.viewControl('composepostviewcontrol-vc', ComposePostViewControlViewControl);
