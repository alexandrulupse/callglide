import React, { PureComponent } from 'react';
import RouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';

const reloadable = Component =>
  withRouter(
    class extends PureComponent {
      static propTypes = {
        location: RouterPropTypes.location.isRequired,
      };

      static defaultProps = {
        location: undefined,
      };

      state = { isReloading: false };

      componentWillReceiveProps(nextProps) {
        if (this.props.location !== nextProps.location) this.reload();
      }

      reload = () => {
        this.setState({ isReloading: true });
        setTimeout(() => {
          this.setState({ isReloading: false });
        });
      };

      render() {
        return this.state.isReloading ? <div /> : <Component {...this.props} />;
      }
    },
  );

export default reloadable;
