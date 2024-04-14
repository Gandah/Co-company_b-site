
interface ButtonProps {
    classnames: string;
    buttonLabel: string;
}

const Button = ({ classnames, buttonLabel }: ButtonProps) => {
  return (
    <button className={`${classnames}`}>{buttonLabel}</button>
  )
}

export default Button