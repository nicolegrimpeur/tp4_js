class Event_tab {
    constructor(eventName, callback) {
        this.eventName = eventName;
        this.callback = callback;
        this.tab = new Array({name: "", fonction: function () {}});
    }

    nouveau(eventName, callback) {
        tab.push({name: eventName, fonction: callback});
        console.log(tab);
    }

    suppr(eventName, callback) {
        for (let i = 0; i < tab.length; ++i) {
            if (tab[i].name == eventName && tab[i].fonction == callback) {
                tab.splice(i, 1);
            }
        }
    }
}