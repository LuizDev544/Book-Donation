import React from 'react';
import * as S from './Styles';

interface StatusBadgeProps {
    label: string;
    status: 'DISPONIVEL' | 'INDISPONIVEL' | 'DOADO';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ label, status }) => {
    return (
        <S.BadgeContainer $status={status}>
            {label}
        </S.BadgeContainer>
    );
};

export default StatusBadge;