import axios from 'axios';
const instance = axios.create({ baseURL: 'https://futr.infosparkles.com/admin/api' });
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.params = {
    'user_id' : localStorage.getItem("futr_userId"),
}
export default instance