import java.util.Random;

public class Randomizer {
    private int age;
    private String id;
    private long bounty;
    private int heightFt;
    private int heightIn;
    private String origin;
    private String reason;
    private int weight;
    private final  Random rand = new Random();

    public static void main(String[] args){ 
    /*Randomizer r = new Randomizer();
    r.rand.setSeed(System.currentTimeMillis());

    int randNum = r.rand.nextInt();
    //Test the code
    System.out.println(r.setAge() + " " + r.setBounty() + " " + r.setWeight() + " " + r.setID() + " " + r.setOrigin(randNum));*/ 
    }

    //Accessors
    //returns the age of the person wanted
    public int getAge() {
    return age;
    }
    //returns the original planet/location of the person wanted
    public String getOrigin() {
    return origin;
    }
    //returns the reason the person is wanted
    public String getReason() {
    return reason;
    }
    //returns how much woolong, the person is wanted for
    public long getBounty() {
    return bounty;
    }
    //returns the ID of the person wanted
    public String getID() {
        return id;
    }
    //returns the weight of the person wanted
    public double getWeight() {
        return weight;
    }
    //returns the height of the person wanted(feet only)
    public int getHeightFt() {
        return heightFt;
    }
    //returns the height of the person wanted(inches only)
    public int getHeightIn() {
        return heightIn;
    }

    //Mutators
    //sets the age of the person wanted
    public int setAge() {
        this.age = rand.nextInt(100);
        return this.age;
    }
    //sets the original planet/location of the person wanted
    public String setOrigin() {
        String[] originList = {"Earth", "Mars", "Venus", "Ganymede", "Io", "Callisto", "Titan", "Europa", "Pluto Gate", "The Asteroid Belt", "Tharsis City (Mars)", "Alba City (Mars)", 
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
        "Magellanic Cloud Frontier", "The Last Dome at the Observable Edge"};
        this.origin = originList[rand.nextInt(originList.length)];
        return this.origin;
    }
    //sets the reason the person is wanted
    /*public String setReason(int x) {
        String[] reasonList = {};
        if(x >= 0 && x < reasonList.length){
            this.reason = reasonList[x];
        }
        else{ 
            this.reason = null;
        }
        return this.reason;
    }*/
    //sets how much woolong, the person is wanted for
    public long setBounty() {
        long randomval = rand.nextLong(1000);
        if(randomval % 3 == 0) {
            this.bounty = rand.nextLong(300);
        }
        else if(randomval % 3 == 1) {
            this.bounty = rand.nextLong(1000) * 100L;
        }
        else {
            this.bounty = rand.nextLong(1000) * 100000L;
        }   
        return this.bounty;
    }
    //sets the ID of the person wanted
    public String setID() {
        char[] num = {'0','1', '2', '3', '4', '5', '6', '7', '8', '9'};
        char[] letter = {'A','B','C','D','E','F','G','H','I','J','K','L','M',
                        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
        char[] newID = new char[10];
        int i = 0;
        while(i < 10){
            if(rand.nextInt() % 2 == 0) {
                char valN = num[rand.nextInt(num.length)];
                newID[i] = valN;
            }
            else {
                char valL = letter[rand.nextInt(letter.length)];
                newID[i] = valL;
            }
            i++;
        }
        this.id = new String(newID);
        return this.id;
    }
    //sets the weight of the person wanted
    public int setWeight() {
        this.weight = rand.nextInt(1000);
        return this.weight;
    }
    //sets the height of the person wanted(feet only)
    public int setHeightFt() {
        this.heightFt = rand.nextInt(9);
        return this.heightFt;
    }
    //sets the height of the person wanted(inches only)
    public int setHeightIn() {
        this.heightIn = rand.nextInt(12);
        return this.heightIn;
    }
}