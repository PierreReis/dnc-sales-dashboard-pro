export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
