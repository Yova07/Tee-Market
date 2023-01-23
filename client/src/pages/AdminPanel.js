import AdminNavbar from '../components/AdminNavbar';
import AdminAsideNavbar from '../components/AdminAsideNavbar';
import AdminMainContent from '../components/AdminMainContent';

const AdminPanel = () => {

    return (
        <div>
            <AdminNavbar />
            <div className='flex'>
                <AdminAsideNavbar />
                <AdminMainContent />
            </div>
        </div>

    )
}

export default AdminPanel;