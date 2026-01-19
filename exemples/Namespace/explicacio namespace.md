# Maneig de Namespaces
- Per a entendre bé el concepte de Namespaces, crearem dins d'aquesta carpeta el MVC
- Model: ClassPersona renombrada a Persona.php
- Controllers: ClassClient i ClassTreballador que renombrem com a Client i Treballador
- View: fiquem el fitxer empresa.php
- seguidament al fitxer empresa.php haurem d'anar als requiere_once i modificar-los tant el nom del fitxer php com la ruta >> ../Controllers ../Model ....
- ara anem a Client.php i Treballador.php i a la capçalera del fitxer posem ```namespace Controllers;``` d'aquesta manera definim que aquest dos fitxers pertanyen a un nom d'espai anomenat Controllers
- a Treballador i Client, haurem d'afegir aquestes dues linies:
	    ```require_once ("../Models/Persona.php");```
	    ```use Models\Persona;```
- amb ```use``` nosaltres podem fer ús de la classe Persona!!!
- a empresa.php hem de fer el mateix per a Treballador i Client:
    ```use Controllers\Client;```
	```use Controllers\Treballador;```
- ara creem una altra fitxer dins de Controllers que casualment també es diu Persona.php. per tant a empresa.php ens caldria també fer un namespace d'aquest nou fitxer:
	```require_once ("../Controllers/Persona.php");```
	```use Controllers\Persona;```
	
- i per provar-ho, podem posar al final del codi de empresa.php això:
	```$prova = new Persona();```
	```echo $prova->salutacio();```
