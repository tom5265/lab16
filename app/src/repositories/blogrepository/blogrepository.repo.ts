import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class BlogRepositoryRepository extends BaseRepository {

}

register.injectable('blogrepository-repo', BlogRepositoryRepository);
