import { Map, fromJS, List, Seq } from 'immutable';
import home from './homeState';
import user from './userState';
import hintState from './publicState';
import goodsDetailDefaultData from './goodsDetailState';
const list = [{
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',

  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}];

const testList = fromJS({list: list});
const initState = user.mergeDeep({ goodsDetail : goodsDetailDefaultData.toJS() },
                                 {home: home},
                                 {hintState: hintState},
                                );
export const testData = testList.toJS().list;
export default initState.toJS();
