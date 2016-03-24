import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SinglePostViewControlViewControl extends BaseViewControl {
    templateString: string = require('./singlepostviewcontrol.vc.html');

    context: any = {};
}

register.viewControl('singlepostviewcontrol-vc', SinglePostViewControlViewControl);
