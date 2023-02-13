export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  type?: 'text' | 'password'
  disabled?: boolean
}
