// @flow
import * as React from 'react';
import './button.css';

type classNameParams = {
  +bold?: boolean,
  +small?: boolean,
  +blue?: boolean,
  +gray?: boolean,
};

function getBtnClassName(params: classNameParams = {}) {
  let className = 'btn';

  if (params.blue) {
    className += ' btn-blue';
  }

  if (params.gray) {
    className += ' btn-gray';
  }

  if (params.bold) {
    className += ' btn-bold';
  }
  if (params.small) {
    className += ' btn-small';
  }

  return className;
}

type Props = {
  +children: React.Node | string,
  type?: 'button' | 'submit',
  onClick?: Function,
  disabled?: boolean,
  bold?: boolean,
  small?: boolean,
  blue?: boolean,
  gray?: boolean,
  form?: string,
};

export default function Button(props: Props) {
  const { type, children, disabled, bold, small, blue, gray, onClick, form } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={getBtnClassName({
        bold,
        small,
        blue,
        gray,
      })}
      onClick={onClick}
      {...(form ? { form } : {})}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  form: '',
  onClick: undefined,
  type: 'button',
  disabled: false,
  filled: false,
  bold: false,
  small: false,
  blue: false,
  gray: false,
};
