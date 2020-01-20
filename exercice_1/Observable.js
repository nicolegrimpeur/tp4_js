class Observable extends Event_tab{

    constructor(eventName, callback) {
        super(eventName, callback);
    }

    on(eventName, callback) {
        super.nouveau(eventName, callback);
    }

    off(eventName, callback) {
        super.suppr(eventName, callback);
    }

    trigger(eventName, ...args) {

    }
}