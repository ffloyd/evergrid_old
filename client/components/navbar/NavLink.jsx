NavLink = React.createClass({
  mixins: [ReactRouter.History],

  propTypes: {
    to: React.PropTypes.string.isRequired,
  },

  render() {
    let activeClass;
    if (this.history.isActive(this.props.to)) {
      activeClass = "active";
    }
    return (
      <li className={activeClass}>
        <Link to={this.props.to}>{this.props.children}</Link>
      </li>
    );
  },
});
