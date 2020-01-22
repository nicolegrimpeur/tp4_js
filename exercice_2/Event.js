class Event_tab {
    constructor(eventName, callback) {
        this.eventName = eventName;
        this.callback = callback;
        this.tab = new Array();
    }

    nouveau(eventName, callback) {
        for (let i = 0; i < this.tab.length; ++i) {
            if (this.tab[i].name == eventName) {
                return;
            }
        }
        this.tab.push({name: eventName, fonction: callback});
    }

    suppr(eventName, callback) {
        for (let i = 0; i < this.tab.length; ++i) {
            if (this.tab[i].name == eventName && this.tab[i].fonction == callback) {
                this.tab.splice(i, 1);
            }
        }
    }

    find_event(eventName, args) {
        for (let i = 0; i < this.tab.length; ++i) {
            if (this.tab[i].name == eventName) {
                this.tab[i].fonction.apply(null, args);
            }
        }
    }
}