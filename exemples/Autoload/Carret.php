<?php 
	trait Carret{
		public $strProducte;
		public $intQuantitat;

		public function setCarret(string $producte, int $quantitat)
		{
			$this->strProducte = $producte;
			$this->intQuantitat = $quantitat;
		}
		//creem el mètode getCarret que sigui abstracte per a que després es pugui definir a ClassBotiga
		//el fet de fer un mètode abstracte, si fos una classe també hauria de ser abstracta, 
		//però en el cas del trait no cal definir-lo com a abstracta
		abstract function getCarret();
	}

 ?>