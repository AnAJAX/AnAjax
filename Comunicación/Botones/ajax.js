<!--AJAX-->

function ConstructorXMLHttpRequest()

{
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest(); // Si lo tiene, crearemos el objeto.
    }

    else if (window.ActiveXObject) // Si no lo contiene el método anterior, debería ser el IE.
    {
        var versionesObj = ['Msxml2.XMLHTTP.5.0',
            'Msxml2.XMLHTTP.4.0',
            'Msxml2.XMLHTTP.3.0',
            'Msxml2.XMLHTTP',
            'Microsoft.XMLHTTP'];

        for (var i = 0; i < versionesObj.length; i++)
        {
            try

            {
                return new ActiveXObject(versionesObj[i]);
            }

            catch (errorControlado)

            {

            }
        }
    }

    throw new Error("No se pudo crear el objeto XMLHttpRequest");
}
