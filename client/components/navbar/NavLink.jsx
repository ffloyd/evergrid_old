NavLink = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  },

  mixins: [ReactRouter.History],

  render() {
    let activeClass;
    if (this.history.isActive(this.props.to)) {
      activeClass = 'active';
    }

    return (
      <li className={activeClass}>
        <Link to={this.props.to}>{this.props.children}</Link>
      </li>
    );
  },
});
