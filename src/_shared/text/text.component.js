import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

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
  style: Text.propTypes.style,
};

CustomText.defaultProps = {
  style: {
    fontSize: 24,
    color: colors.black,
  },
};
