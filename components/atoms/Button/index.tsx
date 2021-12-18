import { CSSProperties, HTMLProps } from 'react';

// import styles from './button.module.scss';

type IProps = {
    style?: CSSProperties;
};
const Button: React.FC<IProps & HTMLProps<HTMLDivElement>> = ({}) => {
    return <div></div>;
};

export default Button;
