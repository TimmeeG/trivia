import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import he from 'he';

interface State {}

interface OwnProps {
  children: string;
  style: Object;
}

type Props = OwnProps;

export default class CustomText extends PureComponent<Props, State> {
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
