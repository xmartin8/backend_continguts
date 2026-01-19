<?php 
	trait Producte{

		//propietats del trait de tipus public
		public $strProducte;
		public $fltPreu;
		public $intStock;

		public function setProducte(string $producte, float $preu, int $stock)
		{
			$this->strProducte = $producte;
			$this->fltPreu = $preu;
			$this->intStock = $stock;
		}

		public function getProducte():string{
			$strInfo = "
				Producte: {$this->strProducte} <br>
				Preu: {$this->fltPreu} <br>
				Stock: {$this->intStock} <br><br>
			";
			return $strInfo;
		}
		//funcio que fariem servir per a actualitzar l'stock en el moment d'afegir al carret
		public function setStock(int $quantitat)
		{
			$this->intStock = $this->intStock - $quantitat;
		}
	}

 ?>