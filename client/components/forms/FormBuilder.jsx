FormBuilder = React.createClass({
  propTypes: {
    schema: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    submitText: React.PropTypes.string,
    defaultValues: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      defaultValues: {},
      submitText: 'Save',
    };
  },

  getInitialState() {
    return {
      values: this.props.defaultValues,
      context: this.props.schema.newContext(),
      validateEveryChange: false,
    };
  },

  componentWillUpdate(nextProps, nextState) {
    if (this.state.validateEveryChange) {
      this.state.context.validate(nextState.values);
    }
  },

  *genFields() {
    schemaDef = this.props.schema.schema();
    context = this.state.context;

    for (const field of Object.keys(schemaDef)) {
      const config = schemaDef[field];
      let error;
      if (context.keyIsInvalid(field)) {
        error = context.keyErrorMessage(field);
      }
      const commonProps = {
        key: field,
        field: field,
        label: config.label,
        value: this.state.values[field],
        error: error,
        onChange: this.onFieldChange(field, config.fieldType),
      };
      const selectionProps = {
        options: config.humanOptions,
      };

      switch (config.fieldType) {
      case FieldTypes.textInput:
        yield (<TextInput {...commonProps}/>);
        break;
      case FieldTypes.textArea:
        yield (<TextArea {...commonProps}/>);
        break;
      case FieldTypes.carinaConfig:
        yield (<CarinaConfigField {...commonProps}/>);
        break;
      case FieldTypes.radioButtons:
        yield (<RadioButtons {...commonProps} {...selectionProps}/>);
        break;
      default:
        throw new Error('Unknown field type');
      }
    }
  },

  updateField(field, value) {
    this.setState({
      values: {
        ...this.state.values,
        [field]: value,
      },
    });
  },

  onFieldChange(field, fieldType) {
    switch (fieldType) {
    case FieldTypes.textInput:
    case FieldTypes.textArea:
    case FieldTypes.radioButtons:
      return (event) => {
        this.updateField(field, event.target.value);
      };
    case FieldTypes.carinaConfig:
      return (newFileId) => {
        this.updateField(field, newFileId);
      };
    default:
      throw new Error('Unknown field type');
    }
  },

  onSubmit(event) {
    event.preventDefault();
    this.state.context.validate(this.state.values);
    if (this.state.context.isValid()) {
      this.props.onSubmit({...this.state.values, ...this.state.fileValues});
    } else {
      this.setState({
        validateEveryChange: true,
      });
    }
  },

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.onSubmit}>
        {[...this.genFields()]}
        <Right>
          <SubmitButton>{this.props.submitText}</SubmitButton>
        </Right>
      </form>
    );
  },
});
