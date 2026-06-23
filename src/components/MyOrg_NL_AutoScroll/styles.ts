import styled, { css } from 'styled-components';

/**
 * Wrapper that ensures the underlying <input> element produced by
 * Cosmos `Input` does NOT use CSS `text-overflow: ellipsis` — that
 * would fight our JS scroll animation.
 * We also disable pointer-events on the scrollbar (hidden but functional).
 */
export const StyledInputWrapper = styled.div(
  () => css`
    width: 100%;
    max-width: 10rem;

    /* Target the native <input> rendered inside Cosmos Input */
    input[type='text'] {
      /* Allow horizontal overflow so JS can drive scrollLeft */
      overflow-x: hidden;
      text-overflow: clip;
      white-space: nowrap;

      /* Hide the scrollbar visually across all browsers */
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE / Edge legacy */

      &::-webkit-scrollbar {
        display: none; /* Chrome / Safari */
      }
    }
  `,
);