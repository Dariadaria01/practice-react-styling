import React, { useContext } from 'react';
import { ButtonThemeContext } from './ButtonThemeProvider';
import { getButtonStyles } from './Button.styles';

const Button = ({
    children,
    variant = 'primary',
    size = 'sm',
    active = false,
    disabled = false,
    ...rest
}) => {
    const theme = useContext(ButtonThemeContext);

    const styles = getButtonStyles({
        variant,
        size,
        active,
        disabled,
        theme,
    });

    return (
        <button style={styles} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;