import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
    background: ${props => props.theme.colors.card};
    padding: 30px;
    border-radius: ${props => props.theme.borderRadius.lg};
    box-shadow: ${props => props.theme.shadows.login};
    width: 90%;
    max-width: 450px;
    text-align: center;

    h3 {
        color: ${props => props.theme.colors.secondary};
        margin-bottom: 15px;
    }

    p {
        color: ${props => props.theme.colors.textMuted};
        margin-bottom: 25px;
    }
    `;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    `;

export const Button = styled.button<{ $variant?: 'danger' | 'success' | 'cancel' }>`
    padding: 10px 25px;
    border-radius: ${props => props.theme.borderRadius.md};
    font-weight: bold;
    transition: 0.3s;

    background-color: ${props => {
        switch (props.$variant) {
        case 'danger': return props.theme.colors.danger;
        case 'success': return props.theme.colors.success;
        default: return props.theme.colors.border;
        }
    }};

    color: ${props => props.$variant === 'cancel' ? props.theme.colors.textDark : props.theme.colors.textLight};

    &:hover {
        filter: brightness(0.9);
        transform: translateY(-2px);
    }
`;