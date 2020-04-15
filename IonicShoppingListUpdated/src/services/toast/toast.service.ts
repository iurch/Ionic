import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable()
export class ToastService {
    constructor(private toastCtl: ToastController) {

    }

    show(message: string, duration: number = 3000) {
        return this.toastCtl.create({
            message,
            duration
        });
    }
}
