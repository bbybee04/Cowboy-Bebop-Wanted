import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner user = new Scanner(System.in);
        System.out.print("Enter the criminal's name: ");
        String name = user.nextLine();

        Random rand = new Random();
        int age = rand.nextInt(100);
        String id = generateID(rand);
        long bounty = rand.nextInt(1000000);
        int heightFt = rand.nextInt(9);
        int heightIn = rand.nextInt(12);
        String origin = "Mars"; // or pick randomly from a list
        String reason = null;
        int weight = rand.nextInt(300);

        // Build JSON manually
        String json = "{\n" +
                "  \"name\": \"" + name + "\",\n" +
                "  \"age\": " + age + ",\n" +
                "  \"id\": \"" + id + "\",\n" +
                "  \"bounty\": " + bounty + ",\n" +
                "  \"heightFt\": " + heightFt + ",\n" +
                "  \"heightIn\": " + heightIn + ",\n" +
                "  \"origin\": \"" + origin + "\",\n" +
                "  \"reason\": " + reason + ",\n" +
                "  \"weight\": " + weight + "\n" +
                "}";

        try (FileWriter writer = new FileWriter("WantedInfo.json")) {
            writer.write(json);
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("JSON created successfully!");
        user.close();
    }

    private static String generateID(Random rand) {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            sb.append(chars.charAt(rand.nextInt(chars.length())));
        }
        return sb.toString();
    }
}
