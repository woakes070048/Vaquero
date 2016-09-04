import React, {Component} from 'react';
import classNames from 'classnames/bind';

export class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let iconClassNames = classNames('material-icons', this.props.className)
    return(
      <span className={iconClassNames}>{this.props.iconName}</span>
    );
  }
}
