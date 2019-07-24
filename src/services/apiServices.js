import Axios from 'axios';

let _singleton = null;

class APIService {
    constructor() {
        if (!_singleton) {
            _singleton = this;
        } else {
            return _singleton;
        }
    }

    post = (url, params) => {
        try {
            return Axios({
                method: 'post',
                url,
                data: params
            });
        } catch (err) {
            return err;
        }
    }

    get(url) {
        try {
            return Axios({
                method: 'get',
                url
            });
        } catch (err) {
            return err;
        }
    }

    patch(url, params) {
        try {
            return Axios({
                method: 'patch',
                url,
                data: params
            });
        } catch (err) {
            return err;
        }
    }

    delete(url) {
        try {
            return Axios({
                method: 'delete',
                url
            });
        } catch (err) {
            return err;
        }
    }
}

export default new APIService();
