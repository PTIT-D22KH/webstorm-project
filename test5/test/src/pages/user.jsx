import UserTable from "../components/user/user_table.jsx";
import UserForm from "../components/user/user_form.jsx";

const UserPage = () => {
    return (
        <div>
            Users page

            <div>
                <UserForm/>
                <UserTable />
            </div>
        </div>
    )
}
export default UserPage;