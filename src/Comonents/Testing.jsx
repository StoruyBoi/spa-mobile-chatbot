import { useDispatch } from 'react-redux';
import { setUserData } from './actions';

const Testing = () => {
  const dispatch = useDispatch();

  const handleSetUserData = () => {
    const userData = {
      name: 'jasminder',
      email: 'john@example.com',
      // Add other user data properties

    };
    dispatch(setUserData(userData));
  };


  // ...
};
export default  Testing;