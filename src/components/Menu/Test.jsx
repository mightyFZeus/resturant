import toast, { Toaster } from 'react-hot-toast';
import './Styles.css'
const notify = () => toast('Here is your toast.');
const Test = () => {
  return (
    <div>
      <button className='none' onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default Test