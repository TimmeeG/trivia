import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class CustomText extends PureComponent {
  render() {
    const { children, style } = this.props;

    return (
      <Text style={style} allowFontScaling={false}>{children}</Text>
    );
  }
}

CustomText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape,
};

CustomText.defaultProps = {
  style: {
    fontSize: 24,
    color: 'black',
  },
};
