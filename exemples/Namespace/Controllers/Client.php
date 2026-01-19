<?php

	namespace Controllers;

	require_once ("../Models/Persona.php");

	use Models\Persona;		//amb use nosaltres podem fer ús de la classe Persona!!!

	class Client extends Persona{

		protected $fltNomina;

		function __construct(int $dni, string $nom, int $edat){

			parent::__construct($dni, $nom, $edat);

		}

		public function setNomina(string $Nomina){
			$this->fltNomina = $Nomina;
		}

		public function getNomina():float
		{
			return $this->fltNomina;
		}

	}

 ?>