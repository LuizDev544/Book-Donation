import React from 'react';
import * as S from './styles';

interface ActionModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'success';
}

const ActionModal: React.FC<ActionModalProps> = ({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    variant = 'success'
    }) => {
    if (!isOpen) return null;

    return (
        <S.Overlay>
        <S.ModalContent>
            <h3>{title}</h3>
            <p>{message}</p>
            <S.ButtonGroup>
            <S.Button $variant="cancel" onClick={onCancel}>
                {cancelText}
            </S.Button>
            <S.Button $variant={variant} onClick={onConfirm}>
                {confirmText}
            </S.Button>
            </S.ButtonGroup>
        </S.ModalContent>
        </S.Overlay>
    );
};

export default ActionModal;