<?php

	namespace Controllers;

	require_once ("../Models/Persona.php");

	use Models\Persona;  //amb use nosaltres podem fer ús de la classe Persona!!!

	class Treballador extends Persona{

		protected $strLlocTreb;

		function __construct(int $dni, string $nom, int $edat){

			parent::__construct($dni, $nom, $edat);

		}

		public function setLlocTreb(string $lloctreb){
			$this->strLlocTreb = $lloctreb;
		}

		public function getLlocTreb():string
		{
			return $this->strLlocTreb;
		}

	}

 ?>