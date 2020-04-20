class Auth {


    login(data, cb) {
        this.isLogin = true;
        localStorage.getItem('admincodeotoken', data);
        cb();
    };

    logout(cb) {
        this.isLogin = false;
        localStorage.removeItem('admincodeotoken');
        cb();
    };

    isAuthenticated() {
        if (localStorage.getItem('admincodeotoken')) {
            return true;
        }else {
            return false;
        }
    }

};

export default new Auth();