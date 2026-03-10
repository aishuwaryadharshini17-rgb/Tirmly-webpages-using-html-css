import java.util.Scanner;

public class TrimlyBooking {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("===== TRIMLY SALON BOOKING SYSTEM =====\n");

        // User details
        System.out.print("Enter Your Name: ");
        String name = input.nextLine();

        System.out.print("Enter Email Address: ");
        String email = input.nextLine();

        System.out.print("Enter Phone Number: ");
        String phone = input.nextLine();

        // Service selection
        System.out.println("\nSelect Service:");
        System.out.println("1. Haircut");
        System.out.println("2. Beard Trim");
        System.out.println("3. Hair Styling");
        System.out.println("4. Hair Spa");

        System.out.print("Enter Service Number: ");
        int service = input.nextInt();
        input.nextLine(); // clear buffer

        System.out.print("Enter Preferred Date: ");
        String date = input.nextLine();

        String serviceName;

        switch (service) {

            case 1:
                serviceName = "Haircut";
                break;

            case 2:
                serviceName = "Beard Trim";
                break;

            case 3:
                serviceName = "Hair Styling";
                break;

            case 4:
                serviceName = "Hair Spa";
                break;

            default:
                serviceName = "Invalid Service Selection";
        }

        // Booking confirmation
        System.out.println("\n===== BOOKING CONFIRMED =====");
        System.out.println("Customer Name : " + name);
        System.out.println("Email         : " + email);
        System.out.println("Phone         : " + phone);
        System.out.println("Service       : " + serviceName);
        System.out.println("Date          : " + date);

        System.out.println("\nThank you for choosing TRIMLY!");

        input.close();
    }
}