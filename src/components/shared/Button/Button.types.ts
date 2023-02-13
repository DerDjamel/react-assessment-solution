export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element
  children: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}
