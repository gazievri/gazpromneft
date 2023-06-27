import './styles/@globals.sass';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './store/dataSlice';
import { BASE_URL } from './utils/constants';
import { sortDate } from './helpers/sortDate';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise1 = fetch(`${BASE_URL}/documents1`);
        const promise2 = fetch(`${BASE_URL}/documents2`);
        const responses = await Promise.all([promise1, promise2]);
        const jsonData = await Promise.all(responses.map(response => response.json()));

        dispatch(setData( sortDate( jsonData.flat())));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App;
