import classNames from 'classnames';
import '../sass/Scss.Components.scss';

type ButtonProps = {
  label: string;
  size: 'sm' | 'md' | 'lg';
  // backgroundColor: 'red' | 'blue' | 'green';
  className: string;
  onClick: () => void;
};

const Button = ({ label, size, onClick }: ButtonProps) => {
  const styles = classNames({
    small: size === 'sm',
    medium: size === 'md',
    large: size === 'lg',
  });
  return (
    <>
      <button className={styles} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
