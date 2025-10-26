import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;
import com.google.gson.Gson;

// Make sure Randomizer class is in the same project
public class Main {
    public static void main(String[] args) {
        try (Scanner user = new Scanner(System.in)) {
            // Ask for criminal name
            System.out.print("Enter the criminal's name: ");
            String name = user.nextLine();

            // Create Randomizer and generate random values
            Randomizer r = new Randomizer();
            r.setAge();
            r.setBounty();
            r.setHeightFt();
            r.setHeightIn();
            r.setID();
            r.setOrigin(0);
            r.setWeight();

            // Create a wrapper object to include the name
            CriminalRecord record = new CriminalRecord(name, r);

            // Convert to JSON
            Gson gson = new Gson();
            String json = gson.toJson(record);

            // Save to file
            try (FileWriter writer = new FileWriter("WantedInfo.json")) {
                writer.write(json);
            }

            System.out.println("JSON file created successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Wrapper class to include name with Randomizer data
class CriminalRecord {
    String name;
    int age;
    String id;
    long bounty;
    int heightFt;
    int heightIn;
    String origin;
    String reason;
    int weight;

    public CriminalRecord(String name, Randomizer r) {
        this.name = name;
        this.age = r.getAge();
        this.id = r.getID();
        this.bounty = r.getBounty();
        this.heightFt = r.getHeightFt();
        this.heightIn = r.getHeightIn();
        this.origin = r.getOrigin();
        this.reason = r.getReason();
        this.weight = r.getWeight();
    }
}
