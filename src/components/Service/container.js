import { connect } from 'react-redux';
import _get from 'lodash/get';
import sift from 'sift';

const getData = (rootState, { name, namespace, find, get }) => {

  const method = get ? 'get' : 'find';
  const defaultResult = (method === 'find') ? [] : null;

  if (namespace) {
    return _get(rootState, `${name}.namespaces.${namespace}.${method}.result`, defaultResult);
  }

  return _get(rootState, `${name}.${method}.result`, defaultResult);
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
