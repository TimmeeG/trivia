import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import he from 'he';
import colors from '../colors';

export default class CustomText extends PureComponent {
  render() {
    const {children, style} = this.props;

    if (!children) return <Text />;

    return (
      <Text style={style} allowFontScaling={false}>
        {he.decode(children)}
      </Text>
    );
  }
}
