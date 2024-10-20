import {useLocation} from 'react-router-dom'

const PrivateRoutes = ({chlidren}) => {
    const location = useLocation();
  return (
    <div>PrivateRoutes</div>
  )
}

export default PrivateRoutes;