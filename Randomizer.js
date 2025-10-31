class Randomizer {
    constructor() {
        this.age = 0;
        this.id = "";
        this.bounty = 0;
        this.heightFt = 0;
        this.heightIn = 0;
        this.origin = "";
        this.reason = "";
        this.weight = 0;
        this.name = "";
        this.reason = "";
    }

    // ------------- MUTATORS (RANDOM SETTERS) ----------------
    setAge() {
        this.age = Math.floor(Math.random() * 100);
        return this.age;
    }

    setOrigin() {
        const originList = ["Earth", "Mars", "Venus", "Ganymede", "Io", "Callisto", "Titan", "Europa", "Pluto Gate", "The Asteroid", "Tharsis City", "Alba City", 
        "Freedom Port", "Blue Crow", "TJ", "Space Gate", "Tijuana Colony", "The Last Dome", "Mercury", "New Terra", "Mars Colony Prime", "Proxima b", "Andromeda", 
        "Ceres", "The Horsehead", "TRAPPIST-1e", "Sagittarius A*", "Pluto", "Kepler-452b", "Io Lava Sea", "New Caprica", "Reach", "Arrakis", "The Citadel", 
        "Coruscant", "LV-426", "Pandora", "Gallifrey", "Mandalore", "Namek", "Krypton", "Risa", "Oa", "Wakanda Orbital Ring", "High Charity", "The Shire", "Apokolips", 
        "Trantor", "Helghan", "Vulcan", "Mustafar", "Caprica City", "Hoth", "Barsoom", "Naboo", "Yavin IV", "Bespin Cloud", "Kamino", "Magrathea", "Elysium Ring", 
        "Necromunda", "Cybertron", "IO Station", "Ceres Station", "Ilus", "Titanfall", "Omicron Persei 8", "Citadel of Ricks", "Umbriel Cryo City", 
        "Hyperion Gate", "Zion Dock", "Tau Ceti e", "Andromeda Relay", "Vega Prime", "Laputa", "The Black Mesa", "Talos I", "Eden Prime", "Mustafar Belt", "Terminus", 
        "Oumuamua", "Rosetta Comet", "Eris", "Phobos", "Deimos", "Valles Marineris", "M87*", "Triangulum Galaxy", "Kepler-62f", "Wolf 359 Belt", "Lagrange-4",
        "Giedi Prime", "New Vegas", "Capella System", "Epsilon Eridani", "Perseus Cluster", "IMC Frontier", "Dyson Shell", "Magellanic Cloud", "Observable Edge"];
        this.origin = originList[Math.floor(Math.random() * originList.length)];
        return this.origin;
    }

    setBounty() {
        let randomval = Math.floor(Math.random() * 1000);

        if (randomval % 3 === 0) {
            this.bounty = Math.floor(Math.random() * 300);
        } else if (randomval % 3 === 1) {
            this.bounty = Math.floor(Math.random() * 1000) * 100;
        } else {
            this.bounty = Math.floor(Math.random() * 1000) * 100000;
        }
        return this.bounty;
    }

    setID() {
        const num = "0123456789".split("");
        const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        
        let newID = "";
        for (let i = 0; i < 10; i++) {
            if (Math.random() < 0.5) {
                newID += num[Math.floor(Math.random() * num.length)];
            } else {
                newID += letter[Math.floor(Math.random() * letter.length)];
            }
        }
        this.id = newID;
        return this.id;
    }

    setWeight() {
        this.weight = Math.floor(Math.random() * 1000);
        return this.weight;
    }

    setHeightFt() {
        this.heightFt = Math.floor(Math.random() * 9);
        return this.heightFt;
    }

    setHeightIn() {
        this.heightIn = Math.floor(Math.random() * 12);
        return this.heightIn;
    }

    /*setName(){
        this.name = prompt("Enter the Criminals Name: ");
        return this.name;
 
    }*/

    setReason(name) {
        const result = shufflePhrases(name);  
        this.reason = result.combined;        
        return this.reason;                
    } 
    /* ------------- ACCESSORS ----------------
    getAge() { return this.age; }
    getOrigin() { return this.origin; }
    getReason() { return this.reason; }
    getBounty() { return this.bounty; }
    getID() { return this.id; }
    getWeight() { return this.weight; }
    getHeightFt() { return this.heightFt; }
    getHeightIn() { return this.heightIn; }*/
}

/*
const r = new Randomizer();
console.log(r.setReason(), r.setAge(), r.setBounty(), r.setHeightFt(), r.setHeightIn(), r.setID(), r.setOrigin(), r.setWeight());
*/
