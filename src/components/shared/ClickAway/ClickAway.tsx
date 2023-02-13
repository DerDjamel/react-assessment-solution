import {
  useRef,
  useEffect,
  RefCallback,
  cloneElement,
  ReactElement,
  HTMLAttributes,
  MutableRefObject,
  FC,
} from 'react'

type Events = FocusEvent | MouseEvent | TouchEvent

interface Props extends HTMLAttributes<HTMLElement> {
  onClickAway: (event: Events) => void
  children: ReactElement<any>
}

const focusEvent = 'focusin'
const mouseEvent = 'click'
const touchEvent = 'touchend'

const ClickAwayListener: FC<Props> = ({ children, onClickAway }) => {
  const node = useRef<HTMLElement | null>(null)
  const eventTarget = useRef<EventTarget | null>(null)
  const mountedRef = useRef(false)

  const handleChildRef = (childRef: HTMLElement) => {
    node.current = childRef
    const { ref } = children as typeof children & {
      ref: RefCallback<HTMLElement> | MutableRefObject<HTMLElement>
    }
    if (typeof ref === 'function') {
      ref(childRef)
    } else if (ref) {
      ref.current = childRef
    }
  }

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const sourceDoc = node.current?.ownerDocument ?? document
    const handleAllEvents = (event: Events): void => {
      if (!mountedRef.current) return
      if (
        (node.current && node.current.contains(event.target as Node)) ||
        eventTarget.current === event.target ||
        !sourceDoc.contains(event.target as Node)
      ) {
        return
      }
      onClickAway(event)
    }

    sourceDoc.addEventListener(mouseEvent, handleAllEvents)
    sourceDoc.addEventListener(touchEvent, handleAllEvents)
    sourceDoc.addEventListener(focusEvent, handleAllEvents)

    return () => {
      sourceDoc.removeEventListener(mouseEvent, handleAllEvents)
      sourceDoc.removeEventListener(touchEvent, handleAllEvents)
      sourceDoc.removeEventListener(focusEvent, handleAllEvents)
    }
  }, [onClickAway])

  return cloneElement(children, {
    ref: handleChildRef,
  })
}

export default ClickAwayListener
