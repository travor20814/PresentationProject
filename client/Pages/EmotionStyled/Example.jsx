// @flow
import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const bounceAnimate = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const withBounceAnimation = css`
  animation-name: ${bounceAnimate};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1px;
  ${({ withAnimation }) => (withAnimation ? withBounceAnimation : null)};

  &:hover {
    animation-name: none;
  }
`;

function Example() {
  return (
    <Wrapper>
      <Title withAnimation>
        My custom title
      </Title>
    </Wrapper>
  );
}

export default Example;
