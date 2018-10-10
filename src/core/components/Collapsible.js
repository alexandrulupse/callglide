import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Collapsible as CollapsibleContainer, CollapsibleContent } from './styled';

class Collapsible extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: props.isOpen ? 'auto' : 0,
    };
  }

  componentWillReceiveProps = ({ isOpen }) => {
    setTimeout(() => {
      if (!this.contentRef) return;

      if (!isOpen) {
        this.setState({ height: this.contentRef.offsetHeight });
        setTimeout(() => {
          this.setState({ height: 0 });
        });

        return;
      }

      this.setState({
        height: this.contentRef.offsetHeight,
      });
    });
  };

  onTransitionEnd = () => {
    this.setState({
      height: this.props.isOpen ? 'auto' : 0,
    });
  };

  setContentRef = element => {
    this.contentRef = element;
  };

  render() {
    return (
      <CollapsibleContainer style={{ height: this.state.height }} onTransitionEnd={this.onTransitionEnd}>
        <CollapsibleContent innerRef={this.setContentRef}>{this.props.children}</CollapsibleContent>
      </CollapsibleContainer>
    );
  }
}

Collapsible.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsible;
