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
    }

    // ------------- MUTATORS (RANDOM SETTERS) ----------------
    setAge() {
        this.age = Math.floor(Math.random() * 100);
        return this.age;
    }

    setOrigin() {
        const originList = ["Earth", "Mars", "Venus", "Ganymede", "Io", "Callisto", "Titan", "Europa", "Pluto Gate", "The Asteroid Belt", "Tharsis City (Mars)", "Alba City (Mars)", 
        "Freedom Port (Ganymede)", "Blue Crow (Venus)", "TJ (Io colony)", "Space Gate Ring", "Tijuana Space Colony", "Calisto's Criminal Syndicate Sector", 
        "Ganymede Agricultural Zone", "Titan's Mining District", "Mars Colony Prime", "Proxima b", "Andromeda Galaxy", "Ceres", "The Horsehead Nebula", 
        "TRAPPIST-1e", "Sagittarius A*", "Titan Research Outpost", "Kepler-452b", "Io Lava Sea Station", "New Caprica", "Reach", "Arrakis", "The Citadel", 
        "Coruscant", "LV-426", "Pandora", "Gallifrey", "Mandalore", "Namek", "Krypton", "Risa", "Oa", "Wakanda Orbital Ring", "High Charity", 
        "The Shire — Terraforming Colony AU", "Apokolips", "Trantor", "Helghan", "Vulcan", "Mustafar", "Caprica City", "Hoth", "Barsoom", "Naboo",
        "Yavin IV", "Bespin Cloud City", "Kamino", "Magrathea", "Elysium Ring Habitat", "Necromunda", "Cybertron", "IO Station", "Ceres Station", "Ilus / New Terra",
        "Titanfall IMC Frontier", "Omicron Persei 8", "The Citadel of Ricks", "Umbriel Cryo City", "Hyperion Gate Complex", "Zion Dock", "Tau Ceti e", "Andromeda Relay Township",
        "Vega Prime", "Laputa", "The Black Mesa Orbital Lab", "Talos I", "Eden Prime", "Mustafar Mining Belt", "Terminus", "Oumuamua", "Rosetta Comet", "Eris",
        "Phobos", "Deimos", "Valles Marineris Colony", "M87* Black Hole Ring Array", "Triangulum Galaxy", "Kepler-62f", "Wolf 359 Remnant Belt", "Lagrange-4 Trade Station",
        "Giedi Prime", "New Vegas on Phobos", "Capella System Outpost", "Epsilon Eridani Colony", "Perseus Cluster", "Titanfall Frontier Militia Dock", "Dyson Shell Segment 14",
        "Magellanic Cloud Frontier", "The Last Dome at the Observable Edge"];
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

    setName(){
        this.name = prompt("Enter the Criminals Name: ");
        return this.name;
 
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


const r = new Randomizer();
console.log(r.setName(), r.setAge(), r.setBounty(), r.setHeightFt(), r.setHeightIn(), r.setID(), r.setOrigin(), r.setWeight());