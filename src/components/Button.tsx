import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/styles';

type ButtonProps = {
  onClick: () => void;
  color?: string;
  label: string;
  icon?: string;
  hasIcon?: boolean;
  style?: ViewStyle;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  color,
  label,
  icon,
  hasIcon,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.button, {backgroundColor: color}, style]}>
      <View style={styles.button}>
        {hasIcon && icon ? (
          <Ionicons name={icon} size={24} color="#fff" />
        ) : null}
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
