import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 
        'Bearer MFuFEqJRnI6ZQZDQr_Yk1PiJl-7XaogN1c2MdJxe4QP7y_SRTdOdqAKDEspgXEgIp_Vl_wPbefpUoidDjZ2NkXzLyy9_J-G8T3ImQZujgSLE5Mdzp3DXwQ3V7m2sXnYx'
    }
});
