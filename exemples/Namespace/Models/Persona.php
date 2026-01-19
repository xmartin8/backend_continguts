<?php

	namespace Models;
	
	class Persona{

		public $intDni;
		public $strNom;
		public $intEdat;
		public $missatge;

		function __construct (int $dni, string $nom, int $edat)
		{
			$this->intDni = $dni;
			$this->strNom = $nom;
			$this->intEdat = $edat;
		}

		public function getDadesPersonals()
		{
			$dades = "
				<h2>Dades personals</h2>
				DNI: {$this->intDni}<br>
				Nom: {$this->strNom}<br>
				Edat: {$this->intEdat}<br>
			";
			return $dades;
		}

	}

 ?>