function sendEmail(){
    Email.send({
        SecureToken: "154290d7-8a88-4f76-9f02-0afeece36a8d",
        From : "pierre7159@gmail.com",
        To : "vanhove.pierre@proton.me",
        Subject : "New Contact Form",
        Body : "Email : " + document.getElementById("Source").value +
                "<br>Object: "+ document.getElementById("object").value
                +"<br> Message : " + document.getElementById("message").value
    }).then(
        message => alert("Your message has been sent successfully," +
            " you should have received a Confirmation e-mail, if this is not the case, please check your spams"),
        Email.send({
            SecureToken: "154290d7-8a88-4f76-9f02-0afeece36a8d",
            From : "vanhove.pierre@proton.me",
            To: document.getElementById("Source").value,
            Subject : "Contact Form Confirmation",
            Body: "<!DOCTYPE html>\n" +
                "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n" +
                "\n" +
                "    <head>\n" +
                "        <meta charset=\"utf-8\">\n" +
                "        <meta name=\"viewport\" content=\"width=device-width\">\n" +
                "        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                "        <meta name=\"x-apple-disable-message-reformatting\">\n" +
                "        <meta name=\"format-detection\" content=\"telephone=no,address=no,email=no,date=no,url=no\">\n" +
                "\n" +
                "        <meta name=\"color-scheme\" content=\"light\">\n" +
                "        <meta name=\"supported-color-schemes\" content=\"light\">\n" +
                "\n" +
                "        \n" +
                "        <!--[if !mso]><!-->\n" +
                "          \n" +
                "          <link rel=\"preload\" as=\"style\" href=\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\">\n" +
                "          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\">\n" +
                "\n" +
                "          <style type=\"text/css\">\n" +
                "          // TODO: fix me!\n" +
                "            @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);\n" +
                "        </style>\n" +
                "        \n" +
                "        <!--<![endif]-->\n" +
                "\n" +
                "        <!--[if mso]>\n" +
                "          <style>\n" +
                "              // TODO: fix me!\n" +
                "              * {\n" +
                "                  font-family: sans-serif !important;\n" +
                "              }\n" +
                "          </style>\n" +
                "        <![endif]-->\n" +
                "    \n" +
                "        \n" +
                "        <!-- NOTE: the title is processed in the backend during the campaign dispatch -->\n" +
                "        <title></title>\n" +
                "\n" +
                "        <!--[if gte mso 9]>\n" +
                "        <xml>\n" +
                "            <o:OfficeDocumentSettings>\n" +
                "                <o:AllowPNG/>\n" +
                "                <o:PixelsPerInch>96</o:PixelsPerInch>\n" +
                "            </o:OfficeDocumentSettings>\n" +
                "        </xml>\n" +
                "        <![endif]-->\n" +
                "        \n" +
                "    <style>\n" +
                "        :root {\n" +
                "            color-scheme: light;\n" +
                "            supported-color-schemes: light;\n" +
                "        }\n" +
                "\n" +
                "        html,\n" +
                "        body {\n" +
                "            margin: 0 auto !important;\n" +
                "            padding: 0 !important;\n" +
                "            height: 100% !important;\n" +
                "            width: 100% !important;\n" +
                "\n" +
                "            overflow-wrap: break-word;\n" +
                "            -ms-word-break: break-all;\n" +
                "            -ms-word-break: break-word;\n" +
                "            word-break: break-all;\n" +
                "            word-break: break-word;\n" +
                "        }\n" +
                "\n" +
                "\n" +
                "        \n" +
                "\n" +
                "  center,\n" +
                "  #body_table{\n" +
                "    \n" +
                "  }\n" +
                "\n" +
                "  .paragraph {\n" +
                "    font-size: 15px;\n" +
                "    font-family: Open Sans, sans-serif;\n" +
                "    color: #5f5f5f;\n" +
                "  }\n" +
                "\n" +
                "  ul, ol {\n" +
                "    padding: 0;\n" +
                "    margin-top: 0;\n" +
                "    margin-bottom: 0;\n" +
                "  }\n" +
                "\n" +
                "  li {\n" +
                "    margin-bottom: 0;\n" +
                "  }\n" +
                " \n" +
                "  .list-block-list-outside-left li {\n" +
                "    margin-left: 20px;\n" +
                "  }\n" +
                "\n" +
                "  .list-block-list-outside-right li {\n" +
                "    margin-right: 20px;\n" +
                "  }\n" +
                "  \n" +
                "  .heading1 {\n" +
                "    font-weight: 400;\n" +
                "    font-size: 32px;\n" +
                "    font-family: Open Sans, sans-serif;\n" +
                "    color: #000000;\n" +
                "  }\n" +
                "\n" +
                "  .heading2 {\n" +
                "    font-weight: 400;\n" +
                "    font-size: 26px;\n" +
                "    font-family: Open Sans, sans-serif;\n" +
                "    color: #000000;\n" +
                "  }\n" +
                "\n" +
                "  .heading3 {\n" +
                "    font-weight: 400;\n" +
                "    font-size: 19px;\n" +
                "    font-family: Open Sans, sans-serif;\n" +
                "    color: #000000;\n" +
                "  }\n" +
                "  \n" +
                "  a {\n" +
                "    color: #5457FF;\n" +
                "    text-decoration: none;\n" +
                "  }\n" +
                "  \n" +
                "\n" +
                "\n" +
                "        * {\n" +
                "            -ms-text-size-adjust: 100%;\n" +
                "            -webkit-text-size-adjust: 100%;\n" +
                "        }\n" +
                "\n" +
                "        div[style*=\"margin: 16px 0\"] {\n" +
                "            margin: 0 !important;\n" +
                "        }\n" +
                "\n" +
                "        #MessageViewBody,\n" +
                "        #MessageWebViewDiv {\n" +
                "            width: 100% !important;\n" +
                "        }\n" +
                "\n" +
                "        table {\n" +
                "            border-collapse: collapse;\n" +
                "            border-spacing: 0;\n" +
                "            mso-table-lspace: 0pt !important;\n" +
                "            mso-table-rspace: 0pt !important;\n" +
                "        }\n" +
                "        table:not(.button-table) {\n" +
                "            border-spacing: 0 !important;\n" +
                "            border-collapse: collapse !important;\n" +
                "            table-layout: fixed !important;\n" +
                "            margin: 0 auto !important;\n" +
                "        }\n" +
                "\n" +
                "        th {\n" +
                "            font-weight: normal;\n" +
                "        }\n" +
                "\n" +
                "        tr td p {\n" +
                "            margin: 0;\n" +
                "        }\n" +
                "\n" +
                "        img {\n" +
                "            -ms-interpolation-mode: bicubic;\n" +
                "        }\n" +
                "\n" +
                "        a[x-apple-data-detectors],\n" +
                "\n" +
                "        .unstyle-auto-detected-links a,\n" +
                "        .aBn {\n" +
                "            border-bottom: 0 !important;\n" +
                "            cursor: default !important;\n" +
                "            color: inherit !important;\n" +
                "            text-decoration: none !important;\n" +
                "            font-size: inherit !important;\n" +
                "            font-family: inherit !important;\n" +
                "            font-weight: inherit !important;\n" +
                "            line-height: inherit !important;\n" +
                "        }\n" +
                "\n" +
                "        .im {\n" +
                "            color: inherit !important;\n" +
                "        }\n" +
                "\n" +
                "        .a6S {\n" +
                "            display: none !important;\n" +
                "            opacity: 0.01 !important;\n" +
                "        }\n" +
                "\n" +
                "        img.g-img+div {\n" +
                "            display: none !important;\n" +
                "        }\n" +
                "\n" +
                "        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {\n" +
                "            u~div .contentMainTable {\n" +
                "                min-width: 320px !important;\n" +
                "            }\n" +
                "        }\n" +
                "\n" +
                "        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {\n" +
                "            u~div .contentMainTable {\n" +
                "                min-width: 375px !important;\n" +
                "            }\n" +
                "        }\n" +
                "\n" +
                "        @media only screen and (min-device-width: 414px) {\n" +
                "            u~div .contentMainTable {\n" +
                "                min-width: 414px !important;\n" +
                "            }\n" +
                "        }\n" +
                "    </style>\n" +
                "\n" +
                "    <style>\n" +
                "        @media only screen and (max-device-width: 640px) {\n" +
                "            .contentMainTable {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "            .single-column {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "            .multi-column {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "            .imageBlockWrapper {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "        }\n" +
                "        @media only screen and (max-width: 640px) {\n" +
                "            .contentMainTable {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "            .single-column {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "            .multi-column {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "            .imageBlockWrapper {\n" +
                "                width: 100% !important;\n" +
                "                margin: auto !important;\n" +
                "            }\n" +
                "        }\n" +
                "    </style>\n" +
                "    <style></style>\n" +
                "    \n" +
                "<!--[if mso | IE]>\n" +
                "    <style>\n" +
                "        .list-block-outlook-outside-left {\n" +
                "            margin-left: -18px;\n" +
                "        }\n" +
                "    \n" +
                "        .list-block-outlook-outside-right {\n" +
                "            margin-right: -18px;\n" +
                "        }\n" +
                "\n" +
                "    </style>\n" +
                "<![endif]-->\n" +
                "\n" +
                "\n" +
                "    </head>\n" +
                "\n" +
                "    <body width=\"100%\" style=\"margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;\">\n" +
                "        <center role=\"article\" aria-roledescription=\"email\" lang=\"en\" style=\"width: 100%; background-color: #F5F6F8;\">\n" +
                "            <!--[if mso | IE]>\n" +
                "            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"body_table\" style=\"background-color: #F5F6F8;\">\n" +
                "            <tbody>    \n" +
                "                <tr>\n" +
                "                    <td>\n" +
                "                    <![endif]-->\n" +
                "                        <table align=\"center\" role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"640\" style=\"margin: auto;\" class=\"contentMainTable\">\n" +
                "                            <tr class=\"wp-block-editor-imageblock-v1\"><td style=\"background-color:#ffffff;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0\" align=\"center\"><table align=\"center\" width=\"102.4\" class=\"imageBlockWrapper\" style=\"width:102.4px\" role=\"presentation\"><tbody><tr><td style=\"padding:0\"><img src=\"https://api.smtprelay.co/userfile/b81adf07-a12f-4c87-be7a-fc57c37c6370/Logo2023-11-02T14_18_43.png\" width=\"102.4\" height=\"\" alt=\"\" style=\"border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0\" class=\"g-img\"></td></tr></tbody></table></td></tr><tr class=\"wp-block-editor-headingblock-v1\"><td valign=\"top\" style=\"background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center\"><p style=\"font-family:Open Sans, sans-serif;text-align:center;line-height:1.15;font-size:32px;background-color:#ffffff;margin:0;word-break:normal\" class=\"heading1\">Contact Form Confirmation</p></td></tr><tr class=\"wp-block-editor-paragraphblock-v1\"><td valign=\"top\" style=\"padding:0px 32px 32px 32px;background-color:#ffffff\"><p class=\"paragraph\" style=\"font-family:Trebuchet MS, sans-serif;text-align:center;line-height:2;font-size:15px;margin:0;word-break:normal\">Your message to Pierre Vanhove has been successfully send</p></td></tr><tr class=\"wp-block-editor-spacerblock-v1\"><td style=\"background-color:#ffffff;line-height:32px;font-size:32px;width:100%;min-width:100%\">&nbsp;</td></tr>\n" +
                "                        </table>\n" +
                "                    <!--[if mso | IE]>\n" +
                "                    </td>\n" +
                "                </tr>\n" +
                "            </tbody>\n" +
                "            </table>\n" +
                "            <![endif]-->\n" +
                "        </center>\n" +
                "    </body>\n" +
                "</html>",

            isHtml : true
        }).then(
            message => ""
        )
    );
}
