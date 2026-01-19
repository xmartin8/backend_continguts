*Maneig dels Traits*
Anem a fer un exemple de compra de productes que "tractem" en un carret de la compra.

Creem dos **traits**, en aquest cas **Producte** i **Carret**.

Cadascú té implementades atributs i mètodes (al igual que les classes).

Per tant tindrem definits dos traits, un per manipular productes i un altre per manipular el carret.

Per a manipular els dos traits creem un nou fitxer que li direm **ClassBotiga** i posem `use Producte, Carret;`.

De totes maneres, en comptes de fer dos fitxers de traits (**Productes** i **Carret**), es podria haver fet els dos traits dins d'un sol fitxer. Ho hem fet així per a diferenciar-lo.

*Maneig d'Autoload*
Fixem-nos per exemple que ClassBotiga fa dos requires (a Producte.php i a Carret.php):
- 