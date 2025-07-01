import LightSwitch from '../ui/lightSwitch';
import HeaderMenu from './HeaderMenu';

const HeaderDashboard = () => {
  return (
    <div className='px-3 py-2 flex justify-between'>
      <div className='content-center'>ADMINX</div>
      <div className='flex space-x-3'>
        <div className='content-center'>
          <LightSwitch />
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export default HeaderDashboard;
