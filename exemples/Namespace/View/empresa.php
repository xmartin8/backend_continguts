<?php 

	require_once ("../Controllers/Treballador.php");
	require_once ("../Controllers/Client.php");
	require_once ("../Controllers/Persona.php");
	
	use Controllers\Client;
	use Controllers\Treballador;
	use Controllers\Persona;

	$objTreballador = new Treballador(78978345,"Pere Pi",33);
	$objTreballador->setLlocTreb("Administrador");
	////$objTreballador->setMissatge("Benvingut treballador!!");

	echo $objTreballador->getDadesPersonals();
	echo "LlocTreb:".$objTreballador->getLlocTreb();

	$objClient = new Client(434543234,"Marta Ros",25);
	$objClient->setNomina(1000);
	////$objClient->setMissatge("Benvingut client!!");

	echo $objClient->getDadesPersonals();
	echo "Nomina:".$objClient->getNomina();

	$prova = new Persona();
	echo $prova->salutacio();

 ?>