import { Circle, CircleProps } from '../styled-system/jsx'

type Props = {
  size: CircleProps['size']
  backgroundColor: CircleProps['backgroundColor']
}

const CustomCircle = (props: Props) => {
  return <Circle {...props} />
}

export default CustomCircle
