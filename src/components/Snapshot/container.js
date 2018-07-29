import { connect } from 'react-redux';
import get from 'lodash/get';
import sift from 'sift';

const getData = (rootState, { name, publication, find, findOne }) => {
  const data = (publication)
    ? get(rootState, `${name}.publications.${publication}`, [])
    : get(rootState, `${name}.store`, []);

  if (findOne) {
    const [record] = sift(findOne, data);
    return record;
  }

  if (find) {
    return sift(find, data);
  }

  return data;
};

const mapStateToProps = (rootState, props) => ({
  rootState,
  data: getData(rootState, props)
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default (component) =>
  connect(mapStateToProps, mapDispatchToProps)(component)
