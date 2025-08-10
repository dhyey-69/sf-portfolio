public with sharing class ContactFormController {

    @AuraEnabled
    public static String sendContactFormEmail(String name, String email, String message) {
        if (String.isBlank(name) || String.isBlank(email) || String.isBlank(message)) {
            return 'Missing required fields';
        }

        try {
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

            String myEmail = 'dhyeybhatt66@gmail.com';
            mail.setToAddresses(new String[] { myEmail });

            mail.setCcAddresses(new String[] { email });

            String subject = name + ' just sent you a message';

            String body = 
                'Hi Dhyey,\n\n' +
                name + ' here.\n\n' +
                message;


            mail.setSubject(subject);
            mail.setPlainTextBody(body);

            mail.setReplyTo(myEmail);

            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

            return 'SUCCESS';
        } catch (Exception e) {
            return 'ERROR: ' + e.getMessage();
        }
    }
}
