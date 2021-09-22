import React from 'react';
import styled from 'styled-components';

interface CheckIconProps {
  onClick: () => void;
  checkStyle: 'Check' | 'Revert';
}

const CheckIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    svg {
      cursor: pointer;
      fill: var(--ic-brand-font-color-dark);
    }
  }
`;

const Check = (
  <svg
    className="canvas-tasks-check-button"
    fill="var(--ic-brand-font-color-dark-lightened-30)"
    height={13}
    version="1.1"
    viewBox="0 0 1920 1920"
    width={13}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
    />
  </svg>
);

const Revert = (
  <svg
    className="canvas-tasks-check-button"
    fill="var(--ic-brand-font-color-dark-lightened-30)"
    height={13}
    version="1.1"
    viewBox="0 0 1920 1920"
    width={13}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M960,0 L960,213.333333 C1371.62667,213.333333 1706.66667,548.266667 1706.66667,960 C1706.66667,1371.73333 1371.62667,1706.66667 960,1706.66667 C548.373333,1706.66667 213.333333,1371.73333 213.333333,960 C213.333333,762.986667 291.733333,577.493333 426.666667,439.253333 L426.666667,693.333333 L640,693.333333 L640,106.666667 L53.3333333,106.666667 L53.3333333,320 L244.373333,320 C88.64,494.08 0,720.96 0,960 C0,1489.28 430.613333,1920 960,1920 C1489.38667,1920 1920,1489.28 1920,960 C1920,430.72 1489.38667,0 960,0"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
    />
  </svg>
);

function CheckIcon({
  onClick,
  checkStyle,
}: CheckIconProps): React.ReactElement {
  return (
    <CheckIconWrapper onClick={onClick}>
      {checkStyle === 'Check' ? Check : Revert}
    </CheckIconWrapper>
  );
}

export default CheckIcon;
