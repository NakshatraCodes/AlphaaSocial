export const AuthService = {
     isAuthenticated: true,
    isLoggedIn() {
        return this.isAuthenticated && sessionStorage.getItem('authToken') ? true : false;
    },
    authenticate(token,userData) {
        if (token) {
            this.isAuthenticated = true
            sessionStorage.setItem('authToken', token);

        }
    },
    setUserData(userData){
        if (this.isAuthenticated && userData.data) {
            sessionStorage.setItem('userData', JSON.stringify(userData.data));
        }
    },
    signOut() {
        this.isAuthenticated = false
        sessionStorage.clear();
    }
};
