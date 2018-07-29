import container from './container';

const Snapshot = ({ data, render, renderEach, findOne }) => {
  if (renderEach && !findOne) {
    return data.map(renderEach);
  } else {
    return render(data);
  }
};

export default container(Snapshot);