var BinaryWriter = require("./BinaryWriter");

class AddNode {
    constructor(playerTracker, item) {
        this.playerTracker = playerTracker;
        this.item = item;
    }
    build(protocol) {
        var writer = new BinaryWriter();
        writer.writeUInt8(0x20); // Packet ID
        writer.writeUInt32((this.item.nodeId ^ this.playerTracker.scrambleId) >>> 0);
        return writer.toBuffer();
    }
}

module.exports = AddNode;