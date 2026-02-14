export const getButtonStyles = ({
    variant,
    size,
    active,
    disabled,
    theme,
}) => {
    const variantStyles = theme.variants[variant];
    const sizeStyles = theme.sizes[size];

    return {
        backgroundColor: variantStyles.background,
        color: variantStyles.color,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        border: 'none',
        borderRadius: '0.375rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        boxShadow: active ? 'inset 0 3px 5px rgba(0,0,0,.125)' : 'none',
    };
};