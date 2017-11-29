import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
    secureStorage: SecureStorage;
    constructor() {
        this.secureStorage = new SecureStorage();
        this.secureStorage.create('my_store')
            .then(
            () => console.log('Storage is ready!'),
            error => console.log(error)
            );
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('user-token') != null;
    }

} 