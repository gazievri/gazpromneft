import './styles/@globals.sass';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { getData } from './utils/api'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './store/dataSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then(res => {
      dispatch(setData(res))
    }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App;
