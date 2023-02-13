export type classesType = {
  container?: string
  input?: string
  menu?: string
}

export interface SelectProps<T> {
  options: T[]
  classes?: classesType
  renderItem: (item: T) => any
  value: T
  onChange: (e: React.ChangeEvent, item: T) => void
  getOptionSelected: (item: T, value: T) => boolean
}
