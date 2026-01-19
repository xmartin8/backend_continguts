<?php 
	require_once("Producte.php");
	require_once("Carret.php");

	class Botiga{
		use Producte, Carret;
		public $fltTotal = 0;  //prendrà el valor del preu * la quantitat

		public function getCarret(){
			//fixent-nos que les dues propietats (fltPreu i intQuantitat) 
			//són dos propietats definides al trait i que fem servir aqui
			$this->fltTotal = $this->fltPreu * $this->intQuantitat;
			$infoCarret = "
				<h2>Carret</h2>
				<hr>
				Producte : {$this->strProducte} <br>
				Quantitat: {$this->intQuantitat} <br>
				Preu: {$this->fltPreu} <br>
				Total: {$this->fltTotal} <br>
			";
			return $infoCarret;
		}
	}


 ?>