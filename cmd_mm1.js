function CMD_MM1() {};

CMD_MM1.vuMeterUpdate = function (value, group, control) {
    value = (value*15)+48;
    if (control === "VuMeterL") {
        midi.sendShortMsg(0xB4, 80, value);
    } else if (control === "VuMeterR") {
        midi.sendShortMsg(0xB4, 81, value);
    }
}

CMD_MM1.initLEDs = function () {
    midi.sendShortMsg(0xB4, 80, 48);
    midi.sendShortMsg(0xB4, 81, 48);
}

CMD_MM1.init = function () {
    CMD_MM1.initLEDs();
    engine.connectControl("[Master]", "VuMeterL", "CMD_MM1.vuMeterUpdate");
    engine.connectControl("[Master]", "VuMeterR", "CMD_MM1.vuMeterUpdate");
}

CMD_MM1.shutdown = function () {
    CMD_MM1.initLEDs();
};
