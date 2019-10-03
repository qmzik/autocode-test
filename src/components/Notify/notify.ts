import Vue from 'vue';
import NotificationVue from './Notification.vue';

const NotificationConstructor = Vue.extend(NotificationVue);

let instance;

const Notification = (options: any) => {
    options = options || {};

    instance = new NotificationConstructor({
        data: options,
    });

    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);

    return instance.vm;
};

export default Notification;
