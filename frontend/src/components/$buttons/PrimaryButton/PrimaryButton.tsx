import classNames from 'classnames';
import React from 'react';
import useAppSelector from '../../../hooks/useAppSelector';
import selectIsDisabled from '../../../store/button/selectors';

interface Props {
  value: string;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton = ({ value, className, onClick }: Props) => {
  const isDisabled = useAppSelector(selectIsDisabled);

  return (
    <input
      type="submit"
      className={classNames('primaryButton', className)}
      value={value}
      disabled={isDisabled}
      onClick={onClick}
    />
  );
};

export default PrimaryButton;
