import { type FC, useEffect, useRef, useState, useCallback } from 'react';
import {
  Input,
  Text,
  withConfiguration,
  type InputProps,
  type FormControlProps,
  type TestIdProp,
  useTestIds,
  createTestIds,
  withTestIds,
} from '@pega/cosmos-react-core';
import '../shared/create-nonce';
import { StyledInputWrapper } from './styles';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface PegaExtensionsAutoScrollTextFieldProps extends Omit<InputProps, 'onChange'>, TestIdProp {
  /** Bound Pega property connector */
  getPConnect: any;
  /** Validation/error message from Constellation engine */
  validatemessage?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Idle timeout in milliseconds before auto-scroll triggers */
  idleTimeout?: number;
  /** Whether the field has AI suggestions pending */
  hasSuggestions?: boolean;
  /** Display-only mode (read-only text rendering) */
  displayMode?: 'DISPLAY_ONLY' | '';
}

export interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

// ─── Test IDs ─────────────────────────────────────────────────────────────────

export const getAutoScrollTextFieldTestIds = createTestIds('auto-scroll-text-field', [] as const);

// ─── Component ────────────────────────────────────────────────────────────────

export const PegaExtensionsAutoScrollTextField: FC<PegaExtensionsAutoScrollTextFieldProps> = ({
  testId,
  getPConnect,
  validatemessage = '',
  helperText = '',
  label,
  labelHidden,
  placeholder,
  disabled,
  readOnly,
  required,
  hasSuggestions = false,
  idleTimeout = 2000,
  displayMode,
  value,
  ...restProps
}: PegaExtensionsAutoScrollTextFieldProps) => {
  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasValueChange = useRef(false);
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // State
  const [inputValue, setInputValue] = useState(value ?? '');
  const [status, setStatus] = useState<FormControlProps['status']>(
    hasSuggestions ? 'pending' : undefined,
  );
  const testIds = useTestIds(testId, getAutoScrollTextFieldTestIds);

  // Sync external value changes
  useEffect(() => {
    setInputValue(value ?? '');
  }, [value]);

  // Sync validation status
  useEffect(() => {
    if (hasSuggestions) {
      setStatus('pending');
    } else if (validatemessage !== '') {
      setStatus('error');
    } else if (status !== 'success') {
      setStatus(undefined);
    }
  }, [validatemessage, hasSuggestions, status]);

  // ─── Auto-Scroll Logic ─────────────────────────────────────────────────────

  /**
   * Smoothly scrolls the input from scrollLeft=0 to scrollLeft=max,
   * using requestAnimationFrame for a fluid, linear animation.
   * Duration scales with text length (capped at 3s).
   */
  const performAutoScroll = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return; // text fits — nothing to scroll

    isScrollingRef.current = true;
    el.scrollLeft = 0;

    const duration = Math.min(300 + maxScroll * 4, 3000); // 300ms base + 4ms/px, max 3s
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-in-out cubic for natural deceleration
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      el.scrollLeft = eased * maxScroll;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        el.scrollLeft = maxScroll; // snap to exact end
        isScrollingRef.current = false;
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  }, []);

  /**
   * Resets any in-progress scroll animation and cancels pending idle timer.
   * Called on every keystroke so typing always interrupts the scroll.
   */
  const cancelAutoScroll = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    isScrollingRef.current = false;
    // Snap the input back to where the cursor is while typing
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, []);

  /**
   * Schedules the auto-scroll after `idleTimeout` ms of no typing.
   */
  const scheduleAutoScroll = useCallback(
    (currentValue: string) => {
      cancelAutoScroll();
      if (!currentValue || currentValue.length === 0) return;
      idleTimerRef.current = setTimeout(performAutoScroll, idleTimeout);
    },
    [cancelAutoScroll, performAutoScroll, idleTimeout],
  );

  // Cleanup timers and rAF on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // ─── Event Handlers ────────────────────────────────────────────────────────

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value;
    if (hasSuggestions) setStatus(undefined);
    setInputValue(newVal);
    if (value !== newVal) {
      actions.updateFieldValue(propName, newVal);
      hasValueChange.current = true;
    }
    // Each keystroke: cancel any running scroll, then restart idle timer
    scheduleAutoScroll(newVal);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!value || hasValueChange.current) {
      actions.triggerFieldChange(propName, event.target.value);
      if (hasSuggestions) pConn.ignoreSuggestion('');
      hasValueChange.current = false;
    }
    // When user leaves the field, trigger scroll immediately if text overflows
    cancelAutoScroll();
    if (event.target.scrollWidth > event.target.clientWidth) {
      performAutoScroll();
    }
  };

  const handleFocus = () => {
    // Typing resumes — cancel any running animation
    cancelAutoScroll();
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  };

  const handleKeyDown = () => {
    // Cancel scroll the moment user presses any key
    cancelAutoScroll();
  };

  // ─── Display-only mode ─────────────────────────────────────────────────────

  if (displayMode === 'DISPLAY_ONLY') {
    return <Text>{inputValue || ''}</Text>;
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <StyledInputWrapper>
      <Input
        {...restProps}
        ref={inputRef}
        testId={testIds.root}
        type='text'
        label={label}
        labelHidden={labelHidden}
        placeholder={placeholder}
        value={inputValue}
        status={status}
        info={validatemessage || helperText}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
    </StyledInputWrapper>
  );
};

export default withTestIds(
  withConfiguration(PegaExtensionsAutoScrollTextField),
  getAutoScrollTextFieldTestIds,
);