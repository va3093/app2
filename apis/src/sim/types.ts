// TODO: Extract to library

export class Address {
    address: Buffer

    constructor(address: Buffer) {
        this.address = address;
    }

    toJSON() {
        // TODO: Serialize with checksum
        return "0x" + this.address.toString('hex');
    }

    static from(s: string): Address {
        if (s.startsWith("0x")) {
            return new Address(Buffer.from(s.slice(2), 'hex'));
        }
        return new Address(Buffer.from(s, 'hex'));
    }
}

export class Bytes {
    data: Buffer;

    constructor(data: Buffer) {
        this.data = data;
    }

    toJSON() {
        return "0x" + this.data.toString('hex');
    }

    static from(s: string): Bytes {
        if (s.startsWith("0x")) {
            return new Bytes(Buffer.from(s.slice(2), 'hex'));
        }
        return new Bytes(Buffer.from(s, 'hex'));
    }
}

export class Uint {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    toJSON() {
        return this.value;
    }
}

export class Int {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    toJSON() {
        return this.value;
    }
}
