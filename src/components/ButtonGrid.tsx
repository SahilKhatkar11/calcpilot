import React, { useRef } from 'react';
import { Delete } from 'lucide-react';
import { ButtonConfig, ButtonType } from '../types';

interface ButtonGridProps {
  onKeyPress: (key: string) => void;
  onTriggerGlow: (row: number, col: number, type: ButtonType, key: string) => void;
  activeGlows: { [buttonId: string]: string }; // id -> active class name or glow edge class name
}

const BUTTON_CONFIGS: ButtonConfig[] = [
  // Row 0
  { key: '(', label: '(', type: 'utility', row: 0, col: 0 },
  { key: ')', label: ')', type: 'utility', row: 0, col: 1 },
  {
    key: '**',
    label: (
      <span>
        x<sup>y</sup>
      </span>
    ),
    type: 'utility',
    row: 0,
    col: 2,
    className: 'text-lg',
  },
  { key: 'sqrt', label: '√', type: 'utility', row: 0, col: 3 },

  // Row 1
  {
    key: 'C',
    label: <span className="text-[#ff453a] font-medium">C</span>,
    type: 'utility',
    row: 1,
    col: 0,
    className: '!text-[#ff453a]',
  },
  {
    key: 'backspace',
    label: <Delete className="w-5 h-5 pointer-events-none" />,
    type: 'utility',
    row: 1,
    col: 1,
  },
  { key: '%', label: '%', type: 'utility', row: 1, col: 2 },
  { key: '/', label: '÷', type: 'operator', row: 1, col: 3 },

  // Row 2
  { key: '7', label: '7', type: 'number', row: 2, col: 0 },
  { key: '8', label: '8', type: 'number', row: 2, col: 1 },
  { key: '9', label: '9', type: 'number', row: 2, col: 2 },
  { key: '*', label: '×', type: 'operator', row: 2, col: 3 },

  // Row 3
  { key: '4', label: '4', type: 'number', row: 3, col: 0 },
  { key: '5', label: '5', type: 'number', row: 3, col: 1 },
  { key: '6', label: '6', type: 'number', row: 3, col: 2 },
  { key: '-', label: '−', type: 'operator', row: 3, col: 3 },

  // Row 4
  { key: '1', label: '1', type: 'number', row: 4, col: 0 },
  { key: '2', label: '2', type: 'number', row: 4, col: 1 },
  { key: '3', label: '3', type: 'number', row: 4, col: 2 },
  { key: '+', label: '+', type: 'operator', row: 4, col: 3 },

  // Row 5
  {
    key: '0',
    label: '0',
    type: 'number',
    row: 5,
    col: 0,
    colSpan: 2,
    className: 'rounded-[30px]',
  },
  { key: '.', label: '.', type: 'number', row: 5, col: 2 },
  { key: '=', label: '=', type: 'operator', row: 5, col: 3, className: 'text-2xl' },
];

export const ButtonGrid: React.FC<ButtonGridProps> = ({
  onKeyPress,
  onTriggerGlow,
  activeGlows,
}) => {
  const lastPointerDownRef = useRef<number>(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>, btn: ButtonConfig) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    lastPointerDownRef.current = Date.now();

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(5);
      } catch (err) {
        // Ignore if unsupported
      }
    }

    onTriggerGlow(btn.row, btn.col, btn.type, btn.key);
    onKeyPress(btn.key);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, btn: ButtonConfig) => {
    // If pointerdown already triggered this within 350ms, prevent duplicate execution
    if (Date.now() - lastPointerDownRef.current < 350) {
      return;
    }
    onTriggerGlow(btn.row, btn.col, btn.type, btn.key);
    onKeyPress(btn.key);
  };

  const getButtonTypeClass = (type: ButtonType) => {
    switch (type) {
      case 'operator':
        return 'btn-operator';
      case 'utility':
        return 'btn-utility';
      default:
        return 'btn-number';
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {BUTTON_CONFIGS.map((btn) => {
        const btnId = `btn-${btn.row}-${btn.col}`;
        const activeClass = activeGlows[btnId] || '';
        const colSpanClass = btn.colSpan === 2 ? 'col-span-2' : (btn.colSpan ? `col-span-${btn.colSpan}` : '');
        const customClass = btn.className || '';

        return (
          <button
            key={btnId}
            onPointerDown={(e) => handlePointerDown(e, btn)}
            onClick={(e) => handleClick(e, btn)}
            className={`btn-calc ${getButtonTypeClass(btn.type)} ${colSpanClass} ${customClass} ${activeClass}`}
            data-key={btn.key}
            data-row={btn.row}
            data-col={btn.col}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};
