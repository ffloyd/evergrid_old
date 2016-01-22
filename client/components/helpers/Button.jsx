Button = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(
      ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']
    ),
    size: React.PropTypes.oneOf(
      ['lg', 'sm', 'xs']
    ),
    block: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired,
  },

  render() {
    let classes = 'btn';

    if (this.props.type) {
      classes += ` btn-${this.props.type}`;
    }
    else {
      classes += ' btn-default';
    }

    if (this.props.size) {
      classes += ` btn-${this.props.type}`;
    }

    if (this.props.block) {
      classes += ' btn-block';
    }

    return (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  },
});
