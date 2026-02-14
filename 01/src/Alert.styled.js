import styled from 'styled-components';

const defaultColors = {
  primary: {
    background: '#cfe2ff',
    text: '#084298',
    border: '#b6d4fe',
  },
  secondary: {
    background: '#e2e3e5',
    text: '#41464b',
    border: '#d3d6d8',
  },
};

export const StyledAlert = styled.div`
  ${({ theme, variant = 'primary' }) => {
  const colors =
      theme?.alert?.[variant] || defaultColors[variant];
       return `
      padding: 16px;
      border-radius: 4px;
      background-color: ${colors.background};
      color: ${colors.text};
      border: 1px solid ${colors.border};
     `;
  }}
`;