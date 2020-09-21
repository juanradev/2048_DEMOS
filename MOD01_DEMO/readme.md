## Modulo 01 DEMO

El ejercicicio consta de la creacción de una página web con un formulario y aplicarle una hoja de estilo que tan solo añade el font-family y el color al elemento body.

Las instrucciones para realizar esta práctica se encuentran en  [20480C_MOD01_DEMO](20480C_MOD01_DEMO.md)


Al finalizar la demo la pagina deberá verse de la siguiente forma:

![Alt text](imagenes/demo001.jpg?raw=true "Demo 1") 


```hmtl
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>ContactUS</title>
    <link href="ContactUsStyles.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <h1>Contact Contoso Conferencing</h1>
    <p>Contoso Conferencing Ltd.</p>
    <p>
        123 South Street<br />
        Somewhere<br />
        Over There<br />
        <em>USA</em>
    </p>
    <p>
        <a href="mailto:contact@contoso.com">
            contact@contoso.com
        </a>
    </p>
    <p>
        If you would like to contact Contoso Conferencing, whether you're interested in our services or in a conference we're currently organizing, don't hesitate to contact us by using our enquiry form. (<strong>Bold fields</strong> are required.)
    </p>
    <form method="Post" action="support.aspx">
        <fieldset>
            <legend>
                Your Details and Enquiry
            </legend>
            <ol>
                <li>
                    <label>
                        <strong>Name</strong><br />
                        <input type="text"
                               name="UserName" />
                    </label>
                </li>
                <li>
                    <label>
                        Telephone<br />
                        <input type="text"
                               name="Phone" />
                    </label>
                </li>
                <li>
                    <label>
                        Email Address<br />
                        <input type="text"
                               name="Email" />
                    </label>
                </li>
                <li>
                    <label>
                        <strong>Message</strong><br />
                        <textarea name="Message" cols="30" rows="10">Add your message here
                        </textarea>
                    </label>
                </li>
            </ol>
        </fieldset>
        <input type="submit" value="Send" />
    </form>
</body>
</html>
```

```css
body {
    font-family: 'Times New Roman';
    color: blue;
}

```