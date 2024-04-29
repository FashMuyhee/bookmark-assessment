import React from 'react';
import {BaseToast, ToastConfig, BaseToastProps} from 'react-native-toast-message';
import {COLORS, FONTS, IS_ANDROID, SCREEN_WIDTH} from '@utils';

type ToastType = 'success' | 'error';

interface ToastProp extends BaseToastProps {
  type: ToastType;
}

const CustomToast = ({type, ...props}: ToastProp) => {
  const bgColor = React.useMemo(() => {
    if (type == 'error') {
      return '#c40a09';
    }
    return COLORS.PRIMARY;
  }, [type]);

  return (
    <BaseToast
      {...props}
      style={{
        width: SCREEN_WIDTH,
        elevation: 0,
        backgroundColor: bgColor,
        height: IS_ANDROID ? 55 : 80,
        borderRadius: 0,
        borderLeftWidth: 0,
        marginBottom: IS_ANDROID ? -10 : undefined,
      }}
      text1Style={{
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: 'white',
        fontWeight: '400',
        marginTop: !IS_ANDROID ? 30 : 0,
      }}
      text2Style={{
        fontSize: 12,
        fontFamily: FONTS.REGULAR,
        color: 'white',
        marginTop: -5,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1NumberOfLines={3}
    />
  );
};

const toastConfig: ToastConfig = {
  success: (props: BaseToastProps) => <CustomToast type="success" {...props} />,
  error: (props: BaseToastProps) => <CustomToast type="error" {...props} />,
};

export default toastConfig;
