import { Component } from 'react';
import container from './container';


class Service extends Component {

  componentWillMount() {
    const { name, namespace, find, get, params, dispatch } = this.props;

    if (get) {
      dispatch[name].get({ id: get, params, namespace })
    } else {
      console.log('find', find)
      dispatch[name].find({ params: find, namespace })
    }
  }

  render() {
    const { data, render, renderEach, get } = this.props;
    if (renderEach && !get) {
      debugger;
      const result = data.data || data;
      return result.map(renderEach);
    } else {
      return render(data);
    }
  }
  
}

export default container(Service);