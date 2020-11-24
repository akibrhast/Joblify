function isLogin(){
    const TOKEN_KEY = '_token';
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
}

export default isLogin;