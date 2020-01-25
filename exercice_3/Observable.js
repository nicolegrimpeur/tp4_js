class Observable extends Event_tab{

    constructor() {
        super();
    }

    on(eventName, callback) {
        super.nouveau(eventName, callback);
    }

    off(eventName, callback) {
        super.suppr(eventName, callback);
    }

    trigger(eventName, ...args) {
        super.find_event(eventName, args);
    }
}