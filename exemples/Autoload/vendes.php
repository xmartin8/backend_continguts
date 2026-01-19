<?php 
	require_once("ClassBotiga.php");

	//creem un objecte de tipus Botiga, i com el fitxer ClassBotiga te una classe Botiga que a la vegada fa servir els traits Producte i Carret
	//doncs aquest nou objecte ($objProducte) podrà fer servir els mètodes dels traits
	//important tenir en compte que els traits NO PODEN SER INSTANCIATS!!!
	//important també tenir en compte que no poden haver-hi una classe i un  trait amb el mateix nom	
	$objProducte = new Botiga();

	$strProducte = "Patates";
	$fltPreu = 3;
	$intStock = 21;

	$intQuantitatVenuda = 5;

	$objProducte->setProducte($strProducte,$fltPreu,$intStock);
	echo $objProducte->getProducte();

	$objProducte->setCarret($strProducte,$intQuantitatVenuda);
	$objProducte->setStock($intQuantitatVenuda);

	echo $objProducte->getProducte();

	echo $objProducte->getCarret();

 ?>